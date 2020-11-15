const usersCtrl = {};

const User = require('../models/User');

usersCtrl.getUsers = async (req,res) => {
    const users = await User.find();
    res.json({message: users});
}


usersCtrl.createUser = async (req,res) => {
    const { username } = req.body;
    const newUser = new User({
        username
    })
    await newUser.save();
    res.json({message: 'User saved'});
}

usersCtrl.deleteUser = async (req,res) => {
    await User.findOneAndDelete(req.params.id);
    res.json({message:'User deleted'});
}


usersCtrl.updateUser = (req,res) => res.json({message:'User updated'});

usersCtrl.getUser = (req,res) => res.json({message:'User obtained'});


module.exports = usersCtrl;