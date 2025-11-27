// server/server.js
import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 4000;

// --- Fix __dirname for ES modules ---
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middlewares
app.use(cors({
  origin: "http://localhost:5173", // Vite default port
}));
app.use(express.json());

// Path to store admissions data
const DATA_FILE = path.join(__dirname, "admissions.json");

// Helper: read existing admissions
function readAdmissions() {
  try {
    if (!fs.existsSync(DATA_FILE)) return [];
    const raw = fs.readFileSync(DATA_FILE, "utf8");
    return raw ? JSON.parse(raw) : [];
  } catch (err) {
    console.error("Error reading admissions file:", err);
    return [];
  }
}

// Helper: save admissions
function writeAdmissions(list) {
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(list, null, 2), "utf8");
  } catch (err) {
    console.error("Error writing admissions file:", err);
  }
}

// Health check
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "Admissions backend running" });
});

// POST /api/admissions - save form submission
app.post("/api/admissions", (req, res) => {
  const { studentName, parentName, phone, grade, branch, message } = req.body || {};

  if (!studentName || !parentName || !phone || !grade) {
    return res.status(400).json({
      ok: false,
      error: "studentName, parentName, phone, and grade are required",
    });
  }

  const admissions = readAdmissions();

  const entry = {
    id: Date.now(),
    studentName,
    parentName,
    phone,
    grade,
    branch: branch || "",
    message: message || "",
    createdAt: new Date().toISOString(),
  };

  admissions.push(entry);
  writeAdmissions(admissions);

  console.log("New admission:", entry);

  res.json({
    ok: true,
    message: "Admission form submitted successfully",
  });
});

// (Optional) GET /api/admissions - view all submissions
app.get("/api/admissions", (req, res) => {
  const admissions = readAdmissions();
  res.json(admissions);
});

app.listen(PORT, () => {
  console.log(`Admissions backend running on http://localhost:${PORT}`);
});
