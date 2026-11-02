
function loginStudent() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "" || password === "") {
        alert("Please enter your username and password.");
        return;
    }

    if (username === "student" && password === "12345") {
        alert("Login successful! Welcome to the Student Portal.");
        window.location.href = "student-dashboard.html";
    } else {
        alert("Invalid username or password.");
    }
}

// Timetable data must be outside loginStudent()
const timetableData = [
    {
        program: "Degree",
        year: "Year 1",
        semester: "Semester One",
        day: "Monday",
        time: "9:00 AM - 11:00 AM",
        course: "Introduction to Computing",
        lecturer: "Sample Lecturer",
        venue: "Room 1"
    },
    {
        program: "Diploma",
        year: "Year 1",
        semester: "Semester One",
        day: "Tuesday",
        time: "11:00 AM - 1:00 PM",
        course: "Communication Skills",
        lecturer: "Sample Lecturer",
        venue: "Room 2"
    },
    {
        program: "Certificate",
        year: "Year 1",
        semester: "Semester Two",
        day: "Wednesday",
        time: "2:00 PM - 4:00 PM",
        course: "Study Skills",
        lecturer: "Sample Lecturer",
        venue: "Room 3"
    }
];

function displayTimetable() {
    const programSelect = document.getElementById("program");
    const yearSelect = document.getElementById("year");
    const semesterSelect = document.getElementById("semester");
    const body = document.getElementById("timetableBody");
    const message = document.getElementById("timetableMessage");

    // Stop safely if this page has no timetable
    if (!programSelect || !yearSelect || !semesterSelect ||
        !body || !message) {
        return;
    }

    const program = programSelect.value;
    const year = yearSelect.value;
    const semester = semesterSelect.value;

    const filteredData = timetableData.filter(item =>
        (program === "All" || item.program === program) &&
        (year === "All" || item.year === year) &&
        (semester === "All" || item.semester === semester)
    );

    body.innerHTML = "";

    if (filteredData.length === 0) {
        message.textContent =
            "No timetable entries found for your selection.";
        return;
    }

    filteredData.forEach(item => {
        const row = document.createElement("tr");

        [
            item.program,
            item.year,
            item.semester,
            item.day,
            item.time,
            item.course,
            item.lecturer,
            item.venue
        ].forEach(value => {
            const cell = document.createElement("td");
            cell.textContent = value;
            row.appendChild(cell);
        });

        body.appendChild(row);
    });

    message.textContent =
        "Showing " + filteredData.length +
        " timetable entry/entries.";
}

document.addEventListener("DOMContentLoaded", function () {
    const program = document.getElementById("program");
    const year = document.getElementById("year");
    const semester = document.getElementById("semester");

    if (program && year && semester) {
        program.addEventListener("change", displayTimetable);
        year.addEventListener("change", displayTimetable);
        semester.addEventListener("change", displayTimetable);

        displayTimetable();
    }
});