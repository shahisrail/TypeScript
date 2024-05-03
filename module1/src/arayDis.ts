{
  const complexNestedArray = [
    [
      [1, 2, 3],
      [4, 5, 6],
    ],
    [
      [7, 8, 9],
      [10, 11, 12],
    ],
  ];

  // Destructure the outer array and one of the inner arrays
  const [firstNested, secondNested] = complexNestedArray;
  const [nestedInnerArray1, nestedInnerArray2] = firstNested;

  console.log("First Nested:", firstNested); // Outputs: First Nested: [[1, 2, 3], [4, 5, 6]]
  console.log("Nested Inner Array 1:", nestedInnerArray1); // Outputs: Nested Inner Array 1: [1, 2, 3]

  // Destructure elements from the first nested inner array
  const [a, b, c] = nestedInnerArray1;
  console.log("First element:", a); // Outputs: First element: 1
  console.log("Second element:", b); // Outputs: Second element: 2
  console.log("Third element:", c); // Outputs: Third element: 3
}
