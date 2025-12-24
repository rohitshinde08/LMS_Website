from fastapi import APIRouter, HTTPException
from models import ContactMessage
from database import contact_collection
from models import CareerApplication
from database import career_collection
from datetime import datetime




from fastapi import UploadFile, File, Form
from database import job_applications
import os
import shutil
import uuid

router = APIRouter()

@router.post("/contact")
def submit_message(data: ContactMessage):
    try:
        doc = data.dict()
        doc["created_at"] = datetime.utcnow()

        result = contact_collection.insert_one(doc)

        print("INSERTED:", result.inserted_id)

        return {"message": "Saved successfully"}

    except Exception as e:
        print("ERROR:", e)
        raise HTTPException(status_code=500, detail=str(e))


@router.get("/contacts")
def get_contacts():
    return list(contact_collection.find({}, {"_id": 0}))



@router.post("/careers")
def submit_career_application(data: CareerApplication):
    try:
        payload = data.dict()
        payload["created_at"] = datetime.utcnow()

        career_collection.insert_one(payload)

        return {
            "message": "Application submitted successfully"
        }

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    




router = APIRouter()

UPLOAD_DIR = "uploads/resumes"
os.makedirs(UPLOAD_DIR, exist_ok=True)

@router.post("/jobs/apply")
def apply_for_job(
    job_id: str = Form(...),
    name: str = Form(...),
    email: str = Form(...),
    experience: str = Form(...),
    linkedin: str = Form(None),
    resume: UploadFile = File(...)
):
    try:
        # ---- Validate file ----
        if resume.content_type not in [
            "application/pdf",
            "application/msword",
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        ]:
            raise HTTPException(status_code=400, detail="Invalid resume format")

        # ---- Save resume ----
        file_ext = resume.filename.split(".")[-1]
        file_name = f"{uuid.uuid4()}.{file_ext}"
        file_path = os.path.join(UPLOAD_DIR, file_name)

        with open(file_path, "wb") as buffer:
            shutil.copyfileobj(resume.file, buffer)

        # ---- Save to MongoDB ----
        job_applications.insert_one({
            "job_id": job_id,
            "name": name,
            "email": email,
            "experience": experience,
            "linkedin": linkedin,
            "resume_path": file_path,
            "created_at": datetime.utcnow()
        })

        return {"message": "Application submitted successfully"}

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
