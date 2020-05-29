// ## Array Cardio Day 2

const people = [
  { name: "Wes", year: 1988 },
  { name: "Kait", year: 1986 },
  { name: "Irv", year: 1970 },
  { name: "Lux", year: 2015 },
];

const comments = [
  { text: "Love this!", id: 523423 },
  { text: "Super good", id: 823423 },
  { text: "You are the best", id: 2039842 },
  { text: "Ramen is my fav food ever", id: 123523 },
  { text: "Nice Nice Nice!", id: 542328 },
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?

// Array.some() will check atleast one match with the condition
const isAdult = people.some(function (person) {
  const today = new Date().getFullYear();
  const difference = today - person.year;
  if (difference >= 19) {
    return true;
  }
});

console.log(isAdult);

// Array.prototype.every() // is everyone 19 or older?

// Array.every() will check if all match with the condition
const allAdult = people.every(function (person) {
  const today = new Date().getFullYear();
  const difference = today - person.year;
  if (difference >= 19) {
    return true;
  }
});

console.log(allAdult);

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423

const findComment = comments.find(function (comment) {
  if (comment.id === 823423) {
    return true;
  }
});
console.log(findComment);

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423

const index = comments.findIndex(function (comment) {
  if (comment.id === 823423) {
    return true;
  }
});

comments.splice(index, 1);

console.table(comments);
