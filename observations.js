class Observations {
    constructor() {
        //wait for the DOM to fully load
        document.addEventListener('DOMContentLoaded', () => {
            const userNameEl = document.querySelector('.userName');
            userNameEl.textContent = this.getUserName();

            const observationTextArea = document.querySelector('#floatingTextarea2');
            const saveButton = document.querySelector('#save-observation');
            const observationsContainer = document.querySelector('#observations-container');

            //load the user's previous observation
            observationTextArea.value = this.getObservation();

            //sdd a click event listener to the "Save" button
            saveButton.addEventListener('click', () => {
                const observation = observationTextArea.value;
                this.saveObservation(observation);

                //display the user's observation and name
                const userName = this.getUserName();
                this.displayObservation(userName, observation, observationsContainer);
            });
        });
    }

    getUserName() {
        return localStorage.getItem('userName') || 'Mystery user';
    }

    getObservation() {
        return localStorage.getItem('userObservation') || '';
    }

    saveObservation(observation) {
        localStorage.setItem('userObservation', observation);
    }

    displayObservation(userName, observation, container) {
        const observationData = { userName, observation };
        this.saveObservationToJSON(observationData);
        this.updateObservationsUI(container);
    }

    saveObservationToJSON(observationData) {
        let observations = JSON.parse(localStorage.getItem('observations')) || [];
        observations.push(observationData);
        localStorage.setItem('observations', JSON.stringify(observations));
    }

    updateObservationsUI(container) {
        const observations = JSON.parse(localStorage.getItem('observations')) || [];

        let observationHTML = '';
        for (const data of observations) {
            observationHTML += `<p>${data.userName} made an observation: ${data.observation}</p>`;
        }

        container.innerHTML = observationHTML;
    }
}

//instantiate the Observations class when the script loads
new Observations();