// find assignment average

function assignmentMarks(assignment1,assignment2,assignment3){
const assignmentMarks = assignment1+assignment2+assignment3;
const assignmentAverage = assignmentMarks/3;
return assignmentAverage;
}

const eachAssignmentMark = assignmentMarks(60,60,60);
console.log('My Assignment Marks Average is',eachAssignmentMark) ;

// square

function square(number)
{
    return Math.pow(number,2)
}
var giveNumber = square(10);
console.log('Square of given number',giveNumber)
