09/21/23
I've learned that a personal pass key is required to make git commits

09/30/23
This has been a really inforamtive assignment for me. I had no idea what a deployFiles.sh was before today. I also learned how to embed a youtube video into a web application using html.

09/30/23
made several uses of various html variables such as the following: section, form, label, textarea, button, ul, li, p and img src.

10/14/23
must learn how to use the css debugger tool thing from the website explorer. so so helpful but I still stink at it.

10/30/23
JSON objects replace local storage

which of the following is a DNS subdomain?
cs260.cs.byu.edu (correct)
byu
byu.edu
edu

what does the DOM textContent property do?
sets the child text for an element (correct)
sets the content spacing for an element
sets the child HTML for an element
sets the text content for the entire DOM

what does inner/outer HTML do?
sets the child HTML for an element

what will the following output?
 const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('taco');
        resolve(true);
    }, 10000);
 });
 console.log('burger');

 p
 .then((result) => console.log('shake'))
 .catch((e) => console.log('salad'))
 .finally(() => console.log('noodles'))

 console.log('fries');

"burger fries taco shake noodles

In HTML, what does <div> do?
Creates a division element

the following console command makes a script executable:
chmod +x deploy.sh

what does the following code output?
let a = ['cow', 'rat', 'fish'];
let b = a.filter(v => v.match(/A|f/i));
console.log(b);

['rat', 'fish']

you can use this CSS to load fonts from Google:
@import url'https://fonts.googleapis.com/css?family=Quicksand');
True

what is the HTML tag for an unordered list?
<ul>

to point to another DNS record, you should use the following DNS record type:
CNAME (correct)
A
TXT
SOA

using CS, how would you turn only the BYU text blue?
div.header {color: blue;} (correct)
div#header {color: blue;}
div {color: blue;}
header {color: blue;}

which HTML will create a valid hyperlink?
<a href='https://c.com'>x</a> (correct)
<a src=...>x</a>
<link src=...>x</a>
<link href=...>x</a>

what does the following code output?
let a = ['cow', 'rat', 'fish'];
let b = a.reduce((a,v) => [a,v].join(':'));
console.log(b);

cow:rat:fish

what does the following code output?
let a = [1,2,3];
let e = a.map(number => {
    return ('a' + number)
});
console.log(e);

['a1', 'a2', 'a3']

executing the following will output:
const f = y => ++y;
console.log(f(3))

4 (correct)
undefined
3
2

what will the following output?
const a = async function() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {console.log('D'); resolve(true)}, 10000);
    })
}

try {
    console.log('A');
    await a();
    console.log('B')
} catch(e) {
    console.log('C');
}

A D B (correct)

what does the following code do?
document.querySelector('p').addEventListener('mouseover', console.log);

adds a mouseover event listener to a p element

how will the "hello world" text be oriented?

two line, with the first line saying World and the second saying Hello

what is the order of the CSS box model, starting from the outside going in?

margin, border, padding, content

which of the following is NOT a valid way to include JS in HTML?

<javascript>1+1</javascript> (correct)
<div onclick='1+1'/>
<script>1+1</script>

which of the following is NOT a valid js function?

function f(x) = {} (correct)
const f = function(x) {}
const f = {x} => {}
function f(x) {}

which of the following is valid JSON?

{x:3}
{"x":undefined}
{'x':3}
{"x":3} (correct) (single quotes not valid JSON)

which of the following is a valid JS object?

{"n"="1"}
{"n"=1}
{n=1}
{n:1} (correct)

the CSS property padding:
p {
    padding: 1em;
}

puts space around the margin of selected elements
puts space around the HTML document
puts space around the content of selected elements (correct)
puts space around the border of selected elements

Midterm Review Questions and Answers:

1. what does the link element do?
The link element is used to link external resources to an HTML document, typically used for linking stylesheets.
2. what does a div tag do?
A div tag is a container element used to group and structure content on a webpage.
3. what is the difference between the #title and .grid selector?
#title selects an element with the ID "title," while .grid selects elements with the class "grid."
4. what is the difference between padding and margin?
Padding is the space between the content and the border of an element, while margin is the space outside the border of an element.
5. Given certain HTML and CSS how will the images be displayed using flex?
Images can be displayed using flex by setting the image container's display property to "flex" and adjusting the flex properties for alignment and distribution.
6. What does padding in CSS do?
Padding in CSS adds space inside the border of an element, separating the content from the border.
7. What does using arrow syntax function declaration do?
Using arrow syntax for a function declaration in JavaScript creates a concise way to define functions with a lexical "this" value.
8. What does using map with an array output do?
Using the map function with an array in JavaScript creates a new array by applying a provided function to each element of the original array.
9. What does getElementByID and addEventListener do?
getElementById selects an element by its ID, and addEventListener attaches an event handler to an element.
10. What does the # selector do in Javascript?
The # selector is not used in JavaScript; it is used in CSS to select elements by ID.
11. Give me a short description of the DOM
The DOM (Document Object Model) represents the structured document with a hierarchy of objects, allowing programs to access and manipulate the document's content and structure.
12. By default, the HTML span element has a default CSS display property value of:
By default, the HTML span element has a default CSS display property value of "inline."
13. How would you use CSS to change all the div elements to have a background color of red?
To change all div elements' background color to red in CSS, use the selector "div" with the property "background-color: red."
14. How would you display an image with a hyperlink in HTML?
To display an image with a hyperlink in HTML, use the <a> (anchor) element to create a link, and place an <img> element inside it.
15. In the CSS box model, what is the ordering of the box layers starting at the inside and working out?
In the CSS box model, the ordering of the box layers starts with content, then padding, border, and margin.
16. Given certain HTML, what CSS would you use to set some of the text to green while leaving the rest of the text unaffected?
To set some text to green while leaving the rest unaffected, use CSS with a selector for the specific text and set the "color" property to green.
17. What is the console.log used for?
console.log is used for printing messages or data to the console in JavaScript for debugging or informational purposes.
18. How would you use JavaScript to select an element with the id of “byu” and change the text color of that element to green?
To select an element with the id of "byu" in JavaScript and change its text color to green, you can use document.getElementById('byu').style.color = 'green';.
19. What is the opening HTML tag for a paragraph, ordered list, unordered list, second level heading, first level heading, third level heading?
Opening HTML tags: <p>, <ol>, <ul>, <h2>, <h1>, <h3>.
20. How do you declare the document type to be html?
To declare the document type as HTML, you can use <!DOCTYPE html> at the beginning of an HTML document.
21. What is valid javascript syntax for if, else, for, while, switch statements?
Valid JavaScript syntax: if (condition) { ... }, else { ... }, for (i = 0; i < n; i++) { ... }, while (condition) { ... }, switch (variable) { case value: ... }.
22. What is the correct syntax for creating a javascript object?
JavaScript object syntax: let obj = { key: 'value' };.
23. Is is possible to add new properties to javascript objects?
Yes, it is possible to add new properties to JavaScript objects at any time.
24. If you want to include JavaScript on an HTML page, which tag do you use?
To include JavaScript on an HTML page, you use the <script> tag.
25. What JavaScript could you use to set the text "animal" to "crow" and leave the "fish" text unaffected?
To set the text "animal" to "crow" in JavaScript and leave the "fish" text unaffected, you can use string manipulation methods or selectors.
26. Describe JSON in one sentence?
JSON is a lightweight data interchange format that is easy for humans to read and write and easy for machines to parse and generate.
27. What does the console command chmod, pwd, cd, ls, vim, nano, mkdir, mv, rm, man, ssh, ps, wget, sudo do?
Console commands: chmod (change file permissions), pwd (print working directory), cd (change directory), ls (list directory contents), vim (text editor), nano (text editor), mkdir (make directory), mv (move/rename files), rm (remove files), man (manual pages), ssh (secure shell), ps (process status), wget (retrieve content), sudo (execute commands with superuser privileges).
28. What console command creates a remote shell session?
The console command to create a remote shell session is ssh.
29. Which of the following is true when the -la parameter is specified for the ls console command?
When the -la parameter is specified for the ls console command, it lists files and directories in long format, including hidden files, and sorts by name.
30. For the domain name banana.fruit.bozo.click, which is the top level domain, which is a subdomain, which is a root domain?
In the domain name "banana.fruit.bozo.click," "click" is the top-level domain, "bozo" is a subdomain, and "fruit" is a root domain.
31. Is a web certificate necessary to use HTTPS.
Yes, a web certificate (SSL/TLS) is necessary to use HTTPS for secure communication.
32. Can a DNS A record point to an IP address or another A record.
Yes, a DNS A record can point to an IP address or another A record, allowing for aliasing.
33. Port 443, 80, 22 is reserved for which protocol?
Port 443 is reserved for HTTPS, port 80 is reserved for HTTP, and port 22 is reserved for SSH.
34. Describe how Promises output when executed?
Promises in JavaScript output asynchronously when they are resolved or rejected, allowing for more predictable handling of asynchronous operations.

11/16/2023
deployed service functionality.