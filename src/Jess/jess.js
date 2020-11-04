const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

router.get('/try-uuid', (req, res) => {
    res.json({
        uuid1: uuidv4(),
        uuid2: uuidv4(),
    });
});

module.exports = router;