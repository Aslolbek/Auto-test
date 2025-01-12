const bcrypt = require("bcrypt")

const hesh = async (data) =>{
   return await bcrypt.hash(data, 10)
}
const compare = async (password, hechpassword) =>
{
        return  await bcrypt.compare(password, hechpassword)
      
} 

module.exports = {
    hesh,
    compare
}