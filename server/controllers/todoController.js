// import data user pada database untuk register user (add data)
const { user, todo } = require('../../models');

const toDoAdd = async (req,res) => {

    try {
        const foreign_id = req.body.foreign_id
        const desc = req.body.desc

        // check user id on database
        const isExist = await user.findOne({
            where: {
                id: foreign_id
            }
        });

        // if user id is NOT detected on database, then fail the registration
        if(!isExist){
            return res
                .json({ message: "user not found" })
                .status(400)
        }
        // if user id detected on database, then write data and give success response
        else{
            const newToDo = todo.create({
                foreign_id: foreign_id,
                desc: desc,
                status: false
            })

            return res
                .json({
                    message: "task successfuly added",
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

        // check task id on database
        const isExist = await todo.findOne({
            where: {
                id: id
            }
        });

        // if task id is NOT detected on database, then fail the deletion
        if(!isExist){
            return res
                .json({ message: "To do not found / already deleted" })
                .status(400)
        }

        // if task id detected on database, then drop data and notify the user that deletion is success
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

const toDoChange = async (req,res) => {

    try {
        const id = req.params.id
        const desc = req.body.desc

        // check task on database by id
        const isExist = await todo.findOne({
            where: {
                id: id
            }
        });

        // if task not detected on database, then fail the update
        if(!isExist){
            return res
                .json({ message: "Task not found" })
                .status(400)
        }
        // if task detected on database, then update task description and notify the user that update is success
        else{
            const updatedRows = todo.update(
                {
                  desc: desc,
                },
                {
                  where: { id: id },
                }
              );

            return res
                .json({
                    message: "desc updated",
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

const toDoToggle = async (req,res) => {

    try {
        const id = req.params.id
        const status = req.body.status

        // check task on database by id
        const isExist = await todo.findOne({
            where: {
                id: id
            }
        });

        // if task not detected on database, then fail the update
        if(!isExist){
            return res
                .json({ message: "Task not found" })
                .status(400)
        }

        // validation for status body (value should boolean)
        if(typeof status !== "boolean"){
            return res
                .json({ message: "please fill the right data for status (true or false)" })
                .status(400)
        }

        // if task detected on database and pass the validation, then update task status and notify the user that update is success
        else{
            const desc = isExist.desc
            console.log(desc)
            const updatedRows = todo.update(
                {
                  status: status,
                },
                {
                  where: { id: id },
                }
              );

            return res
                .json({
                    message: "desc updated",
                    data: {

                        status: status,
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

const toDoShow = async (req,res) => {

    try {
        const id = req.params.id

        // check user_4id on database
        const isExist = await user.findOne({
            where: {
                id: id
            }
        });

        // if user_4id is NOT detected on database, then fail the registration
        if(!isExist){
            return res
                .json({ message: "user not found" })
                .status(400)
        }
        // if user_4id detected on database, then write data and notify the user that registration is success
        else{
            const newToDo = todo.findAll({
                where: {
                    foreign_id: id
                }
            })

            newToDo.then(function(result){
                console.log(result)
                
                return res
                .json({
                    message: "show data success",
                    data: {
                        todo_data: result
                    }
                    })
                .status(200)
            })


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
    toDoChange,
    toDoToggle,
    toDoShow
};