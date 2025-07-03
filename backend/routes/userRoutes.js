const express = require('express');
const { registerUser, loginUser } = require('../controllers/userController');
const auth = require('../middleware/auth');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);

// Protected route example
router.get('/profile', auth, (req, res) => {
  res.json({ user: req.user });
});

module.exports = router; 