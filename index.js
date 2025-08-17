//console.log("Hi there!");

let botName = "teacherBot";

let greeting = `My name is ${botName}.`; //template literal
console.log(greeting);

let subject = "JavaScript";
console.log(subject.length); //to find length

let topic = "strings";

let sentence = `Today, you will learn about ${topic} in ${subject}.`; //template literal
console.log(sentence);

//string length
let strLengthIntro = `Here is an example of using the length property on the word ${subject}.`;
console.log(strLengthIntro); 

//length property
console.log(`Here is an example of using the length property on the word ${topic}.`);
console.log(topic.length);

//accessing first letter
console.log(`Here is an example of accessing the first letter in the word ${subject}.`);
console.log(subject[0]);

//accessing second letter
console.log(`Here is an example of accessing the second letter in the word ${subject}.`);
console.log(subject[1]);

//accessing last letter
console.log(`Here is an example of accessing the last letter in the word ${subject}.`);
const lastCharacter = "t";
console.log(lastCharacter);

//finding position of substrings
let learningIsFunSentence = "Learning is fun.";
console.log("Here are examples of finding the positions of substrings in the sentence.");
console.log(learningIsFunSentence.indexOf("Learning"));

