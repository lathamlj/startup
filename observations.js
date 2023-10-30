// class Observations {

//     constructor() {
//         const playerNameEl = document.querySelector('.player-name');
//         playerNameEl.textContent = this.getPlayerName();
//     }

//     getPlayerName() {
//         return localStorage.getItem('userName') ?? 'Mystery player';
//       }
// }

class Observations {
    constructor() {
        // Wait for the DOM to fully load
        document.addEventListener('DOMContentLoaded', () => {
            const userNameEl = document.querySelector('.userName');
            userNameEl.textContent = this.getUserName();
        });
    }

    getUserName() {
        return localStorage.getItem('userName') ?? 'Mystery user';
    }
}

// Instantiate the Observations class when the script loads
new Observations();
