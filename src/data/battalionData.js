// Sample data for battalion officers - easily configurable
export const officersData = {
  1966: [
    {
      id: 1,
      name: "Colonel Rajesh Kumar",
      rank: "Colonel",
      profilePicture: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      inductionDate: "1966-03-15",
      birthDate: "1945-08-20",
      birthPlace: "Delhi, India",
      servingPeriod: "1966-1996",
      laurels: [
        "Vishisht Seva Medal",
        "Ati Vishisht Seva Medal",
        "Sena Medal for Gallantry"
      ],
      description: "Distinguished service in multiple operations including the 1971 Indo-Pak War and peacekeeping missions."
    },
    {
      id: 2,
      name: "Major General Suresh Singh",
      rank: "Major General",
      profilePicture: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      inductionDate: "1966-07-22",
      birthDate: "1944-12-10",
      birthPlace: "Punjab, India",
      servingPeriod: "1966-2001",
      laurels: [
        "Param Vishisht Seva Medal",
        "Ati Vishisht Seva Medal",
        "Yudh Seva Medal"
      ],
      description: "Commanded multiple successful operations and contributed significantly to strategic planning."
    },
    {
      id: 3,
      name: "Brigadier Amit Sharma",
      rank: "Brigadier",
      profilePicture: "/api/placeholder/300/300",
      inductionDate: "1966-11-30",
      birthDate: "1946-04-05",
      birthPlace: "Rajasthan, India",
      servingPeriod: "1966-1998",
      laurels: [
        "Vishisht Seva Medal",
        "Sena Medal",
        "General Service Medal"
      ],
      description: "Expert in mountain warfare and specialized training operations."
    }
  ],
  1967: [
    {
      id: 4,
      name: "Colonel Vikram Chand",
      rank: "Colonel",
      profilePicture: "/api/placeholder/300/300",
      inductionDate: "1967-01-18",
      birthDate: "1946-09-12",
      birthPlace: "Himachal Pradesh, India",
      servingPeriod: "1967-1999",
      laurels: [
        "Ati Vishisht Seva Medal",
        "Sena Medal for Gallantry",
        "High Altitude Service Medal"
      ],
      description: "Veteran of high-altitude warfare and counter-insurgency operations."
    },
    {
      id: 5,
      name: "Lieutenant Colonel Ravi Patel",
      rank: "Lieutenant Colonel",
      profilePicture: "/api/placeholder/300/300",
      inductionDate: "1967-05-14",
      birthDate: "1947-01-28",
      birthPlace: "Gujarat, India",
      servingPeriod: "1967-1995",
      laurels: [
        "Vishisht Seva Medal",
        "General Service Medal",
        "Border Security Medal"
      ],
      description: "Specialized in logistics and supply chain management during critical operations."
    },
    {
      id: 6,
      name: "Major Arjun Reddy",
      rank: "Major",
      profilePicture: "/api/placeholder/300/300",
      inductionDate: "1967-09-03",
      birthDate: "1948-06-15",
      birthPlace: "Andhra Pradesh, India",
      servingPeriod: "1967-1992",
      laurels: [
        "Sena Medal",
        "General Service Medal",
        "Long Service Medal"
      ],
      description: "Distinguished service in intelligence operations and strategic reconnaissance."
    }
  ],
  1968: [
    {
      id: 7,
      name: "Colonel Manish Gupta",
      rank: "Colonel",
      profilePicture: "/api/placeholder/300/300",
      inductionDate: "1968-02-20",
      birthDate: "1947-11-08",
      birthPlace: "Uttar Pradesh, India",
      servingPeriod: "1968-2000",
      laurels: [
        "Vishisht Seva Medal",
        "Ati Vishisht Seva Medal",
        "Parakram Padak"
      ],
      description: "Led successful counter-terrorism operations and training programs."
    }
  ]
};

// Generate more years with sample data
const generateYearData = () => {
  const years = {};
  for (let year = 1969; year <= 2025; year++) {
    const numOfficers = Math.floor(Math.random() * 8) + 1; // 1-8 officers per year
    years[year] = [];
    
    for (let i = 0; i < numOfficers; i++) {
      const names = [
        "Rajesh Kumar", "Suresh Singh", "Amit Sharma", "Vikram Chand", "Ravi Patel",
        "Arjun Reddy", "Manish Gupta", "Pradeep Joshi", "Anil Verma", "Deepak Malhotra",
        "Sanjay Yadav", "Rohit Bhatt", "Karan Singh", "Ashok Tiwari", "Manoj Agarwal"
      ];
      
      const ranks = ["Colonel", "Lieutenant Colonel", "Major", "Brigadier", "Major General"];
      const places = [
        "Delhi", "Mumbai", "Pune", "Bangalore", "Chennai", "Kolkata", "Hyderabad",
        "Jaipur", "Lucknow", "Chandigarh", "Ahmedabad", "Surat", "Indore", "Bhopal"
      ];
      
      const randomName = names[Math.floor(Math.random() * names.length)];
      const randomRank = ranks[Math.floor(Math.random() * ranks.length)];
      const randomPlace = places[Math.floor(Math.random() * places.length)];
      
      years[year].push({
        id: year * 100 + i,
        name: `${randomRank} ${randomName} ${Math.floor(Math.random() * 999)}`,
        rank: randomRank,
        profilePicture: "/api/placeholder/300/300",
        inductionDate: `${year}-${String(Math.floor(Math.random() * 12) + 1).padStart(2, '0')}-${String(Math.floor(Math.random() * 28) + 1).padStart(2, '0')}`,
        birthDate: `${year - Math.floor(Math.random() * 5) - 20}-${String(Math.floor(Math.random() * 12) + 1).padStart(2, '0')}-${String(Math.floor(Math.random() * 28) + 1).padStart(2, '0')}`,
        birthPlace: `${randomPlace}, India`,
        servingPeriod: `${year}-${year + Math.floor(Math.random() * 25) + 10}`,
        laurels: [
          "Vishisht Seva Medal",
          "Sena Medal",
          "General Service Medal"
        ],
        description: "Distinguished service with honor and dedication to the nation."
      });
    }
  }
  return years;
};

// Merge manually created data with generated data
export const allOfficersData = {
  ...officersData,
  ...generateYearData()
};

// Battalion honors and achievements
export const battalionHonors = [
  {
    id: 1,
    title: "Theatre Honours",
    awards: [
      "PUNJAB FRONTIER 1897-98",
      "NORTH WEST FRONTIER 1930-31",
      "BURMA 1943-45",
      "JAMMU & KASHMIR 1947-48",
      "JAMMU & KASHMIR 1965",
      "JAMMU & KASHMIR 1971",
      "JAMMU & KASHMIR 1999"
    ]
  },
  {
    id: 2,
    title: "Battle Honours",
    awards: [
      "CHINA 1962",
      "PUNJAB 1965", 
      "EAST PAKISTAN 1971",
      "KARGIL 1999",
      "SIACHEN GLACIER"
    ]
  },
  {
    id: 3,
    title: "Gallantry Awards",
    awards: [
      "2 Param Vir Chakra",
      "8 Maha Vir Chakra", 
      "23 Vir Chakra",
      "45 Shaurya Chakra",
      "67 Sena Medal (Gallantry)"
    ]
  }
];

// Latest news and updates
export const latestNews = [
  {
    id: 1,
    title: "Battalion Celebrates 58th Raising Day",
    date: "2024-12-15",
    summary: "The battalion celebrated its 58th Raising Day with great enthusiasm and honor.",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=250&fit=crop"
  },
  {
    id: 2,
    title: "Successful Counter-Terrorism Operation",
    date: "2024-11-28", 
    summary: "Units successfully completed a joint counter-terrorism exercise in the northern sector.",
    image: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=400&h=250&fit=crop"
  },
  {
    id: 3,
    title: "New Training Facility Inaugurated",
    date: "2024-11-10",
    summary: "State-of-the-art training facility inaugurated to enhance soldier preparedness.",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&h=250&fit=crop"
  },
  {
    id: 4,
    title: "Veterans Meet 2024",
    date: "2024-10-25",
    summary: "Annual veterans meet brought together serving and retired personnel for camaraderie.",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=250&fit=crop"
  }
];
