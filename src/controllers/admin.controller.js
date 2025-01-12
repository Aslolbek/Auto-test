const { hesh, compare } = require("../libs/bcrypt");
const adminModel = require("../models/admin.model");
const subjectModel = require("../models/subject.model");
const testModel = require("../models/test.model");
const usersModel = require("../models/users.model");


const openLogin = async (req, res ) => {
    try {
        res.render("login",  { error: null })
    } catch (error) {
        res.status(400).json({message: error.message})
    }
};

const openRegister = async (req, res ) => {
    try {
        res.render("register", { error: null })
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const register = async (req, res) => {
    try {
        const { username , email, password } = req.body;
        const hashpassword = await hesh(password)
        const user = await adminModel.findOne({ email: `${email}`})
        if(!user) {
            const newuser = new adminModel({
                username: username , 
                email: email, 
                password: hashpassword 
            })
            await newuser.save()
            res.status(201).json({ message: 'Successful'})
        }
        res.status(201).json({ message: 'royxatda otilgan bunday email bilan '})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await adminModel.findOne({ username })
        if(user) {
            const check = await compare(password, user.password)
            if(check) {
                const subjectCount = await subjectModel.countDocuments(); // Mavzular soni
                const testCount = await testModel.countDocuments(); // Testlar soni
                const userCount = await usersModel.countDocuments();
                res.render("admin-panel",{subjectCount, testCount,userCount })
            } else {
                res.render('login', { error: 'Foydalanuvchi nomi yoki parol noto‘g‘ri!' })
            } 
        } else {
            res.render('login', { error: 'Foydalanuvchi nomi yoki parol noto‘g‘ri!' })
        }
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

module.exports = {
    openLogin,
    openRegister,
    register,
    login
}