# 📝 Changelog - FarmLab Prototype

## [Refactored] - 2025-11-12

### 🎯 เป้าหมาย
ปรับปรุงโครงสร้างโค้ดเพื่อประหยัด token และง่ายต่อการบำรุงรักษา

### ✨ Added
- **Utils Modules** - ฟังก์ชันช่วยเหลือที่ใช้ร่วมกัน
  - `js/utils/helpers.js` - generateId, formatNumber, isEmpty
  - `js/utils/date.js` - formatDate, getTodayString
  - `js/utils/storage.js` - localStorage wrapper

- **Projects Module Structure**
  - `js/projects/state.js` - State management
  - `js/projects/navigation.js` - Navigation logic
  - `js/projects/index.js` - Entry point

- **Documentation**
  - `docs/README.md` - Documentation index
  - `docs/overview.md` - Project overview
  - `docs/architecture.md` - System architecture
  - `README.md` - Main readme with project structure
  - `PLAN.md` - Short development plan

### 🔧 Changed
- **PLAN.md** - ย่อจาก 1,693 บรรทัด (28k tokens) → 50 บรรทัด (~1k tokens)
- **index.html** - เพิ่มการโหลด modules ใหม่ตามลำดับ
- **js/data.js** - เพิ่มการโหลด/บันทึก projects ลง localStorage
- **js/projects.js** - ใช้ property getters/setters เพื่อ backward compatibility
- **js/app.js** - เพิ่มการตรวจสอบฟังก์ชันก่อนเรียก

### 🐛 Fixed
- แก้ไข duplicate variable declarations (currentProjectId, previousPage, fieldIdCounter)
- แก้ไข "showProjectsList is not defined" error
- แก้ไขปัญหาโปรเจคไม่แสดงเพราะ localStorage ไม่ได้โหลด/บันทึก
- แก้ไขปัญหา script loading order

### 🗑️ Removed
- `PLAN-old.md` - ย้ายข้อมูลไปยัง docs/ แล้ว
- `BUGFIX-SUMMARY.md` - ไฟล์ชั่วคระว (ใช้ CHANGELOG แทน)
- `REFACTOR-SUMMARY.md` - ไฟล์ชั่วคราว (ใช้ CHANGELOG แทน)
- `DEBUG.md` - ไฟล์ชั่วคราว
- `TEST-MODULES.md` - ไฟล์ชั่วคราว
- `test-debug.html` - ไฟล์ทดสอบ

### 📊 Performance
- **Token Usage**: ลดลง ~27,000 tokens จาก PLAN.md
- **File Organization**: แยกไฟล์ใหญ่เป็น modules ย่อย
- **Load Time**: ไม่เปลี่ยนแปลง (ยังโหลดเร็วเหมือนเดิม)

### 🎨 Architecture
```
farmlab/
├── index.html
├── README.md
├── PLAN.md
├── CHANGELOG.md (new)
├── css/
│   └── styles.css
├── js/
│   ├── utils/          (new)
│   ├── projects/       (new)
│   ├── data-entry/     (new)
│   ├── greenhouses/    (new)
│   └── [old files]
├── docs/               (new)
│   ├── README.md
│   ├── overview.md
│   └── architecture.md
└── sample-records.json
```

### ✅ Testing
- ✅ ทุก tabs ทำงานได้ (Dashboard, Projects, Data Entry, Greenhouses)
- ✅ ไม่มี console errors
- ✅ localStorage ทำงานถูกต้อง
- ✅ Navigation ทำงานปกติ
- ✅ Backward compatible กับโค้ดเดิม

### 🚀 Next Steps (Optional)
- [ ] แยก `projects.js` เป็น list.js, forms.js, details.js
- [ ] แยก `greenhouses.js` เป็น ui.js, forms.js
- [ ] แยก `data-entry.js` เป็น ui.js, forms.js
- [ ] แยก `data.js` เป็น sample-data.js, validation.js
- [ ] Phase 5: Dashboard implementation
- [ ] Phase 6: Gallery implementation

---

## [Initial] - 2025-11-11

### ✨ Initial Release
- Phase 0: Layout & Navigation
- Phase 1: Terminology (รอบ → Crop)
- Phase 2: Greenhouses (Zones, Layers, Devices)
- Phase 3: Projects (Project → Crops → Plants)
- Phase 4: Data Entry (บันทึกข้อมูลพืช)

---

**Contributors:** Claude Code + Ananda
**Date:** 12 พฤศจิกายน 2025
