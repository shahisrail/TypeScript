// basic data types
// string
let firstName = "Shah ";
let lastName: string = "Israil ";

// number
let Roll: number = 1221;
let Roll1 = 1221;

// boolean
let isAdmin = true;
let isAdmin1: boolean = true;

// undefined
let x: undefined = undefined;

// null
let y: null = null;

//  cheking data typed when you called this data type

let amount: string;
// let amount: boolean ;
// let amount: number;
// let amount: undefined ;

// amount = 10;
amount = "amount";
// amount = true;
// amount = undefined;

// array
let friends: string[] = ["friend1", "friend2", "friend3", "friend4", "friend5"];
friends.push("friend6");
// friends.push(4);   /** Don't push number why not you defiend this data type ** /
let eligibleRollList: number[] = [1, 2, 3, 4];
eligibleRollList.push(4);
// eligibleRollList.push("friend");   /** Don't push any string  why not you defiend this data type ** /

// tuple ---> array --> order --> type of array

// tuple subida defined arrray data type one array write mulitple data type

// Example
let coordinates: [number, number] = [1, 2];
let ageName: [number, string] = [20, "Shah"];
