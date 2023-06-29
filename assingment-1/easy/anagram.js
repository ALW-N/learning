function isAnagram(str1,str2){
    str1 = str1.split("").sort()
    str2 = str2.split("").sort()


    for(i=0; i < str1.length; i++){
        if (str2[i] !== str1[i]){
            return false
        }
    }
    return true
}


var result = isAnagram("omty", "tomy")
console.log(result)
