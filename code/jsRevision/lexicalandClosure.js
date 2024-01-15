// //this is lexical code
// function lexi(){
//     let name="mithlesh";
//     function lexiilo(){
//         console.log(name);
//     }
//     lexiilo();
// }

// lexi();


// this is closure
function lexi(){
    let name="mithlesh";
    function lexiilo(){
        console.log(name);
    }
    return lexiilo;
}

const inner=lexi();
inner();