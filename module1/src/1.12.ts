{
  // null and type

  //   const serachName = (value: string | null) => {
  //     if (value) {
  //       console.log("seraching value");
  //     } else {
  //       console.log("no value");
  //     }
  //   };
  //   serachName(null);

  //   unkown type check
  const getSpeedInMeterPerSecond = (value: unknown) => {
    if (typeof value === "number") {
      const covertSpeed = (value * 1000) / 3600;
      console.log(`This is speed of ${covertSpeed} seconds`);
    } else if (typeof value === "string") {
      const [result, unit] = value.split(" ");
      const covertSpeed = (parseFloat(result) * 1000) / 3600;
      console.log(`This is speed of ${covertSpeed} seconds`);
    } else {
      console.log("Wrong input value");
    }
  };
  getSpeedInMeterPerSecond(null);
}
