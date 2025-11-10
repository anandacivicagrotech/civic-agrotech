# 📋 FarmLab Prototype - แผนการพัฒนา (ต่อจาก Phase 1)

**อัพเดท:** 10 พฤศจิกายน 2025

---

## ✅ Phase 1: เปลี่ยนคำศัพท์ (เสร็จแล้ว)

- [x] "รอบ" → "Crop"
- [x] "รอบที่ 1, 2, 3" → "Crop 1, 2, 3"
- [x] อัพเดท JavaScript variables: `rounds` → `crops`
- [x] อัพเดท HTML elements และ functions

---

## ✅ Phase 0: Layout & Navigation (เสร็จแล้ว)

### เป้าหมาย
วาง layout เมนูหลักและโครงสร้าง navigation ให้พร้อมก่อนเพิ่มฟีเจอร์

### 0.1 โครงสร้างเมนูหลัก (Final)
```
┌─────────────────────────────────────────┐
│ 🌱 FarmLab                    [Profile] │
├─────────────────────────────────────────┤
│ [📊 Dashboard] [📁 Projects] [📝 Data]  │
│ [📷 Gallery] [🏠 Greenhouses] [⚙️ Settings] │
└─────────────────────────────────────────┘
```

### 0.2 ปรับ HTML Structure
- [ ] เปลี่ยนจาก 3 tabs → 6 tabs
- [ ] เพิ่ม tab buttons:
  - 📊 Dashboard (มีอยู่แล้ว)
  - 📁 Projects (มีอยู่แล้ว)
  - 📝 Data Entry (มีอยู่แล้ว)
  - 📷 Gallery (ใหม่)
  - 🏠 Greenhouses (ใหม่)
  - ⚙️ Settings (มีอยู่แล้ว)

### 0.3 สร้าง Tab Content Containers (เปล่า)
```html
<!-- Dashboard - มีอยู่แล้ว -->
<div id="dashboard" class="tab-content">
    <!-- จะปรับใน Phase 5 -->
</div>

<!-- Projects - มีอยู่แล้ว -->
<div id="projects" class="tab-content">
    <!-- จะปรับใน Phase 6 -->
</div>

<!-- Data Entry - มีอยู่แล้ว -->
<div id="data" class="tab-content">
    <!-- จะปรับใน Phase 3 -->
</div>

<!-- Gallery - ใหม่ -->
<div id="gallery" class="tab-content" style="display:none;">
    <div class="card">
        <h2>📷 Gallery</h2>
        <p>กำลังพัฒนา...</p>
    </div>
</div>

<!-- Greenhouses - ใหม่ -->
<div id="greenhouses" class="tab-content" style="display:none;">
    <div class="card">
        <h2>🏠 Greenhouses</h2>
        <p>กำลังพัฒนา...</p>
    </div>
</div>

<!-- Settings - มีอยู่แล้ว -->
<div id="settings" class="tab-content">
    <!-- มีอยู่แล้ว -->
</div>
```

### 0.4 ปรับ CSS สำหรับ 6 tabs
- [ ] ปรับ `.tab-nav` ให้รองรับ 6 ปุ่ม
- [ ] ปรับขนาดปุ่มให้พอดี
- [ ] เพิ่ม responsive สำหรับหน้าจอเล็ก (2 แถว)

```css
.tab-nav {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 20px;
}

.tab-btn {
    flex: 1 1 calc(33.333% - 10px);
    min-width: 150px;
    padding: 12px 20px;
    font-size: 16px;
}

/* Responsive */
@media (max-width: 768px) {
    .tab-btn {
        flex: 1 1 calc(50% - 10px);
    }
}
```

### 0.5 อัพเดท JavaScript Navigation
- [ ] อัพเดท `showTab()` function ให้รองรับ tab ใหม่
- [ ] เพิ่ม case สำหรับ 'gallery' และ 'greenhouses'

```javascript
function showTab(tabName) {
    // ซ่อนทุก tab
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.style.display = 'none';
    });

    // แสดง tab ที่เลือก
    document.getElementById(tabName).style.display = 'block';

    // อัพเดท active state
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');

    // โหลดข้อมูลเฉพาะ tab
    if (tabName === 'dashboard') {
        loadDashboard();
    } else if (tabName === 'projects') {
        loadProjects();
    } else if (tabName === 'data') {
        loadDataForm();
    } else if (tabName === 'gallery') {
        loadGallery(); // Phase 4
    } else if (tabName === 'greenhouses') {
        loadGreenhouses(); // Phase 2
    } else if (tabName === 'settings') {
        loadSettings();
    }
}
```

### 0.6 สร้าง Placeholder Functions
- [ ] `loadGallery()` - placeholder
- [ ] `loadGreenhouses()` - placeholder

```javascript
function loadGallery() {
    console.log('Gallery - กำลังพัฒนาใน Phase 4');
}

function loadGreenhouses() {
    console.log('Greenhouses - กำลังพัฒนาใน Phase 2');
}
```

### 0.7 ทดสอบ Navigation
- [ ] คลิกแต่ละ tab แล้วเปลี่ยนหน้าได้
- [ ] Active state ทำงานถูกต้อง
- [ ] Responsive ทำงานบนหน้าจอเล็ก
- [ ] Tab เดิมยังทำงานปกติ

### 0.8 เพิ่ม Header/Profile Section (Optional)
- [ ] แสดงชื่อผู้ใช้
- [ ] ปุ่ม Logout
- [ ] แสดงโลโก้ FarmLab

```html
<div class="header">
    <div class="logo">
        <h1>🌱 FarmLab</h1>
    </div>
    <div class="user-menu">
        <span>สวัสดี, ดร.สมชาย</span>
        <button class="btn-secondary">Logout</button>
    </div>
</div>
```

### 0.9 Checklist Phase 0
- [x] เพิ่ม tab buttons ทั้ง 6 ปุ่ม
- [x] สร้าง tab content containers (เปล่า)
- [x] ปรับ CSS สำหรับ 6 tabs + responsive
- [x] อัพเดท `showTab()` function
- [x] สร้าง placeholder functions
- [x] ทดสอบ navigation ทั้งหมด
- [x] เพิ่ม header/profile section

---

## ✅ Phase 2A: Greenhouses - โรงเรือน (เสร็จแล้ว)

### เป้าหมาย
สร้างระบบจัดการโรงเรือน (Zones, Layers) ก่อนเพิ่มอุปกรณ์

### 2A.1 โครงสร้างเมนู Greenhouses
```
🏠 Greenhouses
├─ 🏠 โรงเรือน ✅
│   ├─ รายการโรงเรือน
│   ├─ สร้างโรงเรือนใหม่
│   └─ รายละเอียดโรงเรือน
│
└─ 🎛️ อุปกรณ์ ✅
    ├─ Smart Grow Controllers (Gen3)
    └─ Cameras
```

### 2A.2 Data Structure (แบบง่าย - Final)
```javascript
let greenhouses = [
    {
        id: 1,
        name: "No.1",
        size: "100",
        zones: ["A", "B", "C"],
        layers: ["1", "2", "3", "4", "5"],
        controllers: [
            {
                id: "GEN3-001",
                name: "Smart Grow Controller Gen3 #1",
                zone: null, // null = รวมทั้งโรงเรือน, "Zone A" = เฉพาะ Zone A
                status: "online",
                sensors: ["temperature", "humidity", "vpd", "co2"],
                data: {
                    temperature: 25,
                    humidity: 65,
                    vpd: 1.2,
                    co2: 850
                }
            }
        ],
        cameras: [
            {
                id: "CAM-001",
                name: "Camera 1",
                zone: "Zone A",
                layers: ["1", "2", "3"],
                status: "online",
                lastCapture: "2025-11-10T10:00:00"
            }
        ],
        projects: ["ทดสอบสูตรปุ๋ย A"]
    }
];
```

### 2A.3 ฟีเจอร์ที่ทำเสร็จ
- [x] แสดงรายการโรงเรือน (Grid Cards)
- [x] สร้างโรงเรือนใหม่ (ชื่อ, ขนาด, Zones, Layers)
- [x] แก้ไขโรงเรือน
- [x] ลบโรงเรือน
- [x] ดูรายละเอียดโรงเรือน
- [x] เพิ่มอุปกรณ์ในโรงเรือน (ตอนสร้าง/แก้ไข/ดูรายละเอียด)

---

## ✅ Phase 2B: Devices - อุปกรณ์ (เสร็จแล้ว)

### เป้าหมาย
เพิ่มระบบจัดการอุปกรณ์ (Controllers + Cameras)

### 2B.1 ฟีเจอร์ที่ทำเสร็จ
- [x] แสดงรายการอุปกรณ์ทั้งหมดในตาราง
- [x] เพิ่ม Controller (เลือกโรงเรือน, Zone, Sensors)
- [x] เพิ่ม Camera (เลือกโรงเรือน, Zone, Layers)
- [x] แก้ไขอุปกรณ์ (ชื่อ, Zone, Sensors/Layers)
- [x] ลบอุปกรณ์
- [x] แสดงสถานะ (Online/Offline)

### 2B.2 Controller - แบบง่าย
- เลือกโรงเรือน
- เลือก Zone (ถ้าไม่เลือก = วัดโดยรวมทั้งโรงเรือน)
- เลือก Sensors (temperature, humidity, vpd, co2, ppfd)
- Device ส่งข้อมูลมาตรงไปตรงมา (ไม่ซับซ้อน)

### 2B.3 Camera
- เลือกโรงเรือน
- เลือก Zone (required)
- เลือก Layers ที่ครอบคลุม

---

## 🔄 Phase 3: Projects (เชื่อมกับ Greenhouses) - กำลังทำ

### เป้าหมาย
ปรับการสร้างโครงการให้เชื่อมกับโรงเรือนและอุปกรณ์

### 3.1 ฟอร์มสร้างโครงการ (ปรับใหม่)
- [x] เพิ่ม Dropdown เลือกโรงเรือน
- [x] เมื่อเลือกโรงเรือน → แสดง Zones
- [x] เมื่อเลือก Zone → แสดง Layers (checkbox)
- [x] แสดงข้อมูล Controllers และกล้องที่จะเชื่อมต่ออัตโนมัติ

### 3.2 แสดงการเชื่อมต่อ IoT
- [x] แสดงข้อความ "✅ จะเชื่อมต่อ:"
- [x] แสดง Controller ที่จะเชื่อมต่อ
- [x] แสดงกล้องที่จะเชื่อมต่อ
- [x] เลือกว่าจะใช้ข้อมูล Environment แบบไหน:
  - ( ) ค่ารวมทั้งห้อง (room)
  - ( ) ค่าแยกตาม Layer (layers)

### 3.3 ต้องทำต่อ (พรุ่งนี้)
- [ ] **แสดงเซนเซอร์ทั้งหมดในตาราง:**
  ```
  TEMPERATURE (°C) (รวม)      ← จาก Controller ที่ zone = null
  TEMPERATURE (°C) (Zone A)   ← จาก Controller ที่ zone = "Zone A"
  HUMIDITY (%) (รวม)
  HUMIDITY (%) (Zone A)
  VPD (kPa) (รวม)
  VPD (kPa) (Zone A)
  CO2 (ppm) (รวม)
  ```
- [ ] ให้เลือก Checkbox ว่าจะใช้เซนเซอร์ไหนบ้าง
- [ ] บันทึกการเลือกไว้ใน Project config
- [ ] แสดงในหน้า Data Entry

---

## 📝 Phase 4: Data Entry (Hybrid Mode) - ยังไม่ได้ทำ

### เป้าหมาย
ปรับฟอร์มบันทึกข้อมูลให้รองรับการดึงข้อมูลจาก Controller

### 4.1 แสดงเซนเซอร์จาก Project Config
- [ ] ดึงเซนเซอร์ที่เลือกไว้ใน Project
- [ ] แสดงทั้งค่ารวม และค่าแยก Zone (ถ้ามี)
- [ ] ตัวอย่าง:
  ```
  TEMPERATURE (°C) (รวม): [____] (auto-fill จาก Controller)
  TEMPERATURE (°C) (Zone A): [____] (auto-fill จาก Controller)
  HUMIDITY (%) (รวม): [____]
  HUMIDITY (%) (Zone A): [____]
  ```

### 4.2 โหมดการบันทึก
- [ ] **Auto Mode**: ดึงค่าจาก Controller อัตโนมัติ
- [ ] **Manual Mode**: กรอกค่าเองได้ (ถ้า Controller offline)
- [ ] แสดงสถานะ Controller (Online/Offline)
- [ ] ปุ่ม "🔄 รีเฟรชค่า"

### 4.3 ดึงรูปจากกล้อง
- [ ] ปุ่ม "🤖 ดึงจากกล้องอัตโนมัติ"
- [ ] ปุ่ม "📷 ถ่ายรูปเอง"
- [ ] แสดง badge บนรูป (คน/กล้อง)

### 4.4 Data Structure
```javascript
record = {
    projectId: 1,
    date: "2025-11-10",
    environmentData: {
        "temperature_room": 25,      // จาก Controller zone = null
        "temperature_zoneA": 24.5,   // จาก Controller zone = "Zone A"
        "humidity_room": 65,
        "humidity_zoneA": 68
    },
    plantData: {
        height: 15.5,
        leafCount: 8,
        weight: 185.5
    },
    images: [...],
    notes: "..."
}
```

---

## � Phhase 5: Dashboard

### เป้าหมาย
ปรับ Dashboard ให้แสดงข้อมูลครบถ้วน

### 5.1 สรุปโครงการทั้งหมด
- [ ] จำนวนโครงการทั้งหมด
- [ ] Crops ที่กำลังดำเนินการ
- [ ] จำนวนโรงเรือน
- [ ] บันทึกวันนี้

### 5.2 Crops ที่กำลังดำเนินการ
- [ ] แสดงรายการ Crops ที่ status = "active"
- [ ] แสดงวันที่ปลูก / วันที่เหลือ
- [ ] แสดงบันทึกล่าสุด
- [ ] ปุ่มเข้าดูรายละเอียด

### 5.3 IoT Status
- [ ] แสดงสถานะ Controllers แต่ละโรงเรือน
- [ ] แสดงสถานะกล้องแต่ละโรงเรือน
- [ ] สีแสดงสถานะ: 🟢 Online / 🔴 Offline

---

## 📷 Phase 6: Gallery

### เป้าหมาย
แยกเมนู Gallery ออกมาเป็นหน้าเดียว

### 4.1 เพิ่มเมนู Gallery
- [ ] เพิ่มปุ่ม "📷 Gallery" ใน tab navigation
- [ ] สร้าง `<div id="gallery" class="tab-content">`

### 4.2 Filter Section
- [ ] Dropdown เลือกโครงการ
- [ ] Dropdown เลือก Crop
- [ ] Dropdown เลือกวันที่
- [ ] Dropdown เลือกแหล่งที่มา (คน/กล้อง/ทั้งหมด)
- [ ] ปุ่ม "กรอง"

### 4.3 Gallery Grid
- [ ] แสดงรูปภาพแบบ grid
- [ ] แต่ละรูปแสดง:
  - รูปภาพ
  - โครงการ
  - Crop + Layer
  - วันที่ + เวลา
  - Badge (คน/กล้อง)

### 4.4 Modal รูปภาพ
- [ ] คลิกรูปเพื่อดูขนาดใหญ่
- [ ] แสดงข้อมูลที่บันทึกพร้อมกัน
- [ ] ปุ่ม ⬅️ ก่อนหน้า / ➡️ ถัดไป
- [ ] ปุ่ม Download

---



---

## 🎯 ลำดับการทำ (ตามลำดับการใช้งานจริง)

0. **Phase 0** - Layout & Navigation ✅ เสร็จแล้ว

### 1️⃣ Setup ครั้งแรก
1. **Phase 2A** - Greenhouses (โรงเรือน) ← ต่อไป
2. **Phase 2B** - Devices (อุปกรณ์: Controllers + Cameras)

### 2️⃣ สร้างโครงการ
3. **Phase 3** - Projects (เชื่อมกับ Greenhouses)

### 3️⃣ บันทึกข้อมูล
4. **Phase 4** - Data Entry Hybrid (คน + IoT + กล้อง)

### 4️⃣ ดูข้อมูล
5. **Phase 5** - Dashboard (ภาพรวม)
6. **Phase 6** - Gallery (รูปภาพ)

## 🔄 ลำดับการใช้งานจริง

### 1️⃣ Setup ครั้งแรก
```
🏠 Greenhouses → โรงเรือน
├─ สร้าง "โรงเรือน 1"
├─ กำหนด Zones (A, B, C)
└─ กำหนด Layers (1-5)

↓

🏠 Greenhouses → อุปกรณ์ → Controllers
├─ เพิ่ม Smart Grow Controller Gen3-001
├─ เลือกโรงเรือน: โรงเรือน 1
├─ เลือก Zone: A
└─ เปิดเซนเซอร์ (pH, EC, Temp, Humidity)

↓

🏠 Greenhouses → อุปกรณ์ → Cameras
├─ เพิ่ม Camera CAM-001
├─ เลือกโรงเรือน: โรงเรือน 1
├─ เลือก Zone: A
└─ เลือก Layers: 1-3
```

### 2️⃣ สร้างโครงการวิจัย
```
📁 Projects → สร้างโครงการ
├─ ชื่อ: "ทดสอบสูตรปุ๋ย A"
├─ เลือกโรงเรือน: โรงเรือน 1
├─ เลือก Zone: A
├─ เลือก Layers: 1-3
└─ ระบบเชื่อม Controller + Camera อัตโนมัติ ✅
```

### 3️⃣ บันทึกข้อมูลประจำวัน
```
📝 Data Entry → บันทึกข้อมูล Hybrid
├─ ระบบดึงค่า Controller อัตโนมัติ
├─ กรอกข้อมูลที่คนบันทึก
└─ ดึงรูปจากกล้อง + ถ่ายเพิ่ม
```

### 4️⃣ ดูข้อมูลและวิเคราะห์
```
📊 Dashboard → ดูภาพรวม
📁 Projects → ดูรายละเอียด + เปรียบเทียบ
📷 Gallery → ดูรูปภาพทั้งหมด
```

---

## 📝 หมายเหตุ

- แต่ละ Phase ควรทำให้เสร็จและทดสอบก่อนไป Phase ถัดไป
- ใช้ localStorage เก็บข้อมูล (ยังไม่ต้องต่อ Backend)
- ทำ UI ให้ responsive (รองรับ iPad)
- เพิ่ม sample data สำหรับทดสอบ

---

**Last Updated:** 10 พฤศจิกายน 2025


---

## 📝 สรุปความคืบหน้า (10 พฤศจิกายน 2025)

### ✅ เสร็จแล้ว
- **Phase 0**: Layout & Navigation ✅
- **Phase 1**: เปลี่ยนคำศัพท์ "รอบ" → "Crop" ✅
- **Phase 2A**: Greenhouses Management ✅
  - สร้าง/แก้ไข/ลบโรงเรือน
  - กำหนด Zones และ Layers
  - เพิ่มอุปกรณ์ในโรงเรือน
- **Phase 2B**: Devices Management ✅
  - เพิ่ม/แก้ไข/ลบ Controller
  - เพิ่ม/แก้ไข/ลบ Camera
  - แสดงรายการอุปกรณ์ทั้งหมด
- **Phase 3**: Projects (บางส่วน) 🔄
  - เชื่อมกับ Greenhouses ✅
  - แสดง IoT Connections ✅
  - เลือก Data Source (room/layers) ✅

### 🔄 กำลังทำ
- **Phase 3**: Projects (ต่อ)
  - แสดงเซนเซอร์ทั้งหมดในตาราง
  - ให้เลือก Checkbox เซนเซอร์ที่ต้องการ

### 📋 ยังไม่ได้ทำ
- **Phase 4**: Data Entry (Hybrid Mode)
- **Phase 5**: Dashboard
- **Phase 6**: Gallery

---

## 🎯 Data Structure (Final)

### Controller
```javascript
{
  id: "GEN3-001",
  name: "Smart Grow Controller Gen3 #1",
  zone: null, // null = รวมทั้งโรงเรือน, "Zone A" = เฉพาะ Zone A
  status: "online",
  sensors: ["temperature", "humidity", "vpd", "co2"],
  data: {
    temperature: 25,
    humidity: 65,
    vpd: 1.2,
    co2: 850
  }
}
```

### Camera
```javascript
{
  id: "CAM-001",
  name: "Camera 1",
  zone: "Zone A",
  layers: ["1", "2", "3"],
  status: "online",
  lastCapture: "2025-11-10T10:00:00"
}
```

### Project
```javascript
{
  id: 1,
  name: "ทดสอบสูตรปุ๋ย A",
  greenhouse: {
    id: 1,
    name: "No.1",
    zone: "A",
    layers: ["1", "2", "3"]
  },
  iot: {
    controllers: [
      { id: "GEN3-001", name: "..." },
      { id: "GEN3-002", name: "..." }
    ],
    cameras: [
      { id: "CAM-001", name: "..." }
    ],
    useEnvironmentData: true,
    dataSource: "room" // "room" หรือ "layers"
  },
  dataFields: ["ความสูง (cm)", "จำนวนใบ (ใบ)", "น้ำหนัก (g)"],
  selectedSensors: [
    "temperature_room",
    "temperature_zoneA",
    "humidity_room",
    "humidity_zoneA"
  ]
}
```

---

**Last Updated:** 10 พฤศจิกายน 2025 (23:30)
