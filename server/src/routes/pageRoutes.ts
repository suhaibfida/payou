import { Router } from "express";
const router = Router();
router.get("register", (req, res) => {
  res.json({
    message: "hello",
  });
});
export default router;
