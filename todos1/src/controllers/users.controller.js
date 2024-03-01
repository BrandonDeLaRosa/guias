const UserServices = require("../services/users.services");


const finAllUsers = async (req,res) => {
    try {
        const users = await UserServices.getAll();
        res.status(200).json(users)
    } catch (error) {
        res.status(400).json(error)
    }
}


const findById = async (req,res) => {
    try {
        const { id } = req.params
        const user = await UserServices.getById(id);
        if(!user){
            res.status(404).json({
                error: "Usuario no encontrado"
            });
        }
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json(error)
    }
}

const createNewUser = async (req,res) => {
    try {
        const userData = req.body
        const newUser = await UserServices.newUser(userData);
        res.status(200).json(newUser)
    } catch (error) {
        res.status(400).json(error)
    }
}

const updateUser = async (req,res) => {
    try {
        const {id} = req.params;
        const userData = req.body;
        const user = await UserServices.updateData(id, userData);
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json(error)
    }
}

const deleteUser = async (req,res) => {
    try {
        const {id} = req.params;
        const user = await UserServices.destroyUser(id);
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json(error)   
    }
}

const findByName = async (req,res) => {
    try {
        const {name} = req.body;
        const user = await UserServices.getByName(name);
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json(error)
    }
}
 

module.exports = {
    finAllUsers,
    findById,
    createNewUser,
    updateUser,
    deleteUser,
    findByName
}