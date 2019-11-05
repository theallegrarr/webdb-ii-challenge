const express = require('express');
const db = require('../data/db-config');
console.log(process.env.NODE_ENV);

const router = express.Router();

router.get('/', (req, res) => {
  db('cars')
  .then(car => {
    res.json(car); 
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to retrieve fruits' });
  });
});

router.post('/', (req, res) => {
  db('cars').insert(req.body)
  .then(car => {
    res.json({message: `car ${car} added`});
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to add car' });
  });
});

module.exports = router;