<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student Grade Prediction</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
        }
        input {
            margin: 5px;
        }
    </style>
</head>
<body>
    <h1>Student Grade Prediction</h1>
    <label for="scores">Enter student scores (comma separated):</label><br>
    <input type="text" id="scores" placeholder="e.g. 85, 90, 78, 92"><br>
    <button onclick="predictGrade()">Predict Grade</button>
    
    <h2 id="result"></h2>

    <script>
        function predictGrade() {
            const scoresInput = document.getElementById('scores').value;
            const scores = scoresInput.split(',').map(Number);
            const totalScores = scores.length;

            if (totalScores === 0 || scores.some(isNaN)) {
                document.getElementById('result').innerText = "Please enter valid scores.";
                return;
            }

            const sum = scores.reduce((acc, score) => acc + score, 0);
            const average = sum / totalScores;

            let grade;
            if (average >= 90) {
                grade = 'A';
            } else if (average >= 80) {
                grade = 'B';
            } else if (average >= 70) {
                grade = 'C';
            } else if (average >= 60) {
                grade = 'D';
            } else {
                grade = 'F';
            }

            document.getElementById('result').innerText = `Average Score: ${average.toFixed(2)}, Predicted Grade: ${grade}`;
        }
    </script>
</body>
</html>
