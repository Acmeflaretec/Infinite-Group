const { Router } = require('express');
const router = Router();
const { addProduct, deleteProduct, getProductById, updateProduct,getAdminProducts
 } = require('../controllers/careersController');    
const { upload } = require('../middlewares/multer');

router.post('/', upload.array('images', 10), addProduct);  
router.get('/adminCareers', getAdminProducts);
router.delete('/:id',  deleteProduct);
router.get('/:id', getProductById);
router.patch('/', upload.array('images', 10), updateProduct);

module.exports = router;
