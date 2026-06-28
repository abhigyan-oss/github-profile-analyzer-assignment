# GitHub Profile Analyzer API

A RESTful backend API built with **Node.js**, **Express.js**, and **MySQL** that analyzes GitHub user profiles using the GitHub REST API, calculates developer insights, stores them in a MySQL database, and exposes endpoints to retrieve the analyzed data.

---

## 🚀 Live Demo

**Live API**

https://github-profile-analyzer-assignment-sooty.vercel.app

**GitHub Repository**

https://github.com/abhigyan-oss/github-profile-analyzer-assignment

---

# 📌 Features

* Analyze any public GitHub profile
* Fetch data from GitHub REST API
* Store profile information in MySQL
* Automatically update existing profiles
* Calculate developer insights:

  * Popularity Score
  * Profile Completeness
  * GitHub Account Age
  * Follower-to-Repository Ratio
  * Developer Level
* Retrieve all analyzed profiles
* Retrieve a single analyzed profile
* RESTful API design
* Deployed on Vercel
* MySQL database hosted on Railway

---

# 🛠 Tech Stack

* Node.js
* Express.js
* MySQL
* Axios
* dotenv
* CORS
* Railway (Database)
* Vercel (Deployment)

---

# 📁 Project Structure

```
github-profile-analyzer-assignment/
│
├── config/
├── controllers/
├── models/
├── routes/
├── services/
├── app.js
├── package.json
├── github_analyzer.sql
├── .env.example
└── README.md
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/abhigyan-oss/github-profile-analyzer-assignment.git
```

## Move into Project

```bash
cd github-profile-analyzer-assignment
```

## Install Dependencies

```bash
npm install
```

---

# Environment Variables

Create a `.env` file.

```env
PORT=5000

DB_HOST=localhost
DB_PORT=3306
DB_USER=github_user
DB_PASSWORD=your_password
DB_NAME=github_analyzer

GITHUB_API_URL=https://api.github.com/users
```

---

# Run Project

Development

```bash
npm run dev
```

Production

```bash
npm start
```

---

# Database

Import the SQL file:

```bash
mysql -u root -p < github_analyzer.sql
```

---

# API Endpoints

## Analyze GitHub Profile

**POST**

```
/api/github/analyze/:username
```

Example

```
POST /api/github/analyze/octocat
```

---

## Get All Profiles

**GET**

```
/api/github
```

---

## Get Profile by Username

**GET**

```
/api/github/:username
```

Example

```
GET /api/github/octocat
```

---

# Stored Insights

* Username
* Name
* Bio
* Avatar URL
* Company
* Location
* Blog
* Twitter Username
* GitHub Profile URL
* Followers
* Following
* Public Repositories
* Public Gists
* GitHub Account Age
* Follower-to-Repository Ratio
* Developer Level
* Popularity Score
* Profile Completeness
* Created At
* Updated At

---

# Example Response

```json
{
  "success": true,
  "message": "Profile analyzed and saved successfully",
  "data": {
    "username": "octocat",
    "name": "The Octocat",
    "followers": 23087,
    "public_repos": 8,
    "developer_level": "Beginner",
    "popularity_score": 46182
  }
}
```

---

# Deployment

**Backend**

Vercel

**Database**

Railway MySQL

---

# Author

**Abhigyan Jha**

GitHub: https://github.com/abhigyan-oss
