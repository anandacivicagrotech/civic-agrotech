# 🌿 Civic AgroTech
## OCR-Based Harvest Data Entry Tool – Presentation Deck

> **From Paper to Digital – Instantly**
> ลดเวลาบันทึกข้อมูล 65% ด้วย OCR Technology

---

## 🎨 Slide Deck Overview

| ลำดับ | ชื่อสไลด์ | บทบาทในเรื่องเล่า | Template |
|--------|-------------|--------------------|-----------|
| 🟩 Cover / Title Slide | เปิดการนำเสนอ แสดงชื่อโครงการและผู้บรรยาย | Template A |
| 0️⃣ Problem & Motivation | ปูพื้นปัญหาการบันทึกข้อมูลแบบ manual | Template B |
| 1️⃣ Concept Overview | แนวคิดของระบบ OCR | Template C |
| 2️⃣ System Overview | แสดงภาพรวมระบบและการทำงาน | Template D |
| 3️⃣ OCR Features | แสดงความสามารถของ OCR และ AI | Template E |
| 4️⃣ System Operation Flow | ลำดับการทำงานและตัวอย่างผลลัพธ์ | Template F |

---

# 🟩 Cover Slide

**โครงการ:** OCR-Based Harvest Data Entry Tool
**ชื่อภาษาไทย:** เครื่องมือ OCR ช่วยบันทึกข้อมูลผลผลิตอัตโนมัติ
**โดย:** Civic AgroTech
**ผู้นำเสนอ:** Ananda Wutwanna
**วันที่:** พฤศจิกายน 2025
**Tagline:** *From Paper to Digital – Instantly*
**Theme:** เขียว–น้ำเงิน (Green–Blue AgriTech Theme)

**Design Suggestion:**
- พื้นหลัง Gradient เขียว (#2E7D32) → น้ำเงิน (#1976D2)
- โลโก้ Civic AgroTech ด้านล่างซ้าย
- ข้อความตรงกลาง:
  > "OCR-Based Harvest Data Entry Tool"
  > "📸 ถ่ายรูป → ระบบอ่านให้ → ไม่ต้องพิมพ์ซ้ำ"
- Footer: `"31 Years LED Experience"`

---

# 🟥 Slide 0 – Problem & Motivation

### 🎯 วัตถุประสงค์
อธิบายปัญหาหลักในการบันทึกข้อมูลผลผลิตแบบ manual และเหตุผลที่ต้องพัฒนา "OCR-Based Harvest Data Entry Tool"

---

### ❌ ปัญหาที่พบ (Pain Points)

**การบันทึกข้อมูลปัจจุบัน:**
- ✍️ **เขียนบนกระดาษ/บอร์ดขณะเก็บเกี่ยว** - บันทึกใน field
- 📋 **กลับมาพิมพ์ใหม่ในคอมพิวเตอร์** - เสียเวลา 15-30 นาที/batch
- ❌ **ข้อมูลหาย หรือพิมพ์ผิด** - 5-10% ของข้อมูล
- 😓 **งานซ้ำซ้อน น่าเบื่อ** - ทำซ้ำทุกครั้ง

**ตัวอย่างการทำงานปัจจุบัน:**
```
1. เก็บเกี่ยว → เขียนบนกระดาษ (5 นาที)
2. กลับออฟฟิศ → พิมพ์ใหม่ใน Excel (15 นาที)
3. Double-check (5 นาที)
---
รวม: 25 นาที/batch
```

---

### 💸 ผลกระทบที่เกิดขึ้น
- **เสียเวลา**: ทีม RD เสียเวลา 3-5 ชม/สัปดาห์ กับการพิมพ์ข้อมูลซ้ำ
- **Data Entry Error**: ข้อมูลผิดพลาด 5-10% จากการพิมพ์ผิด
- **ข้อมูลสูญหาย**: กระดาษหาย หรืออ่านตัวเลขไม่ออก
- **งานซ้ำซ้อน**: พนักงานต้องทำงาน manual ซ้ำ ๆ

---

### ✅ แนวทางแก้ไข
- พัฒนา **OCR-Based Harvest Data Entry Tool**
- **ถ่ายรูปกระดาษ/บอร์ด** → OCR อ่านอัตโนมัติ
- **ลดเวลาบันทึกข้อมูล 65%** (จาก 25 นาที → 8 นาที)
- **ลด data entry error 80%** (จากการพิมพ์ผิด)
- **เพิ่มความสะดวก** - ทำงานผ่านมือถือได้ทุกที่

---

### 💬 สรุปในประโยคเดียว
> จากการพิมพ์ข้อมูลซ้ำ → ถ่ายรูป OCR อ่านให้
> Civic AgroTech ต้องการ "ประหยัดเวลาและลด error" สำหรับทีม RD

---

# 🟩 Slide 1 – Concept Overview
## 📸 OCR-Based Harvest Data Entry Tool

### 🎯 วัตถุประสงค์ของสไลด์
อธิบายแนวคิดของระบบ OCR ที่ช่วยบันทึกข้อมูลผลผลิตอัตโนมัติ

---

### 🧩 โครงแนวคิดของระบบ

**Concept Flow:**
```

[📸 Capture Photo] → [🔍 OCR Recognition] → [🤖 AI Field Mapping] → [✏️ Manual Review] → [💾 Save to Digital Logbook]

```

**แนวคิดหลัก:**
> ถ่ายรูปกระดาษ/บอร์ดที่เขียนไว้ในโรงเรือน
> OCR อ่านตัวเลข/ข้อความอัตโนมัติ
> AI จับคู่ข้อมูลกับ field ที่ถูกต้อง
> บันทึกเข้า Digital Logbook โดยตรง

---

### ⚙️ รายละเอียดของระบบ

| หมวด | รายละเอียด |
|------|-------------|
| เป้าหมาย | ช่วยนักพัฒนาพืชบันทึกผลผลิตจากกระดาษ/บอร์ดให้เร็วขึ้น |
| ข้อมูลนำเข้า | รูปถ่ายจากมือถือ (กระดาษ/บอร์ด) |
| การประมวลผล | OCR Text Recognition + AI Field Mapping |
| การแสดงผล | Mobile App + Integration กับ Digital Logbook |
| ผู้ใช้งาน | นักพัฒนาพืช / นักวิจัย R&D / Operators |

---

### 🧠 ประโยชน์ที่ได้รับ
- ⚡ **ลดเวลาบันทึกข้อมูล 65%** (จาก 25 นาที → 8 นาที)
- ✅ **ลด data entry error 80%** (จากการพิมพ์ผิด)
- 📱 **ทำงานได้ทุกที่** ผ่านมือถือ
- 💾 **บันทึกเข้า Digital Logbook** ทันที - ไม่ต้องพิมพ์ซ้ำ
- 🕐 **ประหยัดเวลา 3-5 ชม/สัปดาห์** สำหรับทีม RD

---

### 🌟 Unique Value
- ✅ **แก้ปัญหาจริง** - จากฟีดแบ็คของนักพัฒนาพืช
- ✅ **ประหยัดเวลา** - 65% สำหรับการบันทึกข้อมูล
- ✅ **เพิ่ม accuracy** - ลด human error
- ✅ **Mobile-first** - ทำงานได้ทุกที่

---

### 💬 สรุปสั้น
> "OCR-Based Harvest Data Entry Tool เปลี่ยนการบันทึกข้อมูล"
> จาก Manual Entry → Automatic Recognition 📸✨

---

# 🟩 Slide 2 – System Overview

### 🎯 วัตถุประสงค์
แสดงภาพรวมของระบบ OCR และการทำงานของ Mobile App

---

### ⚙️ โครงสร้างระบบ

```

[📱 Mobile App] → [📸 Camera Capture] → [🖼️ Image Preprocessing] → [🔍 OCR Engine] → [🤖 AI Field Mapping] → [💾 Digital Logbook API]

```

---

### 📦 ส่วนประกอบหลักของระบบ

| หมวด | ส่วนประกอบ | หน้าที่ |
|-------|---------------------------|----------|
| 📱 **Mobile App** | React Native / Flutter (iOS/Android) | ถ่ายรูป + แสดงผลลัพธ์ |
| 📸 **Camera Integration** | Native Camera API | ถ่ายรูปกระดาษ/บอร์ด |
| 🖼️ **Image Preprocessing** | OpenCV | เพิ่มคุณภาพภาพ (crop, rotate, enhance) |
| 🔍 **OCR Engine** | Tesseract OCR / Google Cloud Vision | อ่านตัวเลข/ข้อความ |
| 🤖 **AI Field Mapping** | NER (Named Entity Recognition) | จับคู่ข้อมูลกับ field |
| 💾 **Backend API** | Python FastAPI | ประมวลผล OCR + บันทึกข้อมูล |
| 🔗 **Integration** | Digital Logbook API | บันทึกเข้าระบบโดยตรง |

---

### 🧠 OCR Capabilities

**Text Recognition:**
- 🔢 **Numbers**: อ่านตัวเลข (น้ำหนัก, จำนวนต้น)
- 🔤 **Text**: อ่านข้อความ (Batch ID, วันที่)
- 📊 **Tables**: อ่านตารางข้อมูล
- ✍️ **Handwriting**: อ่านลายมือเขียน (basic)

**AI Field Mapping:**
- 🤖 จับคู่ "Batch #2025-001" → ใส่ใน Batch ID
- 🤖 จับคู่ "125 kg" → ใส่ใน Yield field
- 🤖 จับคู่ "15/11/2025" → ใส่ใน Date field
- 🤖 เรียนรู้จากการแก้ไขของ user (improve accuracy)

---

### 📸 การทำงานของระบบ

```
1. 📸 ถ่ายรูปกระดาษ/บอร์ดผ่านมือถือ
   ↓
2. 🖼️ Preprocess image (crop, rotate, enhance)
   ↓
3. 🔍 OCR อ่านข้อความ + ตัวเลข
   ↓
4. 🤖 AI จับคู่ข้อมูลกับ field ที่ถูกต้อง
   ↓
5. ✏️ User ตรวจสอบ/แก้ไข (ถ้าจำเป็น)
   ↓
6. 💾 บันทึกเข้า Digital Logbook อัตโนมัติ
```

---

### 💬 สรุปในประโยคเดียว
> ระบบใช้ OCR + AI เพื่อแปลงข้อมูลจากกระดาษเป็นดิจิทัล
> ลดเวลาและ error ในการบันทึกข้อมูล 📸✨

---

# 🟩 Slide 3 – OCR Features

### 🎯 วัตถุประสงค์
แสดงความสามารถของ OCR Engine และ AI Field Mapping

---

### 🤖 OCR Features

| ฟีเจอร์ | รายละเอียด | Accuracy Target |
|---------|-------------|-----------------|
| 🔢 **Number Recognition** | อ่านตัวเลข (น้ำหนัก, จำนวนต้น) | >90% |
| 🔤 **Text Recognition** | อ่านข้อความ (Batch ID, วันที่, ชื่อพืช) | >80% |
| 📊 **Table Recognition** | อ่านตารางข้อมูล | >75% |
| ✍️ **Handwriting Recognition** | อ่านลายมือเขียน (basic) | >70% |
| 🤖 **Smart Field Mapping** | จับคู่ข้อมูลกับ field อัตโนมัติ | >85% |
| 📋 **Template Support** | รองรับ template สำหรับฟอร์มที่ใช้บ่อย | >90% |

---

### 📋 Supported Data Fields

**Basic Fields:**
- 🆔 **Batch ID**: เช่น "Batch #2025-001" หรือ "B001"
- 📅 **Date**: เช่น "15/11/2025" หรือ "15 Nov 2025"
- ⚖️ **Weight (kg)**: เช่น "125 kg" หรือ "125.5"
- 🌱 **Plant Count**: เช่น "500 ต้น" หรือ "500 plants"

**Advanced Fields:**
- 🥬 **Plant Type**: เช่น "Oak Lettuce" หรือ "Butterhead"
- 📝 **Notes**: ข้อความเพิ่มเติม
- 🌿 **Quality Grade**: เช่น "Grade A" หรือ "Premium"

---

### 🔍 OCR Example – Before & After

**Input (รูปถ่ายกระดาษ):**
```
─────────────────────────────────
  Batch #2025-015
  Oak Lettuce – Experiment A
  ─────────────────────────────
  Harvest Date: 15 Nov 2025
  Total Weight: 125.5 kg
  Plant Count: 450 ต้น
  Grade: A
  ─────────────────────────────
  Notes: Very good quality
         No defects observed
─────────────────────────────────
```

**OCR Output (หลัง AI Field Mapping):**
```
✅ Data Recognized:
┌─────────────────────────────────┐
│ Batch ID: 2025-015              │
│ Plant Type: Oak Lettuce         │
│ Experiment: A                   │
│ Harvest Date: 2025-11-15        │
│ Yield: 125.5 kg                 │
│ Plant Count: 450                │
│ Grade: A                        │
│ Notes: Very good quality        │
│        No defects observed      │
└─────────────────────────────────┘

Confidence Score: 92%
```

---

### 📋 Template Support

**Why Templates?**
- เพิ่มความแม่นยำ 20-30% โดยระบุว่า field ไหนอยู่ตรงไหนในภาพ
- ใช้สำหรับฟอร์มที่ใช้บ่อย ๆ
- ลดเวลาตรวจสอบและแก้ไข

**Template Types:**
```
📋 Template 1: Harvest Data Sheet
  - Batch ID (บรรทัดที่ 1)
  - Plant Type (บรรทัดที่ 2)
  - Date, Weight, Count (บรรทัดที่ 3-5)

📋 Template 2: Quick Entry Form
  - Batch ID + Weight ในบรรทัดเดียว
  - Simplified format

📋 Template 3: Detailed Report
  - รวม Quality metrics + Notes
```

---

### 🎯 Accuracy Targets

**Phase 1 (2 เดือน):**
- Number recognition **>90%**
- Text recognition **>80%**
- Processing time **<10 วินาที** per image
- False positive rate **<10%**

**Phase 2+ Targets:**
- Overall accuracy **>92%**
- Template accuracy **>95%**
- Handwriting recognition **>75%**
- User satisfaction **>4/5**

---

### 💬 สรุปสั้น
> OCR Features ช่วยให้ระบบอ่านข้อมูลจากกระดาษได้แม่นยำและรวดเร็ว
> ลด manual typing และ error ได้อย่างมีประสิทธิภาพ ✨

---

# 🟩 Slide 4 – System Operation Flow

### 🎯 วัตถุประสงค์
อธิบายลำดับขั้นตอนการทำงานของระบบและตัวอย่างการใช้งานจริง

---

### 🔄 ลำดับขั้นตอนการทำงาน

```

📸 Capture   →   🖼️ Preprocess   →   🔍 OCR   →   🤖 Map   →   ✏️ Review   →   💾 Save

```

| ขั้นตอน | รายละเอียด | Processing Time |
|----------|-------------|-----------------|
| 📸 **Capture** | ถ่ายรูปกระดาษ/บอร์ดผ่านมือถือ<br>• กดปุ่ม Capture<br>• Auto-focus และ crop<br>• แสดง preview | Real-time |
| 🖼️ **Preprocess** | ปรับปรุงภาพ<br>• Crop + Rotate<br>• Brightness/Contrast<br>• Noise reduction | <2 วินาที |
| 🔍 **OCR** | อ่านข้อความและตัวเลข<br>• Tesseract/Google Cloud Vision<br>• Extract text from image<br>• Confidence scoring | <5 วินาที |
| 🤖 **Map** | จับคู่ข้อมูลกับ field<br>• AI Field Mapping<br>• Named Entity Recognition<br>• Apply template (ถ้ามี) | <2 วินาที |
| ✏️ **Review** | User ตรวจสอบ/แก้ไข<br>• แสดงผลลัพธ์<br>• แก้ไขได้ทันที<br>• เรียนรู้จากการแก้ไข | Manual |
| 💾 **Save** | บันทึกเข้า Digital Logbook<br>• API integration<br>• Auto-sync<br>• Confirmation | <1 วินาที |

---

### 📅 Implementation Timeline (2 เดือน)

**เดือนที่ 1: OCR Development**
- Week 1-2: ติดตั้ง OCR engine, ทดสอบกับภาพตัวอย่าง
- Week 3-4: พัฒนา mobile app (camera + preview)

**เดือนที่ 2: Integration & Testing**
- Week 5-6: Field mapping logic, Integration กับ Digital Logbook
- Week 7-8: User testing, Template creation, Presentation

---

### 💡 ตัวอย่างการใช้งานจริง

**Scenario: ทีม RD เก็บเกี่ยว Oak Lettuce**

**Step 1: เขียนบนบอร์ด (ในโรงเรือน)**
```
เขียนบนบอร์ด:
─────────────────────────────────
  Batch #2025-015
  Oak Lettuce
  15 Nov 2025
  125.5 kg
  450 plants
─────────────────────────────────
เวลา: 5 นาที
```

**Step 2: ถ่ายรูปและ OCR อ่าน**
```
📸 เปิด mobile app → ถ่ายรูปบอร์ด
🔍 OCR กำลังประมวลผล...
⏱️ เวลา: 8 วินาที

✅ ผลลัพธ์:
┌─────────────────────────────────┐
│ Batch ID: 2025-015              │
│ Plant Type: Oak Lettuce         │
│ Date: 2025-11-15                │
│ Yield: 125.5 kg                 │
│ Plant Count: 450                │
└─────────────────────────────────┘
Confidence: 94%
```

**Step 3: ตรวจสอบและแก้ไข**
```
✏️ User reviews:
- Batch ID: ✓ ถูกต้อง
- Plant Type: ✓ ถูกต้อง
- Date: ✓ ถูกต้อง
- Yield: ✓ ถูกต้อง
- Plant Count: ✓ ถูกต้อง

เวลาตรวจสอบ: 2 นาที
```

**Step 4: บันทึกเข้า Digital Logbook**
```
💾 กดปุ่ม "Save"
✅ บันทึกสำเร็จ!
ข้อมูลถูกบันทึกเข้า Digital Logbook แล้ว

เวลา: 1 วินาที
```

---

### 📊 เปรียบเทียบ Before & After

**Before OCR (ปัจจุบัน):**
```
1. เก็บเกี่ยว → เขียนบนกระดาษ (5 นาที)
2. กลับออฟฟิศ → พิมพ์ใหม่ใน Excel (15 นาที)
3. Double-check (5 นาที)
---
รวม: 25 นาที/batch
❌ Data entry error: 5-10%
```

**After OCR (ระบบใหม่):**
```
1. เก็บเกี่ยว → เขียนบนกระดาษ (5 นาที)
2. ถ่ายรูป → OCR อ่าน → ตรวจสอบ (3 นาที)
---
รวม: 8 นาที/batch
✅ Data entry error: <1%
✅ ประหยัด: 17 นาที/batch (65%)
```

**ผลประหยัดเวลาต่อสัปดาห์:**
```
สมมุติทีม RD ทำ 15 batches/สัปดาห์
Before: 15 × 25 นาที = 375 นาที (6.25 ชม)
After:  15 × 8 นาที = 120 นาที (2 ชม)
─────────────────────────────────────────
ประหยัด: 255 นาที/สัปดาห์ = 4.25 ชม/สัปดาห์
```

---

### 👥 ผู้ใช้งานระบบ (Target Users)

**ผู้ใช้งานหลัก (Primary Users):**
- 🌱 **นักพัฒนาพืช / นักวิจัย R&D**
  - บันทึกผลผลิตหลังเก็บเกี่ยวได้เร็วขึ้น
  - ประหยัดเวลาพิมพ์ข้อมูลซ้ำ
  - ทำงานได้ทุกที่ผ่านมือถือ

**ผู้ใช้งานรอง (Secondary Users):**
- 👷 **Operators**
  - บันทึกข้อมูลจากกระดาษได้เร็วขึ้น
- 👨‍💼 **Operations Manager**
  - ได้ข้อมูลเร็วขึ้น แม่นยำขึ้น

**💰 Value Proposition:**
> "**ถ่ายรูป → ระบบอ่านให้** ไม่ต้องพิมพ์ซ้ำอีกต่อไป"
> → **⚡ Time Saving** (ประหยัดเวลา 65%, ลด error 80%)

---

### 🎯 Success Metrics

**Technical Metrics:**
- OCR accuracy **>90%** สำหรับตัวเลข
- OCR accuracy **>80%** สำหรับข้อความ
- Processing time **<10 วินาที** ต่อภาพ
- False positive rate **<10%**

**Business Metrics:**
- ลดเวลาบันทึกข้อมูล **65%**
- ลด data entry error **80%**
- ประหยัดเวลา **4+ ชม/สัปดาห์** สำหรับทีม RD
- Adoption rate **>80%** จากทีม RD
- User satisfaction **>4/5**

---

### 💡 Expected Outcomes

**Phase 1 (2 เดือน):**
- ✅ Mobile app ใช้งานได้ (iOS/Android)
- ✅ OCR accuracy >90% สำหรับตัวเลข
- ✅ OCR accuracy >80% สำหรับข้อความ
- ✅ Template support สำหรับแบบฟอร์ม 3-5 แบบที่ใช้บ่อย
- ✅ Integration กับ Digital Logbook สำเร็จ

**Phase 2+ (อนาคต):**
- 🚀 Handwriting recognition improvement
- 🚀 Multi-language support (ไทย + อังกฤษ)
- 🚀 Voice input support
- 🚀 Offline mode (sync ทีหลัง)

---

### 💬 สรุปในประโยคเดียว
> ระบบ OCR ช่วยให้ทีม RD ประหยัดเวลา 65% และลด error 80%
> เพิ่มประสิทธิภาพในการบันทึกข้อมูลอย่างมีนัยสำคัญ 📸✨

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
| Project | OCR-Based Harvest Data Entry Tool |
| Company | Civic AgroTech |
| Author | Civic AgroTech R&D Team |
| Version | 1.0 |
| Updated | 4 Nov 2025 |
| Font | Kanit (Bold / Medium / Regular) |
| Theme | Green–Blue (AgriTech Minimal) |

---

> 🔖 *File:* `OCR-Based-Harvest-Data-Entry-Tool-Slides.md`
> *Purpose:* รวมเนื้อหาสไลด์นำเสนอ OCR-Based Harvest Data Entry Tool ครบทุกหัวข้อ
> *Use:* สำหรับเตรียมสร้าง PowerPoint Template และใช้สื่อสารกับทีม Design / Management
