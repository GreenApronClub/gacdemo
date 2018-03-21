const express = require('express');
const passport = require('passport');
const router = express.Router();
require('../../config/passport')(passport);
const jwt = require('jsonwebtoken');
const ManageController = require('../../controllers/manage');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(new Error('Invalid image format. Please use jpeg or png formats'), false);
  }
}

const upload = multer({
  storage: storage,
  limits: {
  fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter
});

router.get('/', ManageController.get_strains);
router.post('/add', upload.single('strainImage'), ManageController.add_strain);
router.post('/:strainId', ManageController.search_strain);
router.get('/:strainId', passport.authenticate('jwt', { session: false }), ManageController.get_specific_strain);
router.put('/:strainId', ManageController.update_specific_strain);
router.get('/:strainId/edit', ManageController.edit_specific_strain);
router.delete('/:strainId', passport.authenticate('jwt', { session: false }), ManageController.delete_strain);

module.exports = router;
