# startup
![rough sketches of application 1](/Users/lathamjeppson/Desktop/cs260/startup/sketch_1.jpg)
![rough sketches 2](sketch_2.jpg)
![rough sketches 3](sketch_3.jpg)

# JavaScript
Quick Explanation:<br>
login.js saves username locally and prompts user to "observations" page<br>
observations.js saves username and observations entered in JSON objects which are displayed on screen

Longer Explanation:<br>
I added a login.js file that is very similar to the one implemented in Simon. This login.js handles the user name for now.
Enter a user name and then click "submit" the javascript will save your user name and direct it to the "observations" page.
The "observations" page is where the observations.js file comes in to play. You can enter your daily observations into the 
text entry box on this page. Once you click "save" your observation will be saved to a JSON object and will be presented to 
you on the screen. There is another JSON object that saves user names. Eventually when I implement Web Sockets, there will be
JSON objects containing other user's user names that will inform you who else is posting. As of right now, it only presents 
the user's user name with a little message stating "(username) made an observation: (the observation)"

# startup-service

This deliverable demonstrates converting the JavaScript application into a web application by implementing a web service that listens on a network port for HTTP requests.<br>
Moved all my frontend files into a public folder<br>
Added '.gitignore', 'LICENSE', 'package-lock.json', 'package.json'<br>
Created index.js which creates the service by implementing node.js, express, specifies the port number,
and endpoints necessary for my application. See 'observations.js' for corresponding functions.<br>
Please note that previously submitted observations are now available for user to view after submitting an observation themselves.<br>
Please note the third party endpoint in the "Guidelines" page (about.html) that cycles through randomly generated quotes.

# startup-db

I added database.js to my code. I also edited my index.js, observations.js and login.js. I also added a submit.js and submit.html page. The reason for adding the submit.js was to seperate the submission of the observations and the viewing of users' past observations. Besides that, another adjustment I had to make was to create the observationDataFunc function which concatenates the username and the observation into one string to save to localStorage. I then submit the observation to my MongoDB with the collection name: keen.observation. The observations.js page pulls that data from the Mongo DB instead of just displaying the localStorage.