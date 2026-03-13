
let students = [];

function addStudent() {
    
    const name = document.getElementById('name').value;
    const roll = document.getElementById('roll').value;
    const math = parseFloat(document.getElementById('math').value);
    const science = parseFloat(document.getElementById('science').value);
    const english = parseFloat(document.getElementById('english').value);

    if(!name || !roll) return alert("Please fill all fields");

    
    const total = math + science + english;
    const average = total / 3;

    let studentRecord = {
        name: name,
        roll: roll,
        marks: { math, science, english },
        total: total,
        average: average.toFixed(2)
    };

    
    students.push(studentRecord);
    alert("Student added successfully!");
    clearInputs();
}

function displayStudents(dataArray) {
    const display = document.getElementById('displayArea');
    display.innerHTML = "";

    if(dataArray.length === 0) {
        display.innerHTML = "<p>No records found.</p>";
        return;
    }

    for (let student of dataArray) {
        const div = document.createElement('div');
        div.className = 'student-card';
        div.innerHTML = `
            <h3>${student.name} (Roll: ${student.roll})</h3>
            <p>Total: ${student.total} | Average: ${student.average}%</p>
            <p>Status: ${student.average >= 40 ? "Pass" : "Fail"}</p>
        `;
        display.appendChild(div);
    }
}

function displayAll() { displayStudents(students); }

function showHighAchievers() {
    const highAchievers = students.filter(s => s.average > 80);
    displayStudents(highAchievers);
}

function showFailed() {
    const failed = students.filter(s => s.average < 40);
    displayStudents(failed);
}

function showTotalCount() {
    alert(`Total Students: ${students.length}`);
}

function clearInputs() {
    document.querySelectorAll('input').forEach(input => input.value = "");
}