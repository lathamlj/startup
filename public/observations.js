async function loadObservations() {
  let observations = [];
  try {
    // Get the latest high scores from the service
    const response = await fetch('/api/observations');
    observations = await response.json();

    // Save the scores in case we go offline in the future
    localStorage.setItem('observations', JSON.stringify(observations));
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
    for (const [i, observations] of observations.entries()) {
      //const positionTdEl = document.createElement('td');
      const nameTdEl = document.createElement('td');
      const observationTdEl = document.createElement('td');
      const dateTdEl = document.createElement('td');

      //positionTdEl.textContent = i + 1;
      nameTdEl.textContent = observation.name;
      observationTdEl.textContent = observation.observation;
      dateTdEl.textContent = observation.date;

      const rowEl = document.createElement('tr');
      //rowEl.appendChild(positionTdEl);
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

// class Observations {
//   constructor() {
//     // Wait for the DOM to fully load
//     document.addEventListener('DOMContentLoaded', () => {
//       const userNameEl = document.querySelector('.userName');
//       userNameEl.textContent = this.getUserName();

//       const observationTextArea = document.querySelector('#floatingTextarea2');
//       const saveButton = document.querySelector('#save-observation');
//       const observationsContainer = document.querySelector('#observations-container');

//       // Load the user's previous observation
//       this.loadPreviousObservation();

//       // Add a click event listener to the "Save" button
//       saveButton.addEventListener('click', () => {
//         const observation = observationTextArea.value;

//         // Save the observation to the service
//         this.saveObservation(observation);

//         // Display the user's observation and name
//         const userName = this.getUserName();
//         this.displayObservation(userName, observation, observationsContainer);
//       });
//     });
//   }

//   async loadPreviousObservation() {
//     try {
//       // Get the user's previous observation from the service
//       const response = await fetch('/api/observations');
//       const { observations } = await response.json();

//       // Set the observation in the text area
//       if (observations.length > 0) {
//         const observationTextArea = document.querySelector('#floatingTextarea2');
//         observationTextArea.value = observations[0].observation;
//       }
//     } catch (error) {
//       console.error('Error loading previous observation:', error);
//     }
//   }

//   async saveObservation(observation) {
//     try {
//       // Save the new observation to the service
//       const response = await fetch('/api/observations', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ observation }),
//       });

//       const result = await response.json();
//       console.log(result); // You can handle the result as needed
//     } catch (error) {
//       console.error('Error saving observation:', error);
//     }
//   }

//   getUserName() {
//     return localStorage.getItem('userName') || 'Mystery user';
//   }

//   getObservation() {
//     return localStorage.getItem('userObservation') || '';
//   }

//   saveObservation(observation) {
//     localStorage.setItem('userObservation', observation);
//   }

//   displayObservation(userName, observation, container) {
//     const observationData = { userName, observation };
//     this.saveObservationToJSON(observationData);
//     this.updateObservationsUI(container);
//   }

//   saveObservationToJSON(observationData) {
//     let observations = JSON.parse(localStorage.getItem('observations')) || [];
//     observations.push(observationData);
//     localStorage.setItem('observations', JSON.stringify(observations));
//   }

//   updateObservationsUI(container) {
//     const observations = JSON.parse(localStorage.getItem('observations')) || [];

//     let observationHTML = '';
//     for (const data of observations) {
//       observationHTML += `<p>${data.userName} made an observation: ${data.observation}</p>`;
//     }

//     container.innerHTML = observationHTML;
//   }
// }

// // Instantiate the Observations class when the script loads
// new Observations();