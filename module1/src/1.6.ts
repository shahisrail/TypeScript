{//  Learning functions
//  normal function
// arrow function

// normal function
function add(x: number, y: number): number {
  return x + y;
}

add(10, 29);

// arrow functoin
const addArrow = (x: number, y: number): number => x + y;

addArrow(10, 29);
console.log(addArrow);

// object ---> function ---> method

const poorUser = {
  name: "shah Israil",
  balance: 0,
  addBalance(balance: number) {
    return balance;
  },
};
}