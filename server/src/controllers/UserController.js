const {User} = require('../models')

module.exports = {
    //get all user
    async index(req, res) {
        // res.send("ดูข้อมูลผู้ใช้งาน");
        try {
            const users = await User.findAll()
            res.send(users)
        } catch (error) {
            res.status(500).send({
                error: 'the users information was incorrect'
            })
        }
    },
    //create user
    async create(req, res) {
        // res.send("ทำการสร้างผู้ใช้งาน: " + JSON.stringify(req.body));
        try {
            const user = await User.create(req.body)
            res.send(user.to.JSON())
            
        } catch (error) {
            res.status(500).send({
                error: 'the users information was incorrect'
            })
        }
    },
    //edit user
    async put(req, res) {
       // res.send( "ทำการแก้ไขผู้ใช้งาน: " + req.params.userId + " : " + JSON.stringify(req.body));
       try {
        await User.update(req.body, {
            where: {
                id: req.params.userId
                }    
        })
        res.send(req.body)
       } catch (error) {
        res.status(500).send({
            error: 'Update user incorrect' 
            })
       }
    },
    //delete user
    async delete(req, res) {
        // res.send("ทำการลบผู้ใช้งาน: " + req.params.userId + " : " + JSON.stringify(req.body));
        try {
            const user = await User.findOne({
                where: {
                id: req.params.userId
                }
                })
                if(!user){
                return res.status(403).send({
                error: 'The user information was incorrect'
                })
                }
                await user.destroy()
                res.send(user)
        } catch (error) {
            res.status(500).send({
                error: 'The user information was incorrect'
                })
        }
    },
    //show user by id
    async show(req, res) {
        // res.send("ดูข้อมูลผู้ใช้งาน: " + req.params.userId + " : " + JSON.stringify(req.body));
        try {
            const user = await User.findByPk(req.params.userId)
            res.send(user)
        } catch (error) {
            res.status(500).send({
                error: 'The user information was incorrect'
            })   
        }
    },
};