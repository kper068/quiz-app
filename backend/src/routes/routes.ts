import express from "express";

const router = express.Router();

// Dummy get method
router.get("/api/hello", (_req, res) => {
    return res.send("Hello World");
});

export default router;