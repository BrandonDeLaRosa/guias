const {Router} = require('express');
const { finAllUsers, findById, createNewUser, updateUser, deleteUser, findByName } = require('../controllers/users.controller');

const router = Router();

router.get('/api/v1/all-users', finAllUsers);
router.get('/api/v1/by-id/:id', findById);
router.post('/api/v1/new-user', createNewUser);
router.put('/api/v1/update-user/:id', updateUser);
router.delete('/api/v1/delete-user/:id', deleteUser);
router.post('/api/v1/get-by-name', findByName)

module.exports = router;