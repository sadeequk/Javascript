// switch

// In JavaScript, the switch statement is a conditional statement used to select and execute one code block from multiple possibilities. 
// It's often used when you have a single value (or expression) to evaluate against multiple possible values or conditions. 
//Here's the basic syntax of a switch statement:
// switch (expression) {
//     case value1:
//         // Code to execute if expression === value1
//         break;
//     case value2:
//         // Code to execute if expression === value2
//         break;
//     // More cases can be added as needed
//     default:
//         // Code to execute if expression doesn't match any case
// }

// Here's how a switch statement works:

// The expression is evaluated once.

// The case labels are compared against the value of the expression. 
// If a match is found, the code block associated with that case is executed. If there's no match, the default block (if provided) is executed.

// The break statement is used to exit the switch block after a case is matched and executed. 
// If you omit the break statement, execution will continue to the next case until a break statement is encountered or the switch block is completed.


let day = "Monday";

switch (day) {
    case "Monday":
        console.log("It's the start of the workweek.");
        break;
    case "Friday":
        console.log("It's the end of the workweek.");
        break;
    default:
        console.log("It's not a workday.");
}
