# GitHub Profile Analyzer API

## 📌 Overview

GitHub Profile Analyzer API is a backend application built using **Node.js**, **Express.js**, and **MySQL**. It fetches a user's public GitHub profile using the GitHub REST API, analyzes the profile, stores useful insights in a MySQL database, and provides APIs to retrieve the stored data.

---

## 🚀 Features

* Fetch GitHub public profile by username
* Store analyzed profile in MySQL
* Update existing profiles automatically
* Calculate custom insights:

  * Popularity Score
  * Profile Completeness
  * GitHub Account Age
  * Follower-to-Repository Ratio
  * Developer Level
* Get all analyzed profiles
* Get a single analyzed profile

---

## 🛠 Tech Stack

* Node.js
* Express.js
* MySQL
* Axios
* dotenv

---

## 📁 Project Structure

```
github-profile-analyzer-assignment/
│
├── config/
├── controllers/
├── models/
├── routes/
├── services/
├── middleware/
├── database/
├── app.js
├── package.json
├── github_analyzer.sql
└── README.md
```

---

## ⚙️ Installation

Clone the repository:

```bash
git clone <your-github-repository-url>
```

Go to the project folder:

```bash
cd github-profile-analyzer-assignment
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
PORT=5000

DB_HOST=localhost
DB_USER=github_user
DB_PASSWORD=your_password
DB_NAME=github_analyzer

GITHUB_API_URL=https://api.github.com/users
```

Run the project:

```bash
npm run dev
```

---

## 🗄 Database

Import the provided database:

```bash
mysql -u root -p < github_analyzer.sql
```

---

## 📡 API Endpoints

### Analyze a GitHub Profile

**POST**

```
/api/github/analyze/:username
```

Example:

```
POST /api/github/analyze/octocat
```

---

### Get All Profiles

**GET**

```
/api/github
```

---

### Get Single Profile

**GET**

```
/api/github/:username
```

Example:

```
GET /api/github/octocat
```

---

## 📊 Stored Insights

* Username
* Name
* Bio
* Company
* Location
* Public Repositories
* Public Gists
* Followers
* Following
* GitHub Account Age
* Developer Level
* Popularity Score
* Profile Completeness
* Follower/Repository Ratio

---

## Author

Abhigyan Jha