# FarmLab Prototype - โครงสร้างไฟล์ใหม่

## 📁 โครงสร้างโปรเจค

```
ideas/v3/prototype/
├── index.html              # หน้าหลัก (HTML structure)
├── css/
│   └── styles.css         # CSS ทั้งหมด
├── js/
│   ├── data.js            # ข้อมูล sample (greenhouses, projects)
│   ├── app.js             # ฟังก์ชันหลัก + navigation
│   ├── dashboard.js       # Dashboard tab (Phase 5)
│   ├── projects.js        # Projects tab
│   ├── data-entry.js      # Data Entry tab
│   └── greenhouses.js     # Greenhouses tab
└── README.md              # เอกสารนี้
```

## 🎯 การแยกไฟล์

### 1. **index.html**
- โครงสร้าง HTML หลัก
- Header และ Navigation
- Container สำหรับแต่ละ Tab
- โหลด CSS และ JavaScript ทั้งหมด

### 2. **css/styles.css**
- CSS ทั้งหมดรวมอยู่ในไฟล์เดียว
- Responsive design
- Component styles (buttons, cards, forms, etc.)

### 3. **js/data.js**
- ข้อมูล sample greenhouses
- ข้อมูล sample projects
- localStorage management

### 4. **js/app.js**
- ฟังก์ชัน `showTab()` สำหรับสลับ tab
- Initialization code
- Global navigation functions

### 5. **js/dashboard.js**
- Dashboard functionality (Phase 5)
- ยังไม่ได้พัฒนา

### 6. **js/projects.js**
- จัดการโครงการ (Projects Management)
- สร้างโครงการใหม่
- ดูรายละเอียดโครงการ, รอบ, พืช
- เชื่อมต่อกับ IoT devices

### 7. **js/data-entry.js**
- บันทึกข้อมูลการเติบโตของพืช
- อัพโหลดรูปภาพ
- Template-based data entry

### 8. **js/greenhouses.js**
- จัดการโรงเรือน (Greenhouses Management)
- จัดการอุปกรณ์ (Controllers, Cameras)
- Zone และ Layer management

## 🚀 วิธีใช้งาน

1. เปิดไฟล์ `index.html` ในเบราว์เซอร์
2. ระบบจะโหลด CSS และ JavaScript ทั้งหมดอัตโนมัติ
3. ข้อมูล sample จะถูกโหลดจาก localStorage (หรือสร้างใหม่ถ้ายังไม่มี)

## ✨ ข้อดีของโครงสร้างใหม่

1. **แยกไฟล์ชัดเจน** - แต่ละเมนูอยู่ในไฟล์ของตัวเอง
2. **ง่ายต่อการแก้ไข** - แก้ไขเฉพาะส่วนที่ต้องการ
3. **ง่ายต่อการ debug** - หาปัญหาได้เร็วขึ้น
4. **Maintainable** - เพิ่มฟีเจอร์ใหม่ได้ง่าย
5. **Scalable** - ขยายระบบได้ในอนาคต

## 📝 หมายเหตุ

- ไฟล์เดิม `farmlab.html` ยังคงอยู่ (ไม่ได้ลบ)
- โครงสร้างใหม่นี้ใช้งานได้เหมือนเดิมทุกประการ
- ข้อมูลถูกเก็บใน localStorage เหมือนเดิม

## 🔄 การอัพเดทในอนาคต

- เพิ่ม Dashboard (Phase 5)
- เพิ่มฟีเจอร์ดูรายละเอียด Crop
- เพิ่มฟีเจอร์ Device Dashboard
- เพิ่มกราฟและ Analytics
