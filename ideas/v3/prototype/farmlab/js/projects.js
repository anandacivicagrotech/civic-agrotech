// Projects management functionality

// Global variables for navigation
let currentProjectId = null;
let currentRoundId = null;
let currentCropId = null;
let selectedProjectLayers = [];

// Simple back navigation - just remember where we came from
let previousPage = null;

// Show/hide global back button
function updateBackButton() {
    const backBtn = document.getElementById('globalBackBtn');
    if (backBtn) {
        if (previousPage) {
            backBtn.style.display = 'inline-block';
        } else {
            backBtn.style.display = 'none';
        }
    }
}

// Go back to previous page
function goBack() {
    if (previousPage) {
        const prev = previousPage;
        previousPage = null; // Clear to avoid loops
        
        if (prev.type === 'projectsList') {
            showProjectsList();
        } else if (prev.type === 'projectDetail') {
            viewProject(prev.projectId);
        } else if (prev.type === 'cropDetail') {
            viewCrop(prev.projectId, prev.cropId);
        }
    } else {
        showProjectsList();
    }
    updateBackButton();
}

// Simple helper - not used anymore but kept for compatibility
function viewProjectWithoutHistory(projectId) {
    viewProject(projectId);
}

// Old function kept for compatibility
function viewProjectWithoutHistoryOld(projectId) {
    currentProjectId = projectId;
    const project = projects.find(p => p.id === projectId);
    
    // Don't add to history
    
    // Hide all views
    document.getElementById('projectsListView').classList.remove('active');
    document.getElementById('createProjectView').classList.remove('active');
    document.getElementById('projectDetailView').classList.add('active');

    const content = document.getElementById('projectDetailContent');
    const cropsCount = project.crops ? project.crops.length : 0;
    
    // คำนวณจำนวนบันทึกทั้งหมด
    let totalRecords = 0;
    if (project.crops) {
        totalRecords = project.crops.reduce((sum, crop) => {
            if (crop.plants) {
                return sum + crop.plants.reduce((plantSum, plant) => plantSum + (plant.recordCount || 0), 0);
            }
            return sum;
        }, 0);
    }

    content.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 30px;">
            <div style="flex: 1;">
                <h2>${project.name}</h2>
                <p style="color: #666; margin-top: 10px;">${project.description || 'ไม่มีคำอธิบาย'}</p>
                <div style="margin-top: 15px; color: #888;">
                    <div><strong>โรงเรือน:</strong> ${project.greenhouse.name}</div>
                    <div><strong>ผู้รับผิดชอบ:</strong> ${project.owner}</div>
                    <div><strong>วันที่สร้าง:</strong> ${new Date(project.createdAt).toLocaleDateString('th-TH')}</div>
                </div>
            </div>
            <div style="display: flex; gap: 10px;">
                <button class="btn btn-secondary" onclick="editProject(${projectId})">✏️ แก้ไข</button>
                <button class="btn btn-secondary" onclick="deleteProject(${projectId})" style="background: #ff4444; border-color: #ff4444;">🗑️ ลบ</button>
                <button class="btn" onclick="showCreateCrop(${projectId})">+ เพิ่มรอบปลูก</button>
            </div>
        </div>

        <h3 style="margin-bottom: 15px;">🌱 รอบปลูกทั้งหมด (${cropsCount} รอบ, ${totalRecords} บันทึก)</h3>
        ${cropsCount === 0 ? `
            <div style="text-align: center; padding: 60px 20px; background: #f8f9fa; border-radius: 12px; border: 2px dashed #ddd;">
                <div style="font-size: 60px; margin-bottom: 20px;">🌱</div>
                <h3 style="color: #666; margin-bottom: 10px;">ยังไม่มีรอบปลูก</h3>
                <p style="color: #888; margin-bottom: 20px;">เริ่มต้นโดยการเพิ่มรอบปลูกแรกของคุณ</p>
                <button class="btn" onclick="showCreateCrop(${projectId})">+ เพิ่มรอบปลูก (Crop)</button>
            </div>
        ` : `
            <div class="projects-grid">
                ${project.crops.map(crop => {
                    const plantsCount = crop.plants ? crop.plants.length : 0;
                    const cropRecords = crop.plants ? crop.plants.reduce((sum, plant) => sum + (plant.recordCount || 0), 0) : 0;
                    
                    return `
                        <div class="project-card">
                            <div onclick="viewCrop(${projectId}, ${crop.id})" style="cursor: pointer;">
                                <div style="width: 100%; height: 180px; display: flex; align-items: center; justify-content: center; background: linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%); border-radius: 8px; margin-bottom: 15px;">
                                    <div style="font-size: 80px;">🌱</div>
                                </div>
                                <h3>${crop.name}</h3>
                                <p style="color: #666; margin: 10px 0; font-size: 0.9rem;">
                                    <strong>วันปลูก:</strong> ${new Date(crop.plantDate).toLocaleDateString('th-TH')}<br>
                                    <strong>Zone:</strong> ${crop.zone} | <strong>Layers:</strong> ${crop.layers.join(', ')}<br>
                                    <strong>พืช:</strong> ${plantsCount} ชนิด
                                </p>
                                <div class="project-meta">
                                    <span>${cropRecords} บันทึก</span>
                                    ${plantsCount > 0 ? '<span class="badge green">มีพืช</span>' : '<span class="badge">ยังไม่มีพืช</span>'}
                                </div>
                            </div>
                            <div style="display: flex; gap: 5px; margin-top: 10px; padding-top: 10px; border-top: 1px solid #e0e0e0;">
                                <button class="btn btn-secondary" onclick="event.stopPropagation(); editCrop(${projectId}, ${crop.id})" style="flex: 1; padding: 8px; font-size: 0.85rem;">✏️ แก้ไข</button>
                                <button class="btn btn-secondary" onclick="event.stopPropagation(); deleteCrop(${projectId}, ${crop.id})" style="flex: 1; padding: 8px; font-size: 0.85rem; background: #ff4444; border-color: #ff4444;">🗑️ ลบ</button>
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
        `}
    `;
}

// Simple helper - not used anymore but kept for compatibility
function viewCropWithoutHistory(projectId, cropId) {
    viewCrop(projectId, cropId);
}

// Old function kept for compatibility
function viewCropWithoutHistoryOld(projectId, cropId) {
    currentProjectId = projectId;
    currentCropId = cropId;

    const project = projects.find(p => p.id === projectId);
    const crop = project.crops.find(c => c.id === cropId);

    // Don't add to history

    // Make sure we're in the detail view
    document.getElementById('projectsListView').classList.remove('active');
    document.getElementById('createProjectView').classList.remove('active');
    document.getElementById('projectDetailView').classList.add('active');

    const content = document.getElementById('projectDetailContent');
    const plantsCount = crop.plants ? crop.plants.length : 0;
    const totalRecords = crop.plants ? crop.plants.reduce((sum, plant) => sum + (plant.recordCount || 0), 0) : 0;

    content.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 30px;">
            <div style="flex: 1;">
                <h2>${project.name} - ${crop.name}</h2>
                <p style="color: #666; margin-top: 10px;">
                    <strong>วันปลูก:</strong> ${new Date(crop.plantDate).toLocaleDateString('th-TH')} |
                    <strong>Zone:</strong> ${crop.zone} |
                    <strong>Layers:</strong> ${crop.layers.join(', ')}
                </p>
            </div>
            <div style="display: flex; gap: 10px;">
                <button class="btn btn-secondary" onclick="editCrop(${projectId}, ${cropId})">✏️ แก้ไข</button>
                <button class="btn btn-secondary" onclick="deleteCrop(${projectId}, ${cropId})" style="background: #ff4444; border-color: #ff4444;">🗑️ ลบ</button>
                <button class="btn" onclick="showCreatePlant(${projectId}, ${cropId})">+ เพิ่มพืช</button>
            </div>
        </div>

        <h3 style="margin-bottom: 15px;">🌱 พืชทั้งหมด (${plantsCount} ชนิด, ${totalRecords} บันทึก)</h3>
        ${plantsCount === 0 ? `
            <div style="text-align: center; padding: 60px 20px; background: #f8f9fa; border-radius: 12px; border: 2px dashed #ddd;">
                <div style="font-size: 60px; margin-bottom: 20px;">🌱</div>
                <h3 style="color: #666; margin-bottom: 10px;">ยังไม่มีพืช</h3>
                <p style="color: #888; margin-bottom: 20px;">เริ่มต้นโดยการเพิ่มพืชแรกของคุณ</p>
                <button class="btn" onclick="showCreatePlant(${projectId}, ${cropId})">+ เพิ่มพืช</button>
            </div>
        ` : `
            <div class="projects-grid">
                ${crop.plants.map(plant => {
                    const plantIcons = {
                        'ตั้งโอ๋': { icon: '🥬', bg: 'linear-gradient(135deg, #e8f5e9 0%, #a5d6a7 100%)' },
                        'เคล': { icon: '🥬', bg: 'linear-gradient(135deg, #e0f2f1 0%, #80cbc4 100%)' },
                        'Sorrel': { icon: '🌿', bg: 'linear-gradient(135deg, #fff3e0 0%, #ffb74d 100%)' },
                        'Frillice': { icon: '🥗', bg: 'linear-gradient(135deg, #fce4ec 0%, #f48fb1 100%)' },
                        'default': { icon: '🌱', bg: 'linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%)' }
                    };
                    const plantStyle = plantIcons[plant.name] || plantIcons['default'];

                    return `
                        <div class="project-card">
                            <div onclick="viewPlant(${projectId}, ${cropId}, ${plant.id})" style="cursor: pointer;">
                                <div style="width: 100%; height: 180px; display: flex; align-items: center; justify-content: center; background: ${plantStyle.bg}; border-radius: 8px; margin-bottom: 15px;">
                                    <div style="font-size: 80px;">${plantStyle.icon}</div>
                                </div>
                                <h3>${plant.displayName}</h3>
                                <p style="color: #666; margin: 10px 0; font-size: 0.9rem;">
                                    <strong>ตำแหน่ง:</strong> ${plant.location}<br>
                                    <strong>จำนวน:</strong> ${plant.quantity} ต้น<br>
                                    <strong>ฟิลด์ข้อมูล:</strong> ${plant.dataFields.length} ฟิลด์
                                </p>
                                <div class="project-meta">
                                    <span>${plant.recordCount} บันทึก</span>
                                    ${plant.recordCount > 0 ? '<span class="badge green">มีข้อมูล</span>' : '<span class="badge">ยังไม่มีข้อมูล</span>'}
                                </div>
                            </div>
                            <div style="display: flex; gap: 5px; margin-top: 10px; padding-top: 10px; border-top: 1px solid #e0e0e0;">
                                <button class="btn btn-secondary" onclick="event.stopPropagation(); editPlant(${projectId}, ${cropId}, ${plant.id})" style="flex: 1; padding: 8px; font-size: 0.85rem;">✏️ แก้ไข</button>
                                <button class="btn btn-secondary" onclick="event.stopPropagation(); deletePlant(${projectId}, ${cropId}, ${plant.id})" style="flex: 1; padding: 8px; font-size: 0.85rem; background: #ff4444; border-color: #ff4444;">🗑️ ลบ</button>
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
        `}
    `;
}

// Render projects list
function renderProjects() {
    const grid = document.getElementById('projectsGrid');
    if (!grid) return;
    
    grid.innerHTML = projects.map(project => {
        const cropsCount = project.crops ? project.crops.length : 0;
        const greenhouseName = project.greenhouse ? project.greenhouse.name : '-';
        
        return `
            <div class="project-card" onclick="viewProject(${project.id})">
                <h3>${project.name}</h3>
                <div style="margin-top: 15px; font-size: 0.95em; color: #555; line-height: 1.8;">
                    <div><strong>จำนวน Crops:</strong> ${cropsCount} รอบ</div>
                    <div><strong>ผู้รับผิดชอบ:</strong> ${project.owner}</div>
                    <div><strong>โรงเรือน:</strong> ${greenhouseName}</div>
                </div>
            </div>
        `;
    }).join('');
}

function showProjectsList() {
    document.getElementById('projectsListView').classList.add('active');
    document.getElementById('createProjectView').classList.remove('active');
    document.getElementById('projectDetailView').classList.remove('active');
    
    // Clear previous page when going to main list
    previousPage = null;
    updateBackButton();
    
    renderProjects();
}

function showCreateProject() {
    document.getElementById('projectsListView').classList.remove('active');
    document.getElementById('createProjectView').classList.add('active');
    
    // Load greenhouses into dropdown
    const ghSelect = document.getElementById('projectGreenhouse');
    if (ghSelect) {
        ghSelect.innerHTML = '<option value="">-- เลือกโรงเรือน --</option>' +
            greenhouses.map(gh => `<option value="${gh.id}">${gh.name}</option>`).join('');
    }
    
    // Reset form
    selectedProjectLayers = [];
    const zoneSelect = document.getElementById('projectZone');
    const layersContainer = document.getElementById('projectLayers');
    if (zoneSelect) zoneSelect.innerHTML = '<option value="">-- เลือก Zone --</option>';
    if (layersContainer) layersContainer.innerHTML = '<p style="color: #888; margin: 0;">เลือกโรงเรือนและ Zone ก่อน</p>';
    
    const iotInfo = document.getElementById('iotConnectionInfo');
    if (iotInfo) iotInfo.style.display = 'none';
    
    // Render create project form
    renderCreateProjectForm();
}

function renderCreateProjectForm() {
    const container = document.getElementById('createProjectView');
    container.innerHTML = `
        <div class="card">
            <h2>สร้างโครงการใหม่</h2>
            <p style="color: #666; margin-bottom: 20px;">กรอกข้อมูลพื้นฐานของโครงการ</p>
            <form id="projectForm" onsubmit="createProject(event)">
                <div class="form-grid">
                    <div class="form-group">
                        <label>ชื่อโครงการ *</label>
                        <input type="text" id="projectName" placeholder="เช่น การทดลองพืชผักใบ 4 ชนิด" required>
                    </div>
                    <div class="form-group">
                        <label>ผู้รับผิดชอบ *</label>
                        <input type="text" id="projectOwner" placeholder="เช่น ทีมวิจัย Lab A" required>
                    </div>
                    <div class="form-group">
                        <label>โรงเรือน *</label>
                        <select id="projectGreenhouse" required>
                            <option value="">-- เลือกโรงเรือน --</option>
                            ${greenhouses.map(gh => `<option value="${gh.id}">${gh.name}</option>`).join('')}
                        </select>
                    </div>
                    <div class="form-group full-width">
                        <label>คำอธิบายโครงการ</label>
                        <textarea id="projectDesc" placeholder="อธิบายวัตถุประสงค์ของการทดลอง" rows="3"></textarea>
                    </div>
                </div>
                <div style="margin-top: 30px; display: flex; gap: 15px;">
                    <button type="submit" class="btn">สร้างโครงการ</button>
                    <button type="button" class="btn btn-secondary" onclick="showProjectsList()">ยกเลิก</button>
                </div>
            </form>
        </div>
    `;
}


// Navigation helpers
function backToProject() {
    if (currentProjectId) {
        viewProject(currentProjectId);
    }
}

function createProject(event) {
    event.preventDefault();
    
    const ghId = parseInt(document.getElementById('projectGreenhouse').value);
    const gh = greenhouses.find(g => g.id === ghId);

    const newProject = {
        id: Date.now(),
        name: document.getElementById('projectName').value,
        description: document.getElementById('projectDesc').value || '',
        owner: document.getElementById('projectOwner').value,
        greenhouse: {
            id: ghId,
            name: gh.name
        },
        createdAt: new Date().toISOString(),
        crops: []
    };
    
    projects.push(newProject);
    localStorage.setItem('farmlab_projects', JSON.stringify(projects));
    
    // อัพเดท greenhouse.projects
    if (!gh.projects) gh.projects = [];
    if (!gh.projects.includes(newProject.name)) {
        gh.projects.push(newProject.name);
        localStorage.setItem('farmlab_greenhouses', JSON.stringify(greenhouses));
    }
    
    // ไปที่หน้ารายละเอียดโครงการทันที
    viewProject(newProject.id);
}

function viewProject(projectId) {
    currentProjectId = projectId;
    const project = projects.find(p => p.id === projectId);
    
    // Remember we came from projects list
    previousPage = { type: 'projectsList' };
    updateBackButton();
    
    // Hide all views
    document.getElementById('projectsListView').classList.remove('active');
    document.getElementById('createProjectView').classList.remove('active');
    document.getElementById('projectDetailView').classList.add('active');

    const content = document.getElementById('projectDetailContent');
    const cropsCount = project.crops ? project.crops.length : 0;
    
    // คำนวณจำนวนบันทึกทั้งหมด
    let totalRecords = 0;
    if (project.crops) {
        totalRecords = project.crops.reduce((sum, crop) => {
            if (crop.plants) {
                return sum + crop.plants.reduce((plantSum, plant) => plantSum + (plant.recordCount || 0), 0);
            }
            return sum;
        }, 0);
    }

    content.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 30px;">
            <div style="flex: 1;">
                <h2>${project.name}</h2>
                <p style="color: #666; margin-top: 10px;">${project.description || 'ไม่มีคำอธิบาย'}</p>
                <div style="margin-top: 15px; color: #888;">
                    <div><strong>โรงเรือน:</strong> ${project.greenhouse.name}</div>
                    <div><strong>ผู้รับผิดชอบ:</strong> ${project.owner}</div>
                    <div><strong>วันที่สร้าง:</strong> ${new Date(project.createdAt).toLocaleDateString('th-TH')}</div>
                </div>
            </div>
            <div style="display: flex; gap: 10px;">
                <button class="btn btn-secondary" onclick="editProject(${projectId})">✏️ แก้ไข</button>
                <button class="btn btn-secondary" onclick="deleteProject(${projectId})" style="background: #ff4444; border-color: #ff4444;">🗑️ ลบ</button>
                <button class="btn" onclick="showCreateCrop(${projectId})">+ เพิ่มรอบปลูก</button>
            </div>
        </div>

        <h3 style="margin-bottom: 15px;">🌱 รอบปลูกทั้งหมด (${cropsCount} รอบ, ${totalRecords} บันทึก)</h3>
        ${cropsCount === 0 ? `
            <div style="text-align: center; padding: 60px 20px; background: #f8f9fa; border-radius: 12px; border: 2px dashed #ddd;">
                <div style="font-size: 60px; margin-bottom: 20px;">🌱</div>
                <h3 style="color: #666; margin-bottom: 10px;">ยังไม่มีรอบปลูก</h3>
                <p style="color: #888; margin-bottom: 20px;">เริ่มต้นโดยการเพิ่มรอบปลูกแรกของคุณ</p>
                <button class="btn" onclick="showCreateCrop(${projectId})">+ เพิ่มรอบปลูก (Crop)</button>
            </div>
        ` : `
            <div class="projects-grid">
                ${project.crops.map(crop => {
                    const plantsCount = crop.plants ? crop.plants.length : 0;
                    const cropRecords = crop.plants ? crop.plants.reduce((sum, plant) => sum + (plant.recordCount || 0), 0) : 0;
                    const plantNames = crop.plants ? crop.plants.map(p => p.displayName).join(', ') : 'ยังไม่มีพืช';
                    
                    return `
                        <div class="project-card">
                            <div onclick="viewCrop(${projectId}, ${crop.id})" style="cursor: pointer;">
                                <div style="width: 100%; height: 180px; display: flex; align-items: center; justify-content: center; background: linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%); border-radius: 8px; margin-bottom: 15px;">
                                    <div style="font-size: 80px;">🌱</div>
                                </div>
                                <h3>${crop.name}</h3>
                                <p style="color: #666; margin: 10px 0; font-size: 0.9rem;">
                                    <strong>วันปลูก:</strong> ${new Date(crop.plantDate).toLocaleDateString('th-TH')}<br>
                                    <strong>Zone:</strong> ${crop.zone} | <strong>Layers:</strong> ${crop.layers.join(', ')}<br>
                                    <strong>พืช:</strong> ${plantsCount} ชนิด
                                </p>
                                <div class="project-meta">
                                    <span>${cropRecords} บันทึก</span>
                                    ${plantsCount > 0 ? '<span class="badge green">มีพืช</span>' : '<span class="badge">ยังไม่มีพืช</span>'}
                                </div>
                            </div>
                            <div style="display: flex; gap: 5px; margin-top: 10px; padding-top: 10px; border-top: 1px solid #e0e0e0;">
                                <button class="btn btn-secondary" onclick="event.stopPropagation(); editCrop(${projectId}, ${crop.id})" style="flex: 1; padding: 8px; font-size: 0.85rem;">✏️ แก้ไข</button>
                                <button class="btn btn-secondary" onclick="event.stopPropagation(); deleteCrop(${projectId}, ${crop.id})" style="flex: 1; padding: 8px; font-size: 0.85rem; background: #ff4444; border-color: #ff4444;">🗑️ ลบ</button>
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
        `}
    `;
}

// Show create crop form (Step 2)
function showCreateCrop(projectId) {
    currentProjectId = projectId;
    const project = projects.find(p => p.id === projectId);
    const gh = greenhouses.find(g => g.id === project.greenhouse.id);
    
    // Auto-generate crop name
    const nextCropNumber = (project.crops ? project.crops.length : 0) + 1;
    const cropName = `Crop ${nextCropNumber}`;
    
    // Make sure we're in the detail view
    document.getElementById('projectsListView').classList.remove('active');
    document.getElementById('createProjectView').classList.remove('active');
    document.getElementById('projectDetailView').classList.add('active');
    
    const content = document.getElementById('projectDetailContent');
    content.innerHTML = `
        <h2>เพิ่มรอบปลูก (ขั้นที่ 2/3)</h2>
        <p style="color: #666; margin-bottom: 20px;">เลือก Zone และ Layers ที่ต้องการปลูกในรอบนี้</p>
        
        <div style="background: #e3f2fd; padding: 15px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #2196f3;">
            <strong>ℹ️ โรงเรือน ${gh.name}</strong><br>
            <span style="color: #666; font-size: 0.9rem;">
                มี ${gh.zones.length} Zones (${gh.zones.join(', ')}) และแต่ละ Zone มี ${gh.layers.length} Layers (${gh.layers.join(', ')})
            </span>
        </div>
        
        <form id="cropForm" onsubmit="createCrop(event, ${projectId})">
            <div class="form-grid">
                <div class="form-group">
                    <label>ชื่อรอบ</label>
                    <input type="text" id="cropName" value="${cropName}" readonly style="background: #f5f5f5;">
                </div>
                <div class="form-group">
                    <label>วันที่เริ่มปลูก *</label>
                    <input type="date" id="cropPlantDate" required>
                </div>
            </div>
            
            <div style="margin-top: 25px;">
                <h3 style="margin-bottom: 15px;">เลือก Zone และ Layers *</h3>
                <p style="color: #666; font-size: 0.9rem; margin-bottom: 15px;">
                    เลือก Zone ที่ต้องการปลูก จากนั้นเลือก Layers ในแต่ละ Zone
                </p>
                
                <div id="zoneLayersContainer">
                    ${gh.zones.map(zone => `
                        <div class="zone-section" style="margin-bottom: 20px; padding: 20px; background: #f8f9fa; border-radius: 10px; border: 2px solid #e0e0e0;">
                            <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 15px;">
                                <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; font-size: 1.1rem; font-weight: 600;">
                                    <input type="checkbox" class="zone-checkbox" data-zone="${zone}" onchange="toggleZoneLayers('${zone}')">
                                    <span>Zone ${zone}</span>
                                </label>
                                <span style="color: #888; font-size: 0.9rem;">(${gh.layers.length} Layers)</span>
                            </div>
                            
                            <div id="layers-${zone}" style="display: none; padding-left: 30px; margin-top: 10px;">
                                <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                                    ${gh.layers.map(layer => `
                                        <label style="cursor: pointer; padding: 8px 15px; background: white; border: 2px solid #ddd; border-radius: 6px; transition: all 0.2s;">
                                            <input type="checkbox" name="zoneLayers" data-zone="${zone}" value="${layer}" style="margin-right: 5px;">
                                            Layer ${layer}
                                        </label>
                                    `).join('')}
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
                
                <div id="selectionSummary" style="margin-top: 20px; padding: 15px; background: #fff3cd; border-radius: 8px; border-left: 4px solid #ffc107; display: none;">
                    <strong>📋 สรุปการเลือก:</strong>
                    <div id="summaryContent" style="margin-top: 10px; color: #666;"></div>
                </div>
            </div>
            
            <div style="margin-top: 30px; display: flex; gap: 15px;">
                <button type="submit" class="btn">สร้างรอบปลูก</button>
                <button type="button" class="btn btn-secondary" onclick="goBack()">ยกเลิก</button>
            </div>
        </form>
    `;
    
    // Set default date to today
    document.getElementById('cropPlantDate').valueAsDate = new Date();
}

// Helper function to display zones and layers
function displayZonesLayers(crop) {
    if (crop.zonesLayers) {
        // New format: multiple zones
        const zonesText = crop.zones.join(', ');
        const layersDetails = Object.entries(crop.zonesLayers)
            .map(([z, ls]) => `Zone ${z}: Layers ${ls.join(', ')}`)
            .join(' | ');
        return `<strong>Zones:</strong> ${zonesText}<br><span style="margin-left: 20px; font-size: 0.85rem;">${layersDetails}</span>`;
    } else {
        // Old format: single zone
        return `<strong>Zone:</strong> ${crop.zone} | <strong>Layers:</strong> ${crop.layers.join(', ')}`;
    }
}

// Toggle zone layers visibility
function toggleZoneLayers(zone) {
    const checkbox = document.querySelector(`.zone-checkbox[data-zone="${zone}"]`);
    const layersDiv = document.getElementById(`layers-${zone}`);
    const layerCheckboxes = layersDiv.querySelectorAll('input[type="checkbox"]');
    
    if (checkbox.checked) {
        layersDiv.style.display = 'block';
    } else {
        layersDiv.style.display = 'none';
        // Uncheck all layers in this zone
        layerCheckboxes.forEach(cb => cb.checked = false);
    }
    
    updateSelectionSummary();
}

// Update selection summary
function updateSelectionSummary() {
    const selectedZones = {};
    const zoneCheckboxes = document.querySelectorAll('.zone-checkbox:checked');
    
    zoneCheckboxes.forEach(zoneCheckbox => {
        const zone = zoneCheckbox.dataset.zone;
        const layerCheckboxes = document.querySelectorAll(`input[name="zoneLayers"][data-zone="${zone}"]:checked`);
        const layers = Array.from(layerCheckboxes).map(cb => cb.value);
        
        if (layers.length > 0) {
            selectedZones[zone] = layers;
        }
    });
    
    const summaryDiv = document.getElementById('selectionSummary');
    const summaryContent = document.getElementById('summaryContent');
    
    if (Object.keys(selectedZones).length > 0) {
        summaryDiv.style.display = 'block';
        summaryContent.innerHTML = Object.entries(selectedZones)
            .map(([zone, layers]) => `<div style="margin-bottom: 5px;">
                <strong>Zone ${zone}:</strong> Layers ${layers.join(', ')}
            </div>`)
            .join('');
    } else {
        summaryDiv.style.display = 'none';
    }
}

// Add event listeners to layer checkboxes
document.addEventListener('change', function(e) {
    if (e.target.name === 'zoneLayers') {
        updateSelectionSummary();
    }
});

// Add default data fields (based on real data from Excel)
function addDefaultDataFields() {
    const defaultFields = [
        { name: 'ความสูง', unit: 'cm' },
        { name: 'จำนวนใบ', unit: 'ใบ' },
        { name: 'ทรงพุ่ม', unit: 'cm' },
        { name: 'น้ำหนัก', unit: 'g' }
    ];
    
    const fieldsList = document.getElementById('dataFieldsList');
    if (!fieldsList) return;
    
    defaultFields.forEach(field => {
        const fieldId = fieldIdCounter++;
        const fieldDiv = document.createElement('div');
        fieldDiv.className = 'field-item';
        fieldDiv.dataset.fieldId = fieldId;
        fieldDiv.dataset.fieldType = 'manual';
        fieldDiv.dataset.fieldName = field.name;
        fieldDiv.dataset.fieldUnit = field.unit;
        fieldDiv.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center; padding: 12px; background: #f8f9fa; border-radius: 8px; border: 2px solid #e0e0e0;">
                <div>
                    <strong>${field.name}</strong> (${field.unit})
                </div>
                <button type="button" onclick="removeField(this)" style="background: none; border: none; color: #ff4444; cursor: pointer; font-size: 1.2rem;">×</button>
            </div>
        `;
        fieldsList.appendChild(fieldDiv);
    });
}

// Update crop layers based on selected zone
function updateCropLayers() {
    const projectId = currentProjectId;
    const project = projects.find(p => p.id === projectId);
    const gh = greenhouses.find(g => g.id === project.greenhouse.id);
    const zone = document.getElementById('cropZone').value;
    
    if (!zone) {
        document.getElementById('cropLayers').innerHTML = '<p style="color: #888; margin: 0;">เลือก Zone ก่อน</p>';
        document.getElementById('cropIotInfo').style.display = 'none';
        return;
    }
    
    // Show layer checkboxes
    const layersContainer = document.getElementById('cropLayers');
    layersContainer.innerHTML = gh.layers.map(l => 
        `<label style="cursor: pointer;">
            <input type="checkbox" name="cropLayers" value="${l}" onchange="updateCropIoT()"> Layer ${l}
        </label>`
    ).join('');
    
    updateCropIoT();
}

// Update IoT connection info for crop
function updateCropIoT() {
    const projectId = currentProjectId;
    const project = projects.find(p => p.id === projectId);
    const gh = greenhouses.find(g => g.id === project.greenhouse.id);
    const zone = document.getElementById('cropZone').value;
    const selectedLayers = Array.from(document.querySelectorAll('input[name="cropLayers"]:checked')).map(cb => cb.value);
    
    if (!zone || selectedLayers.length === 0) {
        document.getElementById('cropIotInfo').style.display = 'none';
        return;
    }
    
    const selectedZone = `Zone ${zone}`;
    
    // Find controllers (zone = null means room-level for all zones)
    const controllers = (gh.controllers || []).filter(c => c.zone === null || c.zone === selectedZone);
    
    // Find cameras for selected zone
    const cameras = (gh.cameras || []).filter(c => c.zone === selectedZone);
    
    if (controllers.length === 0 && cameras.length === 0) {
        document.getElementById('cropIotInfo').style.display = 'none';
        return;
    }
    
    let devicesHtml = '';
    if (controllers.length > 0) {
        devicesHtml += '<div style="margin-bottom: 8px;"><strong>🎛️ Controllers:</strong></div>';
        devicesHtml += controllers.map(c => 
            `<div style="margin-left: 20px; margin-bottom: 5px;">• ${c.name} (${c.id})</div>`
        ).join('');
    }
    if (cameras.length > 0) {
        devicesHtml += '<div style="margin-bottom: 8px; margin-top: 10px;"><strong>📷 Cameras:</strong></div>';
        devicesHtml += cameras.map(c => 
            `<div style="margin-left: 20px; margin-bottom: 5px;">• ${c.name} (${c.id})</div>`
        ).join('');
    }
    
    document.getElementById('cropIotDevicesList').innerHTML = devicesHtml;
    document.getElementById('cropIotInfo').style.display = 'block';
}

// Create crop (Step 2)
function createCrop(event, projectId) {
    event.preventDefault();
    
    const project = projects.find(p => p.id === projectId);
    const gh = greenhouses.find(g => g.id === project.greenhouse.id);
    
    // Collect selected zones and layers
    const selectedZonesLayers = {};
    const zoneCheckboxes = document.querySelectorAll('.zone-checkbox:checked');
    
    zoneCheckboxes.forEach(zoneCheckbox => {
        const zone = zoneCheckbox.dataset.zone;
        const layerCheckboxes = document.querySelectorAll(`input[name="zoneLayers"][data-zone="${zone}"]:checked`);
        const layers = Array.from(layerCheckboxes).map(cb => cb.value);
        
        if (layers.length > 0) {
            selectedZonesLayers[zone] = layers;
        }
    });
    
    // Validate selection
    if (Object.keys(selectedZonesLayers).length === 0) {
        alert('กรุณาเลือก Zone และ Layer อย่างน้อย 1 Zone');
        return;
    }
    
    // Collect all zones and layers
    const zones = Object.keys(selectedZonesLayers);
    const allLayers = Object.values(selectedZonesLayers).flat();
    
    // Collect IoT devices for selected zones
    const controllers = (gh.controllers || []).filter(c => 
        c.zone === null || zones.some(z => c.zone === `Zone ${z}`)
    );
    const cameras = (gh.cameras || []).filter(c => 
        zones.some(z => c.zone === `Zone ${z}`)
    );
    
    const newCrop = {
        id: Date.now(),
        name: document.getElementById('cropName').value,
        plantDate: document.getElementById('cropPlantDate').value,
        zones: zones, // Array of zones
        zonesLayers: selectedZonesLayers, // Object: { "A": ["1", "2"], "B": ["3"] }
        layers: allLayers, // Flat array of all layers for backward compatibility
        iot: {
            controllers: controllers.map(c => ({ id: c.id, name: c.name })),
            cameras: cameras.map(c => ({ id: c.id, name: c.name }))
        },
        plants: []
    };
    
    if (!project.crops) project.crops = [];
    project.crops.push(newCrop);
    localStorage.setItem('farmlab_projects', JSON.stringify(projects));
    
    // ไปที่หน้ารายละเอียด Crop ทันที
    viewCrop(projectId, newCrop.id);
}

// View crop detail (show plants list)
function viewCrop(projectId, cropId) {
    currentProjectId = projectId;
    currentCropId = cropId;

    const project = projects.find(p => p.id === projectId);
    const crop = project.crops.find(c => c.id === cropId);

    // Remember we came from project detail
    previousPage = { type: 'projectDetail', projectId: projectId };
    updateBackButton();

    // Make sure we're in the detail view
    document.getElementById('projectsListView').classList.remove('active');
    document.getElementById('createProjectView').classList.remove('active');
    document.getElementById('projectDetailView').classList.add('active');

    const content = document.getElementById('projectDetailContent');
    const plantsCount = crop.plants ? crop.plants.length : 0;
    const totalRecords = crop.plants ? crop.plants.reduce((sum, plant) => sum + (plant.recordCount || 0), 0) : 0;

    content.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 30px;">
            <div style="flex: 1;">
                <h2>${project.name} - ${crop.name}</h2>
                <p style="color: #666; margin-top: 10px;">
                    <strong>วันปลูก:</strong> ${new Date(crop.plantDate).toLocaleDateString('th-TH')} |
                    <strong>Zone:</strong> ${crop.zone} |
                    <strong>Layers:</strong> ${crop.layers.join(', ')}
                </p>
            </div>
            <div style="display: flex; gap: 10px;">
                <button class="btn btn-secondary" onclick="editCrop(${projectId}, ${cropId})">✏️ แก้ไข</button>
                <button class="btn btn-secondary" onclick="deleteCrop(${projectId}, ${cropId})" style="background: #ff4444; border-color: #ff4444;">🗑️ ลบ</button>
                <button class="btn" onclick="showCreatePlant(${projectId}, ${cropId})">+ เพิ่มพืช</button>
            </div>
        </div>

        <h3 style="margin-bottom: 15px;">🌱 พืชทั้งหมด (${plantsCount} ชนิด, ${totalRecords} บันทึก)</h3>
        ${plantsCount === 0 ? `
            <div style="text-align: center; padding: 60px 20px; background: #f8f9fa; border-radius: 12px; border: 2px dashed #ddd;">
                <div style="font-size: 60px; margin-bottom: 20px;">🌱</div>
                <h3 style="color: #666; margin-bottom: 10px;">ยังไม่มีพืช</h3>
                <p style="color: #888; margin-bottom: 20px;">เริ่มต้นโดยการเพิ่มพืชแรกของคุณ</p>
                <button class="btn" onclick="showCreatePlant(${projectId}, ${cropId})">+ เพิ่มพืช</button>
            </div>
        ` : `
            <div class="projects-grid">
                ${crop.plants.map(plant => {
                    const plantIcons = {
                        'ตั้งโอ๋': { icon: '🥬', bg: 'linear-gradient(135deg, #e8f5e9 0%, #a5d6a7 100%)' },
                        'เคล': { icon: '🥬', bg: 'linear-gradient(135deg, #e0f2f1 0%, #80cbc4 100%)' },
                        'Sorrel': { icon: '🌿', bg: 'linear-gradient(135deg, #fff3e0 0%, #ffb74d 100%)' },
                        'Frillice': { icon: '🥗', bg: 'linear-gradient(135deg, #fce4ec 0%, #f48fb1 100%)' },
                        'default': { icon: '🌱', bg: 'linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%)' }
                    };
                    const plantStyle = plantIcons[plant.name] || plantIcons['default'];

                    return `
                        <div class="project-card">
                            <div onclick="viewPlant(${projectId}, ${cropId}, ${plant.id})" style="cursor: pointer;">
                                <div style="width: 100%; height: 180px; display: flex; align-items: center; justify-content: center; background: ${plantStyle.bg}; border-radius: 8px; margin-bottom: 15px;">
                                    <div style="font-size: 80px;">${plantStyle.icon}</div>
                                </div>
                                <h3>${plant.displayName}</h3>
                                <p style="color: #666; margin: 10px 0; font-size: 0.9rem;">
                                    <strong>ตำแหน่ง:</strong> ${plant.location}<br>
                                    <strong>จำนวน:</strong> ${plant.quantity} ต้น<br>
                                    <strong>ฟิลด์ข้อมูล:</strong> ${plant.dataFields.length} ฟิลด์
                                </p>
                                <div class="project-meta">
                                    <span>${plant.recordCount} บันทึก</span>
                                    ${plant.recordCount > 0 ? '<span class="badge green">มีข้อมูล</span>' : '<span class="badge">ยังไม่มีข้อมูล</span>'}
                                </div>
                            </div>
                            <div style="display: flex; gap: 5px; margin-top: 10px; padding-top: 10px; border-top: 1px solid #e0e0e0;">
                                <button class="btn btn-secondary" onclick="event.stopPropagation(); editPlant(${projectId}, ${cropId}, ${plant.id})" style="flex: 1; padding: 8px; font-size: 0.85rem;">✏️ แก้ไข</button>
                                <button class="btn btn-secondary" onclick="event.stopPropagation(); deletePlant(${projectId}, ${cropId}, ${plant.id})" style="flex: 1; padding: 8px; font-size: 0.85rem; background: #ff4444; border-color: #ff4444;">🗑️ ลบ</button>
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
        `}
    `;
}



// Show create plant form (Step 3)
function showCreatePlant(projectId, cropId) {
    currentProjectId = projectId;
    currentCropId = cropId;
    
    const project = projects.find(p => p.id === projectId);
    const crop = project.crops.find(c => c.id === cropId);
    
    // Remember we came from crop detail
    previousPage = { type: 'cropDetail', projectId: projectId, cropId: cropId };
    updateBackButton();
    
    // Make sure we're in the detail view
    document.getElementById('projectsListView').classList.remove('active');
    document.getElementById('createProjectView').classList.remove('active');
    document.getElementById('projectDetailView').classList.add('active');
    
    const content = document.getElementById('projectDetailContent');
    content.innerHTML = `
        <h2>เพิ่มพืช</h2>
        <p style="color: #666; margin-bottom: 20px;">กำหนดข้อมูลพืชและฟิลด์ที่ต้องการเก็บ</p>
        
        <form id="plantForm" onsubmit="createPlant(event, ${projectId}, ${cropId})">
            <div class="form-grid">
                <div class="form-group">
                    <label>ชื่อพืช *</label>
                    <select id="plantName" required>
                        <option value="">-- เลือกพืช --</option>
                        ${PLANT_TYPES.map(p => `<option value="${p}">${p}</option>`).join('')}
                    </select>
                </div>
                <div class="form-group">
                    <label>อายุเก็บเกี่ยว (วัน) *</label>
                    <input type="number" id="harvestDays" min="1" placeholder="เช่น 35" required>
                </div>
                <div class="form-group full-width">
                    <label>ตำแหน่ง (Zones & Layers) *</label>
                    <p style="color: #666; font-size: 0.9rem; margin-bottom: 10px;">เลือก Layer ที่จะปลูกพืชชนิดนี้ (แยกตาม Zone)</p>
                    <div id="plantLayers" style="display: flex; flex-direction: column; gap: 15px;">
                        ${crop.zonesLayers ? 
                            // New format: multiple zones with layers
                            Object.entries(crop.zonesLayers).map(([zone, layers]) => `
                                <div style="padding: 15px; background: #f8f9fa; border-radius: 8px; border: 2px solid #e0e0e0;">
                                    <div style="font-weight: 600; margin-bottom: 10px; color: #333;">Zone ${zone}</div>
                                    <div style="display: flex; gap: 10px; flex-wrap: wrap; padding-left: 10px;">
                                        ${layers.map(l => `
                                            <label style="cursor: pointer; padding: 8px 12px; background: white; border: 2px solid #ddd; border-radius: 6px;">
                                                <input type="checkbox" name="plantLayers" value="${zone}-${l}" data-zone="${zone}" data-layer="${l}"> Layer ${l}
                                            </label>
                                        `).join('')}
                                    </div>
                                </div>
                            `).join('')
                            :
                            // Old format: single zone (backward compatible)
                            `<div style="padding: 15px; background: #f8f9fa; border-radius: 8px; border: 2px solid #e0e0e0;">
                                <div style="font-weight: 600; margin-bottom: 10px; color: #333;">Zone ${crop.zone || 'A'}</div>
                                <div style="display: flex; gap: 10px; flex-wrap: wrap; padding-left: 10px;">
                                    ${crop.layers.map(l => `
                                        <label style="cursor: pointer; padding: 8px 12px; background: white; border: 2px solid #ddd; border-radius: 6px;">
                                            <input type="checkbox" name="plantLayers" value="${crop.zone || 'A'}-${l}" data-zone="${crop.zone || 'A'}" data-layer="${l}"> Layer ${l}
                                        </label>
                                    `).join('')}
                                </div>
                            </div>`
                        }
                    </div>
                </div>
                <div class="form-group">
                    <label>จำนวนต้น *</label>
                    <input type="number" id="plantQuantity" min="1" placeholder="เช่น 50" required>
                </div>
                
                <div class="form-group full-width">
                    <label>ฟิลด์ข้อมูลที่จะเก็บ</label>
                    <p style="color: #666; font-size: 0.9rem; margin-bottom: 10px;">
                        ฟิลด์พื้นฐานถูกเพิ่มให้อัตโนมัติแล้ว คุณสามารถเพิ่มหรือลบได้ 
                        <span style="color: #2196f3;">💡 ถ้าชื่อฟิลด์ตรงกับ Sensor จะมีตัวเลือกดึงข้อมูลอัตโนมัติ</span>
                    </p>
                    <button type="button" class="btn btn-secondary" onclick="addDataField()" style="margin-bottom: 15px;">
                        + เพิ่มฟิลด์
                    </button>
                    <div id="dataFieldsList" style="display: flex; flex-direction: column; gap: 10px;">
                        <!-- Default fields will be added here -->
                    </div>
                </div>
            </div>
            <div style="margin-top: 30px; display: flex; gap: 15px;">
                <button type="submit" class="btn">เพิ่มพืช</button>
                <button type="button" class="btn btn-secondary" onclick="goBack()">ยกเลิก</button>
            </div>
        </form>
    `;
    
    // Add default data fields after form is rendered
    setTimeout(() => {
        addDefaultDataFields();
    }, 0);
}

let fieldIdCounter = 1;

// Sensor mapping for smart detection
const SENSOR_MAPPING = {
    'อุณหภูมิ': { sensor: 'temperature', unit: '°C', label: 'อุณหภูมิ' },
    'temperature': { sensor: 'temperature', unit: '°C', label: 'อุณหภูมิ' },
    'ความชื้น': { sensor: 'humidity', unit: '%', label: 'ความชื้น' },
    'humidity': { sensor: 'humidity', unit: '%', label: 'ความชื้น' },
    'ppfd': { sensor: 'ppfd', unit: 'µmol/m²/s', label: 'PPFD' },
    'แสง': { sensor: 'ppfd', unit: 'µmol/m²/s', label: 'PPFD' },
    'co2': { sensor: 'co2', unit: 'ppm', label: 'CO2' },
    'ec': { sensor: 'ec', unit: 'mS/cm', label: 'EC' },
    'ph': { sensor: 'ph', unit: '', label: 'pH' }
};

// Add data field (new modal-based approach)
function addDataField() {
    // Validate context
    if (!currentProjectId || !currentCropId) {
        alert('ไม่สามารถเพิ่มฟิลด์ได้ กรุณาลองใหม่อีกครั้ง');
        return;
    }
    
    // Create modal
    const modal = document.createElement('div');
    modal.style.cssText = 'position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; z-index: 1000;';
    
    modal.innerHTML = `
        <div style="background: white; border-radius: 12px; padding: 30px; max-width: 500px; width: 90%; box-shadow: 0 10px 40px rgba(0,0,0,0.3);">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                <h3 style="margin: 0;">เพิ่มฟิลด์ข้อมูล</h3>
                <button onclick="this.closest('div[style*=fixed]').remove()" style="background: none; border: none; font-size: 1.5rem; cursor: pointer; color: #999;">×</button>
            </div>
            
            <div style="margin-bottom: 15px;">
                <label style="display: block; margin-bottom: 5px; font-weight: 600;">ชื่อฟิลด์ *</label>
                <input type="text" id="modalFieldName" placeholder="เช่น อุณหภูมิ, ความสูง" style="width: 100%; padding: 10px; border: 2px solid #ddd; border-radius: 6px; font-size: 1rem;">
            </div>
            
            <div style="margin-bottom: 15px;">
                <label style="display: block; margin-bottom: 5px; font-weight: 600;">หน่วย *</label>
                <input type="text" id="modalFieldUnit" placeholder="เช่น °C, cm, g" style="width: 100%; padding: 10px; border: 2px solid #ddd; border-radius: 6px; font-size: 1rem;">
            </div>
            
            <div style="margin-bottom: 15px;">
                <label style="display: block; margin-bottom: 10px; font-weight: 600;">แหล่งข้อมูล *</label>
                <div style="display: flex; flex-direction: column; gap: 10px;">
                    <label style="cursor: pointer; padding: 12px; border: 2px solid #ddd; border-radius: 6px; display: flex; align-items: center; gap: 10px;">
                        <input type="radio" name="modalFieldSource" value="manual" checked onchange="toggleSensorSelect(false)">
                        <div>
                            <div style="font-weight: 600;">📝 Manual</div>
                            <div style="font-size: 0.85rem; color: #666;">กรอกข้อมูลด้วยตัวเอง</div>
                        </div>
                    </label>
                    <label style="cursor: pointer; padding: 12px; border: 2px solid #ddd; border-radius: 6px; display: flex; align-items: center; gap: 10px;">
                        <input type="radio" name="modalFieldSource" value="sensor" onchange="toggleSensorSelect(true)">
                        <div>
                            <div style="font-weight: 600;">🤖 Sensor</div>
                            <div style="font-size: 0.85rem; color: #666;">ดึงข้อมูลอัตโนมัติจาก Sensor</div>
                        </div>
                    </label>
                </div>
            </div>
            
            <div id="sensorSelectContainer" style="margin-bottom: 20px; display: none;">
                <label style="display: block; margin-bottom: 5px; font-weight: 600;">เลือก Sensor *</label>
                <select id="modalSensorSelect" style="width: 100%; padding: 10px; border: 2px solid #ddd; border-radius: 6px; font-size: 1rem;">
                    <option value="">-- เลือก Sensor --</option>
                </select>
                <div id="sensorInfo" style="margin-top: 10px; padding: 10px; background: #e3f2fd; border-radius: 6px; font-size: 0.9rem; display: none;">
                    <strong>ℹ️ ข้อมูล Sensor:</strong>
                    <div id="sensorInfoText" style="margin-top: 5px; color: #666;"></div>
                </div>
            </div>
            
            <div style="display: flex; gap: 10px; justify-content: flex-end;">
                <button onclick="this.closest('div[style*=fixed]').remove()" class="btn btn-secondary">ยกเลิก</button>
                <button onclick="saveDataField()" class="btn">เพิ่มฟิลด์</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Load available sensors
    loadAvailableSensors();
}

// Toggle sensor select visibility
function toggleSensorSelect(show) {
    const container = document.getElementById('sensorSelectContainer');
    if (container) {
        container.style.display = show ? 'block' : 'none';
    }
}

// Load available sensors into dropdown
function loadAvailableSensors() {
    const select = document.getElementById('modalSensorSelect');
    if (!select) return;
    
    const projectId = currentProjectId;
    const cropId = currentCropId;
    if (!projectId || !cropId) return;
    
    const project = projects.find(p => p.id === projectId);
    if (!project) return;
    
    const crop = project.crops.find(c => c.id === cropId);
    if (!crop || !crop.iot || !crop.iot.controllers || crop.iot.controllers.length === 0) {
        select.innerHTML = '<option value="">ไม่มี Sensor ที่ใช้ได้</option>';
        return;
    }
    
    const controller = crop.iot.controllers[0];
    const gh = greenhouses.find(g => g.id === project.greenhouse.id);
    if (!gh) return;
    
    const controllerData = gh.controllers.find(c => c.id === controller.id);
    if (!controllerData || !controllerData.sensors) {
        select.innerHTML = '<option value="">ไม่มี Sensor ที่ใช้ได้</option>';
        return;
    }
    
    const sensorLabels = {
        temperature: { label: 'Temperature Sensor', unit: '°C' },
        humidity: { label: 'Humidity Sensor', unit: '%' },
        ppfd: { label: 'PPFD Sensor', unit: 'µmol/m²/s' },
        co2: { label: 'CO2 Sensor', unit: 'ppm' },
        ec: { label: 'EC Sensor', unit: 'mS/cm' },
        ph: { label: 'pH Sensor', unit: '' }
    };
    
    select.innerHTML = '<option value="">-- เลือก Sensor --</option>' +
        controllerData.sensors
            .filter(s => sensorLabels[s])
            .map(s => `<option value="${s}" data-controller="${controller.id}">${sensorLabels[s].label} (${sensorLabels[s].unit})</option>`)
            .join('');
    
    // Show sensor info on change
    select.onchange = function() {
        const sensorInfo = document.getElementById('sensorInfo');
        const sensorInfoText = document.getElementById('sensorInfoText');
        if (this.value && sensorInfo && sensorInfoText) {
            sensorInfo.style.display = 'block';
            sensorInfoText.textContent = `ดึงข้อมูลจาก: ${controller.name} (${controller.id})`;
        } else if (sensorInfo) {
            sensorInfo.style.display = 'none';
        }
    };
}

// Save data field from modal
function saveDataField() {
    const fieldName = document.getElementById('modalFieldName').value.trim();
    const fieldUnit = document.getElementById('modalFieldUnit').value.trim();
    const fieldSource = document.querySelector('input[name="modalFieldSource"]:checked').value;
    
    if (!fieldName || !fieldUnit) {
        alert('กรุณากรอกชื่อฟิลด์และหน่วย');
        return;
    }
    
    let sensorType = null;
    let controllerId = null;
    let sensorName = null;
    
    if (fieldSource === 'sensor') {
        const sensorSelect = document.getElementById('modalSensorSelect');
        if (!sensorSelect.value) {
            alert('กรุณาเลือก Sensor');
            return;
        }
        sensorType = sensorSelect.value;
        controllerId = sensorSelect.options[sensorSelect.selectedIndex].dataset.controller;
        sensorName = sensorSelect.options[sensorSelect.selectedIndex].text;
    }
    
    // Create field item
    const fieldId = fieldIdCounter++;
    const fieldsList = document.getElementById('dataFieldsList');
    const fieldDiv = document.createElement('div');
    fieldDiv.className = 'field-item';
    fieldDiv.dataset.fieldId = fieldId;
    fieldDiv.dataset.fieldType = fieldSource === 'sensor' ? 'auto' : 'manual';
    fieldDiv.dataset.fieldName = fieldName;
    fieldDiv.dataset.fieldUnit = fieldUnit;
    
    if (fieldSource === 'sensor') {
        fieldDiv.dataset.sensorType = sensorType;
        fieldDiv.dataset.controllerId = controllerId;
        fieldDiv.innerHTML = `
            <div style="padding: 15px; background: #e3f2fd; border-radius: 8px; border: 2px solid #2196f3;">
                <div style="display: flex; justify-content: space-between; align-items: start;">
                    <div style="flex: 1;">
                        <div style="font-weight: 600; font-size: 1.05rem; margin-bottom: 5px;">${fieldName} (${fieldUnit})</div>
                        <div style="color: #1976d2; font-size: 0.9rem;">🤖 ${sensorName}</div>
                        <div style="color: #666; font-size: 0.85rem; margin-top: 3px;">ดึงจาก: ${controllerId}</div>
                    </div>
                    <button type="button" onclick="removeField(this)" style="background: none; border: none; color: #ff4444; cursor: pointer; font-size: 1.2rem; margin-left: 10px;">×</button>
                </div>
            </div>
        `;
    } else {
        fieldDiv.innerHTML = `
            <div style="padding: 15px; background: #f8f9fa; border-radius: 8px; border: 2px solid #e0e0e0;">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <div>
                        <div style="font-weight: 600; font-size: 1.05rem;">${fieldName} (${fieldUnit})</div>
                        <div style="color: #666; font-size: 0.9rem;">📝 Manual</div>
                    </div>
                    <button type="button" onclick="removeField(this)" style="background: none; border: none; color: #ff4444; cursor: pointer; font-size: 1.2rem;">×</button>
                </div>
            </div>
        `;
    }
    
    fieldsList.appendChild(fieldDiv);
    
    // Close modal
    document.querySelector('div[style*="position: fixed"]').remove();
}

// Check if sensor is available
function hasAvailableSensor(sensorType) {
    const projectId = currentProjectId;
    const cropId = currentCropId;
    if (!projectId || !cropId) return false;
    
    const project = projects.find(p => p.id === projectId);
    if (!project) return false;
    
    const crop = project.crops.find(c => c.id === cropId);
    if (!crop || !crop.iot || !crop.iot.controllers || crop.iot.controllers.length === 0) return false;
    
    const controller = crop.iot.controllers[0];
    const gh = greenhouses.find(g => g.id === project.greenhouse.id);
    if (!gh) return false;
    
    const controllerData = gh.controllers.find(c => c.id === controller.id);
    return controllerData && controllerData.sensors && controllerData.sensors.includes(sensorType);
}

// Update field type
function updateFieldType(fieldId, type) {
    const fieldDiv = document.querySelector(`.field-item[data-field-id="${fieldId}"]`);
    if (fieldDiv) {
        fieldDiv.dataset.fieldType = type;
        
        // Update visual feedback
        const container = fieldDiv.querySelector('div[style*="padding: 15px"]');
        if (container) {
            if (type === 'auto') {
                container.style.background = '#e3f2fd';
                container.style.borderColor = '#2196f3';
            } else {
                container.style.background = '#f8f9fa';
                container.style.borderColor = '#e0e0e0';
            }
        }
    }
}

// Old functions kept for compatibility but not used
function addManualField() {
    addDataField();
}

function addAutoField() {
    const projectId = currentProjectId;
    const cropId = currentCropId;
    const project = projects.find(p => p.id === projectId);
    const crop = project.crops.find(c => c.id === cropId);
    
    if (crop.iot.controllers.length === 0) {
        alert('ไม่มี Controller เชื่อมต่อกับรอบปลูกนี้');
        return;
    }
    
    const controller = crop.iot.controllers[0];
    const gh = greenhouses.find(g => g.id === project.greenhouse.id);
    const controllerData = gh.controllers.find(c => c.id === controller.id);
    
    if (!controllerData || !controllerData.sensors) {
        alert('ไม่พบข้อมูล Sensor');
        return;
    }
    
    // Show sensor selection
    const sensorTypes = {
        temperature: { label: 'อุณหภูมิ', unit: '°C' },
        humidity: { label: 'ความชื้น', unit: '%' },
        ppfd: { label: 'PPFD', unit: 'µmol/m²/s' },
        co2: { label: 'CO2', unit: 'ppm' },
        ec: { label: 'EC', unit: 'mS/cm' },
        ph: { label: 'pH', unit: '' }
    };
    
    const availableSensors = controllerData.sensors
        .filter(s => sensorTypes[s])
        .map(s => `${s}:${sensorTypes[s].label} (${sensorTypes[s].unit})`)
        .join('\n');
    
    const selected = prompt(`เลือก Sensor:\n\n${availableSensors}\n\nพิมพ์ชื่อ sensor (เช่น temperature):`);
    if (!selected) return;
    
    const sensorType = selected.toLowerCase();
    if (!sensorTypes[sensorType] || !controllerData.sensors.includes(sensorType)) {
        alert('Sensor ไม่ถูกต้อง');
        return;
    }
    
    const fieldId = fieldIdCounter++;
    const fieldsList = document.getElementById('dataFieldsList');
    const fieldDiv = document.createElement('div');
    fieldDiv.className = 'field-item';
    fieldDiv.dataset.fieldId = fieldId;
    fieldDiv.dataset.fieldType = 'auto';
    fieldDiv.dataset.fieldName = sensorTypes[sensorType].label;
    fieldDiv.dataset.fieldUnit = sensorTypes[sensorType].unit;
    fieldDiv.dataset.sensorType = sensorType;
    fieldDiv.dataset.controllerId = controller.id;
    fieldDiv.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; padding: 12px; background: #f0f8ff; border-radius: 8px; border: 2px solid #185a9d;">
            <div>
                <strong>${sensorTypes[sensorType].label}</strong> ${sensorTypes[sensorType].unit ? `(${sensorTypes[sensorType].unit})` : ''} - <span style="color: #185a9d;">🤖 Auto from ${controller.name}</span>
            </div>
            <button type="button" onclick="removeField(this)" style="background: none; border: none; color: #ff4444; cursor: pointer; font-size: 1.2rem;">×</button>
        </div>
    `;
    fieldsList.appendChild(fieldDiv);
}

// Remove field
function removeField(button) {
    button.closest('.field-item').remove();
}

// Create plant (Step 3)
function createPlant(event, projectId, cropId) {
    event.preventDefault();
    
    const project = projects.find(p => p.id === projectId);
    const crop = project.crops.find(c => c.id === cropId);
    
    const plantName = document.getElementById('plantName').value;
    const harvestDays = parseInt(document.getElementById('harvestDays').value);
    const selectedCheckboxes = Array.from(document.querySelectorAll('input[name="plantLayers"]:checked'));
    const quantity = parseInt(document.getElementById('plantQuantity').value);
    
    if (selectedCheckboxes.length === 0) {
        alert('กรุณาเลือก Layer อย่างน้อย 1 Layer');
        return;
    }
    
    // Collect zones and layers
    const zonesLayers = {};
    selectedCheckboxes.forEach(cb => {
        const zone = cb.dataset.zone;
        const layer = cb.dataset.layer;
        if (!zonesLayers[zone]) {
            zonesLayers[zone] = [];
        }
        zonesLayers[zone].push(layer);
    });
    
    // Create location string
    let locationStr = '';
    if (Object.keys(zonesLayers).length === 1) {
        const zone = Object.keys(zonesLayers)[0];
        const layers = zonesLayers[zone];
        locationStr = layers.length === 1 
            ? `Zone ${zone} Layer ${layers[0]}`
            : `Zone ${zone} Layers ${layers.join(', ')}`;
    } else {
        locationStr = Object.entries(zonesLayers)
            .map(([z, ls]) => `Zone ${z} Layers ${ls.join(', ')}`)
            .join(' | ');
    }
    
    // Collect data fields
    const fieldItems = document.querySelectorAll('#dataFieldsList .field-item');
    const dataFields = Array.from(fieldItems).map((item, index) => {
        const fieldType = item.dataset.fieldType;
        const field = {
            id: index + 1,
            name: item.dataset.fieldName,
            unit: item.dataset.fieldUnit,
            type: fieldType,
            canBeAuto: fieldType === 'auto',
            sensor: null
        };
        
        if (fieldType === 'auto') {
            field.sensor = {
                controllerId: item.dataset.controllerId,
                sensorType: item.dataset.sensorType,
                source: 'room'
            };
        }
        
        return field;
    });
    
    const newPlant = {
        id: Date.now(),
        name: plantName,
        harvestDays: harvestDays,
        displayName: `${plantName} ${harvestDays} วัน`,
        location: locationStr,
        zonesLayers: zonesLayers,
        quantity: quantity,
        dataFields: dataFields,
        recordCount: 0,
        records: []
    };
    
    if (!crop.plants) crop.plants = [];
    crop.plants.push(newPlant);
    localStorage.setItem('farmlab_projects', JSON.stringify(projects));
    
    // กลับไปหน้า Crop detail ทันที (ไม่แสดง alert)
    viewCrop(projectId, cropId);
}

function viewPlant(projectId, cropId, plantId) {
    alert('ฟีเจอร์ดูรายละเอียดพืชจะพัฒนาใน Phase 4 (Data Entry)');
}

// ============================================
// Edit & Delete Functions
// ============================================

// Edit Project
function editProject(projectId) {
    const project = projects.find(p => p.id === projectId);
    
    // Make sure we're in the detail view
    document.getElementById('projectsListView').classList.remove('active');
    document.getElementById('createProjectView').classList.remove('active');
    document.getElementById('projectDetailView').classList.add('active');
    
    const content = document.getElementById('projectDetailContent');
    
    content.innerHTML = `
        <h2>แก้ไขโครงการ</h2>
        <form id="editProjectForm" onsubmit="updateProject(event, ${projectId})">
            <div class="form-grid">
                <div class="form-group">
                    <label>ชื่อโครงการ *</label>
                    <input type="text" id="editProjectName" value="${project.name}" required>
                </div>
                <div class="form-group">
                    <label>ผู้รับผิดชอบ *</label>
                    <input type="text" id="editProjectOwner" value="${project.owner}" required>
                </div>
                <div class="form-group">
                    <label>โรงเรือน *</label>
                    <select id="editProjectGreenhouse" required>
                        ${greenhouses.map(gh => 
                            `<option value="${gh.id}" ${gh.id === project.greenhouse.id ? 'selected' : ''}>${gh.name}</option>`
                        ).join('')}
                    </select>
                </div>
                <div class="form-group full-width">
                    <label>คำอธิบายโครงการ</label>
                    <textarea id="editProjectDesc" rows="3">${project.description || ''}</textarea>
                </div>
            </div>
            <div style="margin-top: 30px; display: flex; gap: 15px;">
                <button type="submit" class="btn">บันทึกการแก้ไข</button>
                <button type="button" class="btn btn-secondary" onclick="viewProject(${projectId})">ยกเลิก</button>
            </div>
        </form>
    `;
}

// Update Project
function updateProject(event, projectId) {
    event.preventDefault();
    
    const project = projects.find(p => p.id === projectId);
    const ghId = parseInt(document.getElementById('editProjectGreenhouse').value);
    const gh = greenhouses.find(g => g.id === ghId);
    
    // Remove old name from greenhouse.projects
    const oldGh = greenhouses.find(g => g.id === project.greenhouse.id);
    if (oldGh && oldGh.projects) {
        oldGh.projects = oldGh.projects.filter(p => p !== project.name);
    }
    
    // Update project
    project.name = document.getElementById('editProjectName').value;
    project.owner = document.getElementById('editProjectOwner').value;
    project.description = document.getElementById('editProjectDesc').value;
    project.greenhouse = {
        id: ghId,
        name: gh.name
    };
    
    // Add new name to greenhouse.projects
    if (!gh.projects) gh.projects = [];
    if (!gh.projects.includes(project.name)) {
        gh.projects.push(project.name);
    }
    
    localStorage.setItem('farmlab_projects', JSON.stringify(projects));
    localStorage.setItem('farmlab_greenhouses', JSON.stringify(greenhouses));
    
    viewProject(projectId);
}

// Delete Project
function deleteProject(projectId) {
    const project = projects.find(p => p.id === projectId);
    
    if (!confirm(`คุณแน่ใจหรือไม่ที่จะลบโครงการ "${project.name}"?\n\nการลบจะไม่สามารถกู้คืนได้`)) {
        return;
    }
    
    // Remove from greenhouse.projects
    const gh = greenhouses.find(g => g.id === project.greenhouse.id);
    if (gh && gh.projects) {
        gh.projects = gh.projects.filter(p => p !== project.name);
        localStorage.setItem('farmlab_greenhouses', JSON.stringify(greenhouses));
    }
    
    // Remove project
    const index = projects.findIndex(p => p.id === projectId);
    if (index > -1) {
        projects.splice(index, 1);
        localStorage.setItem('farmlab_projects', JSON.stringify(projects));
    }
    
    showProjectsList();
}

// Edit Crop
function editCrop(projectId, cropId) {
    const project = projects.find(p => p.id === projectId);
    const crop = project.crops.find(c => c.id === cropId);
    const gh = greenhouses.find(g => g.id === project.greenhouse.id);
    
    // Make sure we're in the detail view
    document.getElementById('projectsListView').classList.remove('active');
    document.getElementById('createProjectView').classList.remove('active');
    document.getElementById('projectDetailView').classList.add('active');
    
    const content = document.getElementById('projectDetailContent');
    
    // Get selected zones (support both old and new format)
    const selectedZones = crop.zones || (crop.zone ? [crop.zone] : []);
    const selectedZonesLayers = crop.zonesLayers || {};
    
    content.innerHTML = `
        <h2>แก้ไขรอบปลูก</h2>
        <form id="editCropForm" onsubmit="updateCrop(event, ${projectId}, ${cropId})">
            <div class="form-grid">
                <div class="form-group">
                    <label>ชื่อรอบ</label>
                    <input type="text" id="editCropName" value="${crop.name}" readonly style="background: #f5f5f5;">
                </div>
                <div class="form-group">
                    <label>วันที่เริ่มปลูก *</label>
                    <input type="date" id="editCropPlantDate" value="${crop.plantDate}" required>
                </div>
            </div>
            
            <div style="margin-top: 25px;">
                <h3 style="margin-bottom: 15px;">เลือก Zone และ Layers *</h3>
                
                <div id="zoneLayersContainer">
                    ${gh.zones.map(zone => {
                        const isZoneSelected = selectedZones.includes(zone);
                        const zoneLayers = selectedZonesLayers[zone] || [];
                        
                        return `
                        <div class="zone-section" style="margin-bottom: 20px; padding: 20px; background: #f8f9fa; border-radius: 10px; border: 2px solid #e0e0e0;">
                            <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 15px;">
                                <label style="cursor: pointer; display: flex; align-items: center; gap: 8px; font-size: 1.1rem; font-weight: 600;">
                                    <input type="checkbox" class="zone-checkbox" data-zone="${zone}" onchange="toggleZoneLayers('${zone}')" ${isZoneSelected ? 'checked' : ''}>
                                    <span>Zone ${zone}</span>
                                </label>
                            </div>
                            
                            <div id="layers-${zone}" style="display: ${isZoneSelected ? 'block' : 'none'}; padding-left: 30px; margin-top: 10px;">
                                <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                                    ${gh.layers.map(layer => `
                                        <label style="cursor: pointer; padding: 8px 15px; background: white; border: 2px solid #ddd; border-radius: 6px;">
                                            <input type="checkbox" name="zoneLayers" data-zone="${zone}" value="${layer}" ${zoneLayers.includes(layer) || crop.layers.includes(layer) ? 'checked' : ''}>
                                            Layer ${layer}
                                        </label>
                                    `).join('')}
                                </div>
                            </div>
                        </div>
                    `;
                    }).join('')}
                </div>
            </div>
            
            <div style="margin-top: 30px; display: flex; gap: 15px;">
                <button type="submit" class="btn">บันทึกการแก้ไข</button>
                <button type="button" class="btn btn-secondary" onclick="goBack()">ยกเลิก</button>
            </div>
        </form>
    `;
}

// Update edit crop layers
function updateEditCropLayers(projectId, cropId) {
    const project = projects.find(p => p.id === projectId);
    const crop = project.crops.find(c => c.id === cropId);
    const gh = greenhouses.find(g => g.id === project.greenhouse.id);
    const zone = document.getElementById('editCropZone').value;
    
    const layersContainer = document.getElementById('editCropLayers');
    layersContainer.innerHTML = gh.layers.map(l => 
        `<label style="cursor: pointer;">
            <input type="checkbox" name="editCropLayers" value="${l}" ${crop.layers.includes(l) ? 'checked' : ''}> Layer ${l}
        </label>`
    ).join('');
}

// Update Crop
function updateCrop(event, projectId, cropId) {
    event.preventDefault();
    
    const project = projects.find(p => p.id === projectId);
    const crop = project.crops.find(c => c.id === cropId);
    const gh = greenhouses.find(g => g.id === project.greenhouse.id);
    
    const zone = document.getElementById('editCropZone').value;
    const selectedLayers = Array.from(document.querySelectorAll('input[name="editCropLayers"]:checked')).map(cb => cb.value);
    
    if (selectedLayers.length === 0) {
        alert('กรุณาเลือก Layer อย่างน้อย 1 Layer');
        return;
    }
    
    // Update IoT connections
    const selectedZone = `Zone ${zone}`;
    const controllers = (gh.controllers || []).filter(c => c.zone === null || c.zone === selectedZone);
    const cameras = (gh.cameras || []).filter(c => c.zone === selectedZone);
    
    crop.plantDate = document.getElementById('editCropPlantDate').value;
    crop.zone = zone;
    crop.layers = selectedLayers;
    crop.iot = {
        controllers: controllers.map(c => ({ id: c.id, name: c.name })),
        cameras: cameras.map(c => ({ id: c.id, name: c.name }))
    };
    
    localStorage.setItem('farmlab_projects', JSON.stringify(projects));
    
    viewCrop(projectId, cropId);
}

// Delete Crop
function deleteCrop(projectId, cropId) {
    const project = projects.find(p => p.id === projectId);
    const crop = project.crops.find(c => c.id === cropId);
    
    if (!confirm(`คุณแน่ใจหรือไม่ที่จะลบรอบปลูก "${crop.name}"?\n\nการลบจะไม่สามารถกู้คืนได้`)) {
        return;
    }
    
    const index = project.crops.findIndex(c => c.id === cropId);
    if (index > -1) {
        project.crops.splice(index, 1);
        localStorage.setItem('farmlab_projects', JSON.stringify(projects));
    }
    
    viewProject(projectId);
}

// Edit Plant
function editPlant(projectId, cropId, plantId) {
    const project = projects.find(p => p.id === projectId);
    const crop = project.crops.find(c => c.id === cropId);
    const plant = crop.plants.find(p => p.id === plantId);
    
    // Remember we came from crop detail
    previousPage = { type: 'cropDetail', projectId: projectId, cropId: cropId };
    updateBackButton();
    
    // Make sure we're in the detail view
    document.getElementById('projectsListView').classList.remove('active');
    document.getElementById('createProjectView').classList.remove('active');
    document.getElementById('projectDetailView').classList.add('active');
    
    const content = document.getElementById('projectDetailContent');
    content.innerHTML = `
        <h2>แก้ไขพืช</h2>
        <form id="editPlantForm" onsubmit="updatePlant(event, ${projectId}, ${cropId}, ${plantId})">
            <div class="form-grid">
                <div class="form-group">
                    <label>ชื่อพืช *</label>
                    <select id="editPlantName" required>
                        ${PLANT_TYPES.map(p => 
                            `<option value="${p}" ${p === plant.name ? 'selected' : ''}>${p}</option>`
                        ).join('')}
                    </select>
                </div>
                <div class="form-group">
                    <label>อายุเก็บเกี่ยว (วัน) *</label>
                    <input type="number" id="editHarvestDays" value="${plant.harvestDays}" min="1" required>
                </div>
                <div class="form-group full-width">
                    <label>ตำแหน่ง (Layers) *</label>
                    <p style="color: #666; font-size: 0.9rem; margin-bottom: 10px;">เลือก Layer ที่จะปลูกพืชชนิดนี้ (เลือกได้หลาย Layer)</p>
                    <div id="editPlantLayers" style="display: flex; gap: 10px; flex-wrap: wrap; padding: 10px; border: 2px solid #e0e0e0; border-radius: 8px;">
                        ${crop.layers.map(l => {
                            const currentLayers = plant.location.replace('Layer ', '').replace('Layers ', '').split(', ');
                            return `<label style="cursor: pointer;">
                                <input type="checkbox" name="editPlantLayers" value="${l}" ${currentLayers.includes(l) ? 'checked' : ''}> Layer ${l}
                            </label>`;
                        }).join('')}
                    </div>
                </div>
                <div class="form-group">
                    <label>จำนวนต้น *</label>
                    <input type="number" id="editPlantQuantity" value="${plant.quantity}" min="1" required>
                </div>
                
                <div class="form-group full-width">
                    <label>ฟิลด์ข้อมูลที่จะเก็บ</label>
                    <p style="color: #888; font-size: 0.9rem; margin-bottom: 10px;">หมายเหตุ: การแก้ไขฟิลด์ข้อมูลจะไม่ส่งผลกระทบต่อข้อมูลที่บันทึกไว้แล้ว</p>
                    <div style="display: flex; gap: 10px; margin-bottom: 15px;">
                        <button type="button" class="btn btn-secondary" onclick="addManualField()" style="flex: 1;">
                            📝 + ฟิลด์ Manual
                        </button>
                        <button type="button" class="btn btn-secondary" onclick="addAutoField()" style="flex: 1;">
                            🤖 + ฟิลด์จาก Sensor
                        </button>
                    </div>
                    <div id="dataFieldsList" style="display: flex; flex-direction: column; gap: 10px;">
                        ${plant.dataFields.map(field => {
                            const fieldId = fieldIdCounter++;
                            if (field.type === 'manual') {
                                return `
                                    <div class="field-item" data-field-id="${fieldId}" data-field-type="manual" data-field-name="${field.name}" data-field-unit="${field.unit}">
                                        <div style="display: flex; justify-content: space-between; align-items: center; padding: 12px; background: #f8f9fa; border-radius: 8px; border: 2px solid #e0e0e0;">
                                            <div>
                                                <strong>${field.name}</strong> (${field.unit}) - <span style="color: #666;">Manual</span>
                                            </div>
                                            <button type="button" onclick="removeField(this)" style="background: none; border: none; color: #ff4444; cursor: pointer; font-size: 1.2rem;">×</button>
                                        </div>
                                    </div>
                                `;
                            } else {
                                return `
                                    <div class="field-item" data-field-id="${fieldId}" data-field-type="auto" data-field-name="${field.name}" data-field-unit="${field.unit}" data-sensor-type="${field.sensor.sensorType}" data-controller-id="${field.sensor.controllerId}">
                                        <div style="display: flex; justify-content: space-between; align-items: center; padding: 12px; background: #f0f8ff; border-radius: 8px; border: 2px solid #185a9d;">
                                            <div>
                                                <strong>${field.name}</strong> ${field.unit ? `(${field.unit})` : ''} - <span style="color: #185a9d;">🤖 Auto</span>
                                            </div>
                                            <button type="button" onclick="removeField(this)" style="background: none; border: none; color: #ff4444; cursor: pointer; font-size: 1.2rem;">×</button>
                                        </div>
                                    </div>
                                `;
                            }
                        }).join('')}
                    </div>
                </div>
            </div>
            <div style="margin-top: 30px; display: flex; gap: 15px;">
                <button type="submit" class="btn">บันทึกการแก้ไข</button>
                <button type="button" class="btn btn-secondary" onclick="goBack()">ยกเลิก</button>
            </div>
        </form>
    `;
}

// Update Plant
function updatePlant(event, projectId, cropId, plantId) {
    event.preventDefault();
    
    const project = projects.find(p => p.id === projectId);
    const crop = project.crops.find(c => c.id === cropId);
    const plant = crop.plants.find(p => p.id === plantId);
    
    const plantName = document.getElementById('editPlantName').value;
    const harvestDays = parseInt(document.getElementById('editHarvestDays').value);
    const location = document.getElementById('editPlantLayer').value;
    const quantity = parseInt(document.getElementById('editPlantQuantity').value);
    
    // Collect data fields
    const fieldItems = document.querySelectorAll('#dataFieldsList .field-item');
    const dataFields = Array.from(fieldItems).map((item, index) => {
        const fieldType = item.dataset.fieldType;
        const field = {
            id: index + 1,
            name: item.dataset.fieldName,
            unit: item.dataset.fieldUnit,
            type: fieldType,
            canBeAuto: fieldType === 'auto',
            sensor: null
        };
        
        if (fieldType === 'auto') {
            field.sensor = {
                controllerId: item.dataset.controllerId,
                sensorType: item.dataset.sensorType,
                source: 'room'
            };
        }
        
        return field;
    });
    
    plant.name = plantName;
    plant.harvestDays = harvestDays;
    plant.displayName = `${plantName} ${harvestDays} วัน`;
    plant.location = `Layer ${location}`;
    plant.quantity = quantity;
    plant.dataFields = dataFields;
    
    localStorage.setItem('farmlab_projects', JSON.stringify(projects));
    
    viewCrop(projectId, cropId);
}

// Delete Plant
function deletePlant(projectId, cropId, plantId) {
    const project = projects.find(p => p.id === projectId);
    const crop = project.crops.find(c => c.id === cropId);
    const plant = crop.plants.find(p => p.id === plantId);
    
    if (!confirm(`คุณแน่ใจหรือไม่ที่จะลบพืช "${plant.displayName}"?\n\nการลบจะไม่สามารถกู้คืนได้`)) {
        return;
    }
    
    const index = crop.plants.findIndex(p => p.id === plantId);
    if (index > -1) {
        crop.plants.splice(index, 1);
        localStorage.setItem('farmlab_projects', JSON.stringify(projects));
    }
    
    viewCrop(projectId, cropId);
}

// Navigation helpers
function backToProject() {
    if (currentProjectId) {
        viewProject(currentProjectId);
    }
}

function backToCrop() {
    if (currentProjectId && currentCropId) {
        viewCrop(currentProjectId, currentCropId);
    }
}

function updateDataProjectOptions() {
    const select = document.getElementById('dataProject');
    if (!select) return;
    
    select.innerHTML = '<option value="">เลือกโครงการ</option>' +
        projects.map(p => `<option value="${p.id}">${p.name}</option>`).join('');
}

// Update Plant
function updatePlant(event, projectId, cropId, plantId) {
    event.preventDefault();
    
    const project = projects.find(p => p.id === projectId);
    const crop = project.crops.find(c => c.id === cropId);
    const plant = crop.plants.find(p => p.id === plantId);
    
    const plantName = document.getElementById('editPlantName').value;
    const harvestDays = parseInt(document.getElementById('editHarvestDays').value);
    const selectedLayers = Array.from(document.querySelectorAll('input[name="editPlantLayers"]:checked')).map(cb => cb.value);
    const quantity = parseInt(document.getElementById('editPlantQuantity').value);
    
    if (selectedLayers.length === 0) {
        alert('กรุณาเลือก Layer อย่างน้อย 1 Layer');
        return;
    }
    
    // Collect data fields
    const fieldItems = document.querySelectorAll('#dataFieldsList .field-item');
    const dataFields = Array.from(fieldItems).map((item, index) => {
        const fieldType = item.dataset.fieldType;
        const field = {
            id: index + 1,
            name: item.dataset.fieldName,
            unit: item.dataset.fieldUnit,
            type: fieldType,
            canBeAuto: fieldType === 'auto',
            sensor: null
        };
        
        if (fieldType === 'auto') {
            field.sensor = {
                controllerId: item.dataset.controllerId,
                sensorType: item.dataset.sensorType,
                source: 'room'
            };
        }
        
        return field;
    });
    
    // Update plant
    plant.name = plantName;
    plant.harvestDays = harvestDays;
    plant.displayName = `${plantName} ${harvestDays} วัน`;
    plant.location = selectedLayers.length === 1 ? `Layer ${selectedLayers[0]}` : `Layers ${selectedLayers.join(', ')}`;
    plant.quantity = quantity;
    plant.dataFields = dataFields;
    
    localStorage.setItem('farmlab_projects', JSON.stringify(projects));
    
    viewCrop(projectId, cropId);
}

// Delete Plant
function deletePlant(projectId, cropId, plantId) {
    const project = projects.find(p => p.id === projectId);
    const crop = project.crops.find(c => c.id === cropId);
    const plant = crop.plants.find(p => p.id === plantId);
    
    if (!confirm(`คุณแน่ใจหรือไม่ที่จะลบพืช "${plant.displayName}"?\n\nการลบจะไม่สามารถกู้คืนได้`)) {
        return;
    }
    
    const index = crop.plants.findIndex(p => p.id === plantId);
    if (index > -1) {
        crop.plants.splice(index, 1);
        localStorage.setItem('farmlab_projects', JSON.stringify(projects));
    }
    
    viewCrop(projectId, cropId);
}
