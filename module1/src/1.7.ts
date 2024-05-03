{
  // spred operatoir
  //   rest operatoir
  // drestracture

  //   learn Spread oprarator

  const bros1: string[] = ["israil", "tonoy", "shiham"];
  const bros2: string[] = ["israil2", "tonoy2", "shiham2"];

  bros1.push(...bros2);

  const mentors1 = {
    ts: "Mezbah",
    nx: "tonmoy",
    dmms: "mizan",
  };

  const mentors2 = {
    redux: "mir",
    cloud: "nahid",
    prisma: "firoz",
  };

  const metorList = {
    ...mentors1,
    ...mentors2,
  };
  console.log(metorList);

  //   learn Rest opreators

  const greetFriend = (...friends: string[]) => {
    friends.forEach((friend: string) => {
      console.log(`Hi ${friend}`);
    });
  };

  greetFriend("hello world", "Hello world1", "Hello world3");
}
