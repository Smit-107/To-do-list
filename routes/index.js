var express = require('express');
var router = express.Router();
var userController  = require('../Controller/usercontroller')
/* GET home page. */

router.post('/insert', userController.insert);
router.get('/', userController.select_data);
router.get('/delete/:id', userController.delete_data);

router.get('/running', userController.running);
router.get('/pending', userController.pending);
router.get('/decline', userController.decline);
router.get('/completed', userController.completed);

router.post('/update/:id', userController.update_data);

module.exports = router;
