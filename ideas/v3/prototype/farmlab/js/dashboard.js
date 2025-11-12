// Dashboard functionality

function loadDashboard() {
    const container = document.getElementById('dashboard');
    
    // คำนวณสถิติ
    const stats = calculateDashboardStats();
    
    container.innerHTML = `
        <div style="margin-bottom: 30px;">
            <h2>📊 Dashboard</h2>
            <p style="color: #666;">ภาพรวมโครงการและระบบทั้งหมด</p>
        </div>
        
        <!-- สรุปโครงการ -->
        <div class="stats-grid">
            <div class="stat-card">
                <div class="stat-icon">📁</div>
                <div class="stat-content">
                    <div class="stat-value">${stats.totalProjects}</div>
                    <div class="stat-label">โครงการทั้งหมด</div>
                </div>
            </div>
            
            <div class="stat-card">
                <div class="stat-icon">🌱</div>
                <div class="stat-content">
                    <div class="stat-value">${stats.activeCrops}</div>
                    <div class="stat-label">Crops ที่กำลังดำเนินการ</div>
                </div>
            </div>
            
            <div class="stat-card">
                <div class="stat-icon">🏠</div>
                <div class="stat-content">
                    <div class="stat-value">${stats.totalGreenhouses}</div>
                    <div class="stat-label">โรงเรือน</div>
                </div>
            </div>
            
            <div class="stat-card">
                <div class="stat-icon">📝</div>
                <div class="stat-content">
                    <div class="stat-value">${stats.todayRecords}</div>
                    <div class="stat-label">บันทึกวันนี้</div>
                </div>
            </div>
        </div>
        
        <!-- Crops ที่กำลังดำเนินการ -->
        <div class="card" style="margin-top: 30px;">
            <h3 style="margin-bottom: 20px;">🌱 Crops ที่กำลังดำเนินการ</h3>
            ${renderActiveCrops(stats.activeCropsList)}
        </div>
        
        <!-- IoT Status -->
        <div class="card" style="margin-top: 30px;">
            <h3 style="margin-bottom: 20px;">🤖 สถานะอุปกรณ์ IoT</h3>
            ${renderIoTStatus(stats.iotStatus)}
        </div>
    `;
}

function calculateDashboardStats() {
    const today = new Date().toISOString().split('T')[0];
    
    // นับโครงการทั้งหมด
    const totalProjects = projects.length;
    
    // นับ Crops ที่กำลังดำเนินการ และรวบรวมรายการ
    let activeCrops = 0;
    let activeCropsList = [];
    
    projects.forEach(project => {
        if (project.crops) {
            project.crops.forEach(crop => {
                activeCrops++;
                
                // คำนวณจำนวนพืชและบันทึกล่าสุด
                const plantCount = crop.plants ? crop.plants.length : 0;
                let lastRecordDate = null;
                let totalRecords = 0;
                
                if (crop.plants) {
                    crop.plants.forEach(plant => {
                        if (plant.records && plant.records.length > 0) {
                            totalRecords += plant.records.length;
                            const lastRecord = plant.records[plant.records.length - 1];
                            if (!lastRecordDate || lastRecord.date > lastRecordDate) {
                                lastRecordDate = lastRecord.date;
                            }
                        }
                    });
                }
                
                // คำนวณวันที่เหลือ (สมมติ 60 วัน)
                const plantDate = new Date(crop.plantDate);
                const harvestDate = new Date(plantDate);
                harvestDate.setDate(harvestDate.getDate() + 60);
                const daysLeft = Math.ceil((harvestDate - new Date()) / (1000 * 60 * 60 * 24));
                
                activeCropsList.push({
                    projectName: project.name,
                    projectId: project.id,
                    cropName: crop.name,
                    cropId: crop.id,
                    plantDate: crop.plantDate,
                    daysLeft: daysLeft > 0 ? daysLeft : 0,
                    plantCount,
                    totalRecords,
                    lastRecordDate,
                    greenhouse: project.greenhouse.name
                });
            });
        }
    });
    
    // นับโรงเรือน
    const totalGreenhouses = greenhouses.length;
    
    // นับบันทึกวันนี้
    let todayRecords = 0;
    projects.forEach(project => {
        if (project.crops) {
            project.crops.forEach(crop => {
                if (crop.plants) {
                    crop.plants.forEach(plant => {
                        if (plant.records) {
                            todayRecords += plant.records.filter(r => r.date === today).length;
                        }
                    });
                }
            });
        }
    });
    
    // รวบรวมสถานะ IoT
    const iotStatus = {
        controllers: [],
        cameras: []
    };
    
    greenhouses.forEach(gh => {
        if (gh.controllers) {
            gh.controllers.forEach(ctrl => {
                iotStatus.controllers.push({
                    name: ctrl.name,
                    greenhouse: gh.name,
                    status: ctrl.status,
                    zone: ctrl.zone || 'รวมทั้งโรงเรือน'
                });
            });
        }
        
        if (gh.cameras) {
            gh.cameras.forEach(cam => {
                iotStatus.cameras.push({
                    name: cam.name,
                    greenhouse: gh.name,
                    status: cam.status,
                    zone: cam.zone,
                    layers: cam.layers.join(', ')
                });
            });
        }
    });
    
    return {
        totalProjects,
        activeCrops,
        activeCropsList,
        totalGreenhouses,
        todayRecords,
        iotStatus
    };
}

function renderActiveCrops(cropsList) {
    if (cropsList.length === 0) {
        return '<p style="color: #999; text-align: center; padding: 20px;">ยังไม่มี Crops ที่กำลังดำเนินการ</p>';
    }
    
    return `
        <div class="crops-list">
            ${cropsList.map(crop => `
                <div class="crop-item" onclick="navigateToCrop(${crop.projectId}, ${crop.cropId})">
                    <div class="crop-header">
                        <div>
                            <h4>${crop.projectName}</h4>
                            <p style="color: #666; font-size: 0.9rem;">${crop.cropName} • ${crop.greenhouse}</p>
                        </div>
                        <div class="crop-status">
                            ${crop.daysLeft > 0 ? `<span class="badge badge-success">เหลือ ${crop.daysLeft} วัน</span>` : '<span class="badge badge-warning">ครบกำหนด</span>'}
                        </div>
                    </div>
                    <div class="crop-info">
                        <div class="info-item">
                            <span class="info-label">วันที่ปลูก:</span>
                            <span class="info-value">${formatDate(crop.plantDate)}</span>
                        </div>
                        <div class="info-item">
                            <span class="info-label">จำนวนพืช:</span>
                            <span class="info-value">${crop.plantCount} ชนิด</span>
                        </div>
                        <div class="info-item">
                            <span class="info-label">บันทึกทั้งหมด:</span>
                            <span class="info-value">${crop.totalRecords} ครั้ง</span>
                        </div>
                        <div class="info-item">
                            <span class="info-label">บันทึกล่าสุด:</span>
                            <span class="info-value">${crop.lastRecordDate ? formatDate(crop.lastRecordDate) : 'ยังไม่มี'}</span>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

function renderIoTStatus(iotStatus) {
    return `
        <div style="margin-bottom: 30px;">
            <h4 style="margin-bottom: 15px;">🎛️ Controllers (${iotStatus.controllers.length})</h4>
            <div class="device-grid">
                ${iotStatus.controllers.map(ctrl => `
                    <div class="device-card">
                        <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 10px;">
                            <div>
                                <div style="font-weight: 600;">${ctrl.name}</div>
                                <div style="color: #666; font-size: 0.85rem;">${ctrl.greenhouse}</div>
                            </div>
                            <div class="status-badge ${ctrl.status === 'online' ? 'status-online' : 'status-offline'}">
                                ${ctrl.status === 'online' ? '🟢 Online' : '🔴 Offline'}
                            </div>
                        </div>
                        <div style="color: #666; font-size: 0.85rem;">
                            Zone: ${ctrl.zone}
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
        
        <div>
            <h4 style="margin-bottom: 15px;">📷 Cameras (${iotStatus.cameras.length})</h4>
            <div class="device-grid">
                ${iotStatus.cameras.map(cam => `
                    <div class="device-card">
                        <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 10px;">
                            <div>
                                <div style="font-weight: 600;">${cam.name}</div>
                                <div style="color: #666; font-size: 0.85rem;">${cam.greenhouse}</div>
                            </div>
                            <div class="status-badge ${cam.status === 'online' ? 'status-online' : 'status-offline'}">
                                ${cam.status === 'online' ? '🟢 Online' : '🔴 Offline'}
                            </div>
                        </div>
                        <div style="color: #666; font-size: 0.85rem;">
                            ${cam.zone} • Layers ${cam.layers}
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function navigateToCrop(projectId, cropId) {
    // Switch to projects tab
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
    
    document.getElementById('projects').classList.add('active');
    document.querySelectorAll('.tab-button')[1].classList.add('active'); // Projects is 2nd button
    
    // Navigate to crop view
    viewCrop(projectId, cropId);
}

function formatDate(dateStr) {
    const date = new Date(dateStr);
    return date.toLocaleDateString('th-TH', { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
    });
}
