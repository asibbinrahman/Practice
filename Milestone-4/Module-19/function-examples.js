// Function Structure
/* 
function functionName (parameters){
    function body
    return
}

var returnedValue = functionName(parameters value)
 */

function getTotal(assignment1, assignment2, assignment3){
    const total = assignment1 + assignment2 + assignment3;
    const avg = total / 3;
    return avg;
}

const assignment1Marks  = 60;
const assignment2Marks  = 58;
const assignment3Marks  = 59;

const myAvg = getTotal(assignment1Marks, assignment2Marks, assignment3Marks);
console.log(myAvg);