const express = require('express');
const { body } = require('express-validator');
const memberController = require('../controllers/memberController');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');

// get all members
router.get('/members', memberController.getAllMembers);

// get member by username
router.get('/members/username/:username', memberController.getMemberByUsername);

// get member by email
router.get('/members/email/:email', memberController.getMemberByEmail);

// create a new member, use validation rules
router.post('/register',
    [
        body('username').notEmpty().withMessage('Username is required'),
        body('email').isEmail().withMessage('Valid email is required'),
        body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
    ],
    memberController.register);

// login member
router.post('/login',
    [
        body('email').isEmail().withMessage('Valid email is required'),
        body('password').isLength({ min: 6 }).withMessage('Password is required and must be valid')
    ],
    
    memberController.login);

// update member description
router.put('/members/email/:email/description', memberController.updateMemberDescription);

// delete member by email
router.delete('/members/email/:email', memberController.deleteMember);


// admin routes
// Get all admins

router.get('/admins', memberController.getAllAdmins);

// Get admin by username
router.get('/admins/username/:username', memberController.getAdminByUsername);

// Get admin by email
router.get('/admins/email/:email', memberController.getAdminByEmail);

// Create a new admin
router.post('/admins', memberController.createAdmin);

// Delete admin by email
router.delete('/admins/email/:email', memberController.deleteAdmin);

module.exports = router;