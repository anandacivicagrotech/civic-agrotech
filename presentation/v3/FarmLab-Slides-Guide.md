# 🌱 FarmLab - Presentation Slides Guide

> คู่มือสำหรับสร้าง Presentation Slides ของ FarmLab  
> ใช้ Template v2 เป็นพื้นฐาน

---

## 📋 ข้อมูลพื้นฐาน FarmLab

**ชื่อโครงการ:** FarmLab - Digital Logbook & Data Management System  
**ประเภท:** Web-based Application  
**เป้าหมาย:** ระบบจัดการข้อมูลการทดลองพืชใน PFAL แบบครบวงจร

**ที่มาของ FarmLab:**
> FarmLab เป็นการรวม 2 ไอเดียจาก Ideas v1 เข้าด้วยกัน:
> 1. **Digital Logbook / Batch Tracker** - บันทึกข้อมูลพืชแต่ละรอบ
> 2. **Integrated Research System** - เชื่อมโยงข้อมูลวิจัย + IoT devices
> 
> **และเป็น Foundation สำหรับต่อยอดไป Plant Health Monitoring (AI-based) ในอนาคต**

**ฟีเจอร์หลัก:**
1. 🏢 **Greenhouse Management** - จัดการโรงเรือน, Zone, Layer, IoT devices
2. 📊 **Project Management** - สร้างโครงการทดลอง, รอบปลูก (Crop), พืช
3. 📝 **Data Entry** - บันทึกข้อมูลการเติบโต, อัพโหลดรูปภาพ
4. 📈 **Dashboard** - แสดงผลข้อมูลแบบ real-time (Phase 5)

---

## 🎯 โครงสร้าง Slides (9 สไลด์)

### 🟩 **Slide 1: Cover Slide**
**หัวข้อ:** FarmLab - Digital Logbook for PFAL Research

**เนื้อหา:**
```
🌱 FarmLab
Digital Logbook & Data Management System

ระบบจัดการข้อมูลการทดลองพืชใน PFAL แบบครบวงจร

รวม 2 ไอเดีย: Digital Logbook + Integrated Research System

[ชื่อผู้นำเสนอ]
[วันที่]
Civic AgroTech
```

**Visual:**
- ใช้สีเขียว Civic (#2E7D32)
- Icon: 🌱 หรือ 📊
- Background: ภาพโรงเรือน PFAL (ถ้ามี)

---

### 0️⃣ **Slide 2: Problem & Opportunity**
**หัวข้อ:** ปัญหาปัจจุบันในการจัดการข้อมูลการทดลอง

**เนื้อหา:**

**ปัญหาที่พบ:**
1. 📝 **บันทึกข้อมูลด้วยมือ** - ใช้ Excel, กระดาษ → ใช้เวลานาน, ผิดพลาดง่าย
2. 🔍 **หาข้อมูลยาก** - ข้อมูลกระจัด, ไม่มีระบบ
3. 📊 **วิเคราะห์ยาก** - ไม่มี Dashboard, ต้องทำ manual
4. 🤝 **แชร์ข้อมูลยาก** - ทีมวิจัยเข้าถึงข้อมูลไม่ได้

**ผลกระทบ:**
- เสียเวลา 2-3 ชั่วโมง/วัน ในการบันทึกและหาข้อมูล
- ข้อมูลสูญหาย หรือไม่สมบูรณ์
- ตัดสินใจช้า เพราะไม่มีข้อมูล real-time

**โอกาส:**
✅ ระบบดิจิทัลช่วยลดเวลา, เพิ่มความแม่นยำ, วิเคราะห์ได้ทันที

---

### 1️⃣ **Slide 3: Solution Overview**
**หัวข้อ:** FarmLab - แนวทางแก้ไข

**เนื้อหา:**

**FarmLab คืออะไร?**
> ระบบ Web-based สำหรับจัดการข้อมูลการทดลองพืชใน PFAL แบบครบวงจร  
> **และเป็น Foundation สำหรับต่อยอดไป Plant Health Monitoring (AI)**

**ฟีเจอร์หลัก:**

1. 🏢 **Greenhouse Management**
   - จัดการโรงเรือน, Zone, Layer
   - เชื่อมต่อ IoT devices (Controllers, Cameras)

2. 📊 **Project Management**
   - สร้างโครงการทดลอง (Project)
   - กำหนดรอบปลูก (Crop) และพืช
   - เชื่อมโยง IoT กับพืชแต่ละชนิด

3. 📝 **Data Entry**
   - บันทึกข้อมูลการเติบโต (ความสูง, น้ำหนัก, ฯลฯ)
   - อัพโหลดรูปภาพ (สำคัญสำหรับ AI!)
   - Template-based (ไม่ต้องกรอกซ้ำ)

4. 📈 **Dashboard** (Phase 5)
   - แสดงผลข้อมูล real-time
   - กราฟและ Analytics

**ข้อดี (ปัจจุบัน):**
✅ ลดเวลาบันทึกข้อมูล 70%  
✅ ข้อมูลครบถ้วน, ถูกต้อง  
✅ วิเคราะห์ได้ทันที  
✅ ทีมเข้าถึงข้อมูลได้ทุกที่

**ข้อดี (อนาคต - Plant Health Monitoring):**
🚀 ตรวจจับปัญหาก่อนเกิด (ใบเหลือง, โรค, แมลง)  
🚀 แนะนำการแก้ไขอัตโนมัติ (ปรับ EC, pH)  
🚀 ลดการสูญเสียผลผลิต 15-20%  
🚀 เพิ่มคุณภาพพืช

---

### 🔗 **Slide 4: ที่มาของ FarmLab และแผนต่อยอด**
**หัวข้อ:** FarmLab = Foundation สำหรับ Plant Health Monitoring

**เนื้อหา:**

**Phase 1: FarmLab (ปัจจุบัน)**
รวม 2 ไอเดียจาก v1:

**1. Digital Logbook / Batch Tracker**
- บันทึกข้อมูลพืชแต่ละรอบ
- ติดตามการเติบโต
- เก็บรูปภาพและข้อมูล

**2. Integrated Research System**
- เชื่อมโยงข้อมูลวิจัย
- เชื่อมต่อ IoT devices
- วิเคราะห์ข้อมูลแบบครบวงจร

**Phase 2: Plant Health Monitoring (ต่อยอด)**
เมื่อมีข้อมูลจาก FarmLab แล้ว → ต่อยอดเป็น AI:

```
[FarmLab - เก็บข้อมูล]
         ↓
   รูปภาพพืช + ข้อมูล Sensor
         ↓
[AI วิเคราะห์]
         ↓
   ตรวจจับปัญหาก่อนเกิด
         ↓
[Plant Health Monitoring]
   • ใบเหลือง → EC สูง
   • เติบโตช้า → pH ผิดปกติ
   • จุดดำ → โรค/แมลง
```

**ทำไม FarmLab เป็น Foundation ที่ดี?**
✅ **มีข้อมูลครบ** - รูปภาพ + Sensor data + บันทึกปัญหา  
✅ **มีโครงสร้าง** - ข้อมูลเป็นระเบียบ พร้อมเทรน AI  
✅ **Real-world data** - ข้อมูลจริงจากการใช้งาน  
✅ **Scalable** - เพิ่มฟีเจอร์ AI ได้ในอนาคต

**Roadmap:**
- **Month 1-2:** FarmLab MVP (บันทึกข้อมูล + IoT)
- **Month 3-4:** เก็บข้อมูล + รูปภาพ (100+ samples)
- **Month 5-6:** เทรน AI Model (Plant Health Detection)
- **Month 7+:** Plant Health Monitoring (Auto-detect ปัญหา)

---

### 2️⃣ **Slide 5: Technical Architecture**
**หัวข้อ:** สถาปัตยกรรมระบบ

**เนื้อหา:**

**Technology Stack:**

**Frontend:**
- HTML5, CSS3, JavaScript (Vanilla JS)
- Responsive Design
- Local Storage

**Backend (Phase 2):**
- Node.js + Express
- MongoDB / PostgreSQL
- REST API

**IoT Integration (Phase 3):**
- MQTT Protocol
- Real-time data streaming
- Device management

**Architecture Diagram:**
```
┌─────────────┐
│   Browser   │ ← User Interface
└──────┬──────┘
       │
┌──────▼──────┐
│  Frontend   │ ← HTML/CSS/JS
│ (Phase 1)   │
└──────┬──────┘
       │
┌──────▼──────┐
│   Backend   │ ← API Server
│ (Phase 2)   │
└──────┬──────┘
       │
┌──────▼──────┐
│  Database   │ ← Data Storage
└──────┬──────┘
       │
┌──────▼──────┐
│ IoT Devices │ ← Sensors/Controllers
│ (Phase 3)   │
└─────────────┘
```

**ข้อดี:**
✅ Modular - พัฒนาทีละ Phase  
✅ Scalable - ขยายได้ในอนาคต  
✅ Maintainable - แก้ไขง่าย

---

### 💰 **Slide 6: ROI Analysis**
**หัวข้อ:** วิเคราะห์ผลตอบแทนการลงทุน

**เนื้อหา:**

**Investment:**
| รายการ | จำนวน | หมายเหตุ |
|--------|-------|----------|
| พัฒนาระบบ (Phase 1) | 0 บาท | ทำเอง (Probation) |
| Backend + Database (Phase 2) | 50,000 บาท | Cloud hosting |
| IoT Integration (Phase 3) | 30,000 บาท | MQTT server |
| **รวม** | **80,000 บาท** | |

**Savings (ต่อปี):**
| รายการ | ประหยัด | คำนวณจาก |
|--------|---------|----------|
| ลดเวลาบันทึกข้อมูล | 120,000 บาท | 2 ชม./วัน × 250 วัน × 200 บาท/ชม. |
| ลดข้อผิดพลาด | 50,000 บาท | ลดการสูญเสียผลผลิต 5% |
| เพิ่มประสิทธิภาพ | 80,000 บาท | ตัดสินใจเร็วขึ้น |
| **รวม** | **250,000 บาท/ปี** | |

**ROI:**
- **Payback Period:** 4 เดือน
- **ROI Year 1:** 212% (คืนทุนและกำไร)
- **ROI Year 2-3:** 312% ต่อปี

---

### 📅 **Slide 7: Implementation Timeline**
**หัวข้อ:** แผนการดำเนินงาน

**เนื้อหา:**

**Timeline (6 เดือน):**

| Phase | ระยะเวลา | กิจกรรมหลัก | Deliverable | Risk |
|-------|----------|-------------|-------------|------|
| **Phase 1** | เดือน 1-2 | Frontend Development | Prototype (HTML/CSS/JS) | 🟢 |
| **Phase 2** | เดือน 3-4 | Backend + Database | API + Database | 🟡 |
| **Phase 3** | เดือน 5 | IoT Integration | MQTT + Real-time | 🟡 |
| **Phase 4** | เดือน 6 | Testing + Deployment | Production | 🟢 |

**Milestones:**
- ✅ **Week 2:** Prototype Demo
- ✅ **Month 2:** Phase 1 Complete (Frontend)
- 🎯 **Month 4:** Phase 2 Complete (Backend)
- 🎯 **Month 5:** Phase 3 Complete (IoT)
- 🎯 **Month 6:** Go Live

**Risk Indicators:**
- 🟢 Low Risk - ทำได้แน่นอน
- 🟡 Medium Risk - ต้องมี support
- 🔴 High Risk - ต้องมี backup plan

---

### ⚠️ **Slide 8: Risk Assessment**
**หัวข้อ:** ประเมินความเสี่ยงและการบรรเทา

**เนื้อหา:**

| ความเสี่ยง | ระดับ | ผลกระทบ | การบรรเทา |
|------------|-------|----------|-----------|
| **Technical Risk** | 🟡 | Backend/IoT ซับซ้อน | - เริ่มจาก Prototype<br>- ใช้ technology ที่คุ้นเคย<br>- มี mentor support |
| **Timeline Risk** | 🟡 | ล่าช้า 1-2 เดือน | - Phased implementation<br>- MVP first<br>- Flexible scope |
| **User Adoption** | 🟢 | ทีมไม่ใช้ | - Training session<br>- User-friendly UI<br>- Feedback loop |
| **Budget Risk** | 🟢 | เกินงบ | - Phase 1 ฟรี (ทำเอง)<br>- Cloud hosting ถูก<br>- Open-source tools |

**Mitigation Strategies:**
1. ✅ **Proof of Concept** - ทำ Prototype ก่อน (Phase 1)
2. ✅ **Phased Implementation** - ทีละ Phase, ลด risk
3. ✅ **User Feedback** - รับ feedback ตั้งแต่เริ่ม
4. ✅ **Backup Plan** - มี Plan B สำหรับทุก Phase

---

### 🎯 **Slide 9: Next Steps**
**หัวข้อ:** ขั้นตอนต่อไป

**เนื้อหา:**

**Immediate (1-2 สัปดาห์):**
- [ ] นำเสนอ Prototype ให้ทีม
- [ ] รับ Feedback และปรับปรุง
- [ ] ขออนุมัติ Phase 2 (Backend)

**Short-term (1-2 เดือน):**
- [ ] พัฒนา Backend + Database
- [ ] ทดสอบกับข้อมูลจริง
- [ ] Training ทีมวิจัย

**Long-term (3-6 เดือน):**
- [ ] IoT Integration
- [ ] Dashboard + Analytics
- [ ] เก็บข้อมูลรูปภาพ (100+ samples)
- [ ] Go Live

**Future (6+ เดือน) - Plant Health Monitoring:**
- [ ] เทรน AI Model (Image Recognition)
- [ ] ตรวจจับปัญหา (ใบเหลือง, โรค, แมลง)
- [ ] แนะนำการแก้ไขอัตโนมัติ
- [ ] Predictive Analytics

**Decision Required:**
- ✅ อนุมัติ Phase 2 (Backend Development)
- ✅ งบประมาณ 50,000 บาท
- ✅ Timeline 2 เดือน
- 🎯 วางแผนต่อยอด Plant Health Monitoring

**Success Metrics:**
- 📊 ลดเวลาบันทึกข้อมูล 70%
- 📈 ทีมใช้งาน 100%
- 💰 ROI > 200% ใน Year 1
- 🚀 เก็บข้อมูลได้ 100+ samples (สำหรับ AI)

**Go/No-Go Criteria:**
- ✅ Prototype ทำงานได้
- ✅ ทีมให้ feedback ดี
- ✅ งบประมาณอนุมัติ
- ✅ ข้อมูลที่เก็บได้มีคุณภาพ (พร้อมเทรน AI)

---

## 🎨 Design Guidelines

### **Color Palette:**
- **Primary:** เขียว Civic (#2E7D32)
- **Secondary:** น้ำเงิน (#1976D2)
- **Accent:** ส้ม (#FF6F00)
- **Success:** เขียวอ่อน (#4CAF50)
- **Warning:** เหลือง (#FFC107)

### **Typography:**
- **Headers:** Kanit Bold
- **Body:** Kanit Regular
- **Numbers:** Kanit Medium

### **Icons:**
- 🏢 Greenhouse
- 📊 Project
- 📝 Data Entry
- 📈 Dashboard
- 🌱 Plant
- 🎛️ Controller
- 📷 Camera

---

## 📝 Presentation Script Template

### **Opening (30 วินาที):**
```
"ท่านรู้หรือไม่ว่า ทีมวิจัยใช้เวลา 2-3 ชั่วโมงต่อวัน
ในการบันทึกและหาข้อมูลการทดลองพืช?

วันนี้ผมจะนำเสนอ FarmLab - ระบบที่จะช่วยลดเวลานี้ลง 70%"
```

### **Problem (1-2 นาที):**
```
"ปัจจุบันทีมวิจัยเจอปัญหา 4 ข้อหลัก:
1. บันทึกข้อมูลด้วยมือ - ใช้เวลานาน ผิดพลาดง่าย
2. หาข้อมูลยาก - ข้อมูลกระจัด ไม่มีระบบ
3. วิเคราะห์ยาก - ไม่มี Dashboard
4. แชร์ข้อมูลยาก - ทีมเข้าถึงไม่ได้

ผลกระทบคือ เสียเวลา, ข้อมูลสูญหาย, ตัดสินใจช้า"
```

### **Solution (2-3 นาที):**
```
"FarmLab คือระบบ Web-based ที่ช่วยจัดการข้อมูลแบบครบวงจร

มี 4 ฟีเจอร์หลัก:
1. Greenhouse Management - จัดการโรงเรือนและ IoT
2. Project Management - สร้างโครงการและรอบปลูก
3. Data Entry - บันทึกข้อมูลง่ายและรวดเร็ว
4. Dashboard - แสดงผลแบบ real-time

ผลลัพธ์คือ ลดเวลา 70%, ข้อมูลครบถ้วน, วิเคราะห์ได้ทันที"
```

### **Call to Action (30 วินาที):**
```
"FarmLab จะช่วยให้ทีมวิจัยทำงานได้เร็วและแม่นยำขึ้น

และที่สำคัญ - FarmLab เป็น Foundation สำหรับต่อยอดไป
Plant Health Monitoring (AI) ในอนาคต

ผมขออนุมัติ Phase 2 (Backend Development)
งบประมาณ 50,000 บาท, ระยะเวลา 2 เดือน

ROI คาดว่า 212% ใน Year 1, คืนทุนใน 4 เดือน
และเตรียมข้อมูลสำหรับ AI ในอนาคต

ขอบคุณครับ"
```

---

## ✅ Checklist ก่อนนำเสนอ

### เนื้อหา:
- [ ] Slides ครบ 9 สไลด์
- [ ] Script อ่านผ่านแล้ว
- [ ] Timing 10-15 นาที
- [ ] Q&A เตรียมพร้อม

### เทคนิค:
- [ ] Prototype Demo พร้อม
- [ ] Backup slides
- [ ] Handout

### การนำเสนอ:
- [ ] ฝึกพูดแล้ว
- [ ] Eye contact
- [ ] Confident

---

## 📁 ไฟล์ที่เกี่ยวข้อง

- **Prototype:** `ideas/v3/prototype/farmlab/index.html`
- **Template:** `presentation/v2/template-slide-v2.md`
- **Script Template:** `presentation/scripts/template-script.md`

---

**Version:** 1.0  
**Created:** 11 พฤศจิกายน 2025  
**สำหรับ:** FarmLab Presentation
