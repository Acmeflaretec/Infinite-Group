const express = require('express');

const careersRoutes = require('./careersRoutes');
const contactRoutes = require('./contactRoutes')
const jobApplicationRoutes = require('./jobApplicationRoutes')

const router = express.Router();


router.use('/v1/careers', careersRoutes);
router.use('/v1/contact', contactRoutes);
router.use('/v1/job-applications', jobApplicationRoutes);

module.exports = router;
