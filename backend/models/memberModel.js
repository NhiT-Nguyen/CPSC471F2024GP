const db = require('../config/db');
const bcrypt = require('bcrypt');

const saltRounds = 10;

/*
CREATE TABLE MEMBER(
MUsername		VARCHAR(20)		NOT NULL,
MEmail			VARCHAR(20)		NOT NULL,
MPassword		VARCHAR(20)		NOT NULL,
UserDescription		VARCHAR(200)	,
JoinDate		DATETIME			NOT NULL,
PRIMARY KEY (MEmail),
UNIQUE (MUsername)
);

CREATE TABLE ADMIN(
AUsername		VARCHAR(20)		NOT NULL,
AEmail			VARCHAR(20)		NOT NULL,
APassword		VARCHAR(20)		NOT NULL,
PRIMARY KEY (AEmail),
UNIQUE (AUsername)
);
*/
// get all members
const getAllMembers = (callback) => {
    db.query('SELECT * FROM member', callback);
};

// get member by username
const getMemberByUsername = (username, callback) => {
    db.query('SELECT * FROM member WHERE MUsername = ?', [username], callback);
};

// get member by email
const getMemberByEmail = (email, callback) => {
    db.query('SELECT * FROM member WHERE MEmail = ?', [email], callback);
};

// create a new member, securely store password
const createMember = (username, email, password, description, callback) => {
    // bcrypt.hash(password, saltRounds, (err, hashedPassword) => {
    //     if (err) {
    //         console.log(err);
    //         callback(err, null);
    //         return;
    //     }
        // console.log(hashedPassword)
        db.query(
            'INSERT INTO member (MUsername, MEmail, MPassword, UserDescription, JoinDate) VALUES (?, ?, ?, ?, ?)',
            [username, email, password, description, new Date()],
            callback
        );
    // });
};

// update member description
const updateMemberDescription = (email, description, callback) => {
    db.query('UPDATE member SET UserDescription = ? WHERE MEmail = ?', [description, username], callback);
};

// delete member by email
const deleteMember = (email, callback) => {
    db.query('DELETE FROM member WHERE MEmail = ?', [email], callback);
};

// get all admins
const getAllAdmins = (callback) => {
    db.query('SELECT * FROM admin', callback);
};

// get admin by username
const getAdminByUsername = (username, callback) => {
    db.query('SELECT * FROM admin WHERE AUsername = ?', [username], callback);
};

// get admin by email
const getAdminByEmail = (email, callback) => {
    db.query('SELECT * FROM admin WHERE AEmail = ?', [email], callback);
};

// create a new admin, securely store password
const createAdmin = (username, email, password, callback) => {
    bcrypt.hash(password, saltRounds, (err, hashedPassword) => {
        if (err) {
            console.log(err);
            callback(err, null);
            return;
        }
        db.query(
            'INSERT INTO admin (AUsername, AEmail, APassword) VALUES (?, ?, ?)',
            [username, email, hashedPassword],
            callback
        );
    });
};

// delete admin by email
const deleteAdmin = (email, callback) => {
    db.query('DELETE FROM admin WHERE AEmail = ?', [email], callback);
};

module.exports = {
    getAllMembers,
    getMemberByUsername,
    getMemberByEmail,
    createMember,
    updateMemberDescription,
    deleteMember,
    getAllAdmins,
    getAdminByUsername,
    getAdminByEmail,
    createAdmin,
    deleteAdmin
};