const JobApplication = require('../models/JobApplication');


const submitJobApplication = async (req, res) => {
  const { 
    firstName, middleName, lastName, email, linkedInId, 
    country, highestQualification, contactNumber, whatsAppNumber 
  } = req.body;

  if (!req.file) {
    return res.status(400).json({ message: 'CV file is required' });
  }


  if (!firstName || !lastName || !email || !linkedInId || !country || 
      !highestQualification || !contactNumber || !whatsAppNumber) {
    return res.status(400).json({ message: 'All fields except middle name are required' });
  }

  try {
    const newJobApplication = await JobApplication.create({
      firstName,
      middleName,
      lastName,
      email,
      linkedInId,
      country,
      highestQualification,
      contactNumber,
      whatsAppNumber,
      cv: req.file.path, 
    });

    res.status(201).json({
      message: 'Job application submitted successfully',
      application: newJobApplication,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { submitJobApplication };
