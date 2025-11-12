# 📋 FarmLab Prototype - แผนการพัฒนา

**อัพเดท:** 12 พฤศจิกายน 2025

> ⚠️ **หมายเหตุ:** ไฟล์นี้ถูกย่อให้สั้นลงเพื่อประหยัด token
> รายละเอียดทั้งหมดอยู่ในโฟลเดอร์ [docs/](docs/)

## 📚 เอกสารทั้งหมด

อ่านเพิ่มเติมได้ที่:
- [docs/README.md](docs/README.md) - สารบัญเอกสาร
- [docs/overview.md](docs/overview.md) - ภาพรวมโครงการ
- [docs/architecture.md](docs/architecture.md) - โครงสร้างและ data flow

## 🎯 สถานะปัจจุบัน

### ✅ เสร็จแล้ว (11-12 พ.ย. 2025)
- ✅ Phase 0: Layout & Navigation
- ✅ Phase 1: Terminology (รอบ → Crop)
- ✅ Phase 2: Greenhouses (Zones, Layers, Devices)
- ✅ Phase 3: Projects (Project → Crops → Plants)
- ✅ Phase 4: Data Entry (บันทึกข้อมูลพืช)

### 🔄 กำลังทำ
- 🔄 ปรับปรุงโครงสร้างโค้ดเป็น modules

### 📋 รอทำ
- ⏳ Phase 5: Dashboard (สถิติและกราฟ)
- ⏳ Phase 6: Gallery (แกลเลอรี่รูปภาพ)

## 🗂️ โครงสร้างข้อมูล

### Greenhouse → Zone → Layer
```
โรงเรือน (Greenhouse)
  └── โซน (Zone)
      └── ชั้น (Layer)
          └── อุปกรณ์ (Devices)
```

### Project → Crop → Plant → Records
```
โครงการ (Project)
  └── รอบปลูก (Crop)
      └── ต้นพืช (Plant)
          └── บันทึก (Records)
```

## 📁 ไฟล์สำคัญ

```
farmlab/
├── index.html
├── css/styles.css
├── js/
│   ├── app.js              # Navigation
│   ├── data.js             # Data store
│   ├── dashboard.js
│   ├── projects.js
│   ├── data-entry.js
│   └── greenhouses.js
├── docs/                   # 📚 เอกสารทั้งหมด
│   ├── README.md
│   ├── overview.md
│   ├── architecture.md
│   └── phase-*.md
└── sample-records.json
```

## 🚀 Quick Start

1. เปิดไฟล์ [index.html](index.html)
2. ดูเอกสารเพิ่มเติมที่ [docs/](docs/)
3. ดูประวัติการเปลี่ยนแปลง → [CHANGELOG.md](CHANGELOG.md)

## 📞 ช่วยเหลือ

มีคำถาม? ดูที่:
- [README.md](README.md) - คู่มือหลัก
- [docs/overview.md](docs/overview.md) - ภาพรวม
- [docs/architecture.md](docs/architecture.md) - สถาปัตยกรรม
- [CHANGELOG.md](CHANGELOG.md) - ประวัติการเปลี่ยนแปลง
