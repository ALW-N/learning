/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/

function calculateTime(n) {
    const startTime = new Date();
    var count = 0;
    for(i=0;i<n;i++){
        count+=i
    }
    const endTime = new Date();
    const timeTaken = (endTime - startTime) / 1000;
    console.log(count)
    console.log(`Time Taken To FInd the Result from 1 to ${n} is ${timeTaken} secs`);
    // return 0.01;
}

// calculateTime(100)
calculateTime(100000)
