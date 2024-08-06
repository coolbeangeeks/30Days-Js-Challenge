const t1=document.getElementById('t1')
const t2=document.getElementsByClassName('t2')
const t3=document.getElementById('t3')
const imgElement = document.getElementById('myImage');
const element = document.getElementById('myElement');
const element1 = document.getElementById('myElement1');
// Select the buttons
const addButton = document.getElementById('addButton');
const removeButton = document.getElementById('removeButton');
const toggleButton = document.getElementById('toggleButton');
imgElement.setAttribute('src', 'new-image.jpg');

t1.innerText='changing the t1 text'
const newdiv=document.createElement('div')
const newli=document.createElement('li')
newdiv.textContent='this is new div';
document.body.appendChild(newdiv)
t2[0].style.backgroundColor="red"
newli.textContent='item2'
t3.appendChild(newli)
t3.remove()
addButton.addEventListener('click', () => {
    element.classList.add('highlight');
});

removeButton.addEventListener('click', () => {
    element.classList.remove('highlight');
});

toggleButton.addEventListener('click', () => {
    element.classList.toggle('highlight');
});

element1.addEventListener('mouseover', () => {
    element1.style.borderColor = 'red';
});

// Add a mouseout event listener to reset the border color
element1.addEventListener('mouseout', () => {
    element1.style.borderColor = 'black';
});