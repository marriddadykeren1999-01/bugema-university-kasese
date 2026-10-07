document.getElementById("loginForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let studentID = document.getElementById("studentID").value;
    let password = document.getElementById("password").value;
    let message = document.getElementById("message");

    // Demo login details
    if (studentID === "BU001" && password === "1234") {

        message.textContent = "Login successful!";

        setTimeout(function() {
            window.location.href = "student-dashboard.html";
        }, 1000);

    } else {

        message.textContent = "Invalid Student ID or Password.";
    }
});