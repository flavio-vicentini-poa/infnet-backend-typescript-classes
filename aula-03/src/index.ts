import { User, users } from './usuarios';

function addUser(user: User) {
    users.push(user);
}

function getAllUsers(): User[] {
    return users;
}

function getUserById(id: number): User | undefined {
    if (Number.isInteger(id)) {
        return users.find((user) => user.id === id);
    }
    throw new Error('Error, the given parameter must to be an Integer.');
}

function updateUser(id: number, userUpdate: User) {
    const index = users.findIndex((user) => user.id === id);
    users[index] = userUpdate;
}

function deleteUser(id: number) {
    const index = users.findIndex((user) => user.id === id);
    users.splice(index, 1);
}

const newUser: User = {
    id: 3,
    name: 'Warren Bufet',
};

const updateWarren: User = {
    id: 3,
    name: 'Warren Buffett',
};

console.log(getAllUsers());
console.log(getUserById(1));
addUser(newUser);
console.log(getAllUsers());
updateUser(3, updateWarren);
console.log(getAllUsers());
deleteUser(1);
console.log(getAllUsers());
