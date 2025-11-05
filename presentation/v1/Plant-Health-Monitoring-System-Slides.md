# 🌿 Civic AgroTech  
## Plant Health Monitoring System – Presentation Deck

> **AI-Powered Plant Health Intelligence**  
> จากการตรวจสอบแบบ Visual → สู่ระบบ Computer Vision

---

## 🎨 Slide Deck Overview

| ลำดับ | ชื่อสไลด์ | บทบาทในเรื่องเล่า | Template |
|--------|-------------|--------------------|-----------|
| 🟩 Cover / Title Slide | เปิดการนำเสนอ แสดงชื่อโครงการและผู้บรรยาย | Template A |
| 0️⃣ Problem & Motivation | ปูพื้นปัญหาการตรวจสอบสุขภาพพืชแบบ manual | Template B |
| 1️⃣ Concept Overview | แนวคิดของระบบ Computer Vision | Template C |
| 2️⃣ System Overview | แสดงภาพรวมระบบ AI และการทำงาน | Template D |
| 3️⃣ AI Features | แสดงความสามารถของ AI ในการวิเคราะห์ | Template E |
| 4️⃣ System Operation Flow | ลำดับการทำงานและตัวอย่างผลลัพธ์ | Template F |
| 5️⃣ Suggestions & Future | ข้อเสนอแนะและแผนพัฒนาต่อไป | Template G |

---

# 🟩 Cover Slide

**โครงการ:** Plant Health Monitoring System
**ชื่อภาษาไทย:** ระบบตรวจสอบสุขภาพพืชด้วย Computer Vision
**โดย:** Civic AgroTech
**ผู้นำเสนอ:** Ananda Wutwanna
**วันที่:** ตุลาคม 2025
**Tagline:** *AI-Powered Plant Health Intelligence*
**Theme:** เขียว–น้ำเงิน (Green–Blue AgriTech Theme)

**Design Suggestion:**
- พื้นหลัง Gradient เขียว (#2E7D32) → น้ำเงิน (#1976D2)
- โลโก้ Civic AgroTech ด้านล่างซ้าย
- ข้อความตรงกลาง:  
  > "Plant Health Monitoring System"  
  > "From Visual Inspection → to Computer Vision"
- Footer: `"31 Years LED Experience"`

---

# 🟥 Slide 0 – Problem & Motivation

### 🎯 วัตถุประสงค์
อธิบายปัญหาหลักในการตรวจสอบสุขภาพพืชแบบ manual และเหตุผลที่ต้องพัฒนา "Plant Health Monitoring System"

---

### ❌ ปัญหาที่พบ
- **การตรวจสอบแบบ Manual**: ต้องใช้คนเดินดูพืชทุกวัน ใช้เวลานานและอาจพลาดจุดผิดปกติ
- **ตรวจพบปัญหาช้า**: รู้ตัวเมื่อใบเหลือง/เน่าแล้ว ซึ่งอาจสายเกินไป
- **ความไม่สม่ำเสมอ**: แต่ละคนมองเห็นและประเมินต่างกัน
- **ขาดการเชื่อมโยงข้อมูล**: ไม่รู้ว่าปัญหาเกิดจากสาเหตุใด (EC, pH, แสง)

---

### 💸 ผลกระทบที่เกิดขึ้น
- **Crop Loss**: ใบเหลือง/เน่า ทำให้ผลผลิตลด 10-15%
- **Quality Issues**: พืชที่มีปัญหาส่งผลต่อคุณภาพโดยรวม
- **Labor Cost**: ใช้เวลาคนงานในการตรวจสอบมาก
- **Late Detection**: แก้ไขเมื่อปัญหาลุกลามแล้ว ต้นทุนการแก้ไขสูง

---

### ✅ แนวทางแก้ไข
- พัฒนา **Plant Health Monitoring System** ด้วย Computer Vision
- **ตรวจพบปัญหาเร็วขึ้น 3-5 วัน** (ก่อนเห็นด้วยตาเปล่า)
- **AI Image Analysis** วิเคราะห์ใบเหลือง, จุดด่าง, ความผิดปกติของพืช
- **เชื่อมโยงกับ Environmental Data** หาสาเหตุและแนะนำการแก้ไข
- **Proactive Prevention** ป้องกันปัญหาก่อนลุกลาม

---

### 💬 สรุปในประโยคเดียว
> จาก Visual Inspection → Computer Vision  
> Civic AgroTech ต้องการ "ตรวจจับปัญหาพืชก่อนที่จะเห็นด้วยตาเปล่า"  
> เพื่อป้องกันการสูญเสียและรักษาคุณภาพผลผลิต

---

# 🟩 Slide 1 – Concept Overview  
## 🌱 Plant Health Monitoring System

### 🎯 วัตถุประสงค์ของสไลด์
อธิบายแนวคิดของระบบ Plant Health Monitoring System  
ที่ออกแบบมาเพื่อตรวจสอบสุขภาพพืชด้วย Computer Vision และ AI

---

### 🧩 โครงแนวคิดของระบบ

**Concept Flow:**
```

[Camera System] → [AI Image Analysis] → [Health Assessment] → [Environmental Correlation] → [Actionable Recommendations]

```

**แนวคิดหลัก:**  
> ใช้กล้องถ่ายภาพพืชอัตโนมัติ + AI วิเคราะห์สุขภาพ  
> เชื่อมโยงกับข้อมูลสภาพแวดล้อม (EC, pH, Temp, PPFD)  
> เพื่อหาสาเหตุและแนะนำการแก้ไขที่เหมาะสม

---

### ⚙️ รายละเอียดของระบบ

| หมวด | รายละเอียด |
|------|-------------|
| เป้าหมาย | ตรวจสอบสุขภาพพืชด้วย Computer Vision และแนะนำการแก้ไข |
| ข้อมูลนำเข้า | Camera Images + Environmental Data |
| การประมวลผล | AI Image Analysis + Environmental Correlation |
| การแสดงผล | Health Dashboard + Alert System + Recommendations |
| ผู้ใช้งาน | Agronomist / Crop Manager / Operators |

---

### 🧠 ประโยชน์ที่ได้รับ
- 🔍 **ตรวจพบปัญหาเร็วขึ้น 3-5 วัน** (ก่อนเห็นด้วยตาเปล่า)
- 🌱 **ลดการสูญเสียผลผลิต 10-15%** (แก้ไขทันก่อนแพร่กระจาย)
- 🎯 **เพิ่มความแม่นยำในการวินิจฉัย 90%+**
- ⚡ **ลดเวลาตรวจสอบ 70%** (จาก manual inspection)
- 🔗 **เชื่อมโยงสาเหตุ** กับข้อมูลสภาพแวดล้อม

---

### 🌟 Unique Value
- ✅ **100% Independent** - ไม่ต้องรอข้อมูลจากระบบอื่น
- ✅ **Proactive Prevention** - ป้องกันก่อนเกิดปัญหา (ตรงกับวิสัยทัศน์ PFAL)
- ✅ **Visual Impact** - เห็นภาพชัดเจน ผู้บริหารเข้าใจง่าย
- ✅ **Market Validated** - AeroFarms, Square Roots ใช้จริง

---

### 💬 สรุปสั้น
> "Plant Health Monitoring System เปลี่ยนการดูแลพืชให้เป็นระบบ AI"
> เพื่อทำให้การตรวจสอบของ Civic AgroTech แม่นยำและรวดเร็ว 🌱🤖

---

# 🟩 Slide 2 – System Overview  

### 🎯 วัตถุประสงค์
แสดงภาพรวมของระบบ AI และการทำงานของ Computer Vision

---

### ⚙️ โครงสร้างระบบ

```

[Camera (RGB/ธรรมดา)] → [Edge Computing] → [AI Model] → [Environmental Data] → [Recommendation Engine]
          ↓                   ↓              ↓              ↓                    ↓
   [Image Capture]    [Image Processing] [Health Analysis] [Correlation]  [Action Plan]

```

---

### 📦 ส่วนประกอบหลักของระบบ
| หมวด | ส่วนประกอบ | หน้าที่ |
|-------|---------------------------|----------|
| 📷 **Image Capture** | กล้องธรรมดา หรือ RGB Camera (1080p+) | ถ่ายภาพพืชแบบสม่ำเสมอ |
| 💡 **Lighting System** | LED Lighting Setup | แสงสม่ำเสมอสำหรับถ่ายภาพ |
| 🖥️ **Edge Computing** | Raspberry Pi / Jetson Nano | ประมวลผล AI แบบ real-time |
| 🤖 **AI Engine** | YOLOv8 / Computer Vision | วิเคราะห์สุขภาพพืช |
| 🔗 **Data Integration** | Environmental API | เชื่อมโยงข้อมูลสภาพแวดล้อม |

---

### 🧠 AI Analysis Capabilities

**Image Analysis Features:**
- 🍃 **Leaf Size Measurement**: วัดขนาดใบอัตโนมัติ
- 🎨 **Leaf Color Analysis**: วิเคราะห์สีใบ (เขียว, เหลือง, น้ำตาล)
- 📏 **Growth Tracking**: ติดตามการเจริญเติบโต
- 🔍 **Anomaly Detection**: ตรวจจุดด่าง, เน่า, ความผิดปกติ
- 📊 **Health Scoring**: คะแนนสุขภาพ 0-100%

**Environmental Correlation:**
- 🔗 **EC/pH Correlation**: เชื่อมโยงปัญหากับค่าโภชนาการ
- 🌡️ **Temperature Impact**: วิเคราะห์ผลกระทบของอุณหภูมิ
- 💡 **Light Stress Detection**: ตรวจสอบปัญหาจากแสง
- 💧 **Water Stress Analysis**: วิเคราะห์ปัญหาจากน้ำ

---

### 📸 การทำงานของระบบ
```
กล้องถ่ายภาพ → AI Image Analysis → Detect ปัญหา →
เชื่อม Environmental Data → หาสาเหตุ → แนะนำการแก้ไข
```

**ตัวอย่างผลลัพธ์:**
```
🟡 WARNING - Zone A, Row 3
ตรวจพบ: ใบเหลือง 15% ของพื้นที่ใบ
สาเหตุที่เป็นไปได้:
  - EC ปัจจุบัน: 2.1 (สูงเกินไป)
  - pH: 6.8 (สูงกว่าปกติเล็กน้อย)

แนะนำ:
  ✓ ลด EC ลงเป็น 1.6-1.8
  ✓ ปรับ pH ลงเป็น 6.0-6.2
  ✓ ตรวจสอบอีกครั้งใน 2 วัน

หากไม่แก้ไข: ผลผลิตอาจลด 10-15%
```

---

### 💬 สรุปในประโยคเดียว
> ระบบใช้ AI วิเคราะห์ภาพพืช และเชื่อมโยงกับข้อมูลสภาพแวดล้อม
> เพื่อให้คำแนะนำการแก้ไขที่แม่นยำและทันเวลา 🌱🤖

---

# 🟩 Slide 3 – AI Features

### 🎯 วัตถุประสงค์
แสดงความสามารถของ AI ในการวิเคราะห์สุขภาพพืชและตัวอย่างการทำงาน

---

### 🤖 AI Analysis Features

| ฟีเจอร์ | รายละเอียด | Accuracy Target |
|---------|-------------|-----------------|
| 🍃 **Leaf Size Measurement** | วัดขนาดใบอัตโนมัติด้วย Computer Vision | >95% |
| 🎨 **Leaf Color Analysis** | วิเคราะห์สีใบ (เขียวปกติ, เหลือง, น้ำตาล, ไหม้) | >90% |
| 📏 **Growth Tracking** | ติดตามการเจริญเติบโตในแต่ละช่วงเวลา | >85% |
| 🔍 **Anomaly Detection** | ตรวจจุดด่าง, เน่า, ความผิดปกติของพืช | >85% |
| 🔗 **Correlation Analysis** | เชื่อมโยงกับ environmental data | >80% |
| 💡 **Recommendations** | แนะนำการแก้ไขทันที | >80% |

---

### 📊 Health Assessment Categories

**🟢 Healthy (80-100%)**
- ใบเขียวสด สม่ำเสมอ
- ขนาดใบตามมาตรฐาน
- ไม่มีจุดผิดปกติ
- การเจริญเติบโตปกติ

**🟡 Warning (60-79%)**
- ใบเหลืองเล็กน้อย (<10%)
- ขนาดใบเล็กกว่าปกติเล็กน้อย
- จุดด่างเล็กๆ บางจุด
- การเจริญเติบโตช้าลง

**🔴 Critical (<60%)**
- ใบเหลือง/น้ำตาลมาก (>15%)
- ขนาดใบเล็กมาก หรือใบเหี่ยว
- จุดเน่า หรือความผิดปกติชัดเจน
- หยุดเจริญเติบโต

---

### 🔍 Detection Examples

**ตัวอย่างที่ 1: Nutrient Deficiency**
```
📸 Image Analysis:
- ใบเหลือง 12% ของพื้นที่
- เริ่มจากขอบใบ → กลางใบ
- ใบแก่เหลืองก่อนใบอ่อน

🔗 Environmental Correlation:
- EC: 0.9 (ต่ำกว่าปกติ)
- pH: 6.2 (ปกติ)
- Temp: 24°C (ปกติ)

💡 AI Diagnosis: Nitrogen Deficiency
✅ Recommendation: เพิ่ม EC เป็น 1.4-1.6
```

**ตัวอย่างที่ 2: Light Stress**
```
📸 Image Analysis:
- ใบสีเขียวเข้มผิดปกติ
- ใบหนา แข็ง
- การเจริญเติบโตช้า

🔗 Environmental Correlation:
- PPFD: 350 μmol/m²/s (สูงเกินไป)
- Temp: 26°C (สูงเล็กน้อย)
- EC/pH: ปกติ

💡 AI Diagnosis: Light Stress
✅ Recommendation: ลด PPFD เป็น 200-250
```

**ตัวอย่างที่ 3: Environmental Stress**
```
📸 Image Analysis:
- จุดด่างสีน้ำตาล บนใบ
- ขอบจุดด่างเหลือง
- พื้นที่ผิดปกติแพร่กระจาย

🔗 Environmental Correlation:
- RH: 85% (สูงเกินไป)
- Temp: 22°C (ต่ำเล็กน้อย)
- Airflow: ต่ำ

💡 AI Diagnosis: Environmental Stress (ความชื้นสูงเกินไป)
✅ Recommendation:
  - ลด RH เป็น 70-75%
  - เพิ่ม airflow
  - แยกพืชที่มีปัญหาเพื่อดูแลเป็นพิเศษ
```

---

### 📈 Performance Metrics

**Phase 1 Targets (2 เดือน):**
- ตรวจจับใบเหลือง **accuracy >85%**
- ตรวจจับความผิดปกติ **accuracy >80%**
- Response time **<5 วินาที** ต่อภาพ
- False positive rate **<15%**

**Phase 2+ Targets:**
- Overall accuracy **>90%**
- Anomaly classification **>85%**
- Predictive capability **>75%**
- Integration accuracy **>90%**

---

### 💬 สรุปสั้น
> AI Features เหล่านี้ทำให้ระบบสามารถ "เห็น" และ "เข้าใจ" สุขภาพพืช
> เหมือนนักวิจัยที่มีประสบการณ์ แต่ทำงาน 24/7 🤖🌱

---

# 🟩 Slide 4 – System Operation Flow

### 🎯 วัตถุประสงค์
อธิบายลำดับขั้นตอนการทำงานของระบบและตัวอย่างผลลัพธ์จริง

---

### 🔄 ลำดับขั้นตอนการทำงาน
```

📷 Capture   →   🖼️ Process   →   🤖 Analyze   →   🔗 Correlate   →   💡 Recommend

```

| ขั้นตอน | รายละเอียด | Processing Time |
|----------|-------------|-----------------|
| 📷 **Capture** | ถ่ายภาพพืชทุก zone<br>• ทุก 4-6 ชั่วโมง<br>• แสงสม่ำเสมอ<br>• มุมมองมาตรฐาน | Real-time |
| 🖼️ **Process** | ประมวลผลภาพ<br>• Image enhancement<br>• Noise reduction<br>• Standardization | <30 วินาที |
| 🤖 **Analyze** | AI วิเคราะห์สุขภาพ<br>• Leaf detection<br>• Color analysis<br>• Anomaly detection | <3 วินาที |
| 🔗 **Correlate** | เชื่อมโยงข้อมูลสภาพแวดล้อม<br>• EC, pH, Temp, PPFD<br>• Historical patterns<br>• Root cause analysis | <2 วินาที |
| 💡 **Recommend** | สร้างคำแนะนำ<br>• Action plan<br>• Priority level<br>• Expected outcome | <1 วินาที |

---

### 📅 Implementation Timeline (2 เดือน)

**เดือนที่ 1: Setup & Training**
- Week 1-2: ติดตั้งกล้อง, เก็บภาพตัวอย่าง (healthy vs. unhealthy)
- Week 3-4: Training AI model (ใช้ pre-trained model + fine-tuning)

**เดือนที่ 2: Integration & Testing**
- Week 5-6: พัฒนา Dashboard + Alert system + เชื่อมกับ environmental data
- Week 7-8: Testing + Presentation

---

### 💡 ตัวอย่างการใช้งานจริง

**Morning Scan (06:00 AM):**
```
📷 System captures images of all zones
🤖 AI processes 150 plants in Zone A
📊 Results:
  - 🟢 Healthy: 142 plants (94.7%)
  - 🟡 Warning: 6 plants (4.0%)
  - 🔴 Critical: 2 plants (1.3%)

🚨 Alert Generated:
Zone A, Row 3, Plant #47
- Health Score: 45% (Critical)
- Issue: Severe yellowing + brown spots
- Suspected: Nutrient burn + environmental stress
```

**Detailed Analysis:**
```
🔍 Plant #47 Analysis:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📸 Visual Symptoms:
├─ Leaf yellowing: 35% of leaf area
├─ Brown spots: 8 spots detected
├─ Leaf size: 40% smaller than average
└─ Growth rate: Stopped (last 3 days)

🔗 Environmental Correlation:
├─ EC: 2.3 (HIGH - normal: 1.6)
├─ pH: 7.1 (HIGH - normal: 6.0)
├─ RH: 88% (HIGH - normal: 70%)
└─ Airflow: Low in this area

🧠 AI Diagnosis:
Primary: Nutrient Burn (EC too high)
Secondary: Environmental Stress (High RH + Low airflow)
Confidence: 87%

💡 Immediate Actions:
1. 🚨 URGENT: Reduce EC to 1.6 immediately
2. ⚠️ Lower pH to 6.0-6.2
3. 🌬️ Increase airflow in Row 3
4. 🔍 Monitor for further health deterioration
5. 📸 Re-scan in 24 hours

📈 Expected Outcome:
- If fixed within 24h: 80% recovery chance
- If delayed >48h: Likely plant loss
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

**Follow-up Scan (Next Day):**
```
📸 Plant #47 - 24h Follow-up:
├─ Leaf yellowing: 32% (improved from 35%)
├─ Brown spots: No new spots
├─ EC: 1.6 (corrected)
└─ pH: 6.1 (corrected)

✅ Status: Recovering
📊 Health Score: 58% (improved from 45%)
💡 Continue monitoring for 3 more days
```

---

### 👥 ผู้ใช้งานระบบ (Target Users)

**ผู้ใช้งานหลัก (Primary Users):**
- 🌱 **นักวิจัยพืช / Agronomist**
  - วิเคราะห์ปัญหาการเจริญเติบโต
  - ทดลองสูตรใหม่ ๆ
  - วิจัยสุขภาพพืช / ปัญหาทางสรีรวิทยา

- 👨‍🌾 **Crop Manager / Head Grower**
  - ตรวจสอบสุขภาพพืชแต่ละ zone
  - ตัดสินใจแก้ไข (ปรับ EC, pH, แสง)
  - วางแผนการดูแลเชิงป้องกัน

**ผู้ใช้งานรอง (Secondary Users):**
- 👷 **Operators / คนดูแลประจำวัน**
  - ได้รับ alert เมื่อมีปัญหา
  - ทำตาม recommendation
  - บันทึกการแก้ไข

- 💼 **Management**
  - ดูภาพรวมสุขภาพพืชทั้งฟาร์ม
  - ประเมินคุณภาพผลผลิตก่อนเก็บเกี่ยว
  - วิเคราะห์ trend และ performance

**💰 Value Proposition:**
> ตรวจจับปัญหาพืช **ก่อนที่จะเห็นด้วยตาเปล่า** 3-5 วัน
> → **🔬 Proactive Prevention** (ป้องกันการสูญเสีย)

---

### 💬 สรุปในประโยคเดียว
> ระบบทำงานแบบ Continuous Monitoring เพื่อตรวจจับและแก้ไขปัญหา
> ก่อนที่จะส่งผลกระทบต่อผลผลิตและคุณภาพ 🌱🤖

---

# 🟩 Slide 5 – Suggestions & Future Considerations

### 🎯 วัตถุประสงค์
ข้อเสนอแนะและประเด็นที่ควรพิจารณาสำหรับการพัฒนาระบบต่อไป

---

### 💡 ข้อเสนอแนะจากผู้บริหาร

**1. การเก็บข้อมูลสำหรับ Training AI Model**
- ต้องเก็บภาพตัวอย่างที่หลากหลาย:
  - 📸 ภาพพืชสุขภาพดี vs. มีปัญหา
  - 🌱 หลายชนิดพืช (Lettuce, Kale, Herbs)
  - 🕐 หลายช่วงเวลา (เช้า, กลางวัน, เย็น)
  - 🌡️ หลายสภาพแวดล้อม (EC สูง/ต่ำ, pH ต่างๆ)
- **เหตุผล:** AI Model ที่แม่นยำต้องการข้อมูล training ที่ครอบคลุม

**2. การออกแบบระบบกล้องที่เหมาะสม**
- สามารถใช้กล้องธรรมดาหรือ RGB Camera (1080p ขึ้นไป)
- ต้องพิจารณาการติดตั้งในสภาพแวดล้อมจริง:
  - 📍 ตำแหน่งกล้องที่ไม่ขัดขวางการทำงาน
  - 💡 ระบบแสงที่สม่ำเสมอสำหรับถ่ายภาพ
  - 🌊 ป้องกันความชื้นและละอองน้ำ
  - 🔌 การจ่ายไฟและเชื่อมต่อเครือข่าย
- **เหตุผล:** ระบบต้องทำงานได้เสถียรในสภาพแวดล้อม PFAL

**3. การขยายระบบสำหรับหลายชนิดพืช**
- วางแผนสำหรับการรองรับพืชหลากหลาย:
  - 🥬 Leafy Greens (Lettuce, Kale, Spinach)
  - 🌿 Herbs (Basil, Mint, Cilantro)
  - 🍅 Fruiting Plants (Tomato, Pepper - อนาคต)
  - 🌱 Different Growth Stages (Seedling, Mature)
- **เหตุผล:** แต่ละชนิดพืชมีลักษณะและปัญหาที่แตกต่างกัน

---

### 📋 Action Items สำหรับ Phase 2

| ลำดับ | หัวข้อ | รายละเอียด | Priority |
|-------|--------|-----------|----------|
| 1 | Data Collection | เก็บภาพตัวอย่าง 1000+ ภาพ สำหรับ training | High |
| 2 | Camera System Design | ออกแบบการติดตั้งกล้องในสภาพแวดล้อมจริง | High |
| 3 | Model Optimization | ปรับปรุง AI model ให้แม่นยำขึ้น >90% | Medium |
| 4 | Multi-crop Support | ขยายรองรับพืชหลายชนิด | Medium |
| 5 | Mobile Integration | พัฒนา mobile app สำหรับดูผลลัพธ์ | Low |

---

### 🚀 Future Enhancements (Phase 3+)

**Advanced AI Capabilities:**
- 🤖 **Predictive Health**: ทำนายปัญหาก่อนเกิดขึ้น
- 📊 **Growth Prediction**: ทำนายผลผลิตจาก growth pattern
- 🔍 **Advanced Classification**: แยกประเภทปัญหาสุขภาพได้เฉพาะเจาะจง
- 📈 **Yield Optimization**: แนะนำการปรับแต่งเพื่อเพิ่มผลผลิต

**Integration Possibilities:**
- 🔗 เชื่อมกับ Digital Logbook (บันทึก health status ใน batch)
- 📡 เชื่อมกับ Smart Alert System (alert เมื่อพบปัญหา)
- 💰 เชื่อมกับ Cost Analysis (คำนวณต้นทุนของ crop loss)
- 🤖 เชื่อมกับ Automated Systems (auto-adjust เมื่อพบปัญหา)

**Advanced Features:**
- 📱 **AR Visualization**: แสดงข้อมูลผ่าน Augmented Reality
- 🎥 **Time-lapse Analysis**: วิเคราะห์การเจริญเติบโตแบบ time-lapse
- 🌐 **Cloud AI**: ใช้ cloud computing สำหรับ AI processing
- 📊 **Comparative Analysis**: เปรียบเทียบกับ database พืชทั่วโลก

---

### 📊 Success Metrics & KPIs

**Phase 1 Targets (2 เดือน):**
- AI model **accuracy >85%** สำหรับ basic detection
- System **uptime >95%**
- Image processing **<5 วินาที** per image
- False positive rate **<15%**

**Phase 2+ Targets:**
- Overall accuracy **>90%**
- Anomaly classification **>85%**
- Predictive accuracy **>75%**
- User satisfaction **>4.5/5**

**Business Impact:**
- ลดการสูญเสียผลผลิต **10-15%**
- เพิ่มคุณภาพผลผลิต **Grade A >90%**
- ลดเวลาตรวจสอบ **70%**
- เพิ่มความเชื่อมั่นในคุณภาพ **>95%**

---

### 💬 สรุป
> Plant Health Monitoring System เป็นระบบ AI ที่จะพัฒนาต่อไป
> เป็น Intelligent Crop Management System ในอนาคต 🚀

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
| Project | AI-Powered Plant Health Intelligence |
| Company | Civic AgroTech |
| Author | Civic AgroTech R&D Team |
| Version | 1.0 |
| Updated | 30 Oct 2025 |
| Font | Kanit (Bold / Medium / Regular) |
| Theme | Green–Blue (AgriTech Minimal) |

---

> 🔖 *File:* `Plant-Health-Monitoring-System-Slides.md`  
> *Purpose:* รวมเนื้อหาสไลด์นำเสนอ Plant Health Monitoring System ครบทุกหัวข้อ  
> *Use:* สำหรับเตรียมสร้าง PowerPoint Template และใช้สื่อสารกับทีม Design / Management