// import data user pada database untuk register user (add data)
const { user } = require('../../models');

// controller untuk register
const registerPost = async (req,res) => {

    try {
        const user_4id = req.body.user_4id
        const password = req.body.password

        // 4 character username validation
        if(user_4id.length != 4){
            return res
                .json({ message: "username hasn't reach require character" })
                .status(400)
        }

        // numeric only username validation
        if(/\D/.test(user_4id)){
            return res
                .json({ message: "please only enter numeric characters only for your username" })
                .status(400)
        }

        // 8 minimum character password validation
        if(password.length < 8){
            return res
                .json({ message: "password hasn't reach minimum character" })
                .status(400)
        }

        // check user_4id on database
        const isExist = await user.findOne({
            where: {
                user_4id: user_4id
            }
        });

        // if user_4id detected on database, then fail the registration
        if(isExist){
            return res
                .json({ message: "username already registered" })
                .status(400)
        }
        // if user_4id NOT detected on database, then write data and notify the user that registration is success
        else{
            const newUser = user.create({
                user_4id: user_4id,
                password: password
            })

            return res
                .json({
                    message: "registration success",
                    data: {
                        user_4id: user_4id
                        }
                    })
                .status(200)
        }
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
    registerPost
};