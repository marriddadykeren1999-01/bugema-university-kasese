<?php
require_once "db.php";

$sql = "SELECT * FROM timetable";
$result = $conn->query($sql);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Students' Timetable | Bugema University Kasese Campus</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
            background: #f4f7f5;
            color: #222;
        }
        h1 {
            color: #0f9743;
            text-align: center;
        }
        .container {
            max-width: 1000px;
            margin: auto;
            background: white;
            padding: 20px;
            border-radius: 8px;
        }
        .table-wrapper {
            overflow-x: auto;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }
        th, td {
            border: 1px solid #ddd;
            padding: 12px;
            text-align: left;
        }
        th {
            background: #0f9743;
            color: white;
        }
        .message {
            padding: 12px;
            background: #eef7f0;
            border-radius: 5px;
        }
        a {
            color: #0f9743;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Bugema University Kasese Campus</h1>
        <h2>Students' Timetable</h2>

        <?php if ($result === false): ?>
            <p>We could not load the timetable. Please check the timetable table structure.</p>
        <?php elseif ($result->num_rows > 0): ?>
            <div class="table-wrapper">
                <table>
                    <thead>
                        <tr>
                            <?php
                            foreach ($result->fetch_fields() as $field) {
                                if ($field->name !== "id") {
                                    echo "<th>" .
                                        htmlspecialchars($field->name) .
                                        "</th>";
                                }
                            }
                            ?>
                        </tr>
                    </thead>
                    <tbody>
                        <?php while ($row = $result->fetch_assoc()): ?>
                            <tr>
                                <?php foreach ($row as $key => $value): ?>
                                    <?php if ($key !== "id"): ?>
                                        <td><?= htmlspecialchars((string)($value ?? "")) ?></td>
                                    <?php endif; ?>
                                <?php endforeach; ?>
                            </tr>
                        <?php endwhile; ?>
                    </tbody>
                </table>
            </div>
        <?php else: ?>
            <p class="message">
                No timetable lessons have been added yet.
                Please check again after lessons are entered.
            </p>
        <?php endif; ?>

        <p><a href="index.html">Return to the campus homepage</a></p>
    </div>
</body>
</html>