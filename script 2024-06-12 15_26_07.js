//.fag
//snittBTN


const snittBTN = document.querySelector("#snittBTN");

function checkSnitt() {
  const fagInputs = document.querySelectorAll(".fag");
  const gradesInNumbers = [];
  fagInputs.forEach((element, i) => {
    const gradeNumber = parseInt(element.value);
    if(gradeNumber) {
      gradesInNumbers.push(gradeNumber);
    } else {
      gradesInNumbers.push(1);
    };
  });

  let gradeSum = 0;
  gradesInNumbers.forEach(grade => {
    gradeSum = gradeSum + grade
  });

  const snitt = gradeSum / fagInputs.length;
  console.log(snitt);
  document.querySelector("#showSnitt").textContent = snitt;
  if (document.querySelector("#check").checked === true) {
    
    fagInputs.forEach(input => {
      setTimeout(() => {
        input.value = "";
      }, 1500);
    });
  };
};

snittBTN.addEventListener("click", checkSnitt);