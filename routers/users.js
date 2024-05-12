const express = require('express');
const router = express.Router();
const userController = require('../app/controllers/userController');
const multer = require('multer');
const path = require('path');




const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Menentukan folder penyimpanan untuk file yang diunggah
    },
    filename: function (req, file, cb) {
        // Mengatur nama file yang akan disimpan
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

// Inisialisasi multer dengan konfigurasi penyimpanan
const upload = multer({ storage: storage });


// Routes for CRUD operations
router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.post('/', upload.fields([{ name: 'thumb', maxCount: 1 }, { name: 'cover', maxCount: 1 }]), userController.createUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;
