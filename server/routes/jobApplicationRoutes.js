const { Router } = require('express');
const { upload } = require('../middlewares/multer');
const { submitJobApplication } = require('../controllers/jobApplicationController');
const router = Router();


router.post('/', upload.single('cv'), submitJobApplication);

module.exports = router;
