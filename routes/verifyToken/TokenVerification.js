const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken');
const secretKey = 'your_secret_key'; // Replace with your own secret key

// Middleware to verify the token
function verifyToken(req, res, next) {
    const bearerHeader = req.headers['authorization'];
  
    if (typeof bearerHeader !== 'undefined') {
      const bearerToken = bearerHeader.split(' ')[1];
      req.token = bearerToken;
      next();
    } else {
      res.status(403).json({ error: 'Unauthorized' });
    }
  }
  
router.get('/protected', verifyToken, (req, res) => {
    // Verify and decode the token
    jwt.verify(req.token, secretKey, (err, authData) => {
      if (err) {
        res.status(403).json({ error: 'Invalid token' });
      } else {
        res.json({ message: 'Protected route accessed', authData });
      }
    });
});


module.exports = router;