//lexical lexical

function init(){
    let name="mozilla";
    function display(){
     console.log(name);
    }
    display();
}
init();
//lexical mai iner function outer function k value ko acces karega
//agar do inner function h to apas mai variables share nai karenga


///closure
function makefunc(){
    const name="mozila";
    function displayName(){
        console.log(name);
    }
    //jab hm return karengga to outer function bhi sath mai return hoaga iso ko closure kahta han
   //pura k pura lexcial scope hi return ho jata h
    return displayName;
}

const closurecall=makefunc();
closurecall();