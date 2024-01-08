const router = require("express").Router();
const productController = require('../controller/productController');

router.post('/create-products', productController.createProduct);
router.put('/update-products/:id', productController.updateProduct);
router.delete('/delete-products/:id', productController.deleteProduct);
router.get('/get-by-products/:id', productController.getProductById);
router.get('/get-all-products', productController.getAllProducts);

module.exports = router;