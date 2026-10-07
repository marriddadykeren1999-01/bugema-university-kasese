document.getElementById("loginForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let regNumber = document.getElementById("regNumber").value;
    let password = document.getElementById("password").value;
    let message = document.getElementById("message");

    // Demo student account
    if (regNumber === "BU/2026/001" && password === "12345") {

        message.innerHTML = "Login successful!";

        message.style.color = "green";

        setTimeout(function() {
            window.location.href = "student-dashboard.html";
        }, 1000);

    } else