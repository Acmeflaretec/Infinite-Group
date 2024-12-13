const Careers = require("../models/careers");

const getCareers = async (req, res) => {
  try {
    const {
      page = 1,
      perPage = 10,
      sortBy = "createdAt",
      order = "desc",
      search = "",
      isAdmin = false,
    } = req.query;
    const query = search ? { title: { $regex: search, $options: "i" } } : {};

    if (!isAdmin) {
      query.isAvailable = true;
    }

    const options = {
      page: parseInt(page, 10),
      limit: parseInt(perPage, 10),
      sort: { [sortBy]: order === "desc" ? -1 : 1 },
    };

    const careers = await Careers.paginate(query, options);

    res.status(200).json(careers);
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .json({ message: error?.message ?? "Something went wrong !" });
  }
};

const getCareerById = async (req, res) => {
  try {
    const data = await Careers.findOne({ _id: req.params.id });
    res.status(200).json({ data, message: "Career found successfully" });
  } catch (error) {
    console.log(error.message);
    res
      .status(400)
      .json({ message: error?.message ?? "Something went wrong !" });
  }
};

const addCareer = async (req, res) => {
  try {
    const {
      title,
      location,
      type,
      linkedin_url,
      pay,
      summary,
      dutiesAndResponsibilities,
      workingConditions,
      jobRequirements,
    } = req?.body;

    const careers = new Careers({
      title,
      location,
      type,
      linkedin_url,
      pay,
      summary,
      dutiesAndResponsibilities,
      workingConditions,
      jobRequirements,
    });
    await careers.save();

    res.status(200).json({ message: "Career added successfully !" });
  } catch (error) {
    console.log(error.message);
    res
      .status(400)
      .json({ message: error?.message ?? "Something went wrong !" });
  }
};

const updateCareer = async (req, res) => {
  try {
    const {
      _id,
      title,
      isAvailable,
      location,
      type,
      linkedin_url,
      pay,
      summary,
      dutiesAndResponsibilities,
      workingConditions,
      jobRequirements,
    } = req?.body;

    await Careers.updateOne(
      { _id },
      {
        $set: {
          title,
          isAvailable,
          location,
          type,
          linkedin_url,
          pay,
          summary,
          dutiesAndResponsibilities,
          workingConditions,
          jobRequirements,
        },
      }
    );

    res.status(200).json({ message: "Career updated successfully !" });
  } catch (error) {
    console.log(error.message);
    res
      .status(400)
      .json({ message: error?.message ?? "Something went wrong !" });
  }
};

const deleteCareer = async (req, res) => {
  try {
    await Careers.deleteOne({ _id: req.params.id });
    res.status(200).json({ message: "Career deleted successfully" });
  } catch (error) {
    console.log(error.message);
    res
      .status(400)
      .json({ message: error?.message ?? "Something went wrong !" });
  }
};

module.exports = {
  getCareerById,
  updateCareer,
  addCareer,
  deleteCareer,
  getCareers,
};
