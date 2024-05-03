{
  //  Learn  type Aliases

  type Student = {
    name: string;
    roll: number;
    age: number;
    address: string;
    phone?: number;
    email?: string;
    course?: string;
    fees?: number;
    feesPaid?: number;
  };

  const student1: Student = {
    name: "Shah",
    roll: 1221,
    age: 20,
    address: "Kathmandu",
    phone: 9841234567,
  };
  const student2: Student = {
    name: "Shah",
    roll: 1221,
    age: 20,
    address: "Kathmandu",
    phone: 9841234567,
    email: "admin@gmail.com",
    course: "Angular",
    fees: 20000,
    feesPaid: 10000,
  };
}
