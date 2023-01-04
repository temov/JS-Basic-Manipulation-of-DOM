// Changing the text of all paragraphs and headers

let parag = document.getElementsByClassName('paragraph');
parag[0].innerText = 'Thanks to my mentors i can improve my skills in JS';
parag[1].innerText = 'Thanks to my mentors i can improve my skills in JS';

let paragTwo= document.querySelectorAll('p');

paragTwo[1].innerText = 'I have changed the text again';

let headingOne = document.getElementsByTagName('h1');
headingOne[0].innerText = 'This is the new text of first Headings';
headingOne[1].innerText = 'This is the new text of first Headings';

let heading = document.getElementById('myTitle');

heading.innerText = 'I have change the text of the first heading again';

let headingThree = document.getElementsByTagName('h3');
headingThree[0].innerText = 'This is the new text of third Heading';


