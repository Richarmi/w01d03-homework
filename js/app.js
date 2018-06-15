

for(let i = 0; i < 20; i++)
{
  console.log(i);
}

console.log("\n");

for(let i = 0; i < 200; i++)
{
  if(i % 2 === 0)
  {
    console.log(i);
  }
}

console.log("\n");

for(let i = 0; i < 20; i++)
{
  console.log("Love me, pet me! HSSSSS!");

  if(i % 2 === 0)
  {
    Math.random();
  }
}

console.log("\n");

for(let i = 0; i < 100; i++)
{
  console.log(i);

  if((i % 3 === 0) && (i % 5 === 0))
  {
    console.log("FizzBuzz");
  }
  else if(i % 3 === 0)
  {
    console.log("Fizz");
  }
  else if(i % 5 === 0)
  {
    console.log("Buzz");
  }
}

console.log("\n");

const thom = ["Thom", 1000, "Christchurch"];
const karolin = ["Karolin", 16, "New York"];
const kristyn = ["Kristyn", 5, "Pittsburgh"];
const matt = ["Matt H", 186, "Philadelphia"];

thom[0] = "Gameboy";
karolin[1] = 17;
matt[2] = "Gotham City";
kristyn[2] = "Brookyln";

const ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];

for(let i = 0; i < ninjaTurtles.length; i++)
{
  console.log(ninjaTurtles[i].toUpperCase());
}

console.log("\n");

const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];

const kristynsShoe = kristynsCloset[0];
kristynsCloset.shift();

thomsCloset[2].push(kristynsShoe);

console.log("Hey! There's an alien left shoe in Thom's Closet!")
console.log(thomsCloset);
console.log("\n");

const kristynOutfit = [[],[],[]];
const thomOutfit = [[],[],[]];

// pick Krystyn's 3 outfits
for(let i = 0; i < 3; i++)
{
  for(let j = 0; j < kristynsCloset.length; j++)
  {
    kristynOutfit[i].push(kristynsCloset[(i+j) % kristynsCloset.length])
  }
}

// pick Thom's 3 outfits
for(let i = 0; i < 3; i++)
{
  for(let j = 0; j < (thomsCloset[i].length); j++)
  {
    thomOutfit[i].push(thomsCloset[i][(i+j) % thomsCloset[i].length]);
  }
}

console.log("Thom's 3 outfits: ");
console.log(thomOutfit);

console.log("Kristyn's 3 outfits: ");
console.log(kristynOutfit);
console.log("\n");


console.log("Washing Kristyn's clothes...");

for(let i = 0; i < kristynsCloset.length; i++)
{
  console.log(`WHIRR: Now washing ${kristynsCloset[i]}`);
}

console.log("All Done Washing! YAY!!! \n");



console.log("\n");

const multiplesSum = [];
let sum = 0;

for(let i = 0; i < 10; i++)
{
  if((i % 3 === 0) || (i % 5 === 0))
  {
    console.log(i);
    multiplesSum.push(i);
    sum += i;
  }
}
