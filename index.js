// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * counter1 has a function in the closure and returns a function to be called
 * 2. Which of the two uses a closure? How can you tell?
 * counter1, it has a function defined inthe return call
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 *counter1 would be useful in a situation that you need to specify what to return in the function case by case, counter2 is good for the specific funtion
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that returns a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */
console.log(inning());
function inning(){

    return Math.floor(Math.random() * (2 - 0 + 1));

}

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(callbackOne,innings) {
  var away = 0;
  var home = 0;
  var fullGame = [{}];
  for (i = 0; i < innings; i++) {
    home = home+callbackOne();
    away = away+callbackOne();
  }
  return "" + home + " " + away
}
console.log(finalScore(inning, 9));
/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(3) A number of innings

and returns the score at each pont in the game, like so:
1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam
Final Score: awayTeam - homeTeam */
function getInningScore(callbackOne, innings) {
  let scores = [];
  for(let i = 0; i < innings; i++) {
    scores.push({home: callbackOne(), away: callbackOne()});
  }
  return scores;
}



function scoreboard(callbackOne, callbackTwo, innings) {
  const scores = callbackOne(callbackTwo, innings);
  console.log(scores);
  var homeTotal = 0;
  var awayTotal = 0;
  for (i = 0; i < innings; i++) {
    homeTotal = homeTotal+scores[i].home;
    awayTotal = awayTotal+scores[i].away;
    console.log(`Inning: ${i+1}: ${scores[i].away} - ${scores[i].home}`);
  }
  console.log(`Final Score: ${awayTotal} - ${homeTotal}`)
}

scoreboard(getInningScore, inning, 9);