
const nameInput = document.getElementById("studentName");
const schoolInput = document.getElementById("schoolName");
const courseInput = document.getElementById("course");
const formMessage = document.getElementById("formMessage");
const cardResult = document.getElementById("cardResult");
const cardStudentName = document.getElementById("cardStudentName");
const cardSchoolName = document.getElementById("cardSchoolName");
const cardCourse = document.getElementById("cardCourse");
const studentForm = document.getElementById("studentForm");


studentForm.addEventListener("submit", function (event)
 {
    event.preventDefault();
    const studentName = nameInput.value.trim();
    const schoolName = schoolInput.value.trim();
    const course = courseInput.value.trim();


if 

    (studentName === "" ||
    schoolName === "" ||
    course === "")

{
    formMessage.textContent = "please fill in all fields.";
    cardResult.hidden = true;
    return;
}
formMessage.textContent = "";

cardStudentName.textContent = studentName;
cardSchoolName.textContent = schoolName;
cardCourse.textContent = course;
cardResult.hidden = false;
});
