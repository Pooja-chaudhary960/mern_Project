import userService from "../services/userService.js";

const createUser = async (req, res) => {
    console.log("Received req.body:", req.body);
  try {
    const data = await userService.createUser(req.body);
    res.status(201).json(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getUsers = async (req, res) => {
  try {
    const data = await userService.getUsers();
    res.status(200).json(data); 
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getUserById = async (req, res) => {
    const id = req.params.id;
    const data = await userService.getUserById();
    res.json(data);
   
  };

  const updateUser = async (req, res) => {
    const id = req.params.id;
    try{
        const data = await userService.updateUser(id, req.body);
        res.status(201).json(data);
    }catch(error){
        res.status(500).send(error.message);
    }
   
  }
  const deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    const data = await userService.deleteUser(id);
    res.send(`User deleted successfully with id: ${id}`);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export default {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser
};
