function starPattern(n){

   var stringPattern = ""
   for(i=0 ; i<n ; i++){
    stringPattern += "*"
   }console.log(stringPattern)
}

function inBetween(n){
    var str = ""
    str += "*"
    for(i=0 ; i<n-2 ; i++){
        str+=" "
    }
    str+="*"
    console.log(str)
}

function finalResult(n){
    starPattern(n)
    for(var i=0 ; i<n-2 ; i++){
        inBetween(n)
    }
    starPattern(n)
}

// starPattern(5)
// inBetween(10)
finalResult(10)
