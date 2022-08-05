// Key Concepts: 
  // Iterators

// Goal: Improve the following paragraph by iterating over the array

let story = 'Last weekend, I took literally the most beautifull bike ride of my life. The route is called "The 9W to Nyack" and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it literally took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a freaking long way to go. After a quick photo op at the very popular Little Red Lighthouse I began my trek across the George Washington Bridge into New Jersey. The GW is a dazzling 4,760 feet long! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautifull park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you literally cross back into New York! At this point, you are very close to the end.';

// Turn the string into an array of individual words
/* The ' ' argument of the .split() method indicates that the split should occur any time a space occurs in the string. */
let storyWords = story.split(' ');

let unnecessaryWord = 'literally';
let misspelledWord = 'beautifull';
let badWord = 'freaking';

// console.log(storyWords);

// Counting Words
let count = 0; 
storyWords.forEach(word => {
 count++;
} );

// Total words in the story
// console.log(count); // 181 words

// Filtering words; "literally"
storyWords = storyWords.filter(word => word !== unnecessaryWord);

// Replacing Words
storyWords = storyWords.map(word => {
  if (word === misspelledWord){
    return 'beautiful';
  } else{
    return word;
  } 
});

// Replacing a word
const badWordIndex = storyWords.findIndex(word => word === badWord);

// console.log(badWordIndex); //index 78

storyWords[78] = 'really';

// Making sure each word has less than 10 letters
const lengthCheck = storyWords.every(word => word.length < 10);

// console.log(lengthCheck); // false

// Find what word is bigger than 10 letters
const filteredBigWord = storyWords.filter(word => word.length > 10);
// console.log(filteredBigWord); // 'breathtaking' (manually changed to 'dazzling')

// Remove the word 'very'
let repetitiveWord = 'very'

storyWords = storyWords.filter(word => word !== repetitiveWord);

// Replace 'GW' with 'George Washington
const inproperName = storyWords.findIndex(word => word === 'GW');
// console.log(inproperName); // 107
storyWords[107] = 'George Washington';

console.log(storyWords.join(' '));
