const express = require('express');
const reviewController = require('./../controllers/reviewController');
const authController = require('./../controllers/authController');
 
const router = express.Router({mergeParams: true});

router.use(authController.protect);

router.route('/')
.get(reviewController.getAllReviews)
.post(
      authController.restrictTo('user'),
      reviewController.setTourUserIds,
      reviewController.createReview
);

router.route('/:id',reviewController.deleteOne)
.patch(authController.restrictTo('admin','user'),reviewController.updateOne)
.delete(authController.restrictTo('admin','user'),reviewController.deleteOne)

module.exports = router;