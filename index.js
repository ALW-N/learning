// function printToscreen(){
//     console.log("Printed after 3 seconds")
// }

// setTimeout(printToscreen, 3 * 1000)

// let count = 0;
// for (i = 0; i < 10; i++) {
//     count += 1
// } console.log(count)


// console.log("hello world")


var counter = 1;

function printcounter(){
    console.clear()
    console.log(counter);
    counter = counter + 1;
}

setInterval(printcounter, 1000)

