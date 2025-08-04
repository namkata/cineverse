# 🌌 Cineverse

**Cineverse** is your personal cinematic universe.  
Track what you watch, reflect on your feelings, and build your own galaxy of films – one movie at a time.

> Built with:  
> 🧠 Next.js + React + TailwindCSS + Framer Motion + Three.js  
> 🚀 NestJS + Fastify + PostgreSQL + Prisma  
> 🔐 Firebase/Auth0 for authentication  
> 🎞️ TMDB/IMDb API for movie data

---

## 🌟 Features
- 🪐 Visualize your watched movies as planets in a 3D universe
- ⭐ Rate, review, and tag each film you watch
- 🧭 Create themed journeys like “Cyberpunk Saga” or “Ghibli Collection”
- 📈 Track moods, genres, and personal stats over time

---

## 🛠️ Tech Stack

| Layer        | Tech                                                     |
|--------------|----------------------------------------------------------|
| Frontend     | Next.js, React, TailwindCSS, Framer Motion, Three.js     |
| Backend      | NestJS, Fastify                                          |
| Database     | PostgreSQL, Prisma                                       |
| Authentication | Firebase Auth / Auth0                                 |
| APIs         | TMDB API, IMDb API                                       |
| Dev Tooling  | TurboRepo, pnpm, Prisma CLI, ESLint, Prettier            |

---

## 🚀 Getting Started

### 1. Clone project & install dependencies

```bash
git clone https://github.com/your-username/cineverse.git
cd cineverse
pnpm install
```

### 2. Set up environment variables

Create a `.env` file at root and at `apps/web` and `apps/api`, for example:

#### Root `.env`:

```dotenv
TMDB_API_KEY=your_tmdb_key
DATABASE_URL=postgresql://user:pass@localhost:5432/cineverse
```

#### Firebase/Auth0 config (for frontend):

```dotenv
NEXT_PUBLIC_FIREBASE_API_KEY=...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=...
```

---

### 3. Start development

```bash
pnpm dev
```

This will run both frontend (Next.js) and backend (NestJS/Fastify) concurrently via Turborepo.

* Frontend: [http://localhost:3000](http://localhost:3000)
* Backend: [http://localhost:3001](http://localhost:3001)

---

## 🧪 Scripts

| Command              | Description                   |
| -------------------- | ----------------------------- |
| `pnpm dev`           | Run dev servers for all apps  |
| `pnpm build`         | Build frontend and backend    |
| `pnpm lint`          | Run linter                    |
| `pnpm format`        | Run Prettier                  |
| `pnpm prisma studio` | Open Prisma Studio GUI for DB |

---

## 🧩 Project Structure

```
cineverse/
├── apps/
│   ├── web/       → Frontend (Next.js)
│   └── api/       → Backend (NestJS + Fastify)
├── prisma/        → Prisma schema & migrations
├── packages/      → (optional shared libs)
├── .env
├── turbo.json     → Turborepo pipeline
└── pnpm-workspace.yaml
```

---

## 🛡️ License

MIT © Nam Tran

---

## 🤝 Contributing

Pull requests are welcome.
If you're building your own cinematic universe, feel free to fork this and customize!