var str = '1S5G1'

checkStr(str)

function checkStr(str){
    var sum=0
    for(var i=0; i<str.length; i++){
        if(Number(str[i])>=0 && Number(str[i]<=9)){
            var char = Number(str[i])
            sum += char
        }
    }
    console.log(sum)

    //console.log(str, typeof(str))
}