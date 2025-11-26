# Personal API

A RESTful API built with Node.js and Express.js that showcases my skills, projects, and contact information.

## 🚀 Features

- **About Me**: Get information about my background and experience
- **Skills**: View my technical, learning, and soft skills with category filtering
- **Projects**: Browse my projects with search and status filtering
- **Project Details**: Get detailed information about specific projects
- **Contact**: Access my contact information and social links

## 🛠️ Tech Stack

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **JavaScript** - Programming language

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/asadghouri/personal-api.git
cd personal-api
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The server will run on `http://localhost:3000`

## 📚 API Endpoints

### Get All Endpoints
```
GET /
```

### About Me
```
GET /about
```

### Skills
```
GET /skills
GET /skills?category=technical
GET /skills?category=learning
GET /skills?category=soft
```

### Projects
```
GET /projects
GET /projects?search=api
GET /projects?status=completed
GET /projects?search=todo&status=planned
GET /projects/:id
```

### Contact
```
GET /contact
```

## 📝 Example Response

**GET /projects/1**
```json
{
  "id": 1,
  "name": "Personal API",
  "description": "A REST API showcasing my information and skills",
  "techStack": ["Node.js", "Express.js"],
  "status": "In Progress",
  "githubUrl": "https://github.com/asadghouri/personal-api"
}
```

## 🧪 Testing

You can test the API using:
- Your browser for GET requests
- curl commands
- Postman
- VS Code REST Client extension

Example curl command:
```bash
curl http://localhost:3000/projects
```

## 📜 Available Scripts

- `npm start` - Start the production server
- `npm run dev` - Start the development server with nodemon

## 🤝 Connect With Me

- **Email**: asadghouri434@gmail.com
- **GitHub**: [@asadghouri](https://github.com/asadghouri)
- **LinkedIn**: [asadghouri](https://linkedin.com/in/asadghouri)
- **Twitter**: [@zeroasad](https://twitter.com/zeroasad)

## 📄 License

This project is open source and available under the MIT License.

## 🎯 Next Steps

- [ ] Add MongoDB database integration
- [ ] Implement authentication
- [ ] Add input validation with express-validator
- [ ] Deploy to production
- [ ] Add API documentation with Swagger