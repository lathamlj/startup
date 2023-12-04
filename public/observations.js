//const { getObservations } = require("../database");

async function loadObservations() {
  let observations = [];
  try {
    // Get the latest high scores from the service
    const response = await fetch('/api/observations');
    observations = await response.json();
    console.log(observations);

    // Save the observations in case we go offline in the future
    //once database working switch these two lines below
    //localStorage.setItem('observations', JSON.stringify(observations));
    //observations = JSON.parse(localStorage.getItem('observations'))
  } catch {
    // If there was an error then just use the last saved scores
    const observationsText = localStorage.getItem('observations');
    if (observationsText) {
      observations = JSON.parse(observationsText);
    }
  }

  displayObservations(observations);
}

function displayObservations(observations) {
  const tableBodyEl = document.querySelector('#observations');

  if (observations.length) {
    // Update the DOM with the observations
    for (const [i, observation] of observations.entries()) {
      //call getObservations
      const positionTdEl = document.createElement('td');
      const nameTdEl = document.createElement('td');
      const observationTdEl = document.createElement('td');
      const dateTdEl = document.createElement('td');

      positionTdEl.textContent = i + 1;
      nameTdEl.textContent = observation.userName;
      observationTdEl.textContent = observation.observation;
      dateTdEl.textContent = observation.date;

      const rowEl = document.createElement('tr');
      rowEl.appendChild(positionTdEl);
      rowEl.appendChild(nameTdEl);
      rowEl.appendChild(observationTdEl);
      rowEl.appendChild(dateTdEl);

      tableBodyEl.appendChild(rowEl);
    }
  } else {
    tableBodyEl.innerHTML = '<tr><td colSpan=4>See your friends observations </td></tr>';
  }
}

loadObservations();