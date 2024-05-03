{
  const deepNestedObject = {
    user: {
      id: 123,
      profile: {
        name: {
          firstName: "John",
          middleName: "M",
          hey: {
            firstName: "John",
            middleName: "M",
            lastName: "Doe",
          },
          lastName: "Doe",
        },
        contactInfo: {
          phone: {
            home: "123-456-7890",
            work: "098-765-4321",
            mobile: "111-222-3333",
          },
          email: "john.doe@example.com",
        },
        address: {
          homeAddress: {
            street: "123 Main St",
            city: "Springfield",
            state: "IL",
            zip: "62704",
          },
          workAddress: {
            street: "456 Work Ave",
            city: "Springfield",
            state: "IL",
            zip: "62704",
          },
        },
      },
      settings: {
        preferences: {
          theame: {
            theme: "dark",
            theme2: {
              color1: "dadad",
              color2: "dadad",
              color3: "dadad",
            },
          },

          language: "en",
        },
      },
    },
  };

  const {
    user: {
      settings: {
        preferences: {
          theame: { theme2 },
        },
      },
    },
  } = deepNestedObject;
  console.log(theme2.color1);
  const { user } = deepNestedObject;
  const {
    user: { profile: hey },
  } = deepNestedObject;
  console.log(hey);
  const {
    user: { profile: contactInfo },
  } = deepNestedObject;
  const {
    user: {
      profile: {
        address: { workAddress },
      },
    },
  } = deepNestedObject;
  //   const {user:{profile:address:homeAddress } } = deepNestedObject;
  const {
    user: {
      profile: {
        address: { homeAddress },
      },
    },
  } = deepNestedObject;
}
