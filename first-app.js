"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var userName;
userName = 34;
userName = 'Anna';
userName = true;
userName = { name: 'Max' };
userName = ['apple', 'banana', 34];
console.log(userName);
var userAge = 34;
var isValid = true;
console.log(userName, userAge, isValid);
var userId = 'abc123';
userId = 123;
userId = { id: 12345 };
console.log(userId);
var user;
user = {
    name: 'John',
    age: 30,
    isAdmin: true,
    id: 'abc123',
    role: ['admin', 'editor']
};
console.log(user);
var hobbies;
hobbies = ['reading', 'gaming', 'cooking'];
hobbies = [1, 2, 3, 4, 5];
hobbies = [
    { name: 'guitar', duration: 60 },
    { name: 'piano', duration: 45 }
];
console.log(hobbies);
var API_URL = 'https://api.example.com/data';
var API_no = 1234;
function add(a, b) {
    var result = a + b;
    console.log('Result:', result);
    return result;
}
function calculateCallback(a, b, add) {
    var result = add(a, b);
    return "The result of adding ".concat(a, " and ").concat(b, " is ").concat(result);
}
var message = calculateCallback(5, 10, add);
console.log(message);
var RajathCredentials = {
    userName: 'Rajath',
    password: 'securePassword123'
};
console.log(RajathCredentials);
var superAdmin = {
    id: 1,
    name: 'Alice',
    email: 'alice@example.com',
    isActive: true,
    role: 'superadmin',
    permissions: ['read', 'write', 'delete']
};
function checkSuperAdmin(U) {
    if ('isActive' in U) {
        return "User has name ".concat(U.name, " and email ").concat(U.email);
    }
    return "Admin has role ".concat(U.role, " with permissions: ").concat(U.permissions.join(', '));
}
console.log(superAdmin);
var product = {
    id: 'p123',
    name: 'Laptop',
    price: 999.99,
    tags: ['electronics', 'computers'],
    description: 'A high-performance laptop suitable for all your computing needs.',
    manufacturer: 'TechCorp',
    stock: 50
};
console.log(product);
var role;
role = 'admin';
role = 'viewer'; // This will cause a TypeScript error
console.log('User role:', role);
function performAction(action, role) {
    if (role === 'admin' && typeof action === 'string') {
        return "Admin can perform action: ".concat(action);
    }
    else if (role === 'editor' && typeof action === 'string') {
        return "Editor can perform action: ".concat(action);
    }
    else if (role === 'admin' && typeof action === 'number') {
        return "Admin can perform action with code: ".concat(action);
    }
    else {
        console.log("Role ".concat(role, " cannot perform action: ").concat(action));
    }
}
console.log(performAction('delete user', 'admin'));
console.log(performAction(1234, 'admin'));
console.log(performAction('edit content', 'editor'));
console.log(performAction('view content', 'viewer'));
function combine(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    return "".concat(a, " ").concat(b);
}
console.log(combine(1, 1));
console.log(combine('1', '1'));
console.log(combine('Age:', 31));
var stringStorage = {
    storage: [],
    addItem: function (data) {
        this.storage.push(data);
    },
    getItems: function () {
        return this.storage;
    },
    deleteItem: function (item) {
        if (item === undefined) {
            // remove last item
            this.storage.pop();
            return;
        }
        // remove all occurrences of the provided item
        this.storage = this.storage.filter(function (i) { return i !== item; });
    }
};
stringStorage.addItem('Hello');
stringStorage.addItem('World');
stringStorage.addItem('TypeScript');
console.log(stringStorage.getItems());
console.log(stringStorage.storage);
stringStorage.deleteItem('World');
console.log(stringStorage.getItems());
