const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(bodyParser.json());

// Mock user data
const users = [
    { id: 1, email: "user1@example.com", password: "password123" },
    { id: 2, email: "sanjeev@gmail.com", password: "S@123456" }
];

// Login API
app.post("/api/login", (req, res) => {
    const { email, password } = req.body;
   
    // Validate input
    if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required." });
    }

    // Find user
    const user = users.find(u => u.email === email && u.password === password);
    if (!user) {
        return res.status(401).json({ message: "Invalid email or password." });
    }
    // Successful login
    res.json({ message: "Login successful!", userId: user.id });
});

// Return Calendar Data 
const calendarItems = [
    {
        id: 1,
      title: "Morning Yoga",
      description: "A relaxing yoga session to start your day.",
      startTime: "07:00",
      endTime: "08:00",
      category: "Yoga",
      calorieBurn: "250 kcal",
    },
    {
        id: 2,
      title: "Weight Lifting",
      description: "An intense strength training session.",
      startTime: "12:00",
      endTime: "12:30",
      category: "Strength",
      calorieBurn: "250 kcal",
    },
    {
        id: 3,
      title: "Evening Run",
      description: "A refreshing 5 km run outdoors.",
      startTime: "18:30",
      endTime: "19:15",
      category: "Cardio",
      calorieBurn: "400 kcal",
    },
  ];

  app.get("/api/calendar", (req, res) => {
    res.json(calendarItems);
  });

  // Return Chart Data
  const chartData = [
    {
        id: 1,
        day: "Mon",
        steps: 8000,
        distance: 5,
        calories: 200,
        targetSteps: 10000,
        targetDistance: 6,
        targetCalories: 300,
    },
    {
      id: 2,
      day: "Tue",
      steps: 7500,
      distance: 4,
      calories: 180,
      targetSteps: 10000,
      targetDistance: 6,
      targetCalories: 300,
    },
    {
      id: 3,
      day: "Wed",
      steps: 9000,
      distance: 5,
      calories: 250,
      targetSteps: 10000,
      targetDistance: 6,
      targetCalories: 300,
    },
    {
      id: 4,
      day: "Thu",
      steps: 6000,
      distance: 3,
      calories: 150,
      targetSteps: 10000,
      targetDistance: 6,
      targetCalories: 300,
    },
    {
      id: 5,
      day: "Fri",
      steps: 10000,
      distance: 6,
      calories: 300,
      targetSteps: 10000,
      targetDistance: 6,
      targetCalories: 300,
    },
    {
        id: 6,
        day: "Sat",
        steps: 9000,
        distance: 4,
        calories: 200,
        targetSteps: 10000,
        targetDistance: 6,
        targetCalories: 300,
      },
      {
        id: 7,
        day: "Sun",
        steps: 8000,
        distance: 3,
        calories: 150,
        targetSteps: 10000,
        targetDistance: 6,
        targetCalories: 300,
      },
  ];

  app.get("/api/chart-data", (req, res) => {
    console.log("****** CHART DATA Fetched *********");
    res.json(chartData);
  });

  // Return Activity List Data
  const activityListData = [
    {
      id: 1,
      activityName: "Walking",
      steps: 5000,
      distance: 3,
      calories: 200,
      bpm: 55,
      coordinates: [
        { latitude: 30.7333, longitude: 76.7794 }, 
        { latitude: 30.7398, longitude: 76.7850 },
        { latitude: 30.7460, longitude: 76.7910 }, 
        { latitude: 30.7522, longitude: 76.7980 }  
      ],
    },
    {
      id: 2,
      activityName: "Running",
      steps: 7000,
      distance: 5,
      calories: 300,
      bpm: 67,
      coordinates: [
        { latitude: 30.7046, longitude: 76.7179 }, 
        { latitude: 30.7120, longitude: 76.7260 },
        { latitude: 30.7200, longitude: 76.7350 }, 
        { latitude: 30.7280, longitude: 76.7440 } 
      ],
    },
    {
      id: 3,
      activityName: "Cycling",
      steps: 0,
      distance: 8,
      calories: 400,
      bpm: 74,
      coordinates: [
        { latitude: 30.7325, longitude: 76.8440 }, 
        { latitude: 30.7375, longitude: 76.8540 },
        { latitude: 30.7425, longitude: 76.8640 }, 
        { latitude: 30.7475, longitude: 76.8740 }
      ],
    },
  ];

  app.get("/api/activity-list-data", (req, res) => {
    console.log("****** Activity Data Fetched *********", activityListData);
    res.json(activityListData);
  });

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});