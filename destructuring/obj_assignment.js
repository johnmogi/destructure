// const o = { p: 42, q: true };
// const { p: foo, q: bar } = o;

// console.log(foo, bar);

const hero = {
  name: "Bruce",
  hero: "Batman",
};

const prop = "hero";

const { [prop]: heroName } = hero;

console.log(heroName);
