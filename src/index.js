import SuperGalacticAgeCalculator from './SuperGalacticAgeCalculator.js';


const birthdateInput = document.getElementById('birthdate');
const pastDateCheckbox = document.getElementById('past-birthday-checkbox');
const futureDateCheckbox = document.getElementById('future-birthday-checkbox');
const secondDateLabel = document.getElementById('alsoSecondDateLabel');
const planet = document.getElementById('planet');
const secondDate = document.getElementById("past_future_birthdate");
const secondDiv = document.getElementById("secondDiv");
const calculateBtn = document.getElementById('btn');
const result = document.getElementById('result');


calculateBtn.addEventListener("click", calculate)

birthdateInput.addEventListener('input', () => {
    const birthdateValue = birthdateInput.value;
    if (birthdateValue.length === 10) {
        secondDiv.style.display = 'block';

    } else {
        secondDiv.style.display = 'none';
    }
});

pastDateCheckbox.addEventListener('change', (e) => {

    if (pastDateCheckbox.checked) {
        futureDateCheckbox.checked = false;
        showSecondDataInputnHide()
    } else {
        secondDateLabel.innerText = "Select a planet:";
        planet.style.display = "unset";
        secondDate.style.display = "none";

    }
});

futureDateCheckbox.addEventListener('change', (e) => {
    if (futureDateCheckbox.checked) {
        pastDateCheckbox.checked = false;
        showSecondDataInputnHide(false);

    } else {
        secondDateLabel.innerText = "Select a planet:";
        planet.style.display = "unset";
        secondDate.style.display = "none";


    }
})


function showSecondDataInputnHide(past = true) {
    if (past) {
        secondDateLabel.innerText = "Enter your past birthdate";

    } else {
        secondDateLabel.innerText = "Enter your future birthdate";
    }
    planet.style.display = "none";
    secondDate.style.display = "block";

}




function calculate() {
    result.innerText = "";
    const birthdate = new Date(birthdateInput.value);
    const ageInMilliseconds = Date.now() - birthdate.getTime();
    const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365);
    const ageCalculator = new SuperGalacticAgeCalculator(ageInYears);

    if (!(pastDateCheckbox.checked || futureDateCheckbox.checked)) {
        let selectedPlanet = planet.options[planet.selectedIndex].value;



        result.innerText = `\nYour age on earth is: ${ageInYears.toFixed(2)} years\n`
        result.innerText += `Your age on ${selectedPlanet} is: ${ageCalculator.calculateAccurateAge(selectedPlanet).toFixed(2)} years`;



    }

    else {
        const secondBirthDate = new Date(secondDate.value);
        const secondAgeInMilliseconds = Date.now() - secondBirthDate.getTime();
        const SecondAgeInYears = secondAgeInMilliseconds / (1000 * 60 * 60 * 24 * 365);
        console.log(SecondAgeInYears)
        let data;

        if (pastDateCheckbox.checked) {
            data = ageCalculator.calculateYearsUntilFutureBirthday(SecondAgeInYears);
        }
        else {
            data = ageCalculator.calculateYearsSincePastBirthday(SecondAgeInYears);


        }
        result.append(formattedData(data));

    }
}




function formattedData(data) {
    console.log(data);
    const table = document.createElement('table');
    const headerRow = table.insertRow();
    const planetHeader = headerRow.insertCell();
    const ageHeader = headerRow.insertCell();

    planetHeader.innerHTML = 'Planet';
    ageHeader.innerHTML = 'Age in Years';

    for (const planet in data) {
        const row = table.insertRow();
        const planetCell = row.insertCell();
        const ageCell = row.insertCell();
        planetCell.innerHTML = planet;
        ageCell.innerHTML = data[planet].toFixed(2);
    }
    return table;
}
