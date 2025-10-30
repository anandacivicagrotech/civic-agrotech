# 🌿 Civic AgroTech  
## Smart Environmental Alert System – Presentation Deck

> **Intelligent PFAL Protection System**  
> จากการตรวจสอบแบบ Manual → สู่ระบบ Proactive Alert

---

## 🎨 Slide Deck Overview

| ลำดับ | ชื่อสไลด์ | บทบาทในเรื่องเล่า | Template |
|--------|-------------|--------------------|-----------|
| 🟩 Cover / Title Slide | เปิดการนำเสนอ แสดงชื่อโครงการและผู้บรรยาย | Template A |
| 0️⃣ Problem & Motivation | ปูพื้นปัญหาการตรวจสอบแบบ manual และความเสียหาย | Template B |
| 1️⃣ Concept Overview | แนวคิดของระบบ Smart Alert | Template C |
| 2️⃣ System Overview | แสดงภาพรวม 10 Critical Alerts | Template D |
| 3️⃣ Alert Categories | แสดงหมวดหมู่ Alert และ Priority Levels | Template E |
| 4️⃣ System Operation Flow | ลำดับการทำงานและตัวอย่าง Alert | Template F |
| 5️⃣ Suggestions & Future | ข้อเสนอแนะและแผนพัฒนาต่อไป | Template G |

---

# 🟩 Cover Slide

**โครงการ:** Smart Environmental Alert System
**ชื่อภาษาไทย:** ระบบแจ้งเตือนสภาพแวดล้อมอัจฉริยะ
**โดย:** Civic AgroTech
**ผู้นำเสนอ:** Ananda Wutwanna
**วันที่:** ตุลาคม 2025
**Tagline:** *Intelligent PFAL Protection System*
**Theme:** เขียว–น้ำเงิน (Green–Blue AgriTech Theme)

**Design Suggestion:**
- พื้นหลัง Gradient เขียว (#2E7D32) → น้ำเงิน (#1976D2)
- โลโก้ Civic AgroTech ด้านล่างซ้าย
- ข้อความตรงกลาง:  
  > "Smart Environmental Alert System"  
  > "From Manual Monitoring → to Proactive Protection"
- Footer: `"31 Years LED Experience"`

---

# 🟥 Slide 0 – Problem & Motivation

### 🎯 วัตถุประสงค์
อธิบายปัญหาหลักในการตรวจสอบสภาพแวดล้อมแบบ manual และเหตุผลที่ต้องพัฒนา "Smart Environmental Alert System"

---

### ❌ ปัญหาที่พบ
- **การตรวจสอบแบบ Manual**: ต้องมีคนคอยดู dashboard ตลอดเวลา 24/7
- **Response Time ช้า**: รู้ตัวเมื่อเกิดปัญหาแล้ว ชั่วโมงหรือหลายชั่วโมง
- **Crop Loss จากความล่าช้า**: พืชเสียหายก่อนที่จะแก้ไขทันเวลา
- **False Alarm มาก**: Alert ที่ไม่จำเป็น ทำให้ทีมงานเพิกเฉย
- **ไม่มี Priority**: ไม่รู้ว่าปัญหาไหนร้ายแรงกว่ากัน

---

### 💸 ผลกระทบที่เกิดขึ้น
- **Crop Loss**: พืชเสียหาย/ตายเมื่อ Temp >30°C นาน >2 ชม
- **Equipment Downtime**: ปั๊ม/พัดลมเสีย ทำให้ระบบหยุดทำงาน
- **Energy Waste**: PPFD = 0 กลางวัน แต่ไม่รู้ตัว สูญเสียการสังเคราะห์แสง
- **Quality Issues**: EC/pH ผิดปกติ ทำให้ผลผลิตคุณภาพต่ำ

---

### ✅ แนวทางแก้ไข
- พัฒนา **Smart Environmental Alert System** ที่แจ้งเตือนแบบเรียลไทม์
- ครอบคลุม **10 Critical Alerts** ที่สำคัญที่สุด
- ใช้ **Smart Filtering** ลด False Alarm <15%
- มี **Priority Levels** (P0, P1, P2) เพื่อจัดลำดับความสำคัญ
- **24/7 Monitoring** โดยไม่ต้องมีคนคอยดู

---

### 💬 สรุปในประโยคเดียว
> จาก Manual Monitoring → Proactive Protection  
> Civic AgroTech ต้องการ "ระบบป้องกันที่แจ้งเตือนก่อนเกิดความเสียหาย"  
> เพื่อลด Crop Loss และ Equipment Downtime

---

# 🟩 Slide 1 – Concept Overview  
## 🚨 Smart Environmental Alert System

### 🎯 วัตถุประสงค์ของสไลด์
อธิบายแนวคิดของระบบ Smart Environmental Alert System  
ที่ออกแบบมาเพื่อป้องกันความเสียหายจากสภาพแวดล้อมและอุปกรณ์ผิดปกติ

---

### 🧩 โครงแนวคิดของระบบ

**Concept Flow:**
```

[Existing Sensors] → [Smart Alert Engine] → [Priority Classification] → [Notification System]
                                    ↓
                            [Smart Filtering Logic]

```

**แนวคิดหลัก:**  
> ใช้ sensor ที่มีอยู่แล้ว + Smart Logic เพื่อแจ้งเตือนแบบอัจฉริยะ  
> ที่สามารถแยกแยะ "ปัญหาจริง" จาก "ความผันแปรปกติ"  
> และจัดลำดับความสำคัญเพื่อ Response ที่เหมาะสม

---

### ⚙️ รายละเอียดของระบบ

| หมวด | รายละเอียด |
|------|-------------|
| เป้าหมาย | ป้องกันความเสียหายจากสภาพแวดล้อมและอุปกรณ์ผิดปกติ |
| ข้อมูลนำเข้า | Existing Sensors (ไม่ต้องติดตั้งใหม่) |
| การประมวลผล | Smart Alert Engine + Priority Classification |
| การแสดงผล | LINE/Email Notifications + Alert Dashboard |
| ผู้ใช้งาน | Operators / Maintenance Team / Management |

---

### 🧠 ประโยชน์ที่ได้รับ
- 🚨 **ลด Response Time 70%** (จาก ชม → นาที)
- 🌱 **ลด Crop Loss 80%** (แก้ไขทันก่อนพืชเสียหาย)
- 🔧 **24/7 Monitoring** (ไม่ต้องมีคนคอยดู dashboard)
- ⚡ **False Alarm <15%** (ด้วย smart filtering)
- 💰 **ป้องกันความเสียหาย** มูลค่าหลักแสนต่อเดือน

---

### 🌟 Unique Value
- ✅ **100% Independent** - ไม่ต้องรอระบบอื่น
- ✅ **Use Existing Sensors** - ไม่ต้องติดตั้ง hardware ใหม่
- ✅ **Immediate Impact** - ป้องกันความเสียหายได้ทันที
- ✅ **Low Risk, High Value** - ทำทันแน่นอนใน 2 เดือน

---

### 💬 สรุปสั้น
> "Smart Environmental Alert System เปลี่ยนการตรวจสอบให้เป็นการป้องกัน"
> เพื่อทำให้ PFAL ของ Civic AgroTech ปลอดภัยและเชื่อถือได้ 24/7 🚨🌿

---

# 🟩 Slide 2 – System Overview  

### 🎯 วัตถุประสงค์
แสดงภาพรวมของ 10 Critical Alerts ที่ระบบตรวจสอบและแจ้งเตือน

---

### 🚨 10 Critical Alerts Coverage

```

🌡️ Climate Alerts    💡 Photosynthesis    💧 Nutrition Crisis    🔧 Equipment Failure
     (2 alerts)         Alerts (2 alerts)      Alerts (4 alerts)      Alerts (2 alerts)

```

---

### 📊 Alert Categories & Coverage

| หมวด | Alert | Impact ที่ป้องกัน | Response Time |
|-------|-------|-------------------|---------------|
| 🌡️ **Climate Critical** | Extreme Temperature | พืชเสียหาย/ตายภายใน 2-4 ชม | <5 นาที |
| 🌡️ **Climate Critical** | RH Crisis | โรคราภายใน 6-12 ชม | <5 นาที |
| 💡 **Photosynthesis** | PPFD Failure | หยุดสังเคราะห์แสง, สูญเสียผลผลิต | <5 นาที |
| 💡 **Photosynthesis** | CO₂ Depletion | ลดการเจริญเติบโต 30-40% | <15 นาที |
| 💧 **Nutrition** | EC Critical High | ใบไหม้, พืชตายภายใน 24 ชม | <5 นาที |
| 💧 **Nutrition** | EC Critical Low | ขาดอาหาร, หยุดเติบโต | <15 นาที |
| 💧 **Nutrition** | pH Crisis | ดูดธาตุอาหารไม่ได้ | <15 นาที |
| 💧 **Nutrition** | Water Low | พืชขาดน้ำ | <15 นาที |
| 🔧 **Equipment** | Fan Failure | Temp พุ่ง, CO₂ กระจายไม่ทั่ว | <5 นาที |
| 🔧 **Equipment** | Pump Failure | พืชขาดน้ำภายใน 2 ชม | <5 นาที |

---

### ⚙️ Smart Features

**1. Priority Classification:**
```
🔴 P0 - CRITICAL (Response: <5 นาที)
- PPFD=0, Temp>30°C, Pump failure
- Notify: Manager + All operators + Emergency

🟡 P1 - WARNING (Response: <15 นาที)  
- CO₂<600, LED degraded >20%
- Notify: Operators

🟢 P2 - INFO (Response: <1 ชม)
- Minor fluctuations
- Notify: Log only
```

**2. Smart Filtering Logic:**
- **Time-based**: PPFD = 0 กลางคืน → ปกติ, ไม่แจ้ง
- **Duration**: Temp เกิน 28°C นาน >10 นาที → แจ้ง
- **Rate of Change**: Temp เปลี่ยน >5°C ใน 10 นาที → แจ้งทันที

---

### 💬 สรุปในประโยคเดียว
> ระบบครอบคลุม 10 Critical Alerts ที่สำคัญที่สุด
> พร้อม Smart Logic ที่ลด False Alarm และจัดลำดับความสำคัญ 🚨📊

---

# 🟩 Slide 3 – Alert Categories

### 🎯 วัตถุประสงค์
แสดงรายละเอียดของแต่ละหมวด Alert และ Priority Levels

---

### 🌡️ Climate Critical Alerts

| Alert | Threshold | Impact | Action Required |
|-------|-----------|--------|-----------------|
| **Extreme Temperature** | >30°C หรือ <18°C | พืชเสียหาย/ตายภายใน 2-4 ชม | ตรวจสอบ AC/Heater ทันที |
| **RH Crisis** | >90% หรือ <40% | โรคราภายใน 6-12 ชม / แห้งตาย | ตรวจสอบ dehumidifier/humidifier |

---

### 💡 Photosynthesis Alerts

| Alert | Threshold | Impact | Action Required |
|-------|-----------|--------|-----------------|
| **PPFD Failure** | PPFD = 0 (ช่วงกลางวัน) | หยุดสังเคราะห์แสง, สูญเสียผลผลิต ~3%/วัน | ตรวจสอบ LED/ไฟฟ้า |
| **CO₂ Depletion** | CO₂ <400 ppm | ลดการเจริญเติบโต 30-40% | เติม CO₂ tank ทันที |

---

### 💧 Nutrition Crisis Alerts

| Alert | Threshold | Impact | Action Required |
|-------|-----------|--------|-----------------|
| **EC Critical High** | EC >2.5 | ใบไหม้, พืชตายภายใน 24 ชม | ลด EC ทันที |
| **EC Critical Low** | EC <0.8 | ขาดอาหาร, หยุดเติบโต | เพิ่ม EC |
| **pH Crisis** | pH <4.5 หรือ >7.5 | ดูดธาตุอาหารไม่ได้ | ปรับ pH ทันที |
| **Water Low** | น้ำในถัง <10% | พืชขาดน้ำ | เติมน้ำทันที |

---

### 🔧 Equipment Failure Alerts

| Alert | Threshold | Impact | Action Required |
|-------|-----------|--------|-----------------|
| **Fan Failure** | Airflow = 0 | Temp พุ่ง, CO₂ กระจายไม่ทั่ว | ซ่อม/เปลี่ยนพัดลมทันที |
| **Pump Failure** | Water flow = 0 | พืชขาดน้ำภายใน 2 ชม | ซ่อม/เปลี่ยนปั๊มทันที |

---

### 🎨 Priority Level Details

**🔴 P0 - CRITICAL**
- **Response Time**: <5 นาที
- **Notification**: Manager + All operators + Emergency contact
- **Examples**: PPFD=0, Temp>30°C, Pump failure, Fan failure
- **Impact**: พืชเสียหาย/ตาย, Equipment failure

**🟡 P1 - WARNING**
- **Response Time**: <15 นาที
- **Notification**: Operators
- **Examples**: CO₂<600, EC out of range, Water low
- **Impact**: ลดผลผลิต, คุณภาพต่ำ

**🟢 P2 - INFO**
- **Response Time**: <1 ชั่วโมง
- **Notification**: Log only
- **Examples**: Minor fluctuations
- **Impact**: ไม่มีผลกระทบทันที

---

### 💬 สรุปสั้น
> การจัดหมวดหมู่และ Priority ช่วยให้ทีมงานรู้ว่า
> ปัญหาไหนต้องแก้ทันที และปัญหาไหนสามารถรอได้ 🚨⚡

---

# 🟩 Slide 4 – System Operation Flow

### 🎯 วัตถุประสงค์
อธิบายลำดับขั้นตอนการทำงานของระบบและตัวอย่าง Alert Message

---

### 🔄 ลำดับขั้นตอนการทำงาน
```

📡 Monitor   →   🧠 Analyze   →   🚨 Alert   →   📱 Notify   →   ✅ Resolve

```

| ขั้นตอน | รายละเอียด | Processing Time |
|----------|-------------|-----------------|
| 📡 **Monitor** | เก็บข้อมูลจาก sensors ทุก 1 นาที<br>• Temperature, RH, PPFD, CO₂<br>• EC, pH, Water level<br>• Fan/Pump status | Real-time |
| 🧠 **Analyze** | วิเคราะห์ด้วย Smart Logic<br>• Time-based filtering<br>• Duration checking<br>• Rate of change detection | <30 วินาที |
| 🚨 **Alert** | จัดลำดับความสำคัญ<br>• P0 (Critical), P1 (Warning), P2 (Info)<br>• เลือก notification method | <30 วินาที |
| 📱 **Notify** | ส่ง notification<br>• LINE message, Email<br>• Dashboard alert<br>• เลือกผู้รับตาม priority | <1 นาที |
| ✅ **Resolve** | ติดตาม resolution<br>• Acknowledge alert<br>• Mark as resolved<br>• Log action taken | Manual |

---

### 📱 ตัวอย่าง Alert Message

**🔴 Critical Alert (P0):**
```
🔴 CRITICAL - Light System Failure
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Zone: Zone A, All Rows
Current PPFD: 0 μmol/m²/s (ไม่มีแสง)
Expected: 200 μmol/m²/s
Time: 10:30 AM (กลางวัน - ควรมีแสง)

🚨 URGENT Impact:
- ❌ การสังเคราะห์แสงหยุดทันที
- ❌ พืชไม่เติบโตเลย
- ❌ สูญเสียผลผลิต ~3% ทุก 24 ชม

🔥 IMMEDIATE ACTION:
1. ✅ ตรวจสอบไฟฟ้า (เบรกเกอร์, สายไฟ)
2. ✅ ตรวจสอบ LED driver/controller
3. ✅ หาก LED เสีย → เปลี่ยนทันที
4. 📞 โทรหาทีมไฟฟ้าถ้าจำเป็น

⏳ Estimated Loss if not fixed:
- 2 ชม: ~0.3% yield loss
- 6 ชม: ~0.8% yield loss
- 24 ชม: ~3% yield loss

💡 Backup Plan:
- หากแก้ไม่ได้ภายใน 4 ชม → ย้ายพืชไป zone อื่น

🔔 Sent to: [Manager], [Maintenance], [Emergency]
Time: 10:30 AM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

**🟡 Warning Alert (P1):**
```
🟡 WARNING - CO₂ Running Low
━━━━━━━━━━━━━━━━━━━━━━━━━━━
Zone: All zones
Current: 580 ppm (ต่ำกว่าเป้าหมาย 900 ppm)
Duration: 15 นาที

⚠️ Impact:
- การสังเคราะห์แสงลดลง ~20%
- ผลผลิตอาจลด 5-10%

✅ Action Required:
1. ตรวจสอบ CO₂ tank (อาจใกล้หมด)
2. เตรียม tank สำรอง
3. คาดว่าจะหมดใน: ~2 ชั่วโมง

🔔 Sent to: [Operator 1], [Operator 2]
Time: 14:30 PM
```

---

### 📅 Implementation Timeline (2 เดือน)

**เดือนที่ 1: Setup & Core Development**
- Week 1-2: เชื่อม sensor data, ตั้งค่า threshold ทั้ง 10 parameters
- Week 3-4: พัฒนา alert logic + smart filtering + priority scoring

**เดือนที่ 2: Integration & Fine-tuning**
- Week 5-6: Dashboard + notification system (LINE, Email)
- Week 7-8: Testing, ปรับ threshold, ลด false alarm, Presentation

---

### 👥 ผู้ใช้งานระบบ (Target Users)

**ผู้ใช้งานหลัก (Primary Users):**
- 👷 **Operators / คนดูแลประจำวัน**
  - ได้รับ alert เมื่อ Temp, PPFD, CO₂, EC ผิดปกติ
  - แก้ไขปัญหาทันที
  - Acknowledge และ resolve alerts

- 🔧 **Maintenance Team / ช่างซ่อม**
  - ได้รับ alert เมื่ออุปกรณ์เสีย (พัดลม, ปั๊ม, LED)
  - แก้ไขก่อนเกิด downtime

**ผู้ใช้งานรอง (Secondary Users):**
- 👨‍💼 **Operations Manager**
  - ดู alert history
  - วิเคราะห์ว่าปัญหาอะไรเกิดบ่อย
  - ประเมิน response time ของทีม

- 💼 **Management**
  - ดูว่าทีมงาน respond ทันหรือไม่
  - ประเมิน downtime และ crop loss ที่ป้องกันได้

**💰 Value Proposition:**
> ไม่ต้องนั่งจ้อง dashboard ตลอดเวลา ระบบแจ้ง **ก่อนเกิดความเสียหาย**
> → **🚨 Risk Prevention** (ป้องกัน downtime, crop loss)

---

### 💬 สรุปในประโยคเดียว
> ระบบทำงานแบบ Real-time 24/7 เพื่อป้องกันความเสียหาย
> พร้อม Smart Logic ที่ลด False Alarm และจัดลำดับความสำคัญ 🚨⚡

---

# 🟩 Slide 5 – Suggestions & Future Considerations

### 🎯 วัตถุประสงค์
ข้อเสนอแนะและประเด็นที่ควรพิจารณาสำหรับการพัฒนาระบบต่อไป

---

### 💡 ข้อเสนอแนะจากผู้บริหาร

**1. การปรับแต่ง Threshold ให้เหมาะสมกับสภาพจริง**
- ต้องทดสอบและปรับ threshold ตามประสบการณ์จริง:
  - 🌡️ Temperature: อาจต้องปรับตามฤดูกาล
  - 💧 EC/pH: อาจแตกต่างตามชนิดพืช
  - ⏰ Time-based logic: ปรับตามรอบการทำงาน
  - 📊 Duration filtering: หาจุดสมดุลระหว่าง sensitivity vs false alarm
- **เหตุผล:** Threshold ที่เหมาะสมจะลด False Alarm และเพิ่มประสิทธิภาพ

**2. การเชื่อมโยงกับระบบแก้ไขอัตโนมัติ**
- พิจารณาการเชื่อมต่อกับระบบควบคุมเพื่อแก้ไขอัตโนมัติ:
  - 🌡️ Auto-adjust AC/Heater เมื่อ Temp ผิดปกติ
  - 💧 Auto-adjust EC/pH dosing เมื่อค่าเกินมาตรฐาน
  - 💡 Auto-restart LED controller เมื่อ PPFD = 0
  - 🔄 Auto-switch to backup systems
- **เหตุผล:** ลด Response Time จาก นาที → วินาที

**3. การขยายระบบสำหรับ Multi-zone**
- วางแผนสำหรับการขยายเมื่อมีหลาย zones:
  - 🏢 Zone-specific thresholds
  - 👥 Zone-specific notification groups
  - 📊 Cross-zone correlation analysis
  - 🔄 Cascade alert system (ปัญหาใน zone หนึ่งกระทบ zone อื่น)
- **เหตุผล:** เตรียมพร้อมสำหรับการขยายธุรกิจ

---

### 📋 Action Items สำหรับ Phase 2

| ลำดับ | หัวข้อ | รายละเอียด | Priority |
|-------|--------|-----------|----------|
| 1 | Threshold Calibration | ทดสอบและปรับ threshold ตามข้อมูลจริง 1-2 เดือน | High |
| 2 | False Alarm Analysis | วิเคราะห์และลด false alarm rate <10% | High |
| 3 | Auto-correction Integration | ออกแบบการเชื่อมต่อกับระบบควบคุมอัตโนมัติ | Medium |
| 4 | Multi-zone Architecture | ออกแบบสถาปัตยกรรมสำหรับหลาย zones | Medium |
| 5 | Mobile App Development | พัฒนา mobile app สำหรับรับ notifications | Low |

---

### 🚀 Future Enhancements (Phase 3+)

**Advanced Intelligence:**
- 🤖 **Machine Learning**: เรียนรู้ pattern ของปัญหาที่เกิดซ้ำ
- 📈 **Predictive Alerts**: ทำนายปัญหาก่อนเกิดขึ้น (เช่น equipment failure)
- 🔗 **Root Cause Analysis**: วิเคราะห์สาเหตุรากของปัญหา
- 📊 **Trend Analysis**: วิเคราะห์แนวโน้มและ seasonal patterns

**Integration Possibilities:**
- 🔗 เชื่อมกับ Digital Logbook (บันทึก alerts ใน batch history)
- 📡 เชื่อมกับ IoT Device Health Monitor (alert เมื่อ sensor failure)
- 💰 เชื่อมกับ Cost Analysis (คำนวณต้นทุนของ downtime)
- 📱 เชื่อมกับ Plant Health Monitoring (alert เมื่อพบโรคพืช)

**Advanced Notifications:**
- 📞 **Voice Calls**: สำหรับ P0 alerts ที่ร้ายแรงมาก
- 📺 **Digital Signage**: แสดง alert status ในพื้นที่ทำงาน
- ⌚ **Smartwatch Integration**: notifications บน Apple Watch/Android Wear
- 🚨 **Physical Alarms**: เสียงเตือนในโรงเรือนเมื่อมี critical alerts

---

### 📊 Success Metrics & KPIs

**Phase 1 Targets:**
- ระบบทำงานได้ **99.5% uptime**
- Alert response time **<2 นาที** เฉลี่ย
- False alarm rate **<15%**
- Prevented crop loss **>5 incidents** ใน 2 เดือนแรก

**Phase 2+ Targets:**
- False alarm rate **<10%**
- Auto-correction success rate **>80%**
- Predictive accuracy **>70%**
- Overall system reliability **>99.9%**

---

### 💬 สรุป
> Smart Environmental Alert System เป็นระบบป้องกันที่สำคัญ
> ที่จะพัฒนาต่อไปเป็น Intelligent Protection System ในอนาคต 🚀

---

# 🧱 Footer Design
- แถบสีเขียวเข้มด้านล่าง (#2E7D32)  
- ซ้าย: โลโก้ Civic AgroTech  
- กลาง: `"31 Years LED Experience"`  
- ขวา: หมายเลขสไลด์ (#)

---

# 📁 Metadata

| รายการ | รายละเอียด |
|--------|-------------|
| Project | Intelligent PFAL Protection System |
| Company | Civic AgroTech |
| Author | Civic AgroTech R&D Team |
| Version | 1.0 |
| Updated | 30 Oct 2025 |
| Font | Kanit (Bold / Medium / Regular) |
| Theme | Green–Blue (AgriTech Minimal) |

---

> 🔖 *File:* `Smart-Environmental-Alert-System-Slides.md`  
> *Purpose:* รวมเนื้อหาสไลด์นำเสนอ Smart Environmental Alert System ครบทุกหัวข้อ  
> *Use:* สำหรับเตรียมสร้าง PowerPoint Template และใช้สื่อสารกับทีม Design / Management