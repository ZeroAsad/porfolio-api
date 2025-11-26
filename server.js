const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Home route
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to my Personal API!',
    endpoints: {
      about: '/about',
      skills: '/skills',
      projects: '/projects',
      contact: '/contact'
    }
  });
});

// About route
app.get('/about', (req, res) => {
  res.json({
    name: 'M.asad Ghouri',
    role: 'Backend Developer',
    bio: 'Passionate about building scalable web applications with Node.js and Express',
    location: 'Pakistan ',
    yearsOfExperience: 1
  });
});


// Projects route
app.get('/projects', (req, res) => {
  res.json({
    projects: [
      {
        id: 1,
        name: 'Personal API',
        description: 'A REST API showcasing my information and skills',
        techStack: ['Node.js', 'Express.js'],
        status: 'In Progress'
      },
      {
        id: 2,
        name: 'Todo App',
        description: 'A task management application',
        techStack: ['Node.js', 'Express.js', 'MongoDB'],
        status: 'Planned'
      }
    ]
  });
});

// Contact route
app.get('/contact', (req, res) => {
  res.json({
    email: 'asadghouri434@gmail.com',
    github: 'https://github.com/asadghouri',
    linkedin: 'https://linkedin.com/in/asadghouri',
    twitter: '@zeroasad'
  });
});
const myprojects = [
  {
    id: 1,
    name: 'Personal API',
    description: 'A REST API showcasing my information and skills',
    techStack: ['Node.js', 'Express.js'],
    status: 'In Progress',
    githubUrl: 'https://github.com/yourusername/personal-api'
  },
  {
    id: 2,
    name: 'Todo App',
    description: 'A task management application',
    techStack: ['Node.js', 'Express.js', 'MongoDB'],
    status: 'Planned',
    githubUrl: 'https://github.com/yourusername/todo-app'
  },
  {
    id: 3,
    name: 'Weather Dashboard',
    description: 'Dashboard showing weather data from external APIs',
    techStack: ['Node.js', 'Express.js', 'Axios'],
    status: 'Completed',
    githubUrl: 'https://github.com/yourusername/weather-dashboard'
  }
];
// 404 handler


// Get specific project by ID
app.get('/projects/:id', (req, res) => {
  const projectId = parseInt(req.params.id);
  
  // Validate that ID is a number
  if (isNaN(projectId)) {
    return res.status(400).json({
      error: 'Invalid ID',
      message: 'Project ID must be a number'
    });
  }
  
  const project = myprojects.find(p => p.id === projectId);
  
  if (!project) {
    return res.status(404).json({
      error: 'Project not found',
      message: `No project found with ID ${projectId}`
    });
  }
  
  res.json(project);
});




app.get('/skills', (req, res) => {
  const { category } = req.query;
  const skills = {
    technical: ['Node.js', 'Express.js'],
    learning: ['MongoDB'],
    soft: ['Problem Solving']
  };
  
  if (category && skills[category]) {
    return res.json({ [category]: skills[category] });
  }
  
  res.json(skills);
});
// Now you can call: /skills?category=technical


app.use((req, res) => {
  res.status(404).json({
    error: 'Route not found',
    message: 'The endpoint you are looking for does not exist'
  });
});


// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});