//1->Calculator
function squareNumber(num) {
  let result = num * num;
  console.log(`The result of squaring the number ${num} is ${result}.`);
  return result;
}

function halfNumber(num) {
  let result = num / 2;
  console.log(`Half of ${num} is ${result}.`);
  return result;
}

function percentOf(num1, num2) {
  let percent = (num1 / num2) * 100;
  console.log(`${num1} is ${percent}% of ${num2}.`);
  return percent;
}

function areaOfCircle(radius) {
  let area = Math.PI * radius * radius;
  console.log(
    `The area for a circle with radius ${radius} is ${area.toFixed(2)}.`
  );
  return parseFloat(area.toFixed(2));
}

function combinedOperations(num) {
  let half = halfNumber(num);
  let squared = squareNumber(half);
  let area = areaOfCircle(squared);
  let percent = percentOf(area, squared);
}

//2->Mixup
function mixUp(str1, str2) {
  return (
    str2.slice(0, 2) + str1.slice(2) + " " + str1.slice(0, 2) + str2.slice(2)
  );
}

//3->fix start
function fixStart(str) {
  let firstChar = str[0];
  let regex = new RegExp(firstChar, "g");
  return firstChar + str.slice(1).replace(regex, "*");
}

//4->verbing
function verbing(str) {
  if (str.length < 3) return str;
  if (str.endsWith("ing")) return str + "ly";
  return str + "ing";
}

//5->not bad
function notBad(str) {
  let notIndex = str.indexOf("not");
  let badIndex = str.indexOf("bad");
  if (notIndex !== -1 && badIndex > notIndex) {
    return str.slice(0, notIndex) + "good" + str.slice(badIndex + 3);
  }
  return str;
}

//6->pluralizer
function pluralize(noun, number) {
  let irregulars = { sheep: "sheep", goose: "geese" };
  let plural = irregulars[noun] || (number !== 1 ? noun + "s" : noun);
  return `${number} ${plural}`;
}

//7->top choices
function topChoices(arr) {
  const suffix = (n) => {
    if (n === 1) return "st";
    if (n === 2) return "nd";
    if (n === 3) return "rd";
    return "th";
  };
  arr.forEach((choice, index) => {
    console.log(`My ${index + 1}${suffix(index + 1)} choice is ${choice}.`);
  });
}

//8->Word Guessing Game
let word = ["F", "O", "X"];
let guessed = ["_", "_", "_"];
let reward = 0;
let guessedLetters = [];

function guessLetter(letter) {
  if (guessedLetters.includes(letter)) {
    console.log("You've already guessed that letter.");
    return;
  }
  guessedLetters.push(letter);

  let found = false;
  let matches = 0;
  word.forEach((char, index) => {
    if (char === letter.toUpperCase()) {
      guessed[index] = char;
      found = true;
      matches++;
    }
  });

  if (found) {
    let winAmount = Math.floor(Math.random() * 100) * matches;
    reward += winAmount;
    console.log(
      `Correct! You earned $${winAmount}. Current reward: $${reward}`
    );
  } else {
    reward -= 10;
    console.log(`Wrong guess. Current reward: $${reward}`);
  }

  console.log(guessed.join(" "));

  if (!guessed.includes("_")) {
    console.log("Congratulations! You guessed the word and won $" + reward);
  }
}

//9->the recipe card
let recipe = {
  title: "Mole",
  servings: 2,
  ingredients: ["cinnamon", "cumin", "cocoa"],
};

console.log(recipe.title);
console.log("Serves: " + recipe.servings);
console.log("Ingredients:");
recipe.ingredients.forEach((ingredient) => console.log(ingredient));

//10->the reading list
let books = [
  { title: "The Hobbit", author: "J.R.R. Tolkien", alreadyRead: true },
  { title: "1984", author: "George Orwell", alreadyRead: false },
];

books.forEach((book) => {
  let info = `"${book.title}" by ${book.author}`;
  if (book.alreadyRead) {
    console.log(`You already read ${info}`);
  } else {
    console.log(`You still need to read ${info}`);
  }
});

//11->the movie database
let favoriteMovie = {
  title: "Interstellar",
  duration: 169,
  stars: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
};

function printMovie(movie) {
  console.log(
    `${movie.title} lasts for ${
      movie.duration
    } minutes. Stars: ${movie.stars.join(", ")}.`
  );
}

//12->cash register
function cashRegister(cart) {
  let total = 0;
  for (let item in cart) {
    total += parseFloat(cart[item]);
  }
  return total;
}

var cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36",
};

//13->credit card validation
function validateCreditCard(number) {
  let sanitized = number.replace(/-/g, "");

  if (!/^\d{16}$/.test(sanitized)) {
    return {
      valid: false,
      number,
      error: "wrong_length or invalid characters",
    };
  }

  if (new Set(sanitized).size < 2) {
    return { valid: false, number, error: "all digits are the same" };
  }

  if (parseInt(sanitized[sanitized.length - 1]) % 2 !== 0) {
    return { valid: false, number, error: "final digit is not even" };
  }

  let sum = sanitized
    .split("")
    .reduce((acc, digit) => acc + parseInt(digit), 0);
  if (sum <= 16) {
    return { valid: false, number, error: "sum less than 16" };
  }

  return { valid: true, number };
}


// --- Calculator Functions ---
console.log("Calculator Functions:");
squareNumber(3);          
halfNumber(5);            
percentOf(2, 4);         
areaOfCircle(2);          
combinedOperations(4);   

// --- MixUp ---
console.log("\n MixUp:");
console.log(mixUp("mix", "pod"));      
console.log(mixUp("dog", "dinner"));    

// --- FixStart ---
console.log("\nFixStart:");
console.log(fixStart("babble"));       

// --- Verbing ---
console.log("\n Verbing:");
console.log(verbing("swim"));          
console.log(verbing("swimming"));      
console.log(verbing("go"));            

// --- Not Bad ---
console.log("\n Not Bad:");
console.log(notBad("This dinner is not that bad!"));  
console.log(notBad("This movie is not so bad!"));    
console.log(notBad("This dinner is bad!"));          

// --- Pluralizer ---
console.log("\n Pluralizer:");
console.log(pluralize("cat", 5));      
console.log(pluralize("dog", 1));       
console.log(pluralize("sheep", 3));     
console.log(pluralize("goose", 2));      

// --- Top Choices ---
console.log("\n Top Choices:");
topChoices(["blue", "red", "green", "purple"]);

// --- Word Guessing Game ---
console.log("\n Word Guessing Game:");
guessLetter('F');
guessLetter('A');
guessLetter('O');
guessLetter('X');
guessLetter('F');  

// --- Recipe Card ---
console.log("\n Recipe Card:");
console.log(recipe.title);
console.log("Serves: " + recipe.servings);
console.log("Ingredients:");
recipe.ingredients.forEach(ingredient => console.log(ingredient));

// --- Reading List ---
console.log("\n Reading List:");
books.forEach(book => {
  let info = `"${book.title}" by ${book.author}`;
  if (book.alreadyRead) {
    console.log(`You already read ${info}`);
  } else {
    console.log(`You still need to read ${info}`);
  }
});

// --- Movie Database ---
console.log("\n🎥 Movie Database:");
printMovie(favoriteMovie);

// --- Cash Register ---
console.log("\n💰 Cash Register:");
console.log("Total: $" + cashRegister(cartForParty).toFixed(2));  

// --- Credit Card Validation ---
console.log("\n💳 Credit Card Validation:");
console.log(validateCreditCard("9999-9999-8888-0000"));
console.log(validateCreditCard("4444-4444-4444-4444"));
console.log(validateCreditCard("a923-3211-9c01-1112"));
