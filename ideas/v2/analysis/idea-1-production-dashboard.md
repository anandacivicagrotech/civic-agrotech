# 📊 Idea 1: Production Dashboard - Analysis

**วันที่วิเคราะห์:** 6 พฤศจิกายน 2025
**สถานะ:** ✅ วิเคราะห์เสร็จสมบูรณ์
**ผู้วิเคราะห์:** Technical Analysis Team

---

## 📋 ภาพรวม (Overview)

### ชื่อโครงการ
**Production Dashboard** (ปรับจาก PFAL Efficiency Analyzer)

### ปัญหาที่แก้ไข
ตอนนี้ผู้จัดการต้องดูข้อมูลผลผลิตที่นี่ ดูค่าไฟที่นั่น แล้วมาคำนวณต้นทุนเอง ทำให้:
- ⏱️ เสียเวลาในการรวบรวมข้อมูลจากหลายแหล่ง
- ❌ คำนวณผิดพลาดได้ง่าย
- 📊 ไม่เห็นภาพรวมและแนวโน้ม
- 💰 ไม่สามารถแยกต้นทุนของแต่ละชนิดผักได้ถูกต้อง (แม้ปลูกรวมกัน)

### โซลูชัน (Solution)
ทำหน้าเว็บที่รวมข้อมูลทั้งหมดไว้ในที่เดียว ดูง่าย คำนวณให้อัตโนมัติ แสดงผลเป็นกราฟและตาราง เปรียบเทียบประสิทธิภาพแต่ละชนิดผัก

---

## 🎯 สิ่งที่ระบบจะทำ (Features)

### Core Features
1. ✅ **ดึงข้อมูลผลผลิต** มาแสดง (น้ำหนัก, ชนิดผัก, วันที่เก็บเกี่ยว)
2. ✅ **ดึงข้อมูลค่าไฟ** มาแสดงด้วย (ไม่ต้องไปดู dashboard อื่น)
3. ✅ **คำนวณต้นทุนต่อ kg** ให้อัตโนมัติ
4. ✅ **แยกต้นทุนของแต่ละชนิดผัก** ได้ถูกต้อง (แม้ปลูกรวมกัน)
5. ✅ **ทำกราฟแสดงแนวโน้ม** ผลผลิตแต่ละเดือน

### Advanced Features (Phase 2+)
6. ⭐ เปรียบเทียบกับมาตรฐานอุตสาหกรรม (Benchmark)
7. ⭐ แนะนำ Crop Mix ที่ประหยัดพลังงานที่สุด
8. ⭐ คำนวณ Break-even Point
9. ⭐ Export รายงาน PDF/Excel

---

## 👥 ผู้ใช้งาน (Target Users)

| กลุ่มผู้ใช้ | ระดับ | การใช้งาน |
|------------|-------|-----------|
| **👨‍💼 ผู้จัดการโรงปลูก** | Primary | ดูภาพรวมผลผลิต, ต้นทุน, วิเคราะห์แนวโน้ม |
| **💼 Management/เจ้าของ** | Primary | ตัดสินใจเชิงธุรกิจ, วางแผนการลงทุน |
| **🌱 ทีม R&D** | Secondary | วิเคราะห์ว่าชนิดผักไหนคุ้มค่า, ปรับสูตรปลูก |
| **📊 ทีมบัญชี** | Secondary | ตรวจสอบต้นทุน, จัดทำรายงานการเงิน |

---

## 🔍 การวิเคราะห์การคำนวณต้นทุนพลังงาน

### ⚠️ ความท้าทายหลัก
> **"แยกต้นทุนของแต่ละชนิดผักได้ถูกต้อง (แม้ปลูกรวมกัน)"**

ในระบบ PFAL มักจะมีหลายชนิดผักปลูกในโรงเรือนเดียวกัน แต่:
- 💡 **ใช้ไฟฟ้าร่วมกัน** (ระบบแสง, ปั๊มน้ำ, แอร์)
- ⏱️ **ระยะเวลาปลูกต่างกัน** (ผักบางชนิดเก็บเกี่ยว 21 วัน บางชนิด 35 วัน)
- 📐 **พื้นที่ใช้ต่างกัน** (ผักบางชนิดใช้พื้นที่มาก บางชนิดน้อย)

---

## 🧮 แนวทางการคำนวณต้นทุนพลังงาน

### **วิธีที่ 1: Area-Time Based Allocation** ⭐ แนะนำสำหรับ Phase 1

**หลักการ:** จัดสรรพลังงานตามสัดส่วนของพื้นที่และเวลา

**สูตร:**
```
Area-Time Units = พื้นที่ที่ใช้ (m²) × ระยะเวลาปลูก (วัน)
Crop Ratio = Area-Time Units ของ crop นี้ / Area-Time Units รวมทั้งหมด
Allocated Energy = Total Energy × Crop Ratio
Energy per kg = Allocated Energy / ผลผลิต (kg)
```

**ตัวอย่าง:**
```
โรงเรือน 100 m² ใช้ไฟ 1,000 kWh/เดือน

ผักกาดหอม:
- พื้นที่: 40 m²
- ระยะเวลา: 40 วัน
- ผลผลิต: 50 kg
- Area-Time Units = 40 × 40 = 1,600 m²·day
- Crop Ratio = 1,600 / 5,000 = 0.32
- Allocated Energy = 1,000 × 0.32 = 320 kWh
- Energy per kg = 320 / 50 = 6.4 kWh/kg

คะน้า:
- พื้นที่: 60 m²
- ระยะเวลา: 30 วัน
- ผลผลิต: 80 kg
- Area-Time Units = 60 × 30 = 1,800 m²·day
- Crop Ratio = 1,800 / 5,000 = 0.36
- Allocated Energy = 1,000 × 0.36 = 360 kWh
- Energy per kg = 360 / 80 = 4.5 kWh/kg
```

**ข้อดี:**
- ✅ เข้าใจง่าย
- ✅ ข้อมูลที่ต้องการน้อย
- ✅ เหมาะสำหรับเริ่มต้น

**ข้อเสีย:**
- ❌ ไม่คำนึงถึงปริมาณแสงจริงที่แต่ละผักได้รับ
- ❌ สมมติว่าทุกพื้นที่ใช้พลังงานเท่ากัน

---

### **วิธีที่ 2: PPFD-Based Allocation** ⭐⭐ แนะนำสำหรับ Phase 2

**หลักการ:** จัดสรรตามปริมาณแสงจริงที่แต่ละผักได้รับ

**สูตร:**
```
DLI (mol/m²/day) = PPFD (µmol/m²/s) × Photoperiod (ชม.) × 3600 / 1,000,000
Light Energy Units = พื้นที่ × DLI × ระยะเวลาปลูก
Allocated Lighting Energy = Total Lighting Energy × (Light Energy Units / Total Light Energy Units)
Allocated Other Energy = Total Other Energy × Area-Time Ratio
Total Allocated Energy = Allocated Lighting Energy + Allocated Other Energy
```

**ตัวอย่าง:**
```
ผักกาดหอม:
- PPFD: 200 µmol/m²/s
- Photoperiod: 16 ชม./วัน
- DLI = 200 × 16 × 3600 / 1,000,000 = 11.52 mol/m²/day
- พื้นที่: 40 m²
- ระยะเวลา: 40 วัน
- Light Energy Units = 40 × 11.52 × 40 = 18,432 mol

คะน้า:
- PPFD: 250 µmol/m²/s
- Photoperiod: 14 ชม./วัน
- DLI = 250 × 14 × 3600 / 1,000,000 = 12.6 mol/m²/day
- พื้นที่: 60 m²
- ระยะเวลา: 30 วัน
- Light Energy Units = 60 × 12.6 × 30 = 22,680 mol

รวม Light Energy Units = 41,112 mol

ถ้า Lighting Energy = 700 kWh, Other Energy = 300 kWh:

ผักกาดหอม:
- Allocated Lighting = 700 × (18,432 / 41,112) = 313.8 kWh
- Allocated Other = 300 × 0.32 = 96 kWh
- Total = 409.8 kWh
- Energy per kg = 409.8 / 50 = 8.2 kWh/kg
```

**ข้อดี:**
- ✅ แม่นยำกว่า เพราะคิดจากปริมาณแสงที่พืชได้รับจริง
- ✅ สามารถเปรียบเทียบประสิทธิภาพระหว่างชั้น (Tier) ได้
- ✅ รองรับการปรับ light intensity ตามชนิดพืช

**ข้อเสีย:**
- ❌ ต้องมี PPFD Meter (฿23,000)
- ❌ ต้องบันทึกข้อมูล PPFD อย่างสม่ำเสมอ
- ❌ การคำนวณซับซ้อนกว่า

---

### **วิธีที่ 3: Zone-Based Allocation** ⭐⭐⭐ สำหรับ Phase 2+ (ถ้ามี Controller Gen3)

**หลักการ:** ใช้ข้อมูลการใช้ไฟจริงของแต่ละโซน

**เงื่อนไข:**
- ต้องมี Controller Gen3 (฿30,000) ที่ควบคุม 16 โซนไฟ
- ต้องมี smart meter แยกตามโซน

**สูตร:**
```
Allocated Energy = Σ(Zone Energy[zone_id]) สำหรับทุกโซนที่ crop นี้ใช้
```

**ข้อดี:**
- ✅ แม่นยำที่สุด ใช้ข้อมูลจริง
- ✅ ไม่ต้องคำนวณซับซ้อน
- ✅ สามารถติดตามการใช้ไฟแบบ real-time

**ข้อเสีย:**
- ❌ ต้องมี hardware เพิ่มเติม (smart meter แต่ละโซน)
- ❌ ต้นทุนการติดตั้งสูง
- ❌ ต้องปรับโครงสร้างระบบไฟฟ้า

---

## 📊 ตัวแปรที่จำเป็นทั้งหมด

### 🌱 **หมวดที่ 1: ข้อมูลพืช (Crop Data)**

| ตัวแปร | ประเภท | หน่วย | คำอธิบาย | ระดับความจำเป็น |
|--------|--------|-------|----------|-----------------|
| `crop_id` | String | - | รหัสประจำตัว crop | ⭐⭐⭐ |
| `crop_name` | String | - | ชื่อผัก (เช่น ผักกาดหอม, คะน้า) | ⭐⭐⭐ |
| `variety` | String | - | พันธุ์ (เช่น Butterhead, Romaine) | ⭐⭐ |
| `planting_date` | Date | - | วันที่เพาะ | ⭐⭐⭐ |
| `transplant_date` | Date | - | วันที่ย้ายปลูก | ⭐⭐ |
| `harvest_date` | Date | - | วันที่เก็บเกี่ยว | ⭐⭐⭐ |
| `growth_days` | Integer | วัน | ระยะเวลาปลูก (คำนวณได้) | ⭐⭐⭐ |
| `harvest_weight` | Float | kg | น้ำหนักผลผลิตรวม | ⭐⭐⭐ |
| `plant_count` | Integer | ต้น | จำนวนต้นที่ปลูก | ⭐⭐ |
| `avg_weight_per_plant` | Float | g/ต้น | น้ำหนักเฉลี่ยต่อต้น (คำนวณได้) | ⭐ |

---

### 📐 **หมวดที่ 2: ข้อมูลพื้นที่ (Area Data)**

| ตัวแปร | ประเภท | หน่วย | คำอธิบาย | ระดับความจำเป็น |
|--------|--------|-------|----------|-----------------|
| `total_farm_area` | Float | m² | พื้นที่รวมทั้งฟาร์ม | ⭐⭐⭐ |
| `crop_area` | Float | m² | พื้นที่ที่ crop นี้ใช้ | ⭐⭐⭐ |
| `tier_count` | Integer | ชั้น | จำนวนชั้น (Vertical farming) | ⭐⭐ |
| `effective_area` | Float | m² | พื้นที่จริงที่ใช้ (area × tier) | ⭐⭐⭐ |
| `zone_id` | String | - | โซนที่ปลูก (เช่น Zone A, B) | ⭐⭐ |
| `tray_count` | Integer | ถาด | จำนวนถาดที่ใช้ | ⭐ |
| `tray_type` | String | - | ประเภทถาด (Gen3, Ebb&Flow) | ⭐ |

---

### ⚡ **หมวดที่ 3: ข้อมูลพลังงาน (Energy Data)**

| ตัวแปร | ประเภท | หน่วย | คำอธิบาย | ระดับความจำเป็น |
|--------|--------|-------|----------|-----------------|
| `total_energy_monthly` | Float | kWh | พลังงานรวมต่อเดือน | ⭐⭐⭐ |
| `lighting_energy` | Float | kWh | พลังงานส่วนแสง LED | ⭐⭐ |
| `hvac_energy` | Float | kWh | พลังงานส่วนแอร์/ระบายอากาศ | ⭐⭐ |
| `pump_energy` | Float | kWh | พลังงานส่วนปั๊มน้ำ | ⭐⭐ |
| `other_energy` | Float | kWh | พลังงานอื่นๆ | ⭐ |
| `electricity_rate` | Float | ฿/kWh | ค่าไฟต่อหน่วย | ⭐⭐⭐ |
| `ppfd_avg` | Float | µmol/m²/s | PPFD เฉลี่ยที่พืชได้รับ | ⭐⭐ (Phase 2) |
| `photoperiod` | Float | ชม./วัน | จำนวนชั่วโมงเปิดไฟต่อวัน | ⭐⭐ |
| `dli` | Float | mol/m²/day | Daily Light Integral (คำนวณได้) | ⭐⭐ (Phase 2) |

**สูตร DLI:**
```javascript
DLI = PPFD × photoperiod × 3600 / 1,000,000
```

---

### 🌡️ **หมวดที่ 4: ข้อมูลสภาพแวดล้อม (Environment Data)** - Optional

| ตัวแปร | ประเภท | หน่วย | คำอธิบาย | ระดับความจำเป็น |
|--------|--------|-------|----------|-----------------|
| `temperature_avg` | Float | °C | อุณหภูมิเฉลี่ย | ⭐ |
| `temperature_min` | Float | °C | อุณหภูมิต่ำสุด | ⭐ |
| `temperature_max` | Float | °C | อุณหภูมิสูงสุด | ⭐ |
| `humidity_avg` | Float | % | ความชื้นเฉลี่ย | ⭐ |
| `co2_avg` | Float | ppm | CO₂ เฉลี่ย | ⭐ |
| `vpd` | Float | kPa | Vapor Pressure Deficit (คำนวณได้) | ⭐ |

---

### 💧 **หมวดที่ 5: ข้อมูลน้ำและธาตุอาหาร (Water & Nutrient Data)** - Optional

| ตัวแปร | ประเภท | หน่วย | คำอธิบาย | ระดับความจำเป็น |
|--------|--------|-------|----------|-----------------|
| `water_usage` | Float | L | ปริมาณน้ำที่ใช้ | ⭐ |
| `ec_avg` | Float | mS/cm | EC เฉลี่ย | ⭐ |
| `ph_avg` | Float | - | pH เฉลี่ย | ⭐ |
| `fertilizer_a_used` | Float | L | ปริมาณปุ๋ย A ที่ใช้ | ⭐ |
| `fertilizer_b_used` | Float | L | ปริมาณปุ๋ย B ที่ใช้ | ⭐ |
| `fertilizer_cost` | Float | ฿ | ต้นทุนปุ๋ยรวม | ⭐ |

---

### 💰 **หมวดที่ 6: ตัวแปรคำนวณต้นทุน (Calculated Variables)**

| ตัวแปร | ประเภท | หน่วย | สูตร |
|--------|--------|-------|------|
| `energy_cost_total` | Float | ฿ | `total_energy × electricity_rate` |
| `allocated_energy` | Float | kWh | ดูสูตรการจัดสรร (Method 1, 2, หรือ 3) |
| `energy_per_kg` | Float | kWh/kg | `allocated_energy / harvest_weight` |
| `energy_cost_per_kg` | Float | ฿/kg | `(allocated_energy × electricity_rate) / harvest_weight` |
| `cost_per_kg` | Float | ฿/kg | `(energy_cost + water_cost + fertilizer_cost) / harvest_weight` |
| `water_per_kg` | Float | L/kg | `water_usage / harvest_weight` |

---

### 📈 **หมวดที่ 7: ตัวแปรเปรียบเทียย (Comparison Variables)** - Phase 2+

| ตัวแปร | ประเภท | หน่วย | คำอธิบาย |
|--------|--------|-------|----------|
| `industry_benchmark_energy` | Float | kWh/kg | มาตรฐานอุตสาหกรรม |
| `previous_crop_energy` | Float | kWh/kg | ค่า crop ก่อนหน้า |
| `efficiency_score` | Float | % | `(benchmark / actual) × 100` |
| `profitability` | Float | ฿/kg | `selling_price - cost_per_kg` |

---

## 📋 สรุป: ตัวแปรขั้นต่ำสำหรับแต่ละ Phase

### ✅ **Phase 1 (MVP) - Area-Time Based**

**ตัวแปรที่ต้องมี:**
1. ✅ `crop_name` - ชื่อผัก
2. ✅ `planting_date` - วันที่เพาะ
3. ✅ `harvest_date` - วันที่เก็บเกี่ยว
4. ✅ `harvest_weight` - ผลผลิต (kg)
5. ✅ `crop_area` - พื้นที่ใช้ (m²)
6. ✅ `total_energy_monthly` - ค่าไฟรวม (kWh)
7. ✅ `electricity_rate` - ค่าไฟต่อหน่วย (฿/kWh)

**ความสามารถ:**
- คำนวณ `energy_per_kg` ได้
- คำนวณ `cost_per_kg` ได้
- เปรียบเทียบระหว่างชนิดผักได้

**ระยะเวลาพัฒนา:** 2 เดือน

---

### ⭐ **Phase 2 (Advanced) - PPFD-Based**

**ตัวแปรเพิ่มเติม:**
8. ⭐ `ppfd_avg` - PPFD เฉลี่ย (µmol/m²/s)
9. ⭐ `photoperiod` - ชั่วโมงเปิดไฟ
10. ⭐ `lighting_energy` - พลังงานส่วนแสง
11. ⭐ `hvac_energy` - พลังงานส่วนแอร์
12. ⭐ `pump_energy` - พลังงานส่วนปั๊ม
13. ⭐ `zone_id` - โซนที่ปลูก

**ความสามารถ:**
- คำนวณ DLI
- จัดสรรพลังงานแม่นยำขึ้น
- แยกต้นทุนตามระบบ (แสง, แอร์, ปั๊ม)

**ระยะเวลาพัฒนา:** +1 เดือน (รวม 3 เดือน)

---

### 🚀 **Phase 3 (Comprehensive) - Full Cost Analysis**

**ตัวแปรเพิ่มเติม:**
14. 🚀 `water_usage` - ปริมาณน้ำ (L)
15. 🚀 `fertilizer_cost` - ต้นทุนปุ๋ย (฿)
16. 🚀 `industry_benchmark` - มาตรฐานอุตสาหกรรม
17. 🚀 Environment variables (temp, humidity, CO₂)

**ความสามารถ:**
- ต้นทุนรวมทั้งหมด (ไฟ + น้ำ + ปุ๋ย)
- เปรียบเทียบกับมาตรฐาน
- วิเคราะห์แนวโน้ม
- แนะนำการปรับปรุง

**ระยะเวลาพัฒนา:** +1 เดือน (รวม 4 เดือน)

---

## 🗄️ โครงสร้าง Database

### **Table: crops**
```sql
CREATE TABLE crops (
  -- Primary Key
  id INT PRIMARY KEY AUTO_INCREMENT,

  -- Crop Information
  crop_name VARCHAR(100) NOT NULL,
  variety VARCHAR(100),

  -- Dates
  planting_date DATE NOT NULL,
  transplant_date DATE,
  harvest_date DATE NOT NULL,
  growth_days INT GENERATED ALWAYS AS (DATEDIFF(harvest_date, planting_date)) STORED,

  -- Production
  harvest_weight FLOAT NOT NULL COMMENT 'kg',
  plant_count INT,
  avg_weight_per_plant FLOAT GENERATED ALWAYS AS (harvest_weight * 1000 / plant_count) STORED COMMENT 'g',

  -- Area
  crop_area FLOAT NOT NULL COMMENT 'm²',
  tier_count INT DEFAULT 1,
  effective_area FLOAT GENERATED ALWAYS AS (crop_area * tier_count) STORED COMMENT 'm²',
  zone_id VARCHAR(50),

  -- Tray Info
  tray_count INT,
  tray_type VARCHAR(50),

  -- Metadata
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

  -- Indexes
  INDEX idx_harvest_date (harvest_date),
  INDEX idx_crop_name (crop_name),
  INDEX idx_zone (zone_id)
);
```

---

### **Table: energy_logs**
```sql
CREATE TABLE energy_logs (
  -- Primary Key
  id INT PRIMARY KEY AUTO_INCREMENT,

  -- Date
  log_date DATE NOT NULL,

  -- Energy Data
  total_energy FLOAT NOT NULL COMMENT 'kWh',
  lighting_energy FLOAT COMMENT 'kWh',
  hvac_energy FLOAT COMMENT 'kWh',
  pump_energy FLOAT COMMENT 'kWh',
  other_energy FLOAT COMMENT 'kWh',

  -- Cost
  electricity_rate FLOAT NOT NULL COMMENT '฿/kWh',
  total_cost FLOAT GENERATED ALWAYS AS (total_energy * electricity_rate) STORED COMMENT '฿',

  -- Zone (if applicable)
  zone_id VARCHAR(50),

  -- Metadata
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

  -- Indexes
  UNIQUE KEY unique_log_date_zone (log_date, zone_id),
  INDEX idx_log_date (log_date)
);
```

---

### **Table: crop_energy_allocation** (Result Table)
```sql
CREATE TABLE crop_energy_allocation (
  -- Primary Key
  id INT PRIMARY KEY AUTO_INCREMENT,

  -- Foreign Keys
  crop_id INT NOT NULL,

  -- Allocation Method
  allocation_method ENUM('area_time', 'ppfd_based', 'zone_based') NOT NULL,

  -- Allocated Energy
  allocated_energy FLOAT NOT NULL COMMENT 'kWh',
  allocated_lighting FLOAT COMMENT 'kWh',
  allocated_hvac FLOAT COMMENT 'kWh',
  allocated_pump FLOAT COMMENT 'kWh',

  -- Calculated Metrics
  energy_per_kg FLOAT GENERATED ALWAYS AS (allocated_energy / (SELECT harvest_weight FROM crops WHERE id = crop_id)) STORED COMMENT 'kWh/kg',
  energy_cost FLOAT COMMENT '฿',
  cost_per_kg FLOAT COMMENT '฿/kg',

  -- Calculation Parameters
  area_time_units FLOAT COMMENT 'm²·day',
  crop_ratio FLOAT COMMENT 'allocation ratio',

  -- Metadata
  calculated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

  -- Foreign Key Constraint
  FOREIGN KEY (crop_id) REFERENCES crops(id) ON DELETE CASCADE,

  -- Indexes
  INDEX idx_crop (crop_id),
  INDEX idx_method (allocation_method)
);
```

---

### **Table: environment_logs** (Optional - Phase 2+)
```sql
CREATE TABLE environment_logs (
  -- Primary Key
  id INT PRIMARY KEY AUTO_INCREMENT,

  -- Foreign Key
  crop_id INT,

  -- Timestamp
  log_timestamp TIMESTAMP NOT NULL,

  -- Environment Data
  temperature FLOAT COMMENT '°C',
  humidity FLOAT COMMENT '%',
  co2 FLOAT COMMENT 'ppm',

  -- Nutrient Data
  ec FLOAT COMMENT 'mS/cm',
  ph FLOAT,

  -- Light Data
  ppfd FLOAT COMMENT 'µmol/m²/s',
  photoperiod FLOAT COMMENT 'hours',
  dli FLOAT GENERATED ALWAYS AS (ppfd * photoperiod * 3600 / 1000000) STORED COMMENT 'mol/m²/day',

  -- Zone
  zone_id VARCHAR(50),

  -- Foreign Key Constraint
  FOREIGN KEY (crop_id) REFERENCES crops(id) ON DELETE SET NULL,

  -- Indexes
  INDEX idx_crop_timestamp (crop_id, log_timestamp),
  INDEX idx_timestamp (log_timestamp)
);
```

---

### **Table: water_nutrient_logs** (Optional - Phase 3)
```sql
CREATE TABLE water_nutrient_logs (
  -- Primary Key
  id INT PRIMARY KEY AUTO_INCREMENT,

  -- Foreign Key
  crop_id INT NOT NULL,

  -- Date
  log_date DATE NOT NULL,

  -- Water
  water_usage FLOAT COMMENT 'L',

  -- Fertilizer
  fertilizer_a_used FLOAT COMMENT 'L',
  fertilizer_b_used FLOAT COMMENT 'L',
  fertilizer_a_cost FLOAT COMMENT '฿',
  fertilizer_b_cost FLOAT COMMENT '฿',
  total_fertilizer_cost FLOAT GENERATED ALWAYS AS (fertilizer_a_cost + fertilizer_b_cost) STORED COMMENT '฿',

  -- Foreign Key Constraint
  FOREIGN KEY (crop_id) REFERENCES crops(id) ON DELETE CASCADE,

  -- Indexes
  INDEX idx_crop_date (crop_id, log_date)
);
```

---

## 📊 ตัวอย่าง Dashboard UI

### หน้าหลัก (Overview)
```
┌───────────────────────────────────────────────────────────────┐
│ 📊 Production Dashboard - พฤศจิกายน 2025                     │
├───────────────────────────────────────────────────────────────┤
│                                                               │
│ 💡 Total Energy: 3,500 kWh        ⚡ Avg Cost: 14.2 kWh/kg  │
│ 🌱 Total Harvest: 246 kg          💰 Total Cost: ฿2,130     │
│ 📊 Efficiency Score: 87%          📈 Trend: ↗ +5% vs last   │
│                                                               │
└───────────────────────────────────────────────────────────────┘

┌───────────────────────────────────────────────────────────────┐
│ 📈 Energy Efficiency by Crop Type                            │
├──────────────┬─────────┬────────┬──────────┬─────────────────┤
│ ชนิดผัก      │ ผลผลิต  │ พื้นที่ │ kWh/kg   │ ต้นทุน/kg      │
├──────────────┼─────────┼────────┼──────────┼─────────────────┤
│ ผักกาดหอม    │ 120 kg  │ 45 m²  │ 12.5 ⚡  │ ฿6.88 ✅       │
│ คะน้า        │ 80 kg   │ 35 m²  │ 15.2 ⚡  │ ฿8.36 ⚠️       │
│ ผักกาดขาว    │ 46 kg   │ 20 m²  │ 18.0 ⚡  │ ฿9.90 ❌       │
├──────────────┼─────────┼────────┼──────────┼─────────────────┤
│ **รวม**      │ 246 kg  │ 100 m² │ 14.2     │ ฿7.81          │
└──────────────┴─────────┴────────┴──────────┴─────────────────┘

💡 Insight: ผักกาดหอมมีประสิทธิภาพพลังงานดีที่สุด
⚠️ Warning: ผักกาดขาวใช้พลังงานสูง ควรปรับ PPFD หรือ cycle time
📊 Benchmark: มาตรฐานอุตสาหกรรม 13.5 kWh/kg (คุณอยู่ที่ 14.2)
```

---

### กราฟแนวโน้ม
```
Energy Efficiency Trend (Last 6 Months)

kWh/kg
20 │
   │                        ●─╮         ผักกาดขาว
18 │                     ●─╯  ╰─●      (18.0)
   │
16 │               ●─●─●
   │            ●─╯                     คะน้า
15 │         ●─╯                        (15.2)
   │
14 │  ■─■─■─■─■─■                     Industry Benchmark
   │                                    (13.5)
12 │  ♦─♦─╮
   │      ╰─♦─♦─♦─♦                    ผักกาดหอม
   │                                    (12.5)
10 │
   └─┬──┬──┬──┬──┬──┬──
     มิ.ย. ก.ค. ส.ค. ก.ย. ต.ค. พ.ย.

📊 Analysis:
- ผักกาดหอม: ประสิทธิภาพคงที่ ต่ำกว่า benchmark 7%
- คะน้า: เพิ่มขึ้นเล็กน้อย สูงกว่า benchmark 13%
- ผักกาดขาว: สูงที่สุด ควรปรับปรุง
```

---

### หน้า Detail ของแต่ละ Crop
```
┌───────────────────────────────────────────────────────────────┐
│ 🌱 Crop Detail: ผักกาดหอม (Butterhead) - Batch #2511-001     │
├───────────────────────────────────────────────────────────────┤
│                                                               │
│ 📅 Planting: 2025-10-15  →  Harvest: 2025-11-24 (40 days)  │
│ 📊 Harvest: 120 kg (8,000 plants × 15g avg)                 │
│ 📐 Area: 45 m² (2 tiers × 22.5 m²)                          │
│ 📍 Zone: Zone A, B                                           │
│                                                               │
├───────────────────────────────────────────────────────────────┤
│ ⚡ Energy Breakdown                                          │
├───────────────────────────────────────────────────────────────┤
│                                                               │
│ Total Allocated Energy: 1,500 kWh                            │
│                                                               │
│ ┌─────────────┐                                              │
│ │ 💡 Lighting │ 1,050 kWh (70%)  ████████████████████████   │
│ └─────────────┘                                              │
│ ┌─────────────┐                                              │
│ │ ❄️ HVAC     │   300 kWh (20%)  ██████                     │
│ └─────────────┘                                              │
│ ┌─────────────┐                                              │
│ │ 💧 Pump     │   150 kWh (10%)  ███                        │
│ └─────────────┘                                              │
│                                                               │
├───────────────────────────────────────────────────────────────┤
│ 💰 Cost Analysis                                             │
├───────────────────────────────────────────────────────────────┤
│                                                               │
│ Energy per kg:     12.5 kWh/kg                               │
│ Electricity rate:  ฿5.50/kWh                                 │
│ Energy cost:       ฿68.75/batch  (฿6.88/kg)                  │
│ Water cost:        ฿15.00/batch  (฿1.50/kg)                  │
│ Fertilizer cost:   ฿25.00/batch  (฿2.50/kg)                  │
│ ────────────────────────────────────                         │
│ Total cost:        ฿108.75/batch (฿10.88/kg)                 │
│                                                               │
│ Selling price:     ฿18.00/kg                                 │
│ Profit:            ฿7.12/kg (40% margin) ✅                  │
│                                                               │
├───────────────────────────────────────────────────────────────┤
│ 📊 Environment Summary                                       │
├───────────────────────────────────────────────────────────────┤
│                                                               │
│ PPFD avg:      200 µmol/m²/s                                 │
│ Photoperiod:   16 hours/day                                  │
│ DLI:           11.52 mol/m²/day                              │
│                                                               │
│ Temperature:   22-26°C (avg: 24°C)                           │
│ Humidity:      65-75% (avg: 70%)                             │
│ CO₂:           800-1000 ppm (avg: 900 ppm)                   │
│                                                               │
│ EC:            1.8-2.2 mS/cm (avg: 2.0)                      │
│ pH:            5.8-6.2 (avg: 6.0)                            │
│                                                               │
└───────────────────────────────────────────────────────────────┘

[Export PDF] [Export Excel] [Compare with Previous Batch]
```

---

## 💻 Tech Stack แนะนำ

### Frontend
```
- Framework: React.js / Next.js
- UI Library: Material-UI / Ant Design / Tailwind CSS
- Charts: Chart.js / Recharts / Apache ECharts
- State Management: Redux / Zustand
- Form Handling: React Hook Form
```

### Backend
```
- Framework: Node.js + Express / NestJS
- Database: MySQL / PostgreSQL
- ORM: Prisma / TypeORM
- API: RESTful API / GraphQL
- Authentication: JWT
```

### Data Processing
```
- Calculation Engine: JavaScript/TypeScript
- Data Validation: Joi / Zod
- Scheduled Jobs: node-cron (สำหรับคำนวณต้นทุนรายวัน)
```

### Integration
```
- Controller Gen3 API (ถ้ามี)
- Energy Meter API / MQTT
- PPFD Meter API / Cloud logging
- IoT Sensor API
```

### Deployment
```
- Cloud: AWS / Google Cloud / Azure
- Containerization: Docker
- CI/CD: GitHub Actions / GitLab CI
```

---

## 📈 Feasibility Assessment

### ⚙️ **Technical Feasibility**
**Score: 4.5/5** ⭐⭐⭐⭐⭐

**Complexity:** Medium

**ข้อดี:**
- ✅ ใช้เทคโนโลยีที่มีอยู่แล้ว (Web, Database, API)
- ✅ ไม่ต้องพัฒนา hardware ใหม่
- ✅ สามารถเริ่มจาก MVP ง่าย ๆ ก่อนได้
- ✅ มีข้อมูลบางส่วนอยู่แล้ว (ผลผลิต, ค่าไฟ)

**ความท้าทาย:**
- ⚠️ ต้องเชื่อมต่อกับระบบเดิม (Controller Gen3, Energy Meter)
- ⚠️ การคำนวณแบบ PPFD-based ซับซ้อนกว่า
- ⚠️ ต้องมีการ validate ข้อมูลให้ถูกต้อง

**Risks:**
- 🔴 ถ้าข้อมูลพื้นฐานไม่ครบ (พื้นที่, วันที่) จะคำนวณไม่ได้
- 🟡 API ของ Controller Gen3 อาจจะไม่มีหรือไม่ open
- 🟡 Energy Meter อาจจะไม่มีระบบบันทึกอัตโนมัติ

---

### 💼 **Business Impact**
**Score: 5/5** ⭐⭐⭐⭐⭐

**Problem Size:** ใหญ่มาก
- 🎯 แก้ pain point หลัก: **ต้นทุนพลังงาน 40-60%** ของต้นทุนรวม
- 🎯 ผู้จัดการต้องใช้เวลามากในการรวบรวมและคำนวณข้อมูล
- 🎯 ไม่สามารถแยกต้นทุนแต่ละชนิดผักได้ → ตัดสินใจผิดพลาดได้

**Market Demand:** สูงมาก
- ✅ ทุกฟาร์ม PFAL ต้องการระบบนี้
- ✅ เป็นข้อมูลสำคัญสำหรับการตัดสินใจเชิงธุรกิจ
- ✅ Civic AgroTech สามารถขายเป็น add-on service ได้

**Revenue Potential:** สูง
- 💰 เพิ่มมูลค่าให้กับ Controller Gen3 (฿30,000)
- 💰 ขายเป็น subscription service (฿X,XXX/เดือน)
- 💰 ดึงดูดลูกค้าใหม่ที่ต้องการ data-driven management

**ROI:**
- ลูกค้าสามารถลดต้นทุนพลังงาน 15-25% → คืนทุนเร็ว
- เพิ่มประสิทธิภาพการผลิต → กำไรเพิ่มขึ้น

---

### 🛠️ **Resource Requirements**
**Score: 4/5** ⭐⭐⭐⭐

**Development Time:** 2-4 เดือน
- Phase 1 (MVP): 2 เดือน
- Phase 2 (Advanced): +1 เดือน
- Phase 3 (Full): +1 เดือน

**Team Size:** 3-4 คน
- 1 Backend Developer
- 1 Frontend Developer
- 1 Full-stack Developer / Integration Specialist
- 1 UI/UX Designer (Part-time)

**Budget:** ประมาณ ฿XXX,XXX - ฿X,XXX,XXX
- 💻 Development: ฿XXX,XXX (เงินเดือน 3-4 เดือน)
- ☁️ Cloud hosting: ฿X,XXX/เดือน
- 🧪 Testing & QA: ฿XX,XXX
- 📚 Training & Documentation: ฿XX,XXX

**Skills Required:**
- ✅ Full-stack Web Development (React, Node.js)
- ✅ Database Design (SQL)
- ✅ API Integration
- ✅ Data Visualization (Charts)
- ⚠️ IoT Integration (ถ้ามี Controller Gen3 API)
- ⚠️ Domain Knowledge (PFAL, พลังงาน)

---

### 🏪 **Market Readiness**
**Score: 4.5/5** ⭐⭐⭐⭐⭐

**Market Readiness:** พร้อมมาก
- ✅ อุตสาหกรรม PFAL กำลังเติบโต (7.5% CAGR)
- ✅ ฟาร์มเริ่มมองหาระบบ data-driven management
- ✅ ต้นทุนพลังงานเป็นปัญหาใหญ่และเพิ่มขึ้นเรื่อย ๆ

**Competition:**
- 🟢 คู่แข่งในไทย (Bangsai Agro, KAS) ยังไม่มีระบบนี้ชัดเจน
- 🟡 ต่างประเทศมี (AeroFarms, Bowery) แต่เป็น proprietary
- 🟢 Civic AgroTech มี advantage: มี hardware อยู่แล้ว (Controller Gen3)

**Barriers to Entry:**
- 🟢 ต่ำ: ระบบนี้ต้องการ domain knowledge เฉพาะทาง
- 🟢 Civic AgroTech มีความเข้าใจลึกเกี่ยวกับ PFAL

---

### 💡 **Innovation Level**
**Score: 3.5/5** ⭐⭐⭐⭐

**Novelty:** ปานกลาง - สูง
- ✅ ระบบ dashboard มีอยู่แล้วในอุตสาหกรรมอื่น แต่เฉพาะสำหรับ PFAL ยังน้อย
- ✅ การแยกต้นทุนแต่ละชนิดผัก **เป็นนวัตกรรม** ที่ยังไม่ค่อยมีใครทำ
- ⚠️ ไม่ใช่เทคโนโลยี breakthrough แต่เป็น **practical innovation**

**Differentiation:**
- ✅ ครอบคลุมทั้ง energy, water, nutrient ในที่เดียว
- ✅ ระบบจัดสรรพลังงานที่ยุติธรรม (fair allocation)
- ✅ Integration กับ Controller Gen3 ของ Civic AgroTech

---

## 📊 **Overall Feasibility Score**

| เกณฑ์ | น้ำหนัก | คะแนน | คะแนนถ่วงน้ำหนัก |
|-------|---------|-------|-------------------|
| **Technical Feasibility** | 25% | 4.5/5 | 1.125 |
| **Business Impact** | 30% | 5.0/5 | 1.500 |
| **Resource Requirements** | 20% | 4.0/5 | 0.800 |
| **Market Readiness** | 15% | 4.5/5 | 0.675 |
| **Innovation Level** | 10% | 3.5/5 | 0.350 |
| **รวม** | 100% | — | **4.45/5** ⭐⭐⭐⭐⭐ |

---

## ✅ **Final Recommendation: GO** 🚀

### เหตุผล:
1. ✅ **คะแนนรวม 4.45/5** สูงกว่าเกณฑ์ Go (≥ 4.0)
2. ✅ **Business Impact 5/5** แก้ pain point หลักของอุตสาหกรรม
3. ✅ **Technical Feasibility 4.5/5** ทำได้จริง ไม่มีอุปสรรคใหญ่
4. ✅ **Market Readiness 4.5/5** ตลาดพร้อมรับ
5. ✅ **Resource Requirements 4/5** ใช้ทรัพยากรไม่มากเกินไป

### เงื่อนไข:
⚠️ **ต้องมีข้อมูลพื้นฐานต่อไปนี้:**
- ข้อมูลผลผลิต (น้ำหนัก, วันที่, พื้นที่)
- ข้อมูลพลังงาน (ค่าไฟรายเดือนอย่างน้อย)
- ระบบบันทึกข้อมูล (Excel, Database, หรือ manual entry)

⚠️ **ควรเริ่มจาก Phase 1 (MVP) ก่อน:**
- ใช้วิธี Area-Time Based (ง่าย, ข้อมูลน้อย)
- ทดสอบกับฟาร์มจริง 1-2 แห่ง
- รับ feedback แล้วค่อยพัฒนา Phase 2

---

## 🎯 **Next Steps**

### 1. **Pre-Development (1 เดือน)**
- [ ] สัมภาษณ์ผู้จัดการฟาร์มเพื่อเข้าใจ workflow
- [ ] ตรวจสอบข้อมูลที่มีอยู่แล้ว (format, completeness)
- [ ] ตรวจสอบ API ของ Controller Gen3 (ถ้ามี)
- [ ] Design database schema
- [ ] Design UI/UX mockup
- [ ] ประมาณการ budget ละเอียด

### 2. **Phase 1 Development (2 เดือน)**
- [ ] Setup project (Frontend + Backend)
- [ ] Implement database
- [ ] Implement Area-Time based calculation
- [ ] Implement basic dashboard UI
- [ ] Implement data input forms
- [ ] Testing & QA

### 3. **Pilot Testing (1 เดือน)**
- [ ] Deploy to test environment
- [ ] ทดสอบกับฟาร์ม 1-2 แห่ง
- [ ] รับ feedback
- [ ] ปรับปรุงตาม feedback

### 4. **Phase 2 Development (1 เดือน)** - Optional
- [ ] Integrate PPFD Meter
- [ ] Implement PPFD-based calculation
- [ ] Add energy breakdown charts
- [ ] Add benchmark comparison

### 5. **Launch & Marketing**
- [ ] Launch officially
- [ ] สร้างเอกสารและวิดีโอแนะนำ
- [ ] Training ให้กับลูกค้า
- [ ] Promote เป็น add-on service

---

## 📚 **References**

### Internal Documents
- [New Ideas Brainstorm](../brainstorm/new-ideas.md)
- [Company Profile](../../../company/company-profile.md)
- [Feasibility Study Framework](./feasibility-study.md)

### External Resources
- PFAL Efficiency Metrics (Industry Benchmark)
- Energy Cost Allocation Methods
- Controller Gen3 Documentation
- PPFD Meter API Documentation

---

**วันที่สร้าง:** 6 พฤศจิกายน 2025
**ผู้วิเคราะห์:** Technical Analysis Team
**สถานะ:** ✅ พร้อมนำเสนอต่อ Management
**อนุมัติโดย:** รอการอนุมัติ

---

