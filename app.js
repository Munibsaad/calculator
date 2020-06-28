function getNumber(num){
    console.log(num)
    var result = document.getElementById("result")
    result.value += num; 
}
function clearresult(){
    var result=document.getElementById("result")
    result.value=("")
}
function grtresult(){
    var result=document.getElementById("result")
    result.value=eval(result.value)
}