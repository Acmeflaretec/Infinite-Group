const Careers = require('../models/careers')
const JobApplication = require('../models/JobApplication')



const getAdminProducts = async (req, res) => {
  try {
    const { page = 1, perPage = 10, sortBy = 'createdAt', order = 'desc', search = '' } = req.query;
    const query = search ? { name: { $regex: search, $options: 'i' } } : {};

    const options = {
      page: parseInt(page, 10),
      limit: parseInt(perPage, 10),
      sort: { [sortBy]: order === 'desc' ? -1 : 1 }
    };

    const careers = await Careers.paginate(query, options);


    res.status(200).json(careers);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error?.message ?? "Something went wrong !" });
  }
};


// const getProductById = async (req, res) => {
//   try {
//     const data = await Careers.findOne({ _id: req.params.id })
//     res.status(200).json({ data, message: 'product found successfully' });
//   } catch (error) {
//     console.log(error.message);
//     res.status(400).json({ message: error?.message ?? "Something went wrong !" });
//   }
// }


const getProductById = async (req, res) => {
  try {
    const data = await Careers.findById(req.params.id).populate('applicants');
    res.status(200).json({ data, message: 'Career and applicants fetched successfully' });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ message: error?.message ?? 'Something went wrong!' });
  }
};


const addProduct = async (req, res) => {
  try {
    const { name,place,times,summary,dutiesAndResponsibilities,workingConditions,jobRequirements } = req?.body
    

    
      const careers = new Careers({
        name,place,times,summary,dutiesAndResponsibilities,workingConditions,jobRequirements
      });
      await careers.save();

      
        res.status(200).json({ message: "Product added successfully !" });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ message: error?.message ?? "Something went wrong !" });
  }
};


const updateProduct = async (req, res) => {
  try {
    const { _id, name, isAvailable, place,times,summary,dutiesAndResponsibilities,workingConditions,jobRequirements} = req?.body
console.log('_id, name, isAvailable, place,times,summary,dutiesAndResponsibilities,workingConditions,jobRequirements',_id, name, isAvailable, place,times,summary,dutiesAndResponsibilities,workingConditions,jobRequirements);

    
    await Careers.updateOne({ _id }, {
      $set: { name, isAvailable, place,times,summary,dutiesAndResponsibilities,workingConditions,jobRequirements }
    })

    res.status(200).json({ message: "Product updated successfully !" });
  } catch (error) {
    console.log(error.message)
    res.status(400).json({ message: error?.message ?? "Something went wrong !" });
  }
}

// const deleteProduct = async (req, res) => {
//   try {
//     await Careers.deleteOne({ _id: req.params.id })
//     res.status(200).json({ message: 'product deleted successfully' });
//   } catch (error) {
//     console.log(error.message);
//     res.status(400).json({ message: error?.message ?? "Something went wrong !" });
//   }
// }

const deleteProduct = async (req, res) => {
  try {
    const career = await Careers.findById(req.params.id);
    if (!career) {
      return res.status(404).json({ message: 'Career not found' });
    }
    await JobApplication.deleteMany({ careerId: career._id });
    await Careers.deleteOne({ _id: req.params.id });

    res.status(200).json({ message: 'Career and associated applications deleted successfully' });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ message: error?.message ?? 'Something went wrong!' });
  }
};

const getCareers = async (req, res) => {
  try {
    const careers = await Careers.find({});
    res.status(200).json(careers);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching careers', error });
  }
};


module.exports = {
  getProductById,
  updateProduct,
  addProduct,
  deleteProduct,
  getAdminProducts,
  getCareers
}  