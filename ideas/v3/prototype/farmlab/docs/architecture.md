# 🏗️ FarmLab Architecture

## 📁 โครงสร้างโปรเจค

```
farmlab/
├── index.html              # หน้าหลัก
├── css/
│   └── styles.css         # สไตล์ทั้งหมด
├── js/
│   ├── app.js             # Navigation & Tabs
│   ├── data.js            # Data Store (localStorage)
│   ├── dashboard.js       # Dashboard (Phase 5)
│   ├── projects/          # Projects Module
│   │   ├── index.js       # Main controller
│   │   ├── ui.js          # Render functions
│   │   ├── forms.js       # Create/Edit forms
│   │   └── details.js     # Detail view
│   ├── greenhouses/       # Greenhouses Module
│   │   ├── index.js
│   │   ├── ui.js
│   │   └── forms.js
│   ├── data-entry/        # Data Entry Module
│   │   ├── index.js
│   │   └── ui.js
│   └── utils/             # Shared utilities
│       ├── helpers.js     # General helpers
│       ├── date.js        # Date formatting
│       └── storage.js     # localStorage wrapper
├── docs/                  # Documentation
│   ├── README.md
│   ├── overview.md
│   ├── architecture.md    # (นี่ไง)
│   └── phase-*.md         # Phase details
└── sample-records.json    # Sample data

```

## 🔄 Data Flow

### 1. Data Storage (js/data.js)
```javascript
// Global state
window.farmData = {
    projects: [],
    greenhouses: [],
    devices: [],
    records: []
}

// Persistence
saveData() → localStorage
loadData() → from localStorage
```

### 2. Module Pattern
แต่ละ module ใช้ pattern นี้:
```javascript
// ตัวอย่าง js/projects/index.js
const ProjectsModule = {
    init() { ... },
    load() { ... },
    create() { ... },
    update() { ... },
    delete() { ... }
}
```

### 3. Navigation Flow
```
app.js (showTab)
    ↓
projects.js (renderProjects)
    ↓
projects/ui.js (render functions)
    ↓
data.js (getData, saveData)
```

## 🎨 UI Components

### Reusable Components
- `.card` - Card container
- `.btn` - Primary button
- `.btn-secondary` - Secondary button
- `.form-group` - Form field group
- `.modal` - Modal dialog

### Layout
- `.container` - Main container
- `.tab-nav` - Tab navigation
- `.tab-content` - Tab content area
- `.view-container` - Sub-view container

## 📊 Data Models

### Project
```javascript
{
    id: 1,
    name: "ทดลองผักสลัด",
    description: "...",
    greenhouse: "Greenhouse A",
    zone: "Zone 1",
    layer: "ชั้น 1",
    crops: [
        {
            id: 1,
            name: "Crop 1",
            startDate: "2025-01-01",
            plantSpecies: "ผักสลัด",
            plants: [
                { id: 1, code: "P001", ... }
            ]
        }
    ]
}
```

### Greenhouse
```javascript
{
    id: 1,
    name: "Greenhouse A",
    description: "...",
    zones: [
        {
            id: 1,
            name: "Zone 1",
            layers: [
                { id: 1, name: "ชั้น 1", capacity: 50 }
            ]
        }
    ]
}
```

### Record
```javascript
{
    id: 1,
    projectId: 1,
    cropId: 1,
    plantId: 1,
    date: "2025-01-15",
    height: 15.5,
    leaves: 8,
    leafWidth: 5.2,
    canopyWidth: 12.3,
    leafColor: "เขียวเข้ม",
    notes: "..."
}
```

## 🔧 Utilities (js/utils/)

### helpers.js
- `generateId()` - สร้าง unique ID
- `formatNumber()` - จัดรูปแบบตัวเลข
- `isEmpty()` - ตรวจสอบค่าว่าง

### date.js
- `formatDate()` - จัดรูปแบบวันที่
- `parseDate()` - แปลงวันที่
- `isValidDate()` - ตรวจสอบวันที่

### storage.js
- `save(key, data)` - บันทึกลง localStorage
- `load(key)` - โหลดจาก localStorage
- `clear(key)` - ลบข้อมูล

## 📱 Responsive Design
- Desktop: > 1024px
- Tablet: 768px - 1024px
- Mobile: < 768px
