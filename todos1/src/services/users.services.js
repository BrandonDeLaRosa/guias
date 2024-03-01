const Users = require('../models/users.model');

class UserServices {

    static async getAll(){
        try {
            const users = await Users.findAll();
            return users
        } catch (error) {
            throw(error)
        }
    }

    static async getById(id) {
        try {
           const user = await Users.findByPk(id);
           return user
        } catch (error) {
            throw(error)
        }
    }

    static async newUser(userData){
        try {
            const user = await Users.create(userData);
            return user
        } catch (error) {
            throw(error)
        }
    }

    static async updateData(id, userData){
        try {
            const user = await Users.update(userData, {
                where:{id}
            });
            return user
        } catch (error) {
            throw(error)
        }
    }

    static async destroyUser(id){
        try {
            const user = await Users.destroy({
                where:{id}
            });
            return user
        } catch (error) {
            throw(error)
        }
    }

    static async getByName(name){
        try {
            const user = Users.findOne({
                where:{name}
            });
            return user
        } catch (error) {
            throw(error)
        }
    }
}


module.exports = UserServices;