 export {};

 type stngOrNum = string | number;

 let userName: string | number | boolean | object | Array<stngOrNum>;
 userName =34;
 userName = 'Anna';
 userName = true;
 userName = { name: 'Max' };
 userName = ['apple', 'banana', 34 ];
 console.log(userName);

 let userAge = 34;

 let isValid = true;

 console.log( userName, userAge, isValid);

 let userId: any = 'abc123';
 userId = 123;
 userId = { id: 12345 };
 console.log(userId);

 type User = {
    name: string;
    age: number;
    isAdmin: boolean;
    id: stngOrNum;
    role: Array<string>;
 }

 let user : User;

user = {
    name: 'John',
    age: 30,
    isAdmin: true,
    id: 'abc123',
    role: ['admin', 'editor']
};

console.log(user);

let hobbies: string[] | number[] | { name: string; duration: number;}[];
hobbies = ['reading', 'gaming', 'cooking'];
hobbies = [1, 2, 3, 4, 5];
hobbies = [
    { name: 'guitar', duration: 60 },
    { name: 'piano', duration: 45 }
];
console.log(hobbies);

const API_URL = 'https://api.example.com/data';
const API_no = 1234;

function add(a: number, b: number): number {
    const result = a + b;
    console.log('Result:', result);
    return result;
}

type addType = (a: number, b: number) => number;   

function calculateCallback(a: number, b:number, add :addType ): string {
    const result = add(a, b);
    return `The result of adding ${a} and ${b} is ${result}`;
}

const message = calculateCallback(5, 10, add);
console.log(message);

interface Credentials {
    userName: string;
    password: stngOrNum;
}

let RajathCredentials: Credentials = {
    userName: 'Rajath',
    password: 'securePassword123'
};

console.log(RajathCredentials);

type TUser = {
    id: stngOrNum;
    name: string;
    email: string;
    isActive: boolean;
}

type TAdmin = {
    role: string;
    permissions: string[];
}

type TSuperAdmin = TUser & TAdmin;

let superAdmin: TSuperAdmin = {
    id: 1,
    name: 'Alice',
    email: 'alice@example.com',
    isActive: true,
    role: 'superadmin',
    permissions: ['read', 'write', 'delete']
};

function checkSuperAdmin( U: TUser | TAdmin): string {
    if ('isActive' in U) {
        return `User has name ${U.name} and email ${U.email}`;
    }
    return `Admin has role ${U.role} with permissions: ${U.permissions.join(', ')}`;
}

console.log(superAdmin);

interface IProduct {
    id: stngOrNum;
    name: string;
    price: number;
    tags: string[];
}

interface IPoductDetails {
    description: string;
    manufacturer: string;
    stock: number;
}

interface ICompleteProduct extends IProduct, IPoductDetails {}

let product: ICompleteProduct = {
    id: 'p123',
    name: 'Laptop',
    price: 999.99,
    tags: ['electronics', 'computers'],
    description: 'A high-performance laptop suitable for all your computing needs.',
    manufacturer: 'TechCorp',
    stock: 50
};

console.log(product);
type TRole = 'admin' | 'editor' | 'viewer';
let role: TRole;
role = 'admin';
role = 'viewer'; // This will cause a TypeScript error
console.log('User role:', role);

function performAction(action:string | number, role: TRole): string | void {
    if (role === 'admin' && typeof action === 'string') {
        return `Admin can perform action: ${action}`;
    }
    else if(role === 'editor' && typeof action === 'string') {
        return `Editor can perform action: ${action}`;
    }
    else if(role === 'admin' && typeof action === 'number') {
        return `Admin can perform action with code: ${action}`;
    }
    else {
        console.log(`Role ${role} cannot perform action: ${action}`);
    }
}

console.log(performAction('delete user', 'admin'));
console.log(performAction(1234, 'admin'));
console.log(performAction('edit content', 'editor'));
console.log(performAction('view content', 'viewer'));

function combine(a: number | string, b: number | string) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  }
 
  return `${a} ${b}`;
}

console.log(combine(1, 1));
console.log(combine('1', '1'));
console.log(combine('Age:', 31));

type DataStorage<T> = {
    storage: T[];
    addItem: ( data: T) => void;
    getItems: () => T[];
    deleteItem: (item?: T) => void;
}

const stringStorage: DataStorage<string> = {
    storage: [],
    addItem(data: string) {
        this.storage.push(data);
    },
    getItems() {
        return this.storage;
    },
    deleteItem(item?: string) {
        if (item === undefined) {
            // remove last item
            this.storage.pop();
            return;
        }
        // remove all occurrences of the provided item
        this.storage = this.storage.filter(i => i !== item);
    }
};

stringStorage.addItem('Hello');
stringStorage.addItem('World');
stringStorage.addItem('TypeScript');
console.log(stringStorage.getItems());
console.log(stringStorage.storage);
stringStorage.deleteItem('World');
console.log(stringStorage.getItems());