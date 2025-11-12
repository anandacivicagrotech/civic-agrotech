// Data Entry functionality

let selectedPlantForEntry = null;
let uploadedImages = [];

// Render data entry form
function renderDataEntryForm() {
    const container = document.getElementById('data');
    container.innerHTML = `
        <div class="card">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                <h2>📝 บันทึกข้อมูล</h2>
                <button class="btn btn-secondary" onclick="resetDataEntryForm()">🔄 เริ่มใหม่</button>
            </div>
            
            <form id="dataForm" onsubmit="submitDataEntry(event)">
                <!-- เลือกโครงการและพืช -->
                <div class="form-group">
                    <label>โครงการ *</label>
                    <select id="dataProject" onchange="updateDataCrops()" required>
                        <option value="">เลือกโครงการ</option>
                        ${projects.map(p => `<option value="${p.id}">${p.name}</option>`).join('')}
                    </select>
                </div>
                
                <div class="form-group">
                    <label>Crop *</label>
                    <select id="dataCrop" onchange="updateDataPlants()" required>
                        <option value="">เลือก Crop</option>
                    </select>
                </div>
                
                <div class="form-group">
                    <label>พืช *</label>
                    <select id="dataPlant" onchange="loadPlantFields()" required>
                        <option value="">เลือกพืช</option>
                    </select>
                </div>
                
                <div class="form-grid">
                    <div class="form-group">
                        <label>วันที่ *</label>
                        <input type="date" id="dataDate" required>
                    </div>
                    <div class="form-group">
                        <label>เวลา *</label>
                        <input type="time" id="dataTime" required>
                    </div>
                    <div class="form-group">
                        <label>ระยะการเติบโต *</label>
                        <select id="dataStage" required>
                            <option value="">เลือกระยะ</option>
                            <option value="germination">เพาะเมล็ด</option>
                            <option value="seedling">ต้นกล้า</option>
                            <option value="vegetative">ระหว่างเติบโต</option>
                            <option value="mature">โตเต็มที่</option>
                            <option value="harvest">เก็บเกี่ยว</option>
                        </select>
                    </div>
                </div>
                
                <hr style="margin: 30px 0; border: none; border-top: 1px solid #e0e0e0;">
                
                <!-- ฟิลด์ข้อมูลแบบ Dynamic -->
                <div id="dataFieldsContainer"></div>
                
                <hr style="margin: 30px 0; border: none; border-top: 1px solid #e0e0e0;">
                
                <!-- รูปภาพ -->
                <div class="form-group">
                    <label>รูปภาพ (1-3 รูป) *</label>
                    <div style="display: flex; gap: 10px; margin-bottom: 15px;">
                        <button type="button" class="btn btn-secondary" onclick="document.getElementById('dataImages').click()">📷 ถ่ายรูปเอง</button>
                        <button type="button" class="btn btn-secondary" onclick="document.getElementById('dataImages').click()">📁 อัพโหลดไฟล์</button>
                        <button type="button" class="btn btn-secondary" onclick="fetchCameraImages()">🤖 ดึงจากกล้อง</button>
                    </div>
                    <input type="file" id="dataImages" accept="image/*" multiple onchange="handleImageUpload(event)" style="display: none;">
                    <div class="image-preview" id="dataImagePreview"></div>
                </div>
                
                <!-- หมายเหตุ -->
                <div class="form-group">
                    <label>หมายเหตุ</label>
                    <textarea id="dataNotes" rows="3" placeholder="บันทึกข้อสังเกตเพิ่มเติม..."></textarea>
                </div>
                
                <!-- ผู้บันทึก -->
                <div class="form-group">
                    <label>ผู้บันทึก</label>
                    <input type="text" id="dataRecorder" value="สมชาย">
                </div>
                
                <div style="margin-top: 30px; display: flex; gap: 15px;">
                    <button type="button" class="btn btn-secondary" onclick="resetDataEntryForm()">ยกเลิก</button>
                    <button type="submit" class="btn">💾 บันทึกข้อมูล</button>
                </div>
            </form>
        </div>
    `;
    
    // Set today's date and time
    const now = new Date();
    const dataDate = document.getElementById('dataDate');
    const dataTime = document.getElementById('dataTime');
    if (dataDate) dataDate.valueAsDate = now;
    if (dataTime) dataTime.value = now.toTimeString().slice(0, 5);
}

function updateDataCrops() {
    const projectId = parseInt(document.getElementById('dataProject').value);
    const cropSelect = document.getElementById('dataCrop');
    const plantSelect = document.getElementById('dataPlant');
    
    cropSelect.innerHTML = '<option value="">เลือก Crop</option>';
    plantSelect.innerHTML = '<option value="">เลือกพืช</option>';
    document.getElementById('dataFieldsContainer').innerHTML = '';
    
    if (!projectId) return;
    
    const project = projects.find(p => p.id === projectId);
    if (project && project.crops) {
        cropSelect.innerHTML = '<option value="">เลือก Crop</option>' +
            project.crops.map(c => `<option value="${c.id}">${c.name} (${c.plantDate})</option>`).join('');
    }
}

function updateDataPlants() {
    const projectId = parseInt(document.getElementById('dataProject').value);
    const cropId = parseInt(document.getElementById('dataCrop').value);
    const plantSelect = document.getElementById('dataPlant');
    
    plantSelect.innerHTML = '<option value="">เลือกพืช</option>';
    document.getElementById('dataFieldsContainer').innerHTML = '';
    
    if (!projectId || !cropId) return;
    
    const project = projects.find(p => p.id === projectId);
    const crop = project?.crops.find(c => c.id === cropId);
    
    if (crop && crop.plants) {
        plantSelect.innerHTML = '<option value="">เลือกพืช</option>' +
            crop.plants.map(p => `<option value="${p.id}">${p.displayName} - ${p.location}</option>`).join('');
    }
}

function loadPlantFields() {
    const projectId = parseInt(document.getElementById('dataProject').value);
    const cropId = parseInt(document.getElementById('dataCrop').value);
    const plantId = parseInt(document.getElementById('dataPlant').value);
    
    if (!projectId || !cropId || !plantId) {
        document.getElementById('dataFieldsContainer').innerHTML = '';
        return;
    }
    
    const project = projects.find(p => p.id === projectId);
    const crop = project?.crops.find(c => c.id === cropId);
    const plant = crop?.plants.find(p => p.id === plantId);
    
    if (!plant) return;
    
    selectedPlantForEntry = { projectId, cropId, plantId, plant, crop };
    
    // สร้างฟิลด์ข้อมูล
    let fieldsHTML = '';
    
    // แยกฟิลด์เป็น Manual และ Auto
    const manualFields = plant.dataFields.filter(f => !f.canBeAuto);
    const autoFields = getAutoFields(crop);
    
    // สร้าง grid 3 คอลัมน์
    fieldsHTML += '<div class="form-grid" style="grid-template-columns: repeat(3, 1fr);">';
    
    // ฟิลด์ Manual
    manualFields.forEach(field => {
        const required = ['ความสูง', 'จำนวนใบ', 'น้ำหนัก'].includes(field.name) ? 'required' : '';
        fieldsHTML += `
            <div class="form-group">
                <label>${field.name}${field.unit ? ` (${field.unit})` : ''} ${required ? '*' : ''}</label>
                ${field.name === 'สีใบ' ? `
                    <select id="field_${field.id}" ${required}>
                        <option value="">เลือกสี</option>
                        <option value="เขียวอ่อน">เขียวอ่อน</option>
                        <option value="เขียวเข้ม">เขียวเข้ม</option>
                        <option value="เขียวปกติ">เขียวปกติ</option>
                        <option value="เหลือง">เหลือง</option>
                    </select>
                ` : `
                    <input type="number" step="0.1" id="field_${field.id}" placeholder="กรอก${field.name}" ${required}>
                `}
            </div>
        `;
    });
    
    // ฟิลด์ Auto (IoT)
    autoFields.forEach(field => {
        fieldsHTML += `
            <div class="form-group">
                <label>${field.label} 🤖</label>
                <input type="number" step="0.1" id="iot_${field.key}" value="${field.value}" placeholder="${field.value}">
            </div>
        `;
    });
    
    fieldsHTML += '</div>';
    
    // แสดงสถานะ Controller
    if (crop.iot && crop.iot.controllers && crop.iot.controllers.length > 0) {
        const controller = getControllerData(crop.iot.controllers[0].id);
        const status = controller?.status === 'online' ? '🟢 Online' : '🔴 Offline';
        fieldsHTML += `
            <div style="margin-top: 15px; padding: 10px; background: #f0f9ff; border-radius: 8px; display: flex; justify-content: space-between; align-items: center;">
                <span style="color: #666;">💡 Controller: ${controller?.name || 'N/A'} ${status}</span>
                <button type="button" class="btn btn-secondary" onclick="refreshIoTData()" style="padding: 5px 15px; font-size: 0.9rem;">🔄 รีเฟรชค่า IoT</button>
            </div>
        `;
    }
    
    document.getElementById('dataFieldsContainer').innerHTML = fieldsHTML;
}

function getAutoFields(crop) {
    if (!crop.iot || !crop.iot.controllers || crop.iot.controllers.length === 0) {
        return [];
    }
    
    const controller = getControllerData(crop.iot.controllers[0].id);
    if (!controller || !controller.data || !controller.data.room) {
        return [];
    }
    
    const data = controller.data.room;
    return [
        { key: 'temperature', label: 'Temperature (°C)', value: data.temperature || 0 },
        { key: 'humidity', label: 'Humidity (%)', value: data.humidity || 0 },
        { key: 'ppfd', label: 'PPFD (µmol/m²/s)', value: data.ppfd || 0 },
        { key: 'co2', label: 'CO₂ (ppm)', value: data.co2 || 0 },
        { key: 'ec', label: 'EC (mS/cm)', value: data.ec || 0 },
        { key: 'ph', label: 'pH', value: data.ph || 0 }
    ];
}

function getControllerData(controllerId) {
    for (const gh of greenhouses) {
        const controller = gh.controllers.find(c => c.id === controllerId);
        if (controller) return controller;
    }
    return null;
}

function refreshIoTData() {
    if (!selectedPlantForEntry) return;
    
    const autoFields = getAutoFields(selectedPlantForEntry.crop);
    autoFields.forEach(field => {
        const input = document.getElementById(`iot_${field.key}`);
        if (input) {
            // จำลองการดึงข้อมูลใหม่ (เพิ่ม random เล็กน้อย)
            const newValue = (field.value + (Math.random() - 0.5) * 2).toFixed(1);
            input.value = newValue;
        }
    });
    
    alert('✅ รีเฟรชข้อมูล IoT สำเร็จ');
}

function handleImageUpload(event) {
    const files = event.target.files;
    const preview = document.getElementById('dataImagePreview');
    
    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();
        
        reader.onload = function(e) {
            const imageId = Date.now() + i;
            uploadedImages.push({
                id: imageId,
                source: 'manual',
                url: e.target.result,
                timestamp: new Date().toISOString()
            });
            renderImagePreview();
        }
        
        reader.readAsDataURL(file);
    }
}

function fetchCameraImages() {
    if (!selectedPlantForEntry) {
        alert('⚠️ กรุณาเลือกพืชก่อน');
        return;
    }
    
    const crop = selectedPlantForEntry.crop;
    if (!crop.iot || !crop.iot.cameras || crop.iot.cameras.length === 0) {
        alert('⚠️ ไม่พบกล้องที่เชื่อมต่อกับ Crop นี้');
        return;
    }
    
    // จำลองการดึงรูปจากกล้อง
    const camera = crop.iot.cameras[0];
    const imageId = Date.now();
    uploadedImages.push({
        id: imageId,
        source: 'camera',
        url: 'https://via.placeholder.com/150?text=Camera+Image',
        cameraId: camera.id,
        timestamp: new Date().toISOString()
    });
    
    renderImagePreview();
    alert(`✅ ดึงรูปจาก ${camera.name} สำเร็จ`);
}

function renderImagePreview() {
    const preview = document.getElementById('dataImagePreview');
    preview.innerHTML = uploadedImages.map(img => `
        <div style="position: relative; display: inline-block; margin: 5px;">
            <img src="${img.url}" style="width: 120px; height: 120px; object-fit: cover; border-radius: 8px;">
            <div style="position: absolute; top: 5px; left: 5px; background: rgba(0,0,0,0.7); color: white; padding: 2px 8px; border-radius: 4px; font-size: 0.8rem;">
                ${img.source === 'camera' ? '🤖' : '📷'}
            </div>
            <button type="button" onclick="removeImage(${img.id})" style="position: absolute; top: 5px; right: 5px; background: #ff4444; color: white; border: none; border-radius: 50%; width: 24px; height: 24px; cursor: pointer; font-size: 0.8rem;">×</button>
            <div style="text-align: center; font-size: 0.75rem; color: #666; margin-top: 5px;">
                ${img.source === 'camera' ? 'กล้อง' : 'คน'}<br>
                ${new Date(img.timestamp).toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit' })}
            </div>
        </div>
    `).join('');
}

function removeImage(imageId) {
    uploadedImages = uploadedImages.filter(img => img.id !== imageId);
    renderImagePreview();
}

function submitDataEntry(event) {
    event.preventDefault();
    
    if (!selectedPlantForEntry) {
        alert('⚠️ กรุณาเลือกพืช');
        return;
    }
    
    if (uploadedImages.length === 0) {
        alert('⚠️ กรุณาเพิ่มรูปภาพอย่างน้อย 1 รูป');
        return;
    }
    
    // รวบรวมข้อมูล
    const plantData = {};
    const environmentData = {};
    
    selectedPlantForEntry.plant.dataFields.forEach(field => {
        const input = document.getElementById(`field_${field.id}`);
        if (input && input.value) {
            plantData[field.name] = field.name === 'สีใบ' ? input.value : parseFloat(input.value);
        }
    });
    
    const autoFields = getAutoFields(selectedPlantForEntry.crop);
    autoFields.forEach(field => {
        const input = document.getElementById(`iot_${field.key}`);
        if (input && input.value) {
            environmentData[field.key] = parseFloat(input.value);
        }
    });
    
    const record = {
        id: Date.now(),
        date: document.getElementById('dataDate').value,
        time: document.getElementById('dataTime').value,
        stage: document.getElementById('dataStage').value,
        plantData,
        environmentData,
        images: uploadedImages,
        notes: document.getElementById('dataNotes').value,
        recordedBy: document.getElementById('dataRecorder').value
    };
    
    // บันทึกลง localStorage
    const project = projects.find(p => p.id === selectedPlantForEntry.projectId);
    const crop = project.crops.find(c => c.id === selectedPlantForEntry.cropId);
    const plant = crop.plants.find(p => p.id === selectedPlantForEntry.plantId);
    
    if (!plant.records) plant.records = [];
    plant.records.push(record);
    plant.recordCount = plant.records.length;
    
    localStorage.setItem('farmlab_projects', JSON.stringify(projects));
    
    alert('✅ บันทึกข้อมูลสำเร็จ!');
    resetDataEntryForm();
}

function resetDataEntryForm() {
    selectedPlantForEntry = null;
    uploadedImages = [];
    renderDataEntryForm();
}

// Data entry form will be initialized by app.js
