
for(let i = 0; i < 20; i++)
{
  console.log(i);
}

for(let i = 0; i < 200; i++)
{
  if(i % 2 === 0)
  {
    console.log(i);
  }
}

for(let i = 0; i < 20; i++)
{
  console.log("Love me, pet me! HSSSSS!");

  if(i % 2 === 0)
  {
    Math.random();
  }
}

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
  ninjaTurtles[i].toUpperCase();
  console.log(ninjaTurtles[i]);
}


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

const krystynsShoe = kristynsCloset[0];
kristynsCloset.shift();

thomsCloset[2].push(krystynsShoe);

const krystynOutfit = [[],[],[]];
const thomOutfit = [[],[],[]];

// pick Krystyn's 3 outfits
for(let i = 0; i < 3; i++)
{
  for(let j = 0; j < kristynsCloset.length; j++)
  {
    krystynOutfit[i].push(kristynsCloset[(i+j) % kristynsCloset.length])
  }
}

// pick Thom's 3 outfits
for(let i = 0; i < 3; i++)
{
  for(let j= 0; j < (thomsCloset[i]); j++)
  {
    thomOutfit[i].push(thomsCloset[i][(i+j) % thomsCloset[i].length]);
  }
}

for(let i = 0; i < kristynsCloset.length; i++)
{
  console.log(`WHIRR: Now washing ${krystynsCloset[i]}`);
}

for(let i = 0; i < thomsCloset.length; i++)
{
    for(let j = 0; j < thomsCloset[i].length; j++)
    {
        console.log(thomsCloset[i][j]);
    }
}

const multiplesSum = [];
const sum = 0;

for(let i = 0; i < 1000)
{
  if((i % 3 == 0) || (i % 5 == 0))
  {
    multiplesSum.push(i);
    sum += i;
  }
}
