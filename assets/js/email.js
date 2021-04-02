

function sendMail(contactForm) {
    emailjs.send("gmail", "visit irish midlands", {
        "from_firstname": contactForm.firstname.value,
        "from_lastname": contactForm.lastname.value,
        "from_email": contactForm.emailaddress.value,
        "irishmidlands_query": contactForm.message.value
    })
    
    .then(
        function(response) {
            console.log("SUCCESS", response);
            $('#mymodal').modal('show');  // Opens the modal on submission of all completed form fields
            $('#form-reset')[0].reset(); // Resets form fields on submission
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
        return false; // Stops the page from refreshing
}