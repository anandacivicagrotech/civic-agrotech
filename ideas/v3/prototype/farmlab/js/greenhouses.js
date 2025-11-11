// Greenhouses management functionality

// Temporary storage for selected zones and layers
let selectedZones = [];
let selectedLayers = [];
let tempControllers = [];
let tempCameras = [];

function loadGreenhouses() {
    console.log('Loading Greenhouses...');
    renderGreenhousesTab();
    renderGreenhouses();
}

function renderGreenhousesTab() {
    const container = document.getElementById('greenhouses');
    container.innerHTML = `
        <div class="sub-nav">
            <button class="sub-nav-button active" onclick="showGreenhousesSubTab('greenhousesList')">🏠 จัดการโรงเรือน</button>
            <button class="sub-nav-button" onclick="showGreenhousesSubTab('devicesList')">🎛️ อุปกรณ์ทั้งหมด</button>
        </div>

        <div id="greenhousesList" class="sub-tab-content active">
            <div class="card">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                    <h2>🏠 จัดการโรงเรือน (Greenhouses)</h2>
                    <button class="btn" onclick="showGreenhouseForm()">+ สร้างโรงเรือนใหม่</button>
                </div>
                <div class="projects-grid" id="greenhousesGrid"></div>
            </div>
        </div>

        <div id="devicesList" class="sub-tab-content">
            <div class="card">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                    <h2>🎛️ อุปกรณ์ทั้งหมด (Devices)</h2>
                    <button class="btn" onclick="showAddDeviceForm()">+ เพิ่มอุปกรณ์</button>
                </div>
                <div id="devicesGrid"></div>
            </div>
        </div>
    `;
}

function showGreenhousesSubTab(tabName) {
    document.querySelectorAll('.sub-tab-content').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('#greenhouses .sub-nav .sub-nav-button').forEach(btn => btn.classList.remove('active'));
    
    document.getElementById(tabName).classList.add('active');
    event.target.classList.add('active');

    if (tabName === 'devicesList') {
        renderAllDevices();
    }
}

function renderGreenhouses() {
    const grid = document.getElementById('greenhousesGrid');
    if (!grid) return;
    
    if (!greenhouses || greenhouses.length === 0) {
        grid.innerHTML = '<p style="color: #888; padding: 40px; text-align: center;">ยังไม่มีโรงเรือน<br>คลิก "+ สร้างโรงเรือนใหม่" เพื่อเริ่มต้น</p>';
        return;
    }

    grid.innerHTML = greenhouses.map(gh => `
        <div class="project-card" onclick="viewGreenhouseDetail(${gh.id})">
            <h3>${gh.name}</h3>
            <div style="margin-top: 15px; font-size: 0.95em; color: #555; line-height: 1.8;">
                <div><strong>ขนาด:</strong> ${gh.size} ตร.ม.</div>
                <div><strong>Zones:</strong> ${gh.zones.join(', ')}</div>
                <div><strong>Layers:</strong> ${gh.layers.join(', ')}</div>
                <div><strong>อุปกรณ์:</strong> ${gh.controllers?.length || 0} Controllers, ${gh.cameras?.length || 0} Cameras</div>
                <div><strong>โครงการ:</strong> ${gh.projects?.length || 0} โครงการ</div>
            </div>
        </div>
    `).join('');
}

function renderAllDevices() {
    const grid = document.getElementById('devicesGrid');
    if (!grid) return;
    
    if (!greenhouses || greenhouses.length === 0) {
        grid.innerHTML = '<p style="color: #888; padding: 40px; text-align: center;">ยังไม่มีโรงเรือน<br>กรุณาสร้างโรงเรือนก่อน</p>';
        return;
    }
    
    const allControllers = greenhouses.flatMap(gh => 
        (gh.controllers || []).map(c => {
            const zoneText = c.zone || 'รวมทั้งโรงเรือน';
            return {
                ...c, 
                type: 'Controller',
                icon: '🎛️',
                greenhouse: gh.name, 
                greenhouseId: gh.id,
                details: `${(c.sensors || []).map(s => s.toUpperCase()).join(', ')} | ${zoneText}`
            };
        })
    );

    const allCameras = greenhouses.flatMap(gh => 
        (gh.cameras || []).map(c => ({ 
            ...c, 
            type: 'Camera',
            icon: '📷',
            greenhouse: gh.name, 
            greenhouseId: gh.id,
            details: `Layers: ${c.layers.join(', ')}`
        }))
    );

    const allDevices = [...allControllers, ...allCameras];

    if (allDevices.length === 0) {
        grid.innerHTML = '<p style="color: #888; padding: 40px; text-align: center;">ยังไม่มีอุปกรณ์<br>คลิก "+ เพิ่มอุปกรณ์" เพื่อเริ่มต้น</p>';
        return;
    }

    grid.innerHTML = `
        <div style="overflow-x: auto;">
            <table style="width: 100%; border-collapse: collapse;">
                <thead>
                    <tr style="background: #f8f9fa; border-bottom: 2px solid #dee2e6;">
                        <th style="padding: 12px; text-align: left;">ชื่อ / ID / ประเภท</th>
                        <th style="padding: 12px; text-align: left;">โรงเรือน</th>
                        <th style="padding: 12px; text-align: left;">Zone</th>
                        <th style="padding: 12px; text-align: left;">รายละเอียด</th>
                        <th style="padding: 12px; text-align: left;">สถานะ</th>
                        <th style="padding: 12px; text-align: left; width: 120px;">จัดการ</th>
                    </tr>
                </thead>
                <tbody>
                    ${allDevices.map(d => `
                        <tr style="border-bottom: 1px solid #dee2e6; cursor: pointer;" onclick="viewDeviceDashboard('${d.type.toLowerCase()}', '${d.id}', ${d.greenhouseId})" title="คลิกเพื่อดูรายละเอียด">
                            <td style="padding: 12px;">
                                <div style="font-weight: 600;">${d.name}</div>
                                <div style="font-size: 0.85em; color: #666; margin-top: 3px;">${d.id}</div>
                                <div style="font-size: 0.85em; color: #888; margin-top: 3px;">${d.icon} ${d.type}</div>
                            </td>
                            <td style="padding: 12px;">${d.greenhouse}</td>
                            <td style="padding: 12px;">${d.zone || 'รวมทั้งโรงเรือน'}</td>
                            <td style="padding: 12px; font-size: 0.9em;">${d.details}</td>
                            <td style="padding: 12px;">${d.status === 'online' ? '🟢 Online' : '🔴 Offline'}</td>
                            <td style="padding: 12px;" onclick="event.stopPropagation()">
                                <div style="display: flex; gap: 5px;">
                                    <button onclick="editDevice(${d.greenhouseId}, '${d.type}', '${d.id}')" style="padding: 5px 10px; background: #43cea2; color: white; border: none; border-radius: 5px; cursor: pointer; font-size: 0.85em;">✏️ แก้ไข</button>
                                    <button onclick="deleteDevice(${d.greenhouseId}, '${d.type}', '${d.id}')" style="padding: 5px 10px; background: #dc3545; color: white; border: none; border-radius: 5px; cursor: pointer; font-size: 0.85em;">🗑️ ลบ</button>
                                </div>
                            </td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
    `;
}

function viewDeviceDashboard(type, deviceId, greenhouseId) {
    const greenhouse = greenhouses.find(g => g.id === greenhouseId);
    if (!greenhouse) return;
    
    if (type === 'controller') {
        showControllerDashboard(greenhouse, deviceId);
    } else if (type === 'camera') {
        showCameraDashboard(greenhouse, deviceId);
    }
}

function showControllerDashboard(greenhouse, controllerId) {
    const controller = greenhouse.controllers.find(c => c.id === controllerId);
    if (!controller) return;

    const units = {
        temperature: '°C',
        humidity: '%',
        vpd: 'kPa',
        co2: 'ppm',
        ppfd: 'µmol/m²/s',
        ec: 'mS/cm',
        ph: ''
    };

    const sensorList = controller.sensors || [];
    const roomData = controller.data?.room || {};

    const dashboardHtml = `
        <div class="modal" id="deviceDashboardModal" style="display: block;">
            <div class="modal-content" style="max-width: 1000px;">
                <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 20px;">
                    <div>
                        <h2>🎛️ ${controller.name}</h2>
                        <p style="color: #666; margin-top: 5px;">${greenhouse.name} - ${controller.zone || 'รวมทั้งโรงเรือน'}</p>
                    </div>
                    <button class="btn-secondary" onclick="closeDeviceDashboard()">✕</button>
                </div>

                <div style="background: #f8f9fa; padding: 20px; border-radius: 10px; margin-bottom: 20px;">
                    <h3 style="margin-bottom: 15px;">📊 ข้อมูลปัจจุบัน</h3>
                    <div style="overflow-x: auto; margin-top: 15px;">
                        <table style="width: 100%; border-collapse: collapse; background: white; border-radius: 8px; overflow: hidden;">
                            <thead>
                                <tr style="background: #f8f9fa; border-bottom: 2px solid #dee2e6;">
                                    <th style="padding: 12px; text-align: left;">เซนเซอร์</th>
                                    <th style="padding: 12px; text-align: center;">ค่าปัจจุบัน</th>
                                    <th style="padding: 12px; text-align: center;">หน่วย</th>
                                    <th style="padding: 12px; text-align: center;">สถานะ</th>
                                    <th style="padding: 12px; text-align: center;">อัพเดทล่าสุด</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${sensorList.map(sensor => {
                                    const value = roomData[sensor];
                                    const unit = units[sensor] || '';
                                    return `
                                        <tr style="border-bottom: 1px solid #dee2e6;">
                                            <td style="padding: 12px;">${sensor.toUpperCase()}</td>
                                            <td style="padding: 12px; text-align: center; font-weight: 600; font-size: 1.1em; color: #43cea2;">
                                                ${value !== undefined ? value.toFixed(1) : '-'}
                                            </td>
                                            <td style="padding: 12px; text-align: center;">${unit}</td>
                                            <td style="padding: 12px; text-align: center;">🟢 ปกติ</td>
                                            <td style="padding: 12px; text-align: center; color: #888;">5 นาทีที่แล้ว</td>
                                        </tr>
                                    `;
                                }).join('')}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div style="background: #f8f9fa; padding: 20px; border-radius: 10px;">
                    <h3 style="margin-bottom: 15px;">📈 กราฟย้อนหลัง 7 วัน</h3>
                    <p style="color: #888; padding: 20px; text-align: center;">
                        กราฟจะแสดงเมื่อมีข้อมูลเพียงพอ<br>
                        (ฟีเจอร์นี้จะพัฒนาต่อในขั้นตอนถัดไป)
                    </p>
                </div>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', dashboardHtml);
}

function showCameraDashboard(greenhouse, cameraId) {
    const camera = greenhouse.cameras.find(c => c.id === cameraId);
    if (!camera) return;

    const sampleImages = [
        'https://via.placeholder.com/300x200/43cea2/ffffff?text=Sample+1',
        'https://via.placeholder.com/300x200/185a9d/ffffff?text=Sample+2',
        'https://via.placeholder.com/300x200/43cea2/ffffff?text=Sample+3',
        'https://via.placeholder.com/300x200/185a9d/ffffff?text=Sample+4',
        'https://via.placeholder.com/300x200/43cea2/ffffff?text=Sample+5',
        'https://via.placeholder.com/300x200/185a9d/ffffff?text=Sample+6'
    ];

    const dashboardHtml = `
        <div class="modal" id="deviceDashboardModal" style="display: block;">
            <div class="modal-content" style="max-width: 1000px;">
                <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 20px;">
                    <div>
                        <h2>📷 ${camera.name}</h2>
                        <p style="color: #666; margin-top: 5px;">${greenhouse.name} - ${camera.zone}</p>
                    </div>
                    <button class="btn-secondary" onclick="closeDeviceDashboard()">✕</button>
                </div>

                <div style="background: #f8f9fa; padding: 20px; border-radius: 10px; margin-bottom: 20px;">
                    <h3 style="margin-bottom: 15px;">📋 ข้อมูลกล้อง</h3>
                    <div style="margin-top: 15px; font-size: 1rem; color: #555; line-height: 2;">
                        <div><strong>ID:</strong> ${camera.id}</div>
                        <div><strong>Zone:</strong> ${camera.zone}</div>
                        <div><strong>Layers ที่ครอบคลุม:</strong> ${camera.layers.map(l => `<span class="tag">Layer ${l}</span>`).join(' ')}</div>
                        <div><strong>สถานะ:</strong> ${camera.status === 'online' ? '🟢 Online' : '🔴 Offline'}</div>
                        <div><strong>ถ่ายภาพล่าสุด:</strong> 10 นาทีที่แล้ว</div>
                    </div>
                </div>

                <div style="background: #f8f9fa; padding: 20px; border-radius: 10px; margin-bottom: 20px;">
                    <h3 style="margin-bottom: 15px;">📹 Live View</h3>
                    <div style="margin-top: 15px; background: #000; border-radius: 10px; aspect-ratio: 16/9; display: flex; align-items: center; justify-content: center; color: white;">
                        <div style="text-align: center;">
                            <div style="font-size: 3rem;">📹</div>
                            <div style="margin-top: 10px;">Live Stream</div>
                            <div style="font-size: 0.9em; color: #888; margin-top: 5px;">(ฟีเจอร์นี้จะพัฒนาต่อ)</div>
                        </div>
                    </div>
                </div>

                <div style="background: #f8f9fa; padding: 20px; border-radius: 10px;">
                    <h3 style="margin-bottom: 15px;">📷 รูปภาพที่ถ่ายโดยกล้องนี้</h3>
                    <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 20px; margin-top: 15px;">
                        ${sampleImages.map((img, i) => `
                            <div style="cursor: pointer; transition: transform 0.3s;" onclick="alert('ดูรูปภาพขนาดใหญ่')">
                                <img src="${img}" alt="Photo ${i+1}" style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px;">
                                <div style="margin-top: 8px; font-size: 0.9em; color: #666;">
                                    <div>10/11/2025 ${10+i}:00</div>
                                    <div>Layer ${camera.layers[i % camera.layers.length]}</div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', dashboardHtml);
}

function closeDeviceDashboard() {
    const modal = document.getElementById('deviceDashboardModal');
    if (modal) modal.remove();
}

function editDevice(greenhouseId, type, deviceId) {
    const greenhouse = greenhouses.find(g => g.id === greenhouseId);
    if (!greenhouse) return;
    
    let device;
    if (type === 'Controller') {
        device = greenhouse.controllers.find(c => c.id === deviceId);
    } else {
        device = greenhouse.cameras.find(c => c.id === deviceId);
    }
    
    if (!device) return;
    
    const formHtml = `
        <div class="modal" id="editDeviceModal" style="display: block;">
            <div class="modal-content" style="max-width: 600px;">
                <h2>✏️ แก้ไข ${type}</h2>
                <form onsubmit="updateDevice(event, ${greenhouseId}, '${type}', '${deviceId}')">
                    <div class="form-group">
                        <label>ชื่ออุปกรณ์ *</label>
                        <input type="text" id="editDeviceName" value="${device.name}" required>
                    </div>
                    <div class="form-group">
                        <label>สถานะ</label>
                        <select id="editDeviceStatus">
                            <option value="online" ${device.status === 'online' ? 'selected' : ''}>🟢 Online</option>
                            <option value="offline" ${device.status === 'offline' ? 'selected' : ''}>🔴 Offline</option>
                        </select>
                    </div>
                    <div style="display: flex; gap: 10px; justify-content: flex-end; margin-top: 20px;">
                        <button type="button" class="btn-secondary" onclick="closeEditDeviceModal()">ยกเลิก</button>
                        <button type="submit" class="btn">บันทึก</button>
                    </div>
                </form>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', formHtml);
}

function updateDevice(event, greenhouseId, type, deviceId) {
    event.preventDefault();
    
    const greenhouse = greenhouses.find(g => g.id === greenhouseId);
    if (!greenhouse) return;
    
    const newName = document.getElementById('editDeviceName').value;
    const newStatus = document.getElementById('editDeviceStatus').value;
    
    let device;
    if (type === 'Controller') {
        device = greenhouse.controllers.find(c => c.id === deviceId);
    } else {
        device = greenhouse.cameras.find(c => c.id === deviceId);
    }
    
    if (device) {
        device.name = newName;
        device.status = newStatus;
        localStorage.setItem('farmlab_greenhouses', JSON.stringify(greenhouses));
        alert('✅ อัพเดทอุปกรณ์สำเร็จ!');
        closeEditDeviceModal();
        renderAllDevices();
    }
}

function closeEditDeviceModal() {
    const modal = document.getElementById('editDeviceModal');
    if (modal) modal.remove();
}

function deleteDevice(greenhouseId, type, deviceId) {
    if (!confirm(`ต้องการลบ ${type} ${deviceId} ใช่หรือไม่?`)) {
        return;
    }
    
    const greenhouse = greenhouses.find(g => g.id === greenhouseId);
    if (!greenhouse) return;
    
    if (type === 'Controller') {
        greenhouse.controllers = greenhouse.controllers.filter(c => c.id !== deviceId);
    } else {
        greenhouse.cameras = greenhouse.cameras.filter(c => c.id !== deviceId);
    }
    
    localStorage.setItem('farmlab_greenhouses', JSON.stringify(greenhouses));
    alert('✅ ลบอุปกรณ์สำเร็จ!');
    renderAllDevices();
}

function showGreenhouseForm() {
    selectedZones = [];
    selectedLayers = [];
    tempControllers = [];
    tempCameras = [];
    
    const formHtml = `
        <div class="modal" id="greenhouseModal" style="display: block;">
            <div class="modal-content" style="max-width: 700px; max-height: 90vh; overflow-y: auto;">
                <h2>🏠 สร้างโรงเรือนใหม่</h2>
                <form id="greenhouseForm" onsubmit="saveGreenhouse(event)">
                    <div class="form-group">
                        <label>ชื่อโรงเรือน *</label>
                        <input type="text" id="ghName" placeholder="เช่น โรงเรือน 1" required>
                    </div>
                    <div class="form-group">
                        <label>ขนาด (ตร.ม.) *</label>
                        <input type="number" id="ghSize" placeholder="เช่น 100" required>
                    </div>
                    <div class="form-group">
                        <label>Zones *</label>
                        <div style="display: flex; gap: 10px; align-items: center;">
                            <select id="ghZoneSelect" style="flex: 1;">
                                <option value="">เลือก Zone</option>
                                <option value="A">Zone A</option>
                                <option value="B">Zone B</option>
                                <option value="C">Zone C</option>
                                <option value="D">Zone D</option>
                                <option value="E">Zone E</option>
                            </select>
                            <button type="button" class="btn" onclick="addZone()" style="padding: 10px 20px;">+ เพิ่ม</button>
                        </div>
                        <div id="selectedZones" style="margin-top: 10px; display: flex; gap: 5px; flex-wrap: wrap;"></div>
                    </div>
                    <div class="form-group">
                        <label>Layers *</label>
                        <div style="display: flex; gap: 10px; align-items: center;">
                            <select id="ghLayerSelect" style="flex: 1;">
                                <option value="">เลือก Layer</option>
                                <option value="1">Layer 1</option>
                                <option value="2">Layer 2</option>
                                <option value="3">Layer 3</option>
                                <option value="4">Layer 4</option>
                                <option value="5">Layer 5</option>
                            </select>
                            <button type="button" class="btn" onclick="addLayer()" style="padding: 10px 20px;">+ เพิ่ม</button>
                        </div>
                        <div id="selectedLayers" style="margin-top: 10px; display: flex; gap: 5px; flex-wrap: wrap;"></div>
                    </div>

                    <div style="margin-top: 30px; padding-top: 20px; border-top: 2px solid #e0e0e0;">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
                            <label style="font-size: 1.1em; font-weight: 600;">🎛️ อุปกรณ์</label>
                            <button type="button" class="btn" onclick="showAddDeviceInForm()" style="padding: 8px 16px; font-size: 0.9em;">+ เพิ่มอุปกรณ์</button>
                        </div>
                        <div id="tempDevicesList" style="background: #f8f9fa; padding: 15px; border-radius: 8px; min-height: 60px;">
                            <p style="color: #888; margin: 0; text-align: center;">ยังไม่มีอุปกรณ์</p>
                        </div>
                    </div>

                    <div style="display: flex; gap: 10px; justify-content: flex-end; margin-top: 20px;">
                        <button type="button" class="btn-secondary" onclick="closeGreenhouseModal()">ยกเลิก</button>
                        <button type="submit" class="btn">สร้างโรงเรือน</button>
                    </div>
                </form>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', formHtml);
}

function addZone() {
    const select = document.getElementById('ghZoneSelect');
    const zone = select.value;
    
    if (!zone) {
        alert('กรุณาเลือก Zone');
        return;
    }

    if (selectedZones.includes(zone)) {
        alert('Zone นี้ถูกเลือกแล้ว');
        return;
    }

    selectedZones.push(zone);
    renderSelectedZones();
    select.value = '';
}

function removeZone(zone) {
    selectedZones = selectedZones.filter(z => z !== zone);
    renderSelectedZones();
}

function renderSelectedZones() {
    const container = document.getElementById('selectedZones');
    container.innerHTML = selectedZones.map(zone => `
        <span class="tag">
            Zone ${zone}
            <button onclick="removeZone('${zone}')">×</button>
        </span>
    `).join('');
}

function addLayer() {
    const select = document.getElementById('ghLayerSelect');
    const layer = select.value;
    
    if (!layer) {
        alert('กรุณาเลือก Layer');
        return;
    }

    if (selectedLayers.includes(layer)) {
        alert('Layer นี้ถูกเลือกแล้ว');
        return;
    }

    selectedLayers.push(layer);
    renderSelectedLayers();
    select.value = '';
}

function removeLayer(layer) {
    selectedLayers = selectedLayers.filter(l => l !== layer);
    renderSelectedLayers();
}

function renderSelectedLayers() {
    const container = document.getElementById('selectedLayers');
    container.innerHTML = selectedLayers.map(layer => `
        <span class="tag">
            Layer ${layer}
            <button onclick="removeLayer('${layer}')">×</button>
        </span>
    `).join('');
}

function showAddDeviceInForm() {
    if (selectedZones.length === 0) {
        alert('กรุณาเลือก Zone ก่อนเพิ่มอุปกรณ์');
        return;
    }
    alert('ฟีเจอร์เพิ่มอุปกรณ์จะพัฒนาต่อในขั้นตอนถัดไป');
}

function saveGreenhouse(event) {
    event.preventDefault();
    
    if (selectedZones.length === 0) {
        alert('กรุณาเลือก Zone อย่างน้อย 1 Zone');
        return;
    }
    
    if (selectedLayers.length === 0) {
        alert('กรุณาเลือก Layer อย่างน้อย 1 Layer');
        return;
    }
    
    const newGreenhouse = {
        id: Date.now(),
        name: document.getElementById('ghName').value,
        size: document.getElementById('ghSize').value,
        zones: selectedZones,
        layers: selectedLayers,
        controllers: tempControllers,
        cameras: tempCameras,
        projects: []
    };
    
    greenhouses.push(newGreenhouse);
    localStorage.setItem('farmlab_greenhouses', JSON.stringify(greenhouses));
    
    alert('✅ สร้างโรงเรือนสำเร็จ!');
    closeGreenhouseModal();
    renderGreenhouses();
}

function closeGreenhouseModal() {
    const modal = document.getElementById('greenhouseModal');
    if (modal) modal.remove();
}

function viewGreenhouseDetail(greenhouseId) {
    const greenhouse = greenhouses.find(g => g.id === greenhouseId);
    if (!greenhouse) return;
    
    const controllersCount = greenhouse.controllers?.length || 0;
    const camerasCount = greenhouse.cameras?.length || 0;
    const projectsCount = greenhouse.projects?.length || 0;
    
    const modalHtml = `
        <div class="modal" id="greenhouseDetailModal" style="display: block;">
            <div class="modal-content" style="max-width: 900px;">
                <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 20px;">
                    <div>
                        <h2>🏠 ${greenhouse.name}</h2>
                        <p style="color: #666; margin-top: 5px;">ขนาด ${greenhouse.size} ตร.ม.</p>
                    </div>
                    <button class="btn-secondary" onclick="closeGreenhouseDetailModal()">✕</button>
                </div>

                <div style="background: #f8f9fa; padding: 20px; border-radius: 10px; margin-bottom: 20px;">
                    <h3 style="margin-bottom: 15px;">📋 ข้อมูลพื้นฐาน</h3>
                    <div style="margin-top: 15px; font-size: 1rem; color: #555; line-height: 2;">
                        <div><strong>Zones:</strong> ${greenhouse.zones.map(z => `<span class="tag">Zone ${z}</span>`).join(' ')}</div>
                        <div><strong>Layers:</strong> ${greenhouse.layers.map(l => `<span class="tag">Layer ${l}</span>`).join(' ')}</div>
                        <div><strong>อุปกรณ์:</strong> ${controllersCount} Controllers, ${camerasCount} Cameras</div>
                        <div><strong>โครงการที่ใช้งาน:</strong> ${projectsCount} โครงการ</div>
                    </div>
                </div>

                ${controllersCount > 0 ? `
                <div style="background: #f8f9fa; padding: 20px; border-radius: 10px; margin-bottom: 20px;">
                    <h3 style="margin-bottom: 15px;">🎛️ Controllers (${controllersCount})</h3>
                    <div style="display: grid; gap: 15px;">
                        ${greenhouse.controllers.map(c => `
                            <div style="background: white; padding: 15px; border-radius: 8px; border: 1px solid #e0e0e0; cursor: pointer;" onclick="showControllerDashboard(greenhouses.find(g => g.id === ${greenhouseId}), '${c.id}')">
                                <div style="display: flex; justify-content: space-between; align-items: start;">
                                    <div>
                                        <div style="font-weight: 600; font-size: 1.1em;">${c.name}</div>
                                        <div style="color: #666; font-size: 0.9em; margin-top: 5px;">${c.id} | ${c.zone || 'รวมทั้งโรงเรือน'}</div>
                                        <div style="margin-top: 8px; font-size: 0.9em;">
                                            <strong>Sensors:</strong> ${(c.sensors || []).map(s => s.toUpperCase()).join(', ')}
                                        </div>
                                    </div>
                                    <div style="text-align: right;">
                                        <div>${c.status === 'online' ? '🟢 Online' : '🔴 Offline'}</div>
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
                ` : ''}

                ${camerasCount > 0 ? `
                <div style="background: #f8f9fa; padding: 20px; border-radius: 10px; margin-bottom: 20px;">
                    <h3 style="margin-bottom: 15px;">📷 Cameras (${camerasCount})</h3>
                    <div style="display: grid; gap: 15px;">
                        ${greenhouse.cameras.map(c => `
                            <div style="background: white; padding: 15px; border-radius: 8px; border: 1px solid #e0e0e0; cursor: pointer;" onclick="showCameraDashboard(greenhouses.find(g => g.id === ${greenhouseId}), '${c.id}')">
                                <div style="display: flex; justify-content: space-between; align-items: start;">
                                    <div>
                                        <div style="font-weight: 600; font-size: 1.1em;">${c.name}</div>
                                        <div style="color: #666; font-size: 0.9em; margin-top: 5px;">${c.id} | ${c.zone}</div>
                                        <div style="margin-top: 8px; font-size: 0.9em;">
                                            <strong>Layers:</strong> ${c.layers.map(l => `Layer ${l}`).join(', ')}
                                        </div>
                                    </div>
                                    <div style="text-align: right;">
                                        <div>${c.status === 'online' ? '🟢 Online' : '🔴 Offline'}</div>
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
                ` : ''}

                ${projectsCount > 0 ? `
                <div style="background: #f8f9fa; padding: 20px; border-radius: 10px;">
                    <h3 style="margin-bottom: 15px;">🌱 โครงการที่ใช้โรงเรือนนี้ (${projectsCount})</h3>
                    <div style="display: flex; flex-direction: column; gap: 10px;">
                        ${greenhouse.projects.map(p => `
                            <div style="background: white; padding: 12px 15px; border-radius: 6px; border: 1px solid #e0e0e0;">
                                ${p}
                            </div>
                        `).join('')}
                    </div>
                </div>
                ` : `
                <div style="background: #f8f9fa; padding: 20px; border-radius: 10px; text-align: center;">
                    <p style="color: #888;">ยังไม่มีโครงการที่ใช้โรงเรือนนี้</p>
                </div>
                `}

                <div style="display: flex; gap: 10px; justify-content: flex-end; margin-top: 20px;">
                    <button class="btn btn-secondary" onclick="editGreenhouse(${greenhouseId})">✏️ แก้ไข</button>
                    <button class="btn btn-secondary" onclick="deleteGreenhouse(${greenhouseId})" style="background: #ff4444; border-color: #ff4444;">🗑️ ลบ</button>
                </div>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHtml);
}

function closeGreenhouseDetailModal() {
    const modal = document.getElementById('greenhouseDetailModal');
    if (modal) modal.remove();
}

function editGreenhouse(greenhouseId) {
    closeGreenhouseDetailModal();
    alert('ฟีเจอร์แก้ไขโรงเรือนจะพัฒนาต่อในขั้นตอนถัดไป');
}

function deleteGreenhouse(greenhouseId) {
    if (!confirm('ต้องการลบโรงเรือนนี้ใช่หรือไม่?')) {
        return;
    }
    
    const index = greenhouses.findIndex(g => g.id === greenhouseId);
    if (index !== -1) {
        greenhouses.splice(index, 1);
        localStorage.setItem('farmlab_greenhouses', JSON.stringify(greenhouses));
        alert('✅ ลบโรงเรือนสำเร็จ!');
        closeGreenhouseDetailModal();
        renderGreenhouses();
    }
}

function showAddDeviceForm() {
    const formHtml = `
        <div class="modal" id="addDeviceModal" style="display: block;">
            <div class="modal-content" style="max-width: 600px;">
                <h2>🎛️ เพิ่มอุปกรณ์</h2>
                <form id="addDeviceForm" onsubmit="saveNewDevice(event)">
                    <div class="form-group">
                        <label>ประเภทอุปกรณ์ *</label>
                        <select id="newDeviceType" onchange="updateAddDeviceForm()" required>
                            <option value="">เลือกประเภท</option>
                            <option value="controller">🎛️ Smart Grow Controller</option>
                            <option value="camera">📷 Camera</option>
                        </select>
                    </div>
                    <div id="addDeviceFormFields"></div>
                    <div style="display: flex; gap: 10px; justify-content: flex-end; margin-top: 20px;">
                        <button type="button" class="btn-secondary" onclick="closeAddDeviceModal()">ยกเลิก</button>
                        <button type="submit" class="btn">เพิ่มอุปกรณ์</button>
                    </div>
                </form>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', formHtml);
}

function updateAddDeviceForm() {
    const type = document.getElementById('newDeviceType').value;
    const fieldsContainer = document.getElementById('addDeviceFormFields');

    if (!type) {
        fieldsContainer.innerHTML = '';
        return;
    }

    const commonFields = `
        <div class="form-group">
            <label>ID อุปกรณ์ *</label>
            <input type="text" id="newDeviceId" placeholder="เช่น GEN3-004 หรือ CAM-009" required>
        </div>
        <div class="form-group">
            <label>ชื่ออุปกรณ์ *</label>
            <input type="text" id="newDeviceName" placeholder="เช่น Smart Grow Controller Gen3 #4" required>
        </div>
        <div class="form-group">
            <label>โรงเรือน *</label>
            <select id="newDeviceGreenhouse" onchange="updateAddDeviceZones()" required>
                <option value="">เลือกโรงเรือน</option>
                ${greenhouses.map(gh => `<option value="${gh.id}">${gh.name}</option>`).join('')}
            </select>
        </div>
        <div class="form-group">
            <label>Zone *</label>
            <select id="newDeviceZone" required>
                <option value="">เลือก Zone</option>
            </select>
        </div>
    `;

    if (type === 'controller') {
        fieldsContainer.innerHTML = commonFields + `
            <div class="form-group">
                <label>เซนเซอร์ที่มี</label>
                <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                    <label><input type="checkbox" name="newDeviceSensors" value="temperature" checked> Temperature</label>
                    <label><input type="checkbox" name="newDeviceSensors" value="humidity" checked> Humidity</label>
                    <label><input type="checkbox" name="newDeviceSensors" value="ppfd"> PPFD</label>
                    <label><input type="checkbox" name="newDeviceSensors" value="co2"> CO2</label>
                    <label><input type="checkbox" name="newDeviceSensors" value="ec"> EC</label>
                    <label><input type="checkbox" name="newDeviceSensors" value="ph"> pH</label>
                </div>
            </div>
        `;
    } else if (type === 'camera') {
        fieldsContainer.innerHTML = commonFields + `
            <div class="form-group">
                <label>Layers ที่ครอบคลุม *</label>
                <div id="newDeviceLayersContainer" style="display: flex; gap: 10px; flex-wrap: wrap;">
                    <p style="color: #888;">เลือกโรงเรือนก่อน</p>
                </div>
            </div>
        `;
    }
}

function updateAddDeviceZones() {
    const ghId = parseInt(document.getElementById('newDeviceGreenhouse').value);
    const zoneSelect = document.getElementById('newDeviceZone');
    
    if (!ghId) {
        zoneSelect.innerHTML = '<option value="">เลือก Zone</option>';
        return;
    }

    const gh = greenhouses.find(g => g.id === ghId);
    zoneSelect.innerHTML = '<option value="">เลือก Zone</option>' +
        gh.zones.map(z => `<option value="${z}">Zone ${z}</option>`).join('');
    
    // Update layers for camera
    const type = document.getElementById('newDeviceType').value;
    if (type === 'camera') {
        const layersContainer = document.getElementById('newDeviceLayersContainer');
        if (layersContainer) {
            layersContainer.innerHTML = gh.layers.map(l => 
                `<label><input type="checkbox" name="newDeviceLayers" value="${l}"> Layer ${l}</label>`
            ).join('');
        }
    }
}

function saveNewDevice(event) {
    event.preventDefault();
    
    const type = document.getElementById('newDeviceType').value;
    const id = document.getElementById('newDeviceId').value;
    const name = document.getElementById('newDeviceName').value;
    const ghId = parseInt(document.getElementById('newDeviceGreenhouse').value);
    const zone = document.getElementById('newDeviceZone').value;
    
    const greenhouse = greenhouses.find(g => g.id === ghId);
    if (!greenhouse) return;
    
    if (type === 'controller') {
        const sensors = Array.from(document.querySelectorAll('input[name="newDeviceSensors"]:checked')).map(cb => cb.value);
        
        if (sensors.length === 0) {
            alert('กรุณาเลือกเซนเซอร์อย่างน้อย 1 ตัว');
            return;
        }
        
        const sampleValues = {
            temperature: 25,
            humidity: 65,
            ppfd: 250,
            co2: 850,
            ec: 2.1,
            ph: 6.2
        };
        
        const data = { room: {} };
        sensors.forEach(s => data.room[s] = sampleValues[s] || 0);
        
        if (!greenhouse.controllers) greenhouse.controllers = [];
        greenhouse.controllers.push({
            id,
            name,
            zone: `Zone ${zone}`,
            status: 'online',
            sensors,
            data
        });
    } else if (type === 'camera') {
        const layers = Array.from(document.querySelectorAll('input[name="newDeviceLayers"]:checked')).map(cb => cb.value);
        
        if (layers.length === 0) {
            alert('กรุณาเลือก Layer อย่างน้อย 1 Layer');
            return;
        }
        
        if (!greenhouse.cameras) greenhouse.cameras = [];
        greenhouse.cameras.push({
            id,
            name,
            zone: `Zone ${zone}`,
            layers,
            status: 'online',
            lastCapture: new Date().toISOString()
        });
    }
    
    localStorage.setItem('farmlab_greenhouses', JSON.stringify(greenhouses));
    alert('✅ เพิ่มอุปกรณ์สำเร็จ!');
    closeAddDeviceModal();
    renderAllDevices();
}

function closeAddDeviceModal() {
    const modal = document.getElementById('addDeviceModal');
    if (modal) modal.remove();
}
