const index = (req, res) => {
    return res.json({ message: 'you are on the server side of todo-binar app' });
   }

   module.exports = {  
     index
   }