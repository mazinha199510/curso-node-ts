interface User{
    id: number;
    name: string;
};

const users: User[] = [
    {
        id: 1,
        name: "Jose"
    },
    {
        id: 2,
        name: "Peter"
    }
];

export function getUserById(id:number, callback: (err?: string, user?: User) => void) {
    const user = users.find( function(user) {
        return user.id === id;
    });

    if(!user){
        setTimeout(() => {callback(`Usuario no encontrado con el id ${id}`)}, 2500);
    }

    return;
}
