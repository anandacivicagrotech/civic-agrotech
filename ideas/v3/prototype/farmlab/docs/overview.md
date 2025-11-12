# 📋 FarmLab Prototype - ภาพรวม

## 🎯 เป้าหมายโครงการ
FarmLab เป็นแพลตฟอร์มบันทึกและจัดการข้อมูลการทดลองฟาร์ม สำหรับนักวิจัย/เกษตรกร ในการติดตามข้อมูลพืช โรงเรือน และโครงการวิจัย

## 🏗️ โครงสร้างระบบ

### 4 ส่วนหลัก
```
┌─────────────────────────────────────────┐
│ 🌱 FarmLab          👤 ดร.สมชาย        │
├─────────────────────────────────────────┤
│ [📊 Dashboard] [📁 Projects]            │
│ [📝 Data Entry] [🏠 Greenhouses]        │
└─────────────────────────────────────────┘
```

1. **📊 Dashboard** - ภาพรวมสถิติและกราฟ (Phase 5)
2. **📁 Projects** - จัดการโครงการ → Crops → Plants (Phase 3) ✅
3. **📝 Data Entry** - บันทึกข้อมูลพืช (Phase 4) ✅
4. **🏠 Greenhouses** - จัดการโรงเรือน → Zones → Layers (Phase 2) ✅

## 📊 ลำดับการพัฒนา

| Phase | หัวข้อ | สถานะ | วันที่ |
|-------|--------|-------|--------|
| 0 | Layout & Navigation | ✅ เสร็จ | 11 พ.ย. 2025 |
| 1 | เปลี่ยนคำศัพท์ (รอบ → Crop) | ✅ เสร็จ | 11 พ.ย. 2025 |
| 2 | Greenhouses (Zones, Layers, Devices) | ✅ เสร็จ | 11 พ.ย. 2025 |
| 3 | Projects (Project → Crops → Plants) | ✅ เสร็จ | 11 พ.ย. 2025 |
| 4 | Data Entry (บันทึกข้อมูล) | ✅ เสร็จ | 12 พ.ย. 2025 |
| 5 | Dashboard | 📋 รอทำ | - |
| 6 | Gallery | 📋 รอทำ | - |

## 🗂️ โครงสร้างข้อมูล

### Greenhouse (โรงเรือน)
```
Greenhouse
├── Zone (โซนปลูก)
│   └── Layer (ชั้นปลูก)
└── Devices (อุปกรณ์)
```

### Project (โครงการ)
```
Project
└── Crop (รอบปลูก)
    └── Plant (ต้นพืช)
        └── Records (ข้อมูลบันทึก)
```

## 📁 ไฟล์สำคัญ

### HTML/CSS
- `index.html` - หน้าหลัก
- `css/styles.css` - สไตล์ทั้งหมด

### JavaScript Modules
- `js/app.js` - หลัก (navigation, tabs)
- `js/data.js` - จัดเก็บข้อมูล
- `js/dashboard.js` - Dashboard (Phase 5)
- `js/projects.js` - Projects
- `js/data-entry.js` - Data Entry
- `js/greenhouses.js` - Greenhouses

### ข้อมูล
- `sample-records.json` - ข้อมูลตัวอย่าง

## 🔄 การใช้งานจริง (User Flow)

1. **สร้างโรงเรือน** (Greenhouses) → เพิ่ม Zones → เพิ่ม Layers
2. **สร้างโครงการ** (Projects) → ระบุโรงเรือน/Zone/Layer
3. **สร้าง Crop** → เลือกพืช → เพิ่มต้นพืช (Plants)
4. **บันทึกข้อมูล** (Data Entry) → เลือก Plant → บันทึกการเจริญเติบโต
5. **ดูภาพรวม** (Dashboard) → สถิติ, กราฟ

## 🎓 คำศัพท์สำคัญ

- **Project** = โครงการวิจัย/ทดลอง
- **Crop** = รอบการปลูก (เปลี่ยนจาก "รอบ")
- **Plant** = ต้นพืชแต่ละต้น
- **Record** = ข้อมูลการบันทึก (ความสูง, ใบ, ฯลฯ)
- **Greenhouse** = โรงเรือน
- **Zone** = โซนปลูกในโรงเรือน
- **Layer** = ชั้นปลูก (เช่น ชั้น 1, 2, 3)

## 📚 เอกสารเพิ่มเติม

ดูรายละเอียดแต่ละ Phase ได้ที่:
- [Phase 0: Foundation](phase-0-foundation.md)
- [Phase 1: Terminology](phase-1-terminology.md)
- [Phase 2: Greenhouses](phase-2-greenhouses.md)
- [Phase 3: Projects](phase-3-projects.md)
- [Phase 4: Data Entry](phase-4-data-entry.md)
- [Phase 5: Dashboard](phase-5-dashboard.md)
- [Phase 6: Gallery](phase-6-gallery.md)
