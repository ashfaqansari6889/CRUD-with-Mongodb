const app = require("express");
const route = app.Router();

const { addNewUserCtrl, listOfAllUsersCntrl, deleteUserCntrl, getUserDetailCntrl, updateUserCntrl } = require("../controllers/crud.controller");

route.post('/createUser', addNewUserCtrl);
route.get('/listOfAllUsers', listOfAllUsersCntrl);
route.delete('/deleteUser/:id', deleteUserCntrl);
route.get('/getUser/:id', getUserDetailCntrl);
route.put('/updateUser/:id', updateUserCntrl);

module.exports = route;