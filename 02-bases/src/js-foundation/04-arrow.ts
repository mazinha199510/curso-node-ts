interface User {
    id: number;
    name: string;
}

const users = [
    {
        id: 1,
        name: "Jose"
    },
    {
        id: 2,
        name: "Peter"
    }
];

const getUserById = (id: number, callback: (err?:string, user?: User) => void) => {
    const user = users.find((user) => user.id === id );

    user
    ?   callback(undefined, user)
    :   callback(`Usuario no encontrado con el id ${id}`)
}

module.exports = {
    getUserById,
}