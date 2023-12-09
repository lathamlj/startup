class Submission {
  constructor() {
    // Wait for the DOM to fully load
    document.addEventListener('DOMContentLoaded', () => {
      const userNameEl = document.querySelector('.userName');
      let userName = this.getUserName();
      userNameEl.textContent = userName;

      const observationTextArea = document.querySelector('#floatingTextarea2');
      const saveButton = document.querySelector('#save-observation');
      const observationsContainer = document.querySelector('#observations-container');

      // Load the user's previous observation
      //this.loadPreviousObservation();

      // Add a click event listener to the "Save" button
      saveButton.addEventListener('click', () => {
        const observation = observationTextArea.value;

        // Save the observation to the service
        this.submitObservation(observation);
        let userName = this.getUserName();
        this.saveObservation(userName, observation);
        console.log("testing")

        // Display the user's observation and name
        this.observationDataFunc(userName, observation);
      });
    });
  }

  async loadPreviousObservation() {
    try {
      // Get the user's previous observation from the service
      const response = await fetch('/observations');
      const { observations } = await response.json();

      // Set the observation in the text area
      if (observations.length > 0) {
        const observationTextArea = document.querySelector('#floatingTextarea2');
        observationTextArea.value = observations[0].observation;
      }
    } catch (error) {
      console.error('Error loading previous observation:', error);
    }
  }
//add username and crete obsData object and strigify object to go to DB
  async submitObservation(observation) {
    try {
      // Save the new observation to the service
      console.log("before saving observation")
      console.log(observation)
      const response = await fetch('/api/observations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ observation }),
      });

      const result = response.ok;
      console.log("this is result", result); // You can handle the result as needed
    } catch (error) {
      console.error('Error saving observation:', error);
    }
  }

  getUserName() {
    return localStorage.getItem('userName') || 'Mystery user';
  }

  // getObservation() {
  //   return localStorage.getItem('userObservation') || '';
  // }

  saveObservation(userName, observation) {
    localStorage.setItem('userObservation', JSON.stringify(observation));
    let currentObservations = JSON.parse(localStorage.getItem('observations'));
    let observationData = { userName, observation };
    //currentObservations.push(JSON.stringify(observationData));
    currentObservations = [...currentObservations, observationData]
    localStorage.setItem('observations', JSON.stringify(currentObservations));
  }

  observationDataFunc(userName, observation){
    let observationData = { userName, observation };
    localStorage.setItem('observationData', JSON.stringify(observationData));
  }

  // displayObservation(userName, observation) {
  //   let observationData = { userName, observation };
  //   console.log(observationData);
  //   console.log("this is observationData");
  //   this.saveObservationToJSON(observationData);
  //   //this.updateObservationsUI(container);
  // }

  // saveObservationToJSON(observationData) {
  //   let obsArray = [];
  //   let observations = JSON.parse(localStorage.getItem('userObservation')) || [];
  //   //observations.push(observationData);
  //   obsArray.push(observationData);
  //   localStorage.setItem('userObservation', JSON.stringify(observations));
  //   console.log(observations);
  // }

  updateObservationsUI(container) {
    const observations = JSON.parse(localStorage.getItem('observations')) || [];

    let observationHTML = '';
    for (const data of observations) {
      observationHTML += `<p>${data.userName} made an observation: ${data.observation}</p>`;
    }

    container.innerHTML = observationHTML;
  }
}

// Instantiate the Observations class when the script loads
new Submission();