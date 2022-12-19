// Changing the text of all paragraphs and headers

let parag = document.getElementsByTagName('p');
parag[0].innerText = 'This is the new text for paragraphs';
parag[1].innerText = 'This is the new text for paragraphs';

let headingOne = document.getElementsByTagName('h1');
headingOne[0].innerText = 'This is the new text of first Headings';
headingOne[1].innerText = 'This is the new text of first Headings';

let headingThree = document.getElementsByTagName('h3');
headingThree[0].innerText = 'This is the new text of third Heading';


