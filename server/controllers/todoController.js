// import data user pada database untuk register user (add data)
const { user, todo } = require('../../models');

// controller untuk register
const toDoAdd = async (req,res) => {

    try {
        const foreign_id = req.body.foreign_id
        const desc = req.body.desc

        // check user_4id on database
        const isExist = await user.findOne({
            where: {
                id: foreign_id
            }
        });

        // if user_4id detected on database, then fail the registration
        if(!isExist){
            return res
                .json({ message: "user not found" })
                .status(400)
        }
        // if user_4id NOT detected on database, then write data and notify the user that registration is success
        else{
            const newToDo = todo.create({
                foreign_id: foreign_id,
                desc: desc,
                status: false
            })

            return res
                .json({
                    message: "registration success",
                    data: {
                        desc: desc,
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

const toDoRemove = async (req,res) => {

    try {
        const id = req.params.id

        // check user_4id on database
        const isExist = await todo.findOne({
            where: {
                id: id
            }
        });

        // if user_4id detected on database, then fail the registration
        if(!isExist){
            return res
                .json({ message: "To do not found / already deleted" })
                .status(400)
        }
        // if user_4id NOT detected on database, then write data and notify the user that registration is success
        else{
            const deleteToDo = todo.destroy({
                where: {
                    id: id
                }
            })

            return res
                .json({ message: "to do deleted" })
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

const toDoToggle = async (req,res) => {

    try {
        const id = req.params.id
        const status = req.body.status

        // check user_4id on database
        const isExist = await todo.findOne({
            where: {
                id: id
            }
        });

        // if user_4id detected on database, then fail the registration
        if(!isExist){
            return res
                .json({ message: "To do not found / already deleted" })
                .status(400)
        }
        // if user_4id NOT detected on database, then write data and notify the user that registration is success
        else{
            const deleteToDo = todo.destroy({
                where: {
                    id: id
                }
            })

            return res
                .json({ message: "to do deleted" })
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
    toDoAdd,
    toDoRemove,
    toDoToggle
};