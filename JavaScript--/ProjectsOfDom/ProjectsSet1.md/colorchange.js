// If else method
const buttonsAll = document.querySelectorAll('.button');
const bodyFirst = document.querySelector("body")

buttons.forEach(function (button){
  console.log(button);
  button.addEventListener('click', function(e){
    console.log(e)
    console.log(e.target)
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'pink') {
      body.style.backgroundColor = e.target.id;
    }
  })
})


//Switch case method 

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    const color = e.target.id;

    switch (color) {
      case 'grey':
        body.style.backgroundColor = color;
        break;
    }
    switch (color) {
      case 'white':
        body.style.backgroundColor = color;
        break;
    }
    switch (color) {
      case 'blue':
        body.style.backgroundColor = color;
        break;
    }
    switch (color) {
      case 'pink':
        body.style.backgroundColor = color;
        break;
    }
    switch (color) {
      case 'yellow':
        body.style.backgroundColor = color;
        break;
    }
  });
});
