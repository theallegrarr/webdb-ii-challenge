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

router.delete('/:id', (req, res) => {
  db('cars').where({id: req.params.id}).delete()
  .then(car => {
    res.json({message: `car ${req.params.id} deleted`});
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to delete the car' });
  });
});

router.put('/:id', (req, res) => {
  db('cars').where({id: req.params.id}).update(req.body)
  .then(car => {
    res.json({message: `car ${req.params.id} updated`});
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to update the car' });
  });
});

module.exports = router;