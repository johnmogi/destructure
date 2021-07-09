let a, b;

// {a,b} = {a:1,b:2}; // invalid.

({ a, b } = { a: 1, b: 2 }); // valid

console.log(a, b);
