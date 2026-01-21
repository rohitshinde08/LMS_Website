# LMS_Website

This guide explains how to run the **frontend, backend, and database** together using **Docker Compose**.

---

## Tech Stack

- Frontend: React (Vite)
- Backend: FastAPI (Python)
- Database: MongoDB
- Containerization: Docker & Docker Compose

---

## Prerequisites

- Docker Desktop
- Git

Verify Docker installation:

```bash
docker --version
```
docker compose version

---


# 1. Clone the Repository:
```bash
git clone https://github.com/rohitshinde08/LMS_Website.git
cd LMS_Website
```


# 2. Create .env then add password and database name
```bash
copy .env.example .env
```

# 3. Run the Project
```
docker compose up --build
```


# 4  Access the App
Open browser:
-	Frontend → http://localhost:5173
-	Backend Swagger → http://localhost:8000/docs
	
If this opens → project is running successfully 



# 5. Stop the Project
```
docker-compose down
```


# 6. To remove DB data also:
```bash
docker-compose down -v
