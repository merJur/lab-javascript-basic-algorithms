// Iteration 1: Names and Input
//
let hackers1 = "pedro";
console.log("the driver´s name is" + " " + (hackers1));

let hackers2 = "juan";
console.log("the navigator´s name is" +  " " + (hackers2));

// Iteration 2: Conditionals

console.log(hackers1.length);
console.log(hackers2.length);

hackers2= "sebastian";
console.log(hackers2.length);

if ( hackers1.length > hackers2.length  ) {
    console.log("The driver has the longest name, it has" +  " " + (hackers1.length) +" " + "characters");
    
} else if (hackers1.length < hackers2.length ) {
    console.log("It seems that the navigator has the longest name, it has" + " " + (hackers2.length) + " " + "characters.");
} else if (hackers1.length === hackers2.length) {
    console.log("Wow, you both have equally long names," + " " +  (hackers1.length) + " " + "characters!");
}

// Iteration 3: Loops
//3.1
hackers1 = hackers1.toLocaleUpperCase();
console.log (hackers1);


let result= hackers1.split("");
console.log(result);

//3.2

function reverseHackers2 (name) {
    let splitHackers2 = hackers2.split("");
   console.log(splitHackers2);
   let reverseArray = splitHackers2.reverse();
   console.log(reverseArray);
   let joinHackers2 = reverseArray.join("");
   console.log(joinHackers2);
   return ;
   
 
 }
 reverseHackers2 ();
 
//3.3 Depending on the lexicographic order of the strings, print:
//- The driver's name goes first.
//- Yo, the navigator goes first definitely.
//- What?! You both have the same name?

let driversName = "paco";
let navsName = "alvaro";
let anotherResult = driversName.localeCompare(navsName);
console.log(anotherResult);

if (anotherResult  === 1){
  console.log("Yo, the navigator goes first definitely.");
  }
else if (anotherResult === -1) {
  console.log("The driver's name goes first.");
  }
else if (anotherResult === 0) {
  console.log("What?! You both have the same name?");
}

// bonus 1

const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

function countWords (){
  console.log(text.trim().split(/\s+/).length);
}

countWords (); //207

let numbEt = "et";

function countEt (text, numbEt) {
  //console.log(text.split(numbEt).lenght -1);
  
  let spliteText = text.split("numbEt");
  console.log(spliteText);
  return
}
countEt ();


console.log("hola"); 
