# 🚀 Express Prisma PostgreSQL Starter

A clean, production-ready backend boilerplate built with **Express.js**, **TypeScript**, **PostgreSQL**, and **Prisma ORM** — all running inside Docker for easy development and deployment.

---

## 📦 Tech Stack

- **Node.js** + **Express.js**
- **TypeScript**
- **PostgreSQL** (via Docker)
- **Prisma ORM**
- **Docker & Docker Compose**
- **ts-node-dev** for hot-reloading

---

## 📁 Project Structure

```
express-prisma-postgres/
├── prisma/                 # Prisma schema & migrations
│   └── schema.prisma
├── src/                    # Source code
│   ├── controllers/        # Route controllers
│   ├── routes/             # API route handlers
│   ├── middlewares/        # Custom middleware (e.g. error handler)
│   ├── utils/              # Utility helpers (e.g. Prisma client)
│   └── server.ts           # Entry point
├── Dockerfile              # Docker config for Node.js server
├── docker-compose.yml      # Docker config for PostgreSQL & API
├── .env                    # Environment variables
├── package.json
├── tsconfig.json
└── README.md
```

---

## ⚙️ Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/express-prisma-postgres.git
cd express-prisma-postgres
```

### 2️⃣ Setup Environment Variables

Create a `.env` file in the root:

```env
DATABASE_URL=
PORT=
```

---

### 3️⃣ Start Services with Docker

```bash
docker-compose up -d
```

This will:

- Start a PostgreSQL container
- Build and run the Node.js server

---

### 4️⃣ Prisma Setup

After containers are up, run:

```bash
npx prisma generate      # Generate Prisma client
npx prisma migrate dev   # Apply DB migrations (optional if schema exists)
```

---

### 5️⃣ Run the API Locally

```bash
npm install
npm run dev
```

---

## 📬 API Endpoints

| Method | Endpoint         | Description              |
| ------ | ---------------- | ------------------------ |
| POST   | `/v1/data/write` | Create a new message     |
| GET    | `/v1/data/read`  | Fetch all saved messages |

### 🧪 Sample Request

```http
POST /v1/data/write
Content-Type: application/json

{
  "message": "Hello, World!"
}
```

## 📜 Scripts

| Command               | Description                      |
| --------------------- | -------------------------------- |
| `npm run dev`         | Start dev server with hot reload |
| `npm run build`       | Compile TypeScript to JS         |
| `npx prisma generate` | Generate Prisma client           |

---

## 🧑‍💻 Author

**Saad Ur Rehman**  
Full-stack Developer | DevOps Engineer  
[GitHub](https://github.com/5aaad) • [LinkedIn](https://www.linkedin.com/in/saadurrehmann/)
