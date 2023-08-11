const express = require('express');
const router = express.Router();
const productController = require('../controller/productController');

router.get('/create', productController.create);
router.post('/create', productController.create);
router.get('/list_poduct', productController.get_list_product)
router.get('/edit/:id', productController.edit)//lay form để edit
router.put('/edit/:id', productController.edit)// edit
router.delete('/delete/:id', productController.delete)// delete
router.post('/search', productController.search); //post search

module.exports = router;