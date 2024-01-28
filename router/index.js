

const express = require('express');

const router = express.Router();

console.log('Nothing');

// required home controller module to handle the routes
const homeController = require('../controllers/home_controller')

//for homepage 
router.get('/', homeController.home);

// for adding task
router.post('/add_task', homeController.add);

//for deleting task 
router.get('/delete_task', homeController.delete);


module.exports = router;