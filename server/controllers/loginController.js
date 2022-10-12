// import data user pada database untuk register user (add data)
const { user } = require('../../models');

// controller untuk login
const loginPost = async (req,res) => {

    try {
        const user_4id = req.body.user_4id
        const password = req.body.password

        const userData = await user.findOne({
            where: { user_4id: user_4id }
        });

        if (!userData) { // dilanjutkan mengecek username, apabila email tidak ditemukan maka:
            return res
                .json({ message: "username not found" })
                .status(400)
            }

        if (userData.password !== password) { // dilanjutkan mengecek password, apabila password pada usernmae yg digunakan salah maka:
            return res
                .json({ message: "wrong password" })
                .status(400)
            }

        return res
            .json({
                message: "login success",
                data:{
                    token: userData.id
                }
            })
        }

        // if error happened, inform the error log to response
        catch (error) {
        return res.status(500).json({
            message: "error happened",
            errors: error
        });
    }
}

// export controllers
module.exports = {
    loginPost
};