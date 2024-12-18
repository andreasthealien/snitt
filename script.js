const errorMessage = document.querySelector("#error-message");
const inputs = document.querySelectorAll(".grade-input");
const points = document.querySelector("#points");
const avarage = document.querySelector("#avarage");
const resetBTN = document.querySelector("#reset");
let grades = [];

function updateGrades() {
    grades = [];
    document.querySelectorAll(".grade-input").forEach((gradeElem) => {
        const grade = parseInt(gradeElem.value);
        
        if (!isNaN(grade)) {
            grades.push(grade);
        };
    });    
};

function placeValues() {
    if (grades.length) {        
        let sum=0;
        let err = false;
        grades.forEach(grade => {
            try {
                sum = sum+grade;
            } catch (error) {
                err = true;
                return;
            };
        });        
        if (err) {
            const errorMessageText = "En error oppsto, sørg for at det ikke er skrevet text i boksene eller refresh siden.";
            points.textContent = "";
            avarage.textContent = "";
            errorMessage.textContent = errorMessageText;
        } else {
            points.textContent = (sum/grades.length*10).toFixed(2);
            avarage.textContent = (sum/grades.length).toFixed(3);
            errorMessage.textContent = "";
        };
    } else {
        points.textContent = "";
        avarage.textContent = "";
        errorMessage.textContent = "";
    };
};

function reset() {
    document.querySelectorAll(".grade-input").forEach(gradeElem => gradeElem.value="");
    points.textContent = "";
    avarage.textContent = "";
    errorMessage.textContent = "";
};

inputs.forEach(element => {
    element.addEventListener("change", (e) => {
        const value = parseInt(e.target.value);

        if (0<=value && value<=6) {
            updateGrades();
            placeValues();
        } else {
            e.target.value = "";            
        };
    });
});

resetBTN.addEventListener("click", reset);