import UsersManager from "../models/UsersManager.js";

const userModel = new UsersManager();

const getUsers = async( request, response) =>{
    const users = await userModel.getUsers();
    response.status(200).json( users);
}
const getUserById = async( request, response) => {
    const id = request.params.id;
    const user = await userModel.getUserById(id);
    if ( user) {
        response.status(200).json( user );
    } else {
        response.status(404).json({msg: 'No se encontro el usuario'});
    }
}

const addUser = async(request, response) => {
    const user = request.body;
    console.log({user});
    const id = await userModel.addUser(user);
    response.json( { id} );
}

const updateUser =  async (request, response)=>{
    response.json({})
}

const deleteUser =  async (request, response) => {
    const id = request.params.id;
    const status = await userModel.deleteUserById(id);
    if ( status) {
        response.json( {msg: 'Usuarios eliminado'} );
    } else {
        response.status(404).json({msg: 'No se encontro el usuario'});
    }
}

export { getUsers, getUserById, addUser, updateUser, deleteUser}
