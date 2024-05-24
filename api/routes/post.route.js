import express from "express";

const router = express.Router();

router.get("/test", (req, res) => {
    console.log("router works");
});
router.post("/test", (req, res) => {
    console.log("router works");
});

router.put("/test", (req, res) => {
    console.log("router works");
});
router.delete("/test", (req, res) => {
    console.log("router works");
});

export default router;