// Data Entry functionality

// Render data entry form
function renderDataEntryForm() {
    const container = document.getElementById('data');
    container.innerHTML = `
        <div class="card">
            <h2>📝 บันทึกข้อมูลพืช (Plant Data)</h2>
            <p style="color: #666; margin-bottom: 20px;">
                <strong>วิธีใช้:</strong> เลือกโครงการ → เลือก Crop → กรอกข้อมูลตาม template → ถ่ายรูป → บันทึกเพิ่มเติม (ถ้ามี) → Save<br>
                <strong>ข้อดี:</strong> บันทึกเร็ว ไม่ต้องรอ OneDrive ช้า ๆ มีโครงสร้างชัดเจน รองรับรูปภาพหลายรูป (3-5 รูป) เตรียมข้อมูลสำหรับ AI
            </p>
            <form id="dataForm" onsubmit="submitDataEntry(event)">
                <div class="form-grid">
                    <div class="form-group">
                        <label>โครงการ</label>
                        <select id="dataProject" onchange="updateDataRounds()" required>
                            <option value="">เลือกโครงการ</option>
                            ${projects.map(p => `<option value="${p.id}">${p.name}</option>`).join('')}
                        </select>
                    </div>
                    <div class="form-group">
                        <label>รอบ</label>
                        <select id="dataRound" required>
                            <option value="">เลือกรอบ</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>วันที่บันทึก</label>
                        <input type="date" id="dataDate" required>
                    </div>
                    <div class="form-group">
                        <label>ระยะการเติบโต</label>
                        <select id="dataStage" required>
                            <option value="germination">เพาะเมล็ด</option>
                            <option value="seedling">ต้นกล้า</option>
                            <option value="vegetative">ระหว่างเติบโต</option>
                            <option value="mature">โตเต็มที่</option>
                            <option value="harvest">เก็บเกี่ยว</option>
                        </select>
                    </div>

                    <div class="form-group full-width" style="background: #f8f9fa; padding: 20px; border-radius: 8px;">
                        <h3 style="margin-bottom: 15px;">📊 ข้อมูลตาม Template</h3>
                        <div class="form-grid">
                            <div class="form-group">
                                <label>ความสูง (cm)</label>
                                <input type="number" step="0.1" id="dataHeight" placeholder="เช่น 15.5">
                            </div>
                            <div class="form-group">
                                <label>จำนวนใบ</label>
                                <input type="number" id="dataLeafCount" placeholder="เช่น 8">
                            </div>
                            <div class="form-group">
                                <label>ขนาดใบ (cm)</label>
                                <input type="number" step="0.1" id="dataLeafSize" placeholder="เช่น 5.2">
                            </div>
                            <div class="form-group">
                                <label>น้ำหนัก (g)</label>
                                <input type="number" step="0.1" id="dataWeight" placeholder="เช่น 185.5">
                            </div>
                        </div>
                    </div>

                    <div class="form-group full-width">
                        <label>รูปภาพ (2-5 รูป)</label>
                        <div class="image-upload" onclick="document.getElementById('dataImages').click()">
                            <input type="file" id="dataImages" accept="image/*" multiple onchange="previewDataImages(event)">
                            <p>📷 คลิกเพื่ออัพโหลดรูปภาพ</p>
                            <p style="font-size: 0.85rem; color: #999; margin-top: 10px;">สามารถอัพโหลดหลายรูปได้</p>
                        </div>
                        <div class="image-preview" id="dataImagePreview"></div>
                    </div>

                    <div class="form-group full-width">
                        <label>บันทึกเพิ่มเติม (ถ้าพบปัญหาพิเศษ)</label>
                        <textarea id="dataNotes" placeholder="เช่น พบใบเหลือง rack 3, ใบไหม้, หรือข้อสังเกตพิเศษอื่น ๆ"></textarea>
                    </div>
                </div>
                <div style="margin-top: 30px; display: flex; gap: 15px;">
                    <button type="submit" class="btn">💾 บันทึก</button>
                    <button type="reset" class="btn btn-secondary">🔄 ล้างข้อมูล</button>
                </div>
            </form>
        </div>
    `;
    
    // Set today's date
    const dataDate = document.getElementById('dataDate');
    if (dataDate) dataDate.valueAsDate = new Date();
}

function updateDataRounds() {
    const projectId = parseInt(document.getElementById('dataProject').value);
    const select = document.getElementById('dataRound');

    if (!projectId) {
        select.innerHTML = '<option value="">เลือกรอบ</option>';
        return;
    }

    const project = projects.find(p => p.id === projectId);
    if (project && project.rounds) {
        select.innerHTML = '<option value="">เลือกรอบ</option>' +
            project.rounds.map(r => `<option value="${r.id}">${r.name}</option>`).join('');
    }
}

function previewDataImages(event) {
    const preview = document.getElementById('dataImagePreview');
    preview.innerHTML = '';

    const files = event.target.files;
    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();

        reader.onload = function(e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            preview.appendChild(img);
        }

        reader.readAsDataURL(file);
    }
}

function submitDataEntry(event) {
    event.preventDefault();
    alert('✅ บันทึกข้อมูลสำเร็จ!\n\nข้อมูลถูกบันทึกเข้าระบบแล้ว พร้อมสำหรับการวิเคราะห์และใช้ในการพัฒนา AI');
    event.target.reset();
    document.getElementById('dataImagePreview').innerHTML = '';
}

// Data entry form will be initialized by app.js
