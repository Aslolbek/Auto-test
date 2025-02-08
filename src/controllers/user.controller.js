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

const userAll = async (req, res) => {
  try {
    // Barcha foydalanuvchilarni olish
    const users = await User.find();
    res.render('view-users', { users });  // Foydalanuvchilarni sahifaga render qilish
} catch (err) {
    console.error(err);
    res.status(500).send('Server xatosi');
}
}

const userDelete = async (req, res) => {
  try {
    const userId = req.params.id;

        // Foydalanuvchini o'chirish
        const user = await User.findByIdAndDelete(userId);

        if (user) {
            // O'chirish muvaffaqiyatli amalga oshirilsa, qayta render qilish
            res.redirect('/user/all');  // Boshqa sahifaga o'tkaziladi
        } else {
            res.status(404).send('Foydalanuvchi topilmadi');
        }
  } catch (error) {
    
    res.status(500).send('Server xatosi');
  }
}

module.exports = {
    userAll,
    userDelete
}