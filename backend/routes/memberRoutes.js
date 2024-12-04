const express = require('express');
const memberController = require('../controllers/memberController');
const router = express.Router();

// get all members
router.get('/members', memberController.getAllMembers);

// get member by username
router.get('/members/username/:username', memberController.getMemberByUsername);

// get member by email
router.get('/members/email/:email', memberController.getMemberByEmail);

// create a new member
router.post('/members', memberController.createMember);

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