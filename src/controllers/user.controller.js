const  User  = require("../models/users.model")

const UserRegister = async (req, res) => {
  try {
    const { telegramId, username } = req.body;
    let user = await User.findOne({ telegramId });

  if (!user) {
    user = new User({ telegramId, username });
    await user.save();
    res.status(201).json({ message: "Foydalanuvchi muvaffaqiyatli ro'yxatdan o'tdi", user });
  } else {
    res.status(201).json({ message: "Ro'yxatga Olingan"});
  }
  } catch (error) {
     console.log(error)
  }
 

}

module.exports = {
    UserRegister
}