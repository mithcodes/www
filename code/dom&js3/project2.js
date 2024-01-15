// const form = document.querySelector('form');
// form.addEventListener('submit', function(e) {
//     e.preventDefault();
//     const height = parseInt(document.querySelector('#height').value);
//     const weight = parseInt(document.querySelector('#weight').value);
//     const results = document.querySelector('.results'); // Corrected selector

//     if (isNaN(height) || height <0 || height==='') {
//         results.innerHTML = `Please provide a valid height: ${height}`;
//     } 
//     if (isNaN(weight) || weight <0 || weight==='') {
//         results.innerHTML = `Please provide a valid height: ${weight}`;
//     } else{
//         (weight/((height*height)/10000).toFixed(2))
//       results.innerHTML=`<span>{bn1}`
//     }

// });

//directly hm kisis element ko bhi select kar sakta han or 
//hm form ko select karenga
const form = document.querySelector('form');
//particular elemnt mai hm event listner ka use kar sakta han
//this usecase will empty value
//const height = parseFloat(document.querySelector('#height').value);
form.addEventListener('submit', function(e) {
    e.preventDefault();
    //value string mai milti han islia hm float mai badlega
    const height = parseFloat(document.querySelector('#height').value);
    const weight = parseFloat(document.querySelector('#weight').value);
    const results = document.querySelector('.result'); // Corrected selector
 //isNan matlab height or weight hona chahia no mai hona chahia or sahi hona chahia
    if (isNaN(height) || height <= 0 || isNaN(weight) || weight <= 0) {
        results.innerHTML = 'Please provide valid height and weight.';
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        results.innerHTML = `Your BMI is: ${bmi}`;
    }
});

