# LMS_Website

Minimal instructions to run the project (frontend + backend) locally.

## Prerequisites

- Node.js (16+)
- Python 3.10+ (venv recommended)
- Git

## Backend (FastAPI)

1. Create a virtual environment from the repo root (optional but recommended):

```bash
cd /Users/sanket/Desktop/Update/LMS_Website
python3 -m venv .venv
source .venv/bin/activate
```

2. Install backend Python requirements:

```bash
pip install -r backend/requirement.txt
```

3. Create a `.env` file in `backend/` with the following variables:

```
MONGO_URI=<your mongodb connection string>
DB_NAME=<your database name>
```

4. Start the backend (example using the venv python):

```bash
# from repo root
/Users/sanket/Desktop/Update/LMS_Website/.venv/bin/python -m uvicorn backend.main:app --reload --host 0.0.0.0 --port 8002
```

- Note: the repo venv path above is an example created by the setup script. If you used a different venv or system python, adjust accordingly.
- If the backend fails with `MongoDB environment variables not set`, ensure `.env` contains `MONGO_URI` and `DB_NAME`.

## Frontend (Vite + React)

1. Install dependencies:

```bash
cd frontend
npm install
```

2. Start dev server:

```bash
npm run dev
```

- The dev server typically uses port 5173; if that port is busy Vite will pick another free port (e.g., 5174).

## Git: add, commit, push

```bash
git add README.md
git commit -m "Add README with run instructions"
git push
```

If you need me to run the commit/push now, I can attempt that (may require credentials or remote setup).

## Notes

- Backend expects `MONGO_URI` and `DB_NAME` to be present; set them in `backend/.env` or export in your shell.
- The frontend runs separately from the backend; set any required CORS or proxy if needed.

