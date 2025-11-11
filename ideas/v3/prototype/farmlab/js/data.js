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
                            { id: 3, name: 'น้ำหนัก', unit: 'g', type: 'manual', canBeAuto: false, sensor: null }
                        ],
                        recordCount: 8,
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
                            { id: 3, name: 'น้ำหนัก', unit: 'g', type: 'manual', canBeAuto: false, sensor: null }
                        ],
                        recordCount: 7,
                        records: []
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
                            { id: 3, name: 'น้ำหนัก', unit: 'g', type: 'manual', canBeAuto: false, sensor: null }
                        ],
                        recordCount: 6,
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
                            { id: 3, name: 'น้ำหนัก', unit: 'g', type: 'manual', canBeAuto: false, sensor: null }
                        ],
                        recordCount: 6,
                        records: []
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
                            { id: 3, name: 'น้ำหนัก', unit: 'g', type: 'manual', canBeAuto: false, sensor: null }
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
                            { id: 3, name: 'น้ำหนัก', unit: 'g', type: 'manual', canBeAuto: false, sensor: null }
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
                            { id: 3, name: 'น้ำหนัก', unit: 'g', type: 'manual', canBeAuto: false, sensor: null }
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
                            { id: 3, name: 'น้ำหนัก', unit: 'g', type: 'manual', canBeAuto: false, sensor: null }
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
                            { id: 3, name: 'น้ำหนัก', unit: 'g', type: 'manual', canBeAuto: false, sensor: null }
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
                            { id: 3, name: 'น้ำหนัก', unit: 'g', type: 'manual', canBeAuto: false, sensor: null }
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
                            { id: 3, name: 'น้ำหนัก', unit: 'g', type: 'manual', canBeAuto: false, sensor: null }
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
                            { id: 3, name: 'น้ำหนัก', unit: 'g', type: 'manual', canBeAuto: false, sensor: null }
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
                            { id: 3, name: 'น้ำหนัก', unit: 'g', type: 'manual', canBeAuto: false, sensor: null }
                        ],
                        recordCount: 6,
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
                            { id: 3, name: 'น้ำหนัก', unit: 'g', type: 'manual', canBeAuto: false, sensor: null }
                        ],
                        recordCount: 5,
                        records: []
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
                            { id: 3, name: 'น้ำหนัก', unit: 'g', type: 'manual', canBeAuto: false, sensor: null }
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
                            { id: 3, name: 'น้ำหนัก', unit: 'g', type: 'manual', canBeAuto: false, sensor: null }
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
                            { id: 3, name: 'น้ำหนัก', unit: 'g', type: 'manual', canBeAuto: false, sensor: null }
                        ],
                        recordCount: 7,
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
                            { id: 3, name: 'น้ำหนัก', unit: 'g', type: 'manual', canBeAuto: false, sensor: null }
                        ],
                        recordCount: 6,
                        records: []
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
                            { id: 3, name: 'น้ำหนัก', unit: 'g', type: 'manual', canBeAuto: false, sensor: null }
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
                            { id: 3, name: 'น้ำหนัก', unit: 'g', type: 'manual', canBeAuto: false, sensor: null }
                        ],
                        recordCount: 0,
                        records: []
                    }
                ]
            }
        ]
    }
];
