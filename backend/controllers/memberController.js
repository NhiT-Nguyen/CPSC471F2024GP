
const memberModel = require('../models/memberModel');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');

const secretKey = process.env.JWT_SECRET;

// get all members
const getAllMembers = (req, res) => {
    memberModel.getAllMembers((err, results) => {
        if (err) {
            res.status(500).send('Database query error');
            return;
        }
        res.json(results);
    });
};

// get member by username
const getMemberByUsername = (req, res) => {
    const { username } = req.params;
    memberModel.getMemberByUsername(username, (err, results) => {
        if (err) {
            res.status(500).send('Database query error');
            return;
        }
        if (results.length === 0) {
            res.status(404).send('Member not found');
            return;
        }
        res.json(results);
    });
};

// get member by email
const getMemberByEmail = (req, res) => {
    const { email } = req.params;
    memberModel.getMemberByEmail(email, (err, results) => {
        if (err) {
            res.status(500).send('Database query error');
            return;
        }
        if (results.length === 0) {
            res.status(404).send('Member not found');
            return;
        }
        res.json(results);
    });
};

// register member
const register = (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { username, email, password, description } = req.body;

    if (username === undefined || email === undefined || password === undefined || description === undefined) {
        res.status(400).send('Missing input');
        return;
    }
    memberModel.createMember(username, email, password, description, (err, results) => {
        if (err) {
            if (err.code === 'ER_DUP_ENTRY') {
                res.status(400).send('Username or email already exists');
                return;
            }
            res.status(500).send('Database query error');
            return;
        }
        res.status(201).json({message: "Member registered successfully"});
    });
};

// login member
const login = (req,res) => {
    const {email, password} = req.body;

    memberModel.getMemberByEmail(email, (err, results) => {
        if (err) {
            res.status(500).send('Database query error');
            return;
        }
        if (results.length === 0) {
            res.status(404).send('Member not found');
            return;
        }
        const user = results[0];
        bcrypt.compare(password, user.password, (err, result) => {
            if (result) {
                const token = jwt.sign({email: user.email, username: user.username}, secretKey, {expiresIn: '1h'});
                res.status(200).json({token});
            }
            else if (err) {
                res.status(500).send('Database query error');
                return;
            }
            else {
                res.status(401).send('Invalid credentials');
            }
        });
    });
};

// update member description
const updateMemberDescription = (req, res) => {
    const { email } = req.params;
    const { description } = req.body;
    if (description === undefined) {
        res.status(400).send('Description is required');
        return;
    }
    memberModel.updateMemberDescription(email, description, (err, results) => {
        if (err) {
            res.status(500).send('Database query error');
            return;
        }
        res.json(results);
    });
};

// delete member by email
const deleteMember = (req, res) => {
    const { email } = req.params;
    memberModel.deleteMember(email, (err, results) => {
        if (err) {
            res.status(500).send('Database query error');
            return;
        }
        res.json(results);
    });
};

// get all admins
const getAllAdmins = (req, res) => {
    memberModel.getAllAdmins((err, results) => {
        if (err) {
            res.status(500).send('Database query error');
            return;
        }
        res.json(results);
    });
};

// get admin by username
const getAdminByUsername = (req, res) => {
    const { username } = req.params;
    memberModel.getAdminByUsername(username, (err, results) => {
        if (err) {
            res.status(500).send('Database query error');
            return;
        }
        if (results.length === 0) {
            res.status(404).send('Admin not found');
            return;
        }
        res.json(results);
    });
};

// get admin by email
const getAdminByEmail = (req, res) => {
    const { email } = req.params;
    memberModel.getAdminByEmail(email, (err, results) => {
        if (err) {
            res.status(500).send('Database query error');
            return;
        }
        if (results.length === 0) {
            res.status(404).send('Admin not found');
            return;
        }
        res.json(results);
    });
};

// create a new admin
const createAdmin = (req, res) => {
    const { username, email, password } = req.body;
    if (username === undefined || email === undefined || password === undefined) {
        res.status(400).send('Missing input');
        return;
    }
    memberModel.createAdmin(username, email, password, (err, results) => {
        if (err) {
            res.status(500).send('Database query error');
            return;
        }
        res.json(results);
    });
};

// delete admin by email
const deleteAdmin = (req, res) => {
    const { email } = req.params;
    memberModel.deleteAdmin(email, (err, results) => {
        if (err) {
            res.status(500).send('Database query error');
            return;
        }
        res.json(results);
    });
};

module.exports = {
    getAllMembers,
    getMemberByUsername,
    getMemberByEmail,
    register,
    login,
    updateMemberDescription,
    deleteMember,
    getAllAdmins,
    getAdminByUsername,
    getAdminByEmail,
    createAdmin,
    deleteAdmin
};