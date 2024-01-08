// controllers/productController.js
const Product = require('../model/productModel');

const createProduct = async (req, res) => {
  try {
    const { name , price , quantity} = req.body;
    const product = new Product({name,price,quantity});
    const savedProduct = await product.save();
   return res.status(200).json({data:savedProduct,msg:'Created a product'});
  } catch (error) {
   return res.status(500).json({ error: error.message });
  }
};

const updateProduct = async (req, res) => {
  try {
    const productId = req.params.productId
    const updatedProduct = await Product.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedProduct) {
    return  res.status(404).json({ error: 'Product not found' });
    } else {
     return res.status(200).json({data:updatedProduct,msg:'Product can be updated'});
    }
  } catch (error) {
   return res.status(500).json({ error: error.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) {
    return  res.status(404).json({ error: 'Product not found' });
    } else {
    return  res.status(200).json({data:deletedProduct,msg:'Product can be deleted'});
    }
  } catch (error) {
   return res.status(500).json({ error: error.message });
  }
};

const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
     return res.status(404).json({ error: 'Product not found' });
    } else {
     return res.status(200).json({data:product,msg:'Get one Product'});
    }
  } catch (error) {
   return res.status(500).json({ error: error.message });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    return res.status(200).json({data:products,msg:'Get All the Product'});
  } catch (error) {
   return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createProduct,
  updateProduct,
  deleteProduct,
  getProductById,
  getAllProducts,
};
