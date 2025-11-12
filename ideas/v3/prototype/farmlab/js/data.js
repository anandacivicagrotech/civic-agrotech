// Sample data for the application

// Force reload sample data
const FORCE_RELOAD = true;

// Greenhouses data
let greenhouses = JSON.parse(localStorage.getItem('farmlab_greenhouses')) || [];

if (greenhouses.length === 0 || FORCE_RELOAD) {
    greenhouses = [
        {
            id: 1,
            name: "No.1",
            size: "100",
            zones: ["A", "B", "C"],
            layers: ["1", "2", "3", "4", "5"],
            controllers: [
                {
                    id: "GEN3-001",
                    name: "Smart Grow Controller Gen3 #1",
                    zone: null,
                    status: "online",
                    data: {
                        room: {
                            temperature: 25,
                            humidity: 65,
                            ppfd: 250,
                            co2: 850,
                            ec: 2.1,
                            ph: 6.2
                        }
                    },
                    sensors: ["temperature", "humidity", "ppfd", "co2", "ec", "ph"]
                }
            ],
            cameras: [
                {
                    id: "CAM-001",
                    name: "Camera Zone A",
                    zone: "Zone A",
                    layers: ["1", "2", "3"],
                    status: "online",
                    lastCapture: "2025-11-10T10:00:00"
                },
                {
                    id: "CAM-002",
                    name: "Camera Zone B",
                    zone: "Zone B",
                    layers: ["4", "5"],
                    status: "online",
                    lastCapture: "2025-11-10T10:15:00"
                }
            ],
            projects: ["การทดลองพืชผักใบ 2 ชนิด (ตั้งโอ๋, เคล)"]
        },
        {
            id: 2,
            name: "Lab A",
            size: "80",
            zones: ["A", "B"],
            layers: ["1", "2", "3"],
            controllers: [
                {
                    id: "GEN3-002",
                    name: "Smart Grow Controller Gen3 #2",
                    zone: null,
                    status: "online",
                    data: {
                        room: {
                            temperature: 24,
                            humidity: 70,
                            ppfd: 280,
                            co2: 900,
                            ec: 1.8,
                            ph: 5.9
                        }
                    },
                    sensors: ["temperature", "humidity", "ppfd", "co2", "ec", "ph"]
                }
            ],
            cameras: [
                {
                    id: "CAM-003",
                    name: "Camera Zone A",
                    zone: "Zone A",
                    layers: ["1", "2"],
                    status: "online",
                    lastCapture: "2025-11-10T11:00:00"
                },
                {
                    id: "CAM-004",
                    name: "Camera Zone B",
                    zone: "Zone B",
                    layers: ["3"],
                    status: "online",
                    lastCapture: "2025-11-10T11:10:00"
                }
            ],
            projects: ["การทดลองพืชผักใบ 4 ชนิด (ตั้งโอ๋, เคล, Sorrel, Frillice)"]
        },
        {
            id: 3,
            name: "Blue Room",
            size: "60",
            zones: ["A"],
            layers: ["1", "2", "3", "4"],
            controllers: [
                {
                    id: "GEN3-003",
                    name: "Smart Grow Controller Gen3 #3",
                    zone: null,
                    status: "online",
                    data: {
                        room: {
                            temperature: 22,
                            humidity: 60,
                            ppfd: 220,
                            co2: 800,
                            ec: 1.5,
                            ph: 6.0
                        }
                    },
                    sensors: ["temperature", "humidity", "ppfd", "co2", "ec", "ph"]
                }
            ],
            cameras: [
                {
                    id: "CAM-005",
                    name: "Camera Layer 1",
                    zone: "Zone A",
                    layers: ["1"],
                    status: "online",
                    lastCapture: "2025-11-10T12:00:00"
                },
                {
                    id: "CAM-006",
                    name: "Camera Layer 2",
                    zone: "Zone A",
                    layers: ["2"],
                    status: "online",
                    lastCapture: "2025-11-10T12:05:00"
                },
                {
                    id: "CAM-007",
                    name: "Camera Layer 3",
                    zone: "Zone A",
                    layers: ["3"],
                    status: "online",
                    lastCapture: "2025-11-10T12:10:00"
                },
                {
                    id: "CAM-008",
                    name: "Camera Layer 4",
                    zone: "Zone A",
                    layers: ["4"],
                    status: "online",
                    lastCapture: "2025-11-10T12:15:00"
                }
            ],
            projects: ["การทดลองพืชผักใบ 2 ชนิด (Sorrel, Frillice)"]
        }
    ];
    localStorage.setItem('farmlab_greenhouses', JSON.stringify(greenhouses));
}

// Master data
const PLANT_TYPES = [
    "ตั้งโอ๋",
    "เคล",
    "Sorrel",
    "Frillice",
    "ผักกาดหอม",
    "คะน้า"
];

// Projects data (โครงสร้างใหม่)
let projects = [
    {
        id: 1,
        name: 'การทดลองพืชผักใบ 4 ชนิด (ตั้งโอ๋, เคล, Sorrel, Frillice)',
        description: 'ทดสอบ 4 ชนิดพืช ตั้งโอ๋, เคล, Sorrel, Frillice',
        owner: 'ทีมวิจัย Lab A',
        greenhouse: { id: 2, name: 'Lab A' },
        createdAt: '2025-03-01',
        crops: [
            {
                id: 1,
                name: 'Crop 1',
                plantDate: '2025-03-01',
                zone: 'A',
                layers: ['1', '2', '3'],
                iot: {
                    controllers: [{ id: 'GEN3-002', name: 'Smart Grow Controller Gen3 #2' }],
                    cameras: [{ id: 'CAM-003', name: 'Camera Zone A' }]
                },
                plants: [
                    {
                        id: 1,
                        name: 'ตั้งโอ๋',
                        harvestDays: 35,
                        displayName: 'ตั้งโอ๋ 35 วัน',
                        location: 'Layer 1',
                        quantity: 50,
                        dataFields: [
                            { id: 1, name: 'ความสูง', unit: 'cm', type: 'manual', canBeAuto: false, sensor: null },
                            { id: 2, name: 'จำนวนใบ', unit: 'ใบ', type: 'manual', canBeAuto: false, sensor: null },
                            { id: 3, name: 'น้ำหนัก', unit: 'g', type: 'manual', canBeAuto: false, sensor: null },
                            { id: 4, name: 'ความกว้างใบ', unit: 'cm', type: 'manual', canBeAuto: false, sensor: null },
                            { id: 5, name: 'ทรงพุ่ม', unit: 'cm', type: 'manual', canBeAuto: false, sensor: null },
                            { id: 6, name: 'สีใบ', unit: '', type: 'manual', canBeAuto: false, sensor: null }
                        ],
                        recordCount: 8,
                        records: [
                            {
                                id: 1,
                                date: '2025-11-01',
                                time: '09:00',
                                plantData: { 'ความสูง': 8.5, 'จำนวนใบ': 4, 'น้ำหนัก': 120.5, 'ความกว้างใบ': 5.2, 'ทรงพุ่ม': 10.0, 'สีใบ': 'เขียวอ่อน' },
                                environmentData: { temperature: 24, humidity: 68, ppfd: 275, co2: 880, ec: 1.9, ph: 6.0 },
                                images: [
                                    { id: 1, source: 'manual', url: 'sample1.jpg', timestamp: '2025-11-01T09:00:00' },
                                    { id: 2, source: 'camera', url: 'sample2.jpg', cameraId: 'CAM-003', timestamp: '2025-11-01T09:00:00' }
                                ],
                                notes: 'เจริญเติบโตดี',
                                recordedBy: 'สมชาย'
                            },
                            {
                                id: 2,
                                date: '2025-11-03',
                                time: '10:15',
                                plantData: { 'ความสูง': 9.2, 'จำนวนใบ': 5, 'น้ำหนัก': 135.0, 'ความกว้างใบ': 5.8, 'ทรงพุ่ม': 11.5, 'สีใบ': 'เขียวอ่อน' },
                                environmentData: { temperature: 23, humidity: 70, ppfd: 280, co2: 900, ec: 1.8, ph: 5.9 },
                                images: [
                                    { id: 1, source: 'manual', url: 'sample3.jpg', timestamp: '2025-11-03T10:15:00' }
                                ],
                                notes: 'ใบเริ่มใหญ่ขึ้น',
                                recordedBy: 'สมหญิง'
                            },
                            {
                                id: 3,
                                date: '2025-11-05',
                                time: '14:30',
                                plantData: { 'ความสูง': 10.5, 'จำนวนใบ': 6, 'น้ำหนัก': 155.5, 'ความกว้างใบ': 6.5, 'ทรงพุ่ม': 13.0, 'สีใบ': 'เขียวเข้ม' },
                                environmentData: { temperature: 25, humidity: 65, ppfd: 285, co2: 920, ec: 1.7, ph: 6.1 },
                                images: [
                                    { id: 1, source: 'manual', url: 'sample4.jpg', timestamp: '2025-11-05T14:30:00' },
                                    { id: 2, source: 'manual', url: 'sample5.jpg', timestamp: '2025-11-05T14:31:00' },
                                    { id: 3, source: 'camera', url: 'sample6.jpg', cameraId: 'CAM-003', timestamp: '2025-11-05T14:30:00' }
                                ],
                                notes: 'สีเขียวเข้มขึ้น เจริญเติบโตดีมาก',
                                recordedBy: 'สมชาย'
                            }
                        ]
                    },
                    {
                        id: 2,
                        name: 'เคล',
                        harvestDays: 47,
                        displayName: 'เคล 47 วัน',
                        location: 'Layer 2',
                        quantity: 50,
                        dataFields: [
                            { id: 1, name: 'ความสูง', unit: 'cm', type: 'manual', canBeAuto: false, sensor: null },
                            { id: 2, name: 'จำนวนใบ', unit: 'ใบ', type: 'manual', canBeAuto: false, sensor: null },
                            { id: 3, name: 'น้ำหนัก', unit: 'g', type: 'manual', canBeAuto: false, sensor: null },
                            { id: 4, name: 'ความกว้างใบ', unit: 'cm', type: 'manual', canBeAuto: false, sensor: null },
                            { id: 5, name: 'ทรงพุ่ม', unit: 'cm', type: 'manual', canBeAuto: false, sensor: null },
                            { id: 6, name: 'สีใบ', unit: '', type: 'manual', canBeAuto: false, sensor: null }
                        ],
                        recordCount: 7,
                        records: [
                            {
                                id: 1,
                                date: '2025-11-02',
                                time: '08:45',
                                plantData: { 'ความสูง': 7.5, 'จำนวนใบ': 3, 'น้ำหนัก': 95.0, 'ความกว้างใบ': 4.5, 'ทรงพุ่ม': 9.0, 'สีใบ': 'เขียวอ่อน' },
                                environmentData: { temperature: 24, humidity: 70, ppfd: 280, co2: 900, ec: 1.8, ph: 5.9 },
                                images: [
                                    { id: 1, source: 'manual', url: 'kale1.jpg', timestamp: '2025-11-02T08:45:00' }
                                ],
                                notes: 'เริ่มต้นดี',
                                recordedBy: 'สมชาย'
                            },
                            {
                                id: 2,
                                date: '2025-11-04',
                                time: '11:00',
                                plantData: { 'ความสูง': 8.8, 'จำนวนใบ': 4, 'น้ำหนัก': 115.5, 'ความกว้างใบ': 5.2, 'ทรงพุ่ม': 10.5, 'สีใบ': 'เขียวเข้ม' },
                                environmentData: { temperature: 23, humidity: 72, ppfd: 275, co2: 890, ec: 1.9, ph: 6.0 },
                                images: [
                                    { id: 1, source: 'manual', url: 'kale2.jpg', timestamp: '2025-11-04T11:00:00' },
                                    { id: 2, source: 'camera', url: 'kale3.jpg', cameraId: 'CAM-003', timestamp: '2025-11-04T11:00:00' }
                                ],
                                notes: 'ใบหนาขึ้น',
                                recordedBy: 'สมหญิง'
                            }
                        ]
                    },
                    {
                        id: 3,
                        name: 'Sorrel',
                        harvestDays: 38,
                        displayName: 'Sorrel 38 วัน',
                        location: 'Layer 3',
                        quantity: 50,
                        dataFields: [
                            { id: 1, name: 'ความสูง', unit: 'cm', type: 'manual', canBeAuto: false, sensor: null },
                            { id: 2, name: 'จำนวนใบ', unit: 'ใบ', type: 'manual', canBeAuto: false, sensor: null },
                            { id: 3, name: 'น้ำหนัก', unit: 'g', type: 'manual', canBeAuto: false, sensor: null },
                            { id: 4, name: 'ความกว้างใบ', unit: 'cm', type: 'manual', canBeAuto: false, sensor: null },
                            { id: 5, name: 'ทรงพุ่ม', unit: 'cm', type: 'manual', canBeAuto: false, sensor: null },
                            { id: 6, name: 'สีใบ', unit: '', type: 'manual', canBeAuto: false, sensor: null }
                        ],
                        recordCount: 6,
                        records: [
                            {
                                id: 1,
                                date: '2025-11-01',
                                time: '13:20',
                                plantData: { 'ความสูง': 6.5, 'จำนวนใบ': 4, 'น้ำหนัก': 88.0, 'ความกว้างใบ': 4.0, 'ทรงพุ่ม': 8.5, 'สีใบ': 'เขียวอ่อน' },
                                environmentData: { temperature: 24, humidity: 68, ppfd: 275, co2: 880, ec: 1.9, ph: 6.0 },
                                images: [
                                    { id: 1, source: 'manual', url: 'sorrel1.jpg', timestamp: '2025-11-01T13:20:00' }
                                ],
                                notes: 'เริ่มปลูก',
                                recordedBy: 'สมชาย'
                            },
                            {
                                id: 2,
                                date: '2025-11-06',
                                time: '09:45',
                                plantData: { 'ความสูง': 8.2, 'จำนวนใบ': 5, 'น้ำหนัก': 105.5, 'ความกว้างใบ': 5.0, 'ทรงพุ่ม': 10.0, 'สีใบ': 'เขียวเข้ม' },
                                environmentData: { temperature: 25, humidity: 66, ppfd: 282, co2: 910, ec: 1.8, ph: 6.1 },
                                images: [
                                    { id: 1, source: 'manual', url: 'sorrel2.jpg', timestamp: '2025-11-06T09:45:00' },
                                    { id: 2, source: 'camera', url: 'sorrel3.jpg', cameraId: 'CAM-003', timestamp: '2025-11-06T09:45:00' }
                                ],
                                notes: 'เจริญเติบโตดี',
                                recordedBy: 'สมหญิง'
                            }
                        ]
                    },
                    {
                        id: 4,
                        name: 'Frillice',
                        harvestDays: 42,
                        displayName: 'Frillice 42 วัน',
                        location: 'Layer 1',
                        quantity: 50,
                        dataFields: [
                            { id: 1, name: 'ความสูง', unit: 'cm', type: 'manual', canBeAuto: false, sensor: null },
                            { id: 2, name: 'จำนวนใบ', unit: 'ใบ', type: 'manual', canBeAuto: false, sensor: null },
                            { id: 3, name: 'น้ำหนัก', unit: 'g', type: 'manual', canBeAuto: false, sensor: null },
                            { id: 4, name: 'ความกว้างใบ', unit: 'cm', type: 'manual', canBeAuto: false, sensor: null },
                            { id: 5, name: 'ทรงพุ่ม', unit: 'cm', type: 'manual', canBeAuto: false, sensor: null },
                            { id: 6, name: 'สีใบ', unit: '', type: 'manual', canBeAuto: false, sensor: null }
                        ],
                        recordCount: 6,
                        records: [
                            {
                                id: 1,
                                date: '2025-11-02',
                                time: '15:10',
                                plantData: { 'ความสูง': 5.8, 'จำนวนใบ': 3, 'น้ำหนัก': 75.0, 'ความกว้างใบ': 3.5, 'ทรงพุ่ม': 7.5, 'สีใบ': 'เขียวอ่อน' },
                                environmentData: { temperature: 23, humidity: 70, ppfd: 280, co2: 900, ec: 1.8, ph: 5.9 },
                                images: [
                                    { id: 1, source: 'manual', url: 'frillice1.jpg', timestamp: '2025-11-02T15:10:00' }
                                ],
                                notes: 'ใบเริ่มม้วน',
                                recordedBy: 'สมชาย'
                            },
                            {
                                id: 2,
                                date: '2025-11-07',
                                time: '10:30',
                                plantData: { 'ความสูง': 7.5, 'จำนวนใบ': 5, 'น้ำหนัก': 98.5, 'ความกว้างใบ': 4.8, 'ทรงพุ่ม': 9.5, 'สีใบ': 'เขียวเข้ม' },
                                environmentData: { temperature: 24, humidity: 68, ppfd: 278, co2: 895, ec: 1.9, ph: 6.0 },
                                images: [
                                    { id: 1, source: 'manual', url: 'frillice2.jpg', timestamp: '2025-11-07T10:30:00' },
                                    { id: 2, source: 'camera', url: 'frillice3.jpg', cameraId: 'CAM-003', timestamp: '2025-11-07T10:30:00' }
                                ],
                                notes: 'ใบม้วนสวย',
                                recordedBy: 'สมหญิง'
                            }
                        ]
                    }
                ]
            },
            {
                id: 2,
                name: 'Crop 2',
                plantDate: '2025-06-10',
                zone: 'A',
                layers: ['1', '2', '3'],
                iot: {
                    controllers: [{ id: 'GEN3-002', name: 'Smart Grow Controller Gen3 #2' }],
                    cameras: [{ id: 'CAM-003', name: 'Camera Zone A' }]
                },
                plants: [
                    {
                        id: 1,
                        name: 'ตั้งโอ๋',
                        harvestDays: 35,
                        displayName: 'ตั้งโอ๋ 35 วัน',
                        location: 'Layer 1',
                        quantity: 50,
                        dataFields: [
                            { id: 1, name: 'ความสูง', unit: 'cm', type: 'manual', canBeAuto: false, sensor: null },
                            { id: 2, name: 'จำนวนใบ', unit: 'ใบ', type: 'manual', canBeAuto: false, sensor: null },
                            { id: 3, name: 'น้ำหนัก', unit: 'g', type: 'manual', canBeAuto: false, sensor: null },
                            { id: 4, name: 'ความกว้างใบ', unit: 'cm', type: 'manual', canBeAuto: false, sensor: null },
                            { id: 5, name: 'ทรงพุ่ม', unit: 'cm', type: 'manual', canBeAuto: false, sensor: null },
                            { id: 6, name: 'สีใบ', unit: '', type: 'manual', canBeAuto: false, sensor: null }
                        ],
                        recordCount: 5,
                        records: []
                    },
                    {
                        id: 2,
                        name: 'เคล',
                        harvestDays: 47,
                        displayName: 'เคล 47 วัน',
                        location: 'Layer 2',
                        quantity: 50,
                        dataFields: [
                            { id: 1, name: 'ความสูง', unit: 'cm', type: 'manual', canBeAuto: false, sensor: null },
                            { id: 2, name: 'จำนวนใบ', unit: 'ใบ', type: 'manual', canBeAuto: false, sensor: null },
                            { id: 3, name: 'น้ำหนัก', unit: 'g', type: 'manual', canBeAuto: false, sensor: null },
                            { id: 4, name: 'ความกว้างใบ', unit: 'cm', type: 'manual', canBeAuto: false, sensor: null },
                            { id: 5, name: 'ทรงพุ่ม', unit: 'cm', type: 'manual', canBeAuto: false, sensor: null },
                            { id: 6, name: 'สีใบ', unit: '', type: 'manual', canBeAuto: false, sensor: null }
                        ],
                        recordCount: 6,
                        records: []
                    },
                    {
                        id: 3,
                        name: 'Sorrel',
                        harvestDays: 40,
                        displayName: 'Sorrel 40 วัน',
                        location: 'Layer 3',
                        quantity: 50,
                        dataFields: [
                            { id: 1, name: 'ความสูง', unit: 'cm', type: 'manual', canBeAuto: false, sensor: null },
                            { id: 2, name: 'จำนวนใบ', unit: 'ใบ', type: 'manual', canBeAuto: false, sensor: null },
                            { id: 3, name: 'น้ำหนัก', unit: 'g', type: 'manual', canBeAuto: false, sensor: null },
                            { id: 4, name: 'ความกว้างใบ', unit: 'cm', type: 'manual', canBeAuto: false, sensor: null },
                            { id: 5, name: 'ทรงพุ่ม', unit: 'cm', type: 'manual', canBeAuto: false, sensor: null },
                            { id: 6, name: 'สีใบ', unit: '', type: 'manual', canBeAuto: false, sensor: null }
                        ],
                        recordCount: 4,
                        records: []
                    },
                    {
                        id: 4,
                        name: 'Frillice',
                        harvestDays: 42,
                        displayName: 'Frillice 42 วัน',
                        location: 'Layer 1',
                        quantity: 50,
                        dataFields: [
                            { id: 1, name: 'ความสูง', unit: 'cm', type: 'manual', canBeAuto: false, sensor: null },
                            { id: 2, name: 'จำนวนใบ', unit: 'ใบ', type: 'manual', canBeAuto: false, sensor: null },
                            { id: 3, name: 'น้ำหนัก', unit: 'g', type: 'manual', canBeAuto: false, sensor: null },
                            { id: 4, name: 'ความกว้างใบ', unit: 'cm', type: 'manual', canBeAuto: false, sensor: null },
                            { id: 5, name: 'ทรงพุ่ม', unit: 'cm', type: 'manual', canBeAuto: false, sensor: null },
                            { id: 6, name: 'สีใบ', unit: '', type: 'manual', canBeAuto: false, sensor: null }
                        ],
                        recordCount: 3,
                        records: []
                    }
                ]
            },
            {
                id: 3,
                name: 'Crop 3',
                plantDate: '2025-09-01',
                zone: 'A',
                layers: ['1', '2', '3'],
                iot: {
                    controllers: [{ id: 'GEN3-002', name: 'Smart Grow Controller Gen3 #2' }],
                    cameras: [{ id: 'CAM-003', name: 'Camera Zone A' }]
                },
                plants: [
                    {
                        id: 1,
                        name: 'ตั้งโอ๋',
                        harvestDays: 35,
                        displayName: 'ตั้งโอ๋ 35 วัน',
                        location: 'Layer 1',
                        quantity: 50,
                        dataFields: [
                            { id: 1, name: 'ความสูง', unit: 'cm', type: 'manual', canBeAuto: false, sensor: null },
                            { id: 2, name: 'จำนวนใบ', unit: 'ใบ', type: 'manual', canBeAuto: false, sensor: null },
                            { id: 3, name: 'น้ำหนัก', unit: 'g', type: 'manual', canBeAuto: false, sensor: null },
                            { id: 4, name: 'ความกว้างใบ', unit: 'cm', type: 'manual', canBeAuto: false, sensor: null },
                            { id: 5, name: 'ทรงพุ่ม', unit: 'cm', type: 'manual', canBeAuto: false, sensor: null },
                            { id: 6, name: 'สีใบ', unit: '', type: 'manual', canBeAuto: false, sensor: null }
                        ],
                        recordCount: 0,
                        records: []
                    },
                    {
                        id: 2,
                        name: 'เคล',
                        harvestDays: 47,
                        displayName: 'เคล 47 วัน',
                        location: 'Layer 2',
                        quantity: 50,
                        dataFields: [
                            { id: 1, name: 'ความสูง', unit: 'cm', type: 'manual', canBeAuto: false, sensor: null },
                            { id: 2, name: 'จำนวนใบ', unit: 'ใบ', type: 'manual', canBeAuto: false, sensor: null },
                            { id: 3, name: 'น้ำหนัก', unit: 'g', type: 'manual', canBeAuto: false, sensor: null },
                            { id: 4, name: 'ความกว้างใบ', unit: 'cm', type: 'manual', canBeAuto: false, sensor: null },
                            { id: 5, name: 'ทรงพุ่ม', unit: 'cm', type: 'manual', canBeAuto: false, sensor: null },
                            { id: 6, name: 'สีใบ', unit: '', type: 'manual', canBeAuto: false, sensor: null }
                        ],
                        recordCount: 0,
                        records: []
                    },
                    {
                        id: 3,
                        name: 'Sorrel',
                        harvestDays: 40,
                        displayName: 'Sorrel 40 วัน',
                        location: 'Layer 3',
                        quantity: 50,
                        dataFields: [
                            { id: 1, name: 'ความสูง', unit: 'cm', type: 'manual', canBeAuto: false, sensor: null },
                            { id: 2, name: 'จำนวนใบ', unit: 'ใบ', type: 'manual', canBeAuto: false, sensor: null },
                            { id: 3, name: 'น้ำหนัก', unit: 'g', type: 'manual', canBeAuto: false, sensor: null },
                            { id: 4, name: 'ความกว้างใบ', unit: 'cm', type: 'manual', canBeAuto: false, sensor: null },
                            { id: 5, name: 'ทรงพุ่ม', unit: 'cm', type: 'manual', canBeAuto: false, sensor: null },
                            { id: 6, name: 'สีใบ', unit: '', type: 'manual', canBeAuto: false, sensor: null }
                        ],
                        recordCount: 0,
                        records: []
                    },
                    {
                        id: 4,
                        name: 'Frillice',
                        harvestDays: 42,
                        displayName: 'Frillice 42 วัน',
                        location: 'Layer 1',
                        quantity: 50,
                        dataFields: [
                            { id: 1, name: 'ความสูง', unit: 'cm', type: 'manual', canBeAuto: false, sensor: null },
                            { id: 2, name: 'จำนวนใบ', unit: 'ใบ', type: 'manual', canBeAuto: false, sensor: null },
                            { id: 3, name: 'น้ำหนัก', unit: 'g', type: 'manual', canBeAuto: false, sensor: null },
                            { id: 4, name: 'ความกว้างใบ', unit: 'cm', type: 'manual', canBeAuto: false, sensor: null },
                            { id: 5, name: 'ทรงพุ่ม', unit: 'cm', type: 'manual', canBeAuto: false, sensor: null },
                            { id: 6, name: 'สีใบ', unit: '', type: 'manual', canBeAuto: false, sensor: null }
                        ],
                        recordCount: 0,
                        records: []
                    }
                ]
            }
        ]
    },
    {
        id: 2,
        name: 'การทดลองพืชผักใบ 2 ชนิด (ตั้งโอ๋, เคล)',
        description: 'ทดสอบ 2 ชนิดพืช ตั้งโอ๋, เคล',
        owner: 'ทีมวิจัย No.1',
        greenhouse: { id: 1, name: 'No.1' },
        createdAt: '2025-04-01',
        crops: [
            {
                id: 1,
                name: 'Crop 1',
                plantDate: '2025-04-01',
                zone: 'A',
                layers: ['1', '2', '3', '4'],
                iot: {
                    controllers: [{ id: 'GEN3-001', name: 'Smart Grow Controller Gen3 #1' }],
                    cameras: [{ id: 'CAM-001', name: 'Camera Zone A' }]
                },
                plants: [
                    {
                        id: 1,
                        name: 'ตั้งโอ๋',
                        harvestDays: 35,
                        displayName: 'ตั้งโอ๋ 35 วัน',
                        location: 'Layer 1',
                        quantity: 50,
                        dataFields: [
                            { id: 1, name: 'ความสูง', unit: 'cm', type: 'manual', canBeAuto: false, sensor: null },
                            { id: 2, name: 'จำนวนใบ', unit: 'ใบ', type: 'manual', canBeAuto: false, sensor: null },
                            { id: 3, name: 'น้ำหนัก', unit: 'g', type: 'manual', canBeAuto: false, sensor: null },
                            { id: 4, name: 'ความกว้างใบ', unit: 'cm', type: 'manual', canBeAuto: false, sensor: null },
                            { id: 5, name: 'ทรงพุ่ม', unit: 'cm', type: 'manual', canBeAuto: false, sensor: null },
                            { id: 6, name: 'สีใบ', unit: '', type: 'manual', canBeAuto: false, sensor: null }
                        ],
                        recordCount: 6,
                        records: [
                            {
                                id: 1,
                                date: '2025-10-28',
                                time: '08:00',
                                plantData: { 'ความสูง': 9.0, 'จำนวนใบ': 5, 'น้ำหนัก': 125.0, 'ความกว้างใบ': 5.5, 'ทรงพุ่ม': 11.0, 'สีใบ': 'เขียวอ่อน' },
                                environmentData: { temperature: 25, humidity: 65, ppfd: 250, co2: 850, ec: 2.1, ph: 6.2 },
                                images: [
                                    { id: 1, source: 'manual', url: 'no1_plant1.jpg', timestamp: '2025-10-28T08:00:00' },
                                    { id: 2, source: 'camera', url: 'no1_plant2.jpg', cameraId: 'CAM-001', timestamp: '2025-10-28T08:00:00' }
                                ],
                                notes: 'เจริญเติบโตดี โรงเรือน No.1',
                                recordedBy: 'สมศักดิ์'
                            },
                            {
                                id: 2,
                                date: '2025-11-02',
                                time: '09:30',
                                plantData: { 'ความสูง': 10.2, 'จำนวนใบ': 6, 'น้ำหนัก': 145.0, 'ความกว้างใบ': 6.0, 'ทรงพุ่ม': 12.5, 'สีใบ': 'เขียวเข้ม' },
                                environmentData: { temperature: 24, humidity: 67, ppfd: 255, co2: 870, ec: 2.0, ph: 6.1 },
                                images: [
                                    { id: 1, source: 'manual', url: 'no1_plant3.jpg', timestamp: '2025-11-02T09:30:00' }
                                ],
                                notes: 'สีเขียวสวย',
                                recordedBy: 'สมศักดิ์'
                            }
                        ]
                    },
                    {
                        id: 2,
                        name: 'เคล',
                        harvestDays: 47,
                        displayName: 'เคล 47 วัน',
                        location: 'Layer 3',
                        quantity: 50,
                        dataFields: [
                            { id: 1, name: 'ความสูง', unit: 'cm', type: 'manual', canBeAuto: false, sensor: null },
                            { id: 2, name: 'จำนวนใบ', unit: 'ใบ', type: 'manual', canBeAuto: false, sensor: null },
                            { id: 3, name: 'น้ำหนัก', unit: 'g', type: 'manual', canBeAuto: false, sensor: null },
                            { id: 4, name: 'ความกว้างใบ', unit: 'cm', type: 'manual', canBeAuto: false, sensor: null },
                            { id: 5, name: 'ทรงพุ่ม', unit: 'cm', type: 'manual', canBeAuto: false, sensor: null },
                            { id: 6, name: 'สีใบ', unit: '', type: 'manual', canBeAuto: false, sensor: null }
                        ],
                        recordCount: 5,
                        records: [
                            {
                                id: 1,
                                date: '2025-10-29',
                                time: '10:15',
                                plantData: { 'ความสูง': 8.0, 'จำนวนใบ': 4, 'น้ำหนัก': 105.0, 'ความกว้างใบ': 4.8, 'ทรงพุ่ม': 10.0, 'สีใบ': 'เขียวเข้ม' },
                                environmentData: { temperature: 25, humidity: 66, ppfd: 248, co2: 845, ec: 2.1, ph: 6.3 },
                                images: [
                                    { id: 1, source: 'manual', url: 'no1_kale1.jpg', timestamp: '2025-10-29T10:15:00' }
                                ],
                                notes: 'ใบหนา',
                                recordedBy: 'สมศักดิ์'
                            },
                            {
                                id: 2,
                                date: '2025-11-03',
                                time: '11:00',
                                plantData: { 'ความสูง': 9.5, 'จำนวนใบ': 5, 'น้ำหนัก': 128.0, 'ความกว้างใบ': 5.5, 'ทรงพุ่ม': 11.5, 'สีใบ': 'เขียวเข้ม' },
                                environmentData: { temperature: 24, humidity: 68, ppfd: 252, co2: 860, ec: 2.0, ph: 6.2 },
                                images: [
                                    { id: 1, source: 'manual', url: 'no1_kale2.jpg', timestamp: '2025-11-03T11:00:00' },
                                    { id: 2, source: 'camera', url: 'no1_kale3.jpg', cameraId: 'CAM-001', timestamp: '2025-11-03T11:00:00' }
                                ],
                                notes: 'เจริญเติบโตดีมาก',
                                recordedBy: 'สมศักดิ์'
                            }
                        ]
                    }
                ]
            },
            {
                id: 2,
                name: 'Crop 2',
                plantDate: '2025-07-01',
                zone: 'A',
                layers: ['1', '2', '3', '4'],
                iot: {
                    controllers: [{ id: 'GEN3-001', name: 'Smart Grow Controller Gen3 #1' }],
                    cameras: [{ id: 'CAM-001', name: 'Camera Zone A' }]
                },
                plants: [
                    {
                        id: 1,
                        name: 'ตั้งโอ๋',
                        harvestDays: 35,
                        displayName: 'ตั้งโอ๋ 35 วัน',
                        location: 'Layer 1',
                        quantity: 50,
                        dataFields: [
                            { id: 1, name: 'ความสูง', unit: 'cm', type: 'manual', canBeAuto: false, sensor: null },
                            { id: 2, name: 'จำนวนใบ', unit: 'ใบ', type: 'manual', canBeAuto: false, sensor: null },
                            { id: 3, name: 'น้ำหนัก', unit: 'g', type: 'manual', canBeAuto: false, sensor: null },
                            { id: 4, name: 'ความกว้างใบ', unit: 'cm', type: 'manual', canBeAuto: false, sensor: null },
                            { id: 5, name: 'ทรงพุ่ม', unit: 'cm', type: 'manual', canBeAuto: false, sensor: null },
                            { id: 6, name: 'สีใบ', unit: '', type: 'manual', canBeAuto: false, sensor: null }
                        ],
                        recordCount: 0,
                        records: []
                    },
                    {
                        id: 2,
                        name: 'เคล',
                        harvestDays: 47,
                        displayName: 'เคล 47 วัน',
                        location: 'Layer 3',
                        quantity: 50,
                        dataFields: [
                            { id: 1, name: 'ความสูง', unit: 'cm', type: 'manual', canBeAuto: false, sensor: null },
                            { id: 2, name: 'จำนวนใบ', unit: 'ใบ', type: 'manual', canBeAuto: false, sensor: null },
                            { id: 3, name: 'น้ำหนัก', unit: 'g', type: 'manual', canBeAuto: false, sensor: null },
                            { id: 4, name: 'ความกว้างใบ', unit: 'cm', type: 'manual', canBeAuto: false, sensor: null },
                            { id: 5, name: 'ทรงพุ่ม', unit: 'cm', type: 'manual', canBeAuto: false, sensor: null },
                            { id: 6, name: 'สีใบ', unit: '', type: 'manual', canBeAuto: false, sensor: null }
                        ],
                        recordCount: 0,
                        records: []
                    }
                ]
            }
        ]
    },
    {
        id: 3,
        name: 'การทดลองพืชผักใบ 2 ชนิด (Sorrel, Frillice)',
        description: 'ทดสอบ 2 ชนิดพืช Sorrel, Frillice',
        owner: 'ทีมวิจัย Blue Room',
        greenhouse: { id: 3, name: 'Blue Room' },
        createdAt: '2025-05-01',
        crops: [
            {
                id: 1,
                name: 'Crop 1',
                plantDate: '2025-05-01',
                zone: 'A',
                layers: ['1', '2', '3', '4'],
                iot: {
                    controllers: [{ id: 'GEN3-003', name: 'Smart Grow Controller Gen3 #3' }],
                    cameras: [
                        { id: 'CAM-005', name: 'Camera Layer 1' },
                        { id: 'CAM-006', name: 'Camera Layer 2' },
                        { id: 'CAM-007', name: 'Camera Layer 3' },
                        { id: 'CAM-008', name: 'Camera Layer 4' }
                    ]
                },
                plants: [
                    {
                        id: 1,
                        name: 'Sorrel',
                        harvestDays: 38,
                        displayName: 'Sorrel 38 วัน',
                        location: 'Layer 1',
                        quantity: 50,
                        dataFields: [
                            { id: 1, name: 'ความสูง', unit: 'cm', type: 'manual', canBeAuto: false, sensor: null },
                            { id: 2, name: 'จำนวนใบ', unit: 'ใบ', type: 'manual', canBeAuto: false, sensor: null },
                            { id: 3, name: 'น้ำหนัก', unit: 'g', type: 'manual', canBeAuto: false, sensor: null },
                            { id: 4, name: 'ความกว้างใบ', unit: 'cm', type: 'manual', canBeAuto: false, sensor: null },
                            { id: 5, name: 'ทรงพุ่ม', unit: 'cm', type: 'manual', canBeAuto: false, sensor: null },
                            { id: 6, name: 'สีใบ', unit: '', type: 'manual', canBeAuto: false, sensor: null }
                        ],
                        recordCount: 7,
                        records: [
                            {
                                id: 1,
                                date: '2025-10-25',
                                time: '07:30',
                                plantData: { 'ความสูง': 7.0, 'จำนวนใบ': 4, 'น้ำหนัก': 92.0, 'ความกว้างใบ': 4.2, 'ทรงพุ่ม': 9.0, 'สีใบ': 'เขียวอ่อน' },
                                environmentData: { temperature: 22, humidity: 60, ppfd: 220, co2: 800, ec: 1.5, ph: 6.0 },
                                images: [
                                    { id: 1, source: 'manual', url: 'blue_sorrel1.jpg', timestamp: '2025-10-25T07:30:00' },
                                    { id: 2, source: 'camera', url: 'blue_sorrel2.jpg', cameraId: 'CAM-005', timestamp: '2025-10-25T07:30:00' }
                                ],
                                notes: 'เริ่มต้นดี Blue Room',
                                recordedBy: 'สมปอง'
                            },
                            {
                                id: 2,
                                date: '2025-10-30',
                                time: '08:45',
                                plantData: { 'ความสูง': 8.5, 'จำนวนใบ': 5, 'น้ำหนัก': 110.0, 'ความกว้างใบ': 5.0, 'ทรงพุ่ม': 10.5, 'สีใบ': 'เขียวเข้ม' },
                                environmentData: { temperature: 21, humidity: 62, ppfd: 225, co2: 820, ec: 1.6, ph: 6.1 },
                                images: [
                                    { id: 1, source: 'manual', url: 'blue_sorrel3.jpg', timestamp: '2025-10-30T08:45:00' }
                                ],
                                notes: 'เจริญเติบโตดี',
                                recordedBy: 'สมปอง'
                            }
                        ]
                    },
                    {
                        id: 2,
                        name: 'Frillice',
                        harvestDays: 42,
                        displayName: 'Frillice 42 วัน',
                        location: 'Layer 3',
                        quantity: 50,
                        dataFields: [
                            { id: 1, name: 'ความสูง', unit: 'cm', type: 'manual', canBeAuto: false, sensor: null },
                            { id: 2, name: 'จำนวนใบ', unit: 'ใบ', type: 'manual', canBeAuto: false, sensor: null },
                            { id: 3, name: 'น้ำหนัก', unit: 'g', type: 'manual', canBeAuto: false, sensor: null },
                            { id: 4, name: 'ความกว้างใบ', unit: 'cm', type: 'manual', canBeAuto: false, sensor: null },
                            { id: 5, name: 'ทรงพุ่ม', unit: 'cm', type: 'manual', canBeAuto: false, sensor: null },
                            { id: 6, name: 'สีใบ', unit: '', type: 'manual', canBeAuto: false, sensor: null }
                        ],
                        recordCount: 6,
                        records: [
                            {
                                id: 1,
                                date: '2025-10-26',
                                time: '09:00',
                                plantData: { 'ความสูง': 6.2, 'จำนวนใบ': 3, 'น้ำหนัก': 78.0, 'ความกว้างใบ': 3.8, 'ทรงพุ่ม': 8.0, 'สีใบ': 'เขียวอ่อน' },
                                environmentData: { temperature: 22, humidity: 61, ppfd: 218, co2: 795, ec: 1.5, ph: 6.0 },
                                images: [
                                    { id: 1, source: 'manual', url: 'blue_frill1.jpg', timestamp: '2025-10-26T09:00:00' }
                                ],
                                notes: 'ใบเริ่มม้วน',
                                recordedBy: 'สมปอง'
                            },
                            {
                                id: 2,
                                date: '2025-11-01',
                                time: '10:30',
                                plantData: { 'ความสูง': 7.8, 'จำนวนใบ': 5, 'น้ำหนัก': 102.0, 'ความกว้างใบ': 4.9, 'ทรงพุ่ม': 10.0, 'สีใบ': 'เขียวเข้ม' },
                                environmentData: { temperature: 23, humidity: 59, ppfd: 222, co2: 810, ec: 1.6, ph: 6.1 },
                                images: [
                                    { id: 1, source: 'manual', url: 'blue_frill2.jpg', timestamp: '2025-11-01T10:30:00' },
                                    { id: 2, source: 'camera', url: 'blue_frill3.jpg', cameraId: 'CAM-007', timestamp: '2025-11-01T10:30:00' }
                                ],
                                notes: 'ใบม้วนสวยมาก',
                                recordedBy: 'สมปอง'
                            }
                        ]
                    }
                ]
            },
            {
                id: 2,
                name: 'Crop 2',
                plantDate: '2025-08-01',
                zone: 'A',
                layers: ['1', '2', '3', '4'],
                iot: {
                    controllers: [{ id: 'GEN3-003', name: 'Smart Grow Controller Gen3 #3' }],
                    cameras: [
                        { id: 'CAM-005', name: 'Camera Layer 1' },
                        { id: 'CAM-006', name: 'Camera Layer 2' },
                        { id: 'CAM-007', name: 'Camera Layer 3' },
                        { id: 'CAM-008', name: 'Camera Layer 4' }
                    ]
                },
                plants: [
                    {
                        id: 1,
                        name: 'Sorrel',
                        harvestDays: 40,
                        displayName: 'Sorrel 40 วัน',
                        location: 'Layer 1',
                        quantity: 50,
                        dataFields: [
                            { id: 1, name: 'ความสูง', unit: 'cm', type: 'manual', canBeAuto: false, sensor: null },
                            { id: 2, name: 'จำนวนใบ', unit: 'ใบ', type: 'manual', canBeAuto: false, sensor: null },
                            { id: 3, name: 'น้ำหนัก', unit: 'g', type: 'manual', canBeAuto: false, sensor: null },
                            { id: 4, name: 'ความกว้างใบ', unit: 'cm', type: 'manual', canBeAuto: false, sensor: null },
                            { id: 5, name: 'ทรงพุ่ม', unit: 'cm', type: 'manual', canBeAuto: false, sensor: null },
                            { id: 6, name: 'สีใบ', unit: '', type: 'manual', canBeAuto: false, sensor: null }
                        ],
                        recordCount: 0,
                        records: []
                    },
                    {
                        id: 2,
                        name: 'Frillice',
                        harvestDays: 42,
                        displayName: 'Frillice 42 วัน',
                        location: 'Layer 3',
                        quantity: 50,
                        dataFields: [
                            { id: 1, name: 'ความสูง', unit: 'cm', type: 'manual', canBeAuto: false, sensor: null },
                            { id: 2, name: 'จำนวนใบ', unit: 'ใบ', type: 'manual', canBeAuto: false, sensor: null },
                            { id: 3, name: 'น้ำหนัก', unit: 'g', type: 'manual', canBeAuto: false, sensor: null },
                            { id: 4, name: 'ความกว้างใบ', unit: 'cm', type: 'manual', canBeAuto: false, sensor: null },
                            { id: 5, name: 'ทรงพุ่ม', unit: 'cm', type: 'manual', canBeAuto: false, sensor: null },
                            { id: 6, name: 'สีใบ', unit: '', type: 'manual', canBeAuto: false, sensor: null }
                        ],
                        recordCount: 0,
                        records: []
                    }
                ]
            }
        ]
    }
];
