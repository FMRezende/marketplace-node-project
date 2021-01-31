const { Router } = require('express');
const categoriesController = require('./categories.controller');
const router = Router();

router.route('/').get(categoriesController.getAllCategories).post(categoriesController.createCategory);


router
  .route('/:id')
  .get(categoriesController.getOneCategory)
  .put(categoriesController.updateCategory)
  .delete(categoriesController.removeCategory)

router.route('/subcategories').post(categoriesController.createSubcategory);
router.route('/:id/subcategories').get(categoriesController.getAllSubcategoriesByCategory);

router
  .route('/:id/subcategories/:subcategory_id')
  .get(categoriesController.getOneSubcategory)
  .put(categoriesController.updateSubcategory)
  .delete(categoriesController.removeSubcategory);

module.exports = router;