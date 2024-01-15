//window and this is always takes blobal variables function etc all should globa
function outerfunction(){
    console.log(a);
    var a=10;
    innerFunction();
    function innerFunction(){
        console.log(a);
        console.log(window.a);
        console.log(this.a);
    }
}
var a=7;
var b=3;
outerfunction();