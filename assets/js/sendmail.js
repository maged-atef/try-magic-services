//send emails from client to Customer Services 
(function () {
    emailjs.init("N8jN398IHqroRm6U6"); // Replace with your actual User ID from EmailJS
  })();

  document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    console.log("hay")

    emailjs.sendForm("service_0aa7beo", "template_8pjt1zi", this)
      .then(() => {
        alert("Email sent successfully!");
        this.reset();
      }, (error) => {
        alert("Failed to send email. Error: " + JSON.stringify(error));
      });
  });
