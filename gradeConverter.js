// <!-- 3. Build a Mark to Grade converter web page with the following 
// specification and create a link to it in your profile page (20 points)

// • The MarkToGrade function scrapes the student mark out of the mark-input-box element
// and verifies it is realistic.

// • A Mark must be number only, nonnegative, and less than 101.
// • If an invalid mark is entered, it displays a message back to the user in the. validation-
// message element.

// • Messages should be informative... return as many different messages as you can to
// guide the user what kind of erroneous value has entered
//  If the user entered any value above 90 Grade A should be displayed as a result
//  If user entered any value above 80 Grade B should be displayed
//  If user entered any value above 70 Grade C should be displayed
//  If user entered any value above 50 Grade D should be displayed
//  If user entered any value less than 50 Grade F should be displayed
// • Hint 1: In JavaScript, we can use the global parseInt function to try and convert a string
// to a number.
// • Hint 2: Use exception handling.
// • Hint 3: Use HTML and JavaScript --> 

function MarkToGrade() {
    var mark = document.getElementById("mark-input-box").value;
    var validationMessage = document.getElementById("validation-message");
    var gradeResult = document.getElementById("grade-result");

    if (mark === "" || isNaN(mark) || mark < 0 || mark > 100) {
        validationMessage.style.display = "block";
        validationMessage.textContent = "Please enter a valid mark between 0 and 100.";
        gradeResult.textContent = "";
    } else {
        validationMessage.style.display = "none";
        if (mark >= 90) {
            gradeResult.textContent = "Grade A";
        } else if (mark >= 80) {
            gradeResult.textContent = "Grade B";
        } else if (mark >= 70) {
            gradeResult.textContent = "Grade C";
        } else if (mark >= 50) {
            gradeResult.textContent = "Grade D";
        } else {
            gradeResult.textContent = "Grade F";
        }
    }
}
