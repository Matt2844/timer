// Simple Timer 

// to make a "beep noise": process.stdout.write('\x07');
// doesn't work 

const args = process.argv;
let setTimer = args.slice(2, args.length);

let timeDelay = 0;

for (let i = 0; i < setTimer.length; i++) {
  if (setTimer[i] < 0 || isNaN(setTimer[i])) { // Set edge cases
    console.log("not a valid input")
  } else {                                     // If number is valid
    timeDelay = timeDelay + (setTimer[i] * 1000)
    setTimeout(() => {
      timeDelay = timeDelay + (setTimer[i] * 1000)
      process.stdout.write("Beep ");
    }, timeDelay)
  }
};

// Used "node timer1.js 1 5 -3 0 aaadiaid" as test case 