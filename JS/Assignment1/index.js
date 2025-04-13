//1: Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
function maxNumber(a,b){
    return a>b?(a):(b);
}

//2:Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
function maxNumberThree(a,b,c){
    if(b<a && a> c){return a;} 
    else if(a<c && c>b) {return c;}
    return b;
}

//3: Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
function isVowel(a){
    if(typeof a=== "string" && a.length===1 ){
        const vowels=['a','e','i','o','u'];
        if(vowels.includes(a.toLowerCase())){
            return true;
        }
        else{
            return false;
        }
    }
    else{
        return false;
    }
}



//4:Write a function translate() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
function daO(text) {
    let result = '';
    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        if (!isVowel(char)) {
            result += char + 'o' + char;
        } else {
            result += char;
        }
    }
    return result;
}

//5:Sum and multiply
function sum(arr){
    let result=0;
    arr.forEach((ele)=>result+=ele);
    return result;
}

function multiply(arr){
    let result=1;
    arr.forEach((ele)=>result*=ele);
    return result;
}

//6:revsese a string
function reverse(str){
   let b=str.split('').reverse().join('');
   return b;
}

//7: Bilingual Lexicon
const lexicon = {
  "merry": "god",
  "christmas": "jul",
  "and": "och",
  "happy": "gott",
  "new": "nytt",
  "year": "år"
};

function translateToSwedish(text) {
  return text.split(" ").map(word => lexicon[word.toLowerCase()] || word).join(" ");
}

//8: Find longest word length
function findLongestWord(words) {
  return words.reduce((max, word) => Math.max(max, word.length), 0);
}

//9: Filter long words
function filterLongWords(words, i) {
  return words.filter(word => word.length > i);
}

//10: Character frequency
function charFreq(str) {
  const freq = {};
  for (let char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }
  return freq;
}

//11: Simple Calculator
function calculator(a, b, operator) {
  switch (operator) {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    case '/': return b !== 0 ? a / b : 'Error: Divide by 0';
    default: return 'Invalid operator';
  }
}

//12: User names until cancel
function askNames() {
  const names = [];
  let name;
  while (name = prompt("Enter a name (Cancel to stop):")) {
    names.push(name);
  }
  names.sort();
  document.write("<ol>" + names.map(n => `<li>${n}</li>`).join('') + "</ol>");
}

//13: Random number generator and average
function randomAvg() {
  const count = parseInt(prompt("How many random numbers to generate?"));
  const numbers = Array.from({ length: count }, () => Math.floor(Math.random() * 100));
  const sum = numbers.reduce((acc, val) => acc + val, 0);
  const avg = sum / count;
  alert(`Numbers: ${numbers.join(', ')}\nAverage: ${avg}`);
}

//14: Registration Form Validation
function validateForm() {
  const name = document.getElementById('name').value;
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  const email = document.getElementById('email').value;
  const year = parseInt(document.getElementById('year').value);
  const terms = document.getElementById('terms').checked;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!username || !password || !confirmPassword || !email || !terms) {
    alert("All fields are required and terms must be agreed.");
    return false;
  }
  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return false;
  }
  if (!emailRegex.test(email)) {
    alert("Invalid email format.");
    return false;
  }
  if (year < 1900 || year > 2000 || year.toString().length !== 4) {
    alert("Year must be between 1900 and 2000 and four digits.");
    return false;
  }
  alert("Registration successful!");
  return true;
}

//15: Button click alert (XHTML-style)
// <button onclick="alert('Welcome')">Click Me</button>

//16: Link hover alert (XHTML-style)
// <a href="#" onmouseover="alert('Welcome')">Hover for a welcome message</a>

//17: Form with hometown search
function handleSubmit() {
  const name = document.getElementById("name").value;
  const age = parseInt(document.getElementById("age").value);
  const hometown = document.getElementById("hometown").value;
  const yearBorn = new Date().getFullYear() - age;

  const output = `Name: ${name}, Year of Birth: ${yearBorn}<br>
  <a href="https://www.google.com/search?q=${encodeURIComponent(hometown)}" target="_blank">Search hometown</a>`;

  document.getElementById("output").innerHTML = output;
}

//18: Rollover image
// <img src="image1.jpg" onmouseover="this.src='image2.jpg'" onmouseout="this.src='image1.jpg'" />



console.log(maxNumber(10, 5));
console.log(maxNumberThree(10, 5, 11));
console.log(isVowel('e'));
console.log(daO("this is fun"));
console.log(sum([1, 2, 3, 4]));
console.log(multiply([1, 2, 3, 4]));
console.log(reverse("jag testar"));
console.log(translateToSwedish("merry christmas and happy new year"));
console.log(findLongestWord(["hello", "world", "javascript"]));
console.log(filterLongWords(["hello", "world", "hi"], 3));
console.log(charFreq("abbabcbdbabdbdbabababcbcbab"));
console.log(calculator(10, 5, '*'));
