//DOM Elements
const studentForm = document.getElementById('studentForm');
const studentsContainer = document.querySelector(".Students");
const nameInput = studentForm['name'];
const ageInput = studentForm['age'];
const rollInput = studentForm['roll'];

const students = [
    {
        name: "John",
        age: 20,
        roll: 1
    },
    {
        name: "Jane",
        age: 21,
        roll: 2
    },
    {
        name: "Jack",
        age: 22,
        roll: 3
    },
];

const addStudent = (name, age, roll) => {
    students.push({
        name,
        age,
        roll
    });
    }

const createStudentElement = (name, age, roll) => {
    const studentDiv = document.createElement('div');
    const studentName = document.createElement('h2');
    const studentAge = document.createElement('p');
    const studentRoll = document.createElement('p');

    studentName.innerHTML ="Student name: " + name;
    studentAge.innerHTML = "Student age: " + age;
    studentRoll.innerHTML = "Student roll: " + roll;

    studentDiv.appendChild(studentName);
    studentDiv.appendChild(studentAge);
    studentDiv.appendChild(studentRoll);

    studentsContainer.appendChild(studentDiv);
}

students.forEach(createStudentElement);

studentForm.onsubmit = (e) => {
    e.preventDefault();
    const name = nameInput.value;
    const age = ageInput.value;
    const roll = rollInput.value;

    addStudent(name, age, roll);
    createStudentElement(name, age, roll);

    nameInput.value = '';
    ageInput.value = '';
    rollInput.value = '';
}
