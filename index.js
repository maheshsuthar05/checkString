var str = '1S5G1'

checkStr(str)

function checkStr(str){
    var sum=0
    for(var i=0; i<str.length; i++){
        var char = Number(str[i])
        if(char>=0 && char<=9){
            sum += char
        }
    }
    console.log(sum)

    //console.log(str, typeof(str))
}