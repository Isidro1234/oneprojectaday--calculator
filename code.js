var number = "";
$(".number-and-operations p").click(function(){
    var element = this.innerHTML;
    number += element;
    addToScreen(number);
})


$(".equal").click(function(){
    calculations(number);
})
$(".delete").click(function(){
    deleting(number);
})
$(".reset").click(function(){
    reset();
})
function addToScreen(num){
    $(".display").html(num);
}
function calculations(num){
 try {
    var calc = eval(num);
    addToScreen(calc);
 } catch (error) {
    alert("this operations is invalid, please try again")
 }
}
function deleting(num){
 if (num.length >= 0){
    var substracting = num.substr(0, num.length -1);
    number = substracting;
    addToScreen(substracting);
 }
}
function reset(){
 number = "";
 addToScreen(0);
 calculations(0);
}