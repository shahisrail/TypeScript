{
  // destructure

  const user = {
    id: 124,
    name: {
      firstName: "Shah",
      middleName: "Israil",
      lastName: "Khan",
    },
    contactInformation: {
      WhatsApp: "01741027141",
      number: "01214208146",
    },
    address: {
      permanentAddress: {
        city: "Dhaka",
        district: "Dhaka",
        postCode: "1205",
        country: "Bangladesh",
        street: "Mohakhali",
        houseNumber: "12",
        road: "Mohakhali",
        village: "Mohakhali",
      },
      presentAddress: {
        city: "Dhaka",
        district: "Dhaka",
        postCode: "1205",
        country: "Bangladesh",
        street: "Mohakhali",
        houseNumber: "12",
        road: "Mohakhali",
        village: "Mohakhali",
      },
    },
  };

  const {
    address: {
      permanentAddress: { country },
    },
  } = user;
  console.log(country);
}
