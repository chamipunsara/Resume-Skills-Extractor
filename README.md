# Resume Skills Extractor

A simple **Node.js command-line application** that extracts **technical and personal skills** from a resume using **OpenAI API**.  

This mini app demonstrates how **prompt engineering** can be used to build real-world AI tools.

---

## Features

- Extracts **technical skills** (programming languages, frameworks, tools, databases, etc.)
- Extracts **personal skills** (communication, teamwork, creativity, etc.)
- Accepts **manual multi-line input** via command prompt
- Outputs results as **JSON**

---

## Prerequisites

- Node.js v18 or above
- OpenAI API key
- Internet connection

---

## Usage

1. Run the app:

```bash
node index.js
Paste your full resume into the command prompt.

Type END on a new line when finished.

The extracted skills will appear as JSON in the terminal.

Example Output
json
Copy code
{
  "technical_skills": [
    "Java", "Python", "C++", "C#", "JavaScript",
    ".NET", "Spring Boot", "React", "Tailwind CSS",
    "Git", "GitHub", "Postman", "VS Code", "IntelliJ",
    "MySQL", "MongoDB", "SQL Server", "REST API",
    "UML Diagrams", "Data Structures & Algorithms", "OOP"
  ],
  
  "personal_skills": [
    "Effective Communication", "Teamwork",
    "Presentation Skills", "Time Management",
    "Creativity", "Problem-Solving Skills"
  ]
}
How it Works
The app reads the resume text you paste into the command prompt.

Sends the text to the OpenAI GPT API with a prompt to extract skills.

Returns JSON with technical_skills and personal_skills.
