function openForm() {
    document.getElementById("form-display").style.display = "block";
}

function closeForm() {
    document.getElementById("form-display").style.display = "none";
}

function sendMail(contactForm){
    emailjs.send("service_z6cxmcd", "template_kz2p2kk", {
        "parent_name": contactForm.parentName.value,
        "student_name": contactForm.studentName.value,
        "parent_email": contactForm.parentEmail.value,
        "instrument": contactForm.instrument.value,
        "grade": contactForm.grade.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        },
        alert("Thank you for applying, we will be in touch shortly!"),
        closeForm()
        );
        
        return false;
}