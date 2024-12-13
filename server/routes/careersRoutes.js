const { Router } = require("express");
const router = Router();
const {
  addCareer,
  deleteCareer,
  getCareerById,
  updateCareer,
  getCareers,
} = require("../controllers/careersController");
const { upload } = require("../middlewares/multer");

router.post("/", upload.array("images", 10), addCareer);
router.get("/", getCareers);
router.delete("/:id", deleteCareer);
router.get("/:id", getCareerById);
router.patch("/", upload.array("images", 10), updateCareer);

module.exports = router;
