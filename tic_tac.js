// grab the resest button
var resetB = document.querySelector("#resetButton");
// grab all the squares
var spaces = document.querySelectorAll('td');

// when reset is pressed, the board clears
function clearBoard(){
  for (var i = 0; i < spaces.length; i++) {
    spaces[i].textContent = '';
  }
}
resetB.addEventListener('click',clearBoard);

///////////////////////////////////////////////////////////////////////
//version A
//alternate between x and o

// counter=0;
// function changeMarker(){
//   if(this.textContent === ''){
//     counter++;
//     if (counter%2==0) {
//       this.textContent='O';
//     }else {
//       this.textContent = 'X';
//     }
//   }
// }
//
// for (var i = 0; i < spaces.length; i++) {
//   spaces[i].addEventListener('click', changeMarker);
// }

////////////////////////////////////////////////////////////////////////

// version B: click cells multiple times

function changeMarker(){
  if(this.textContent === ''){
      this.textContent='X';
    }else if (this.textContent==='X') {
        this.textContent = 'O';
    }else {
      this.textContent = '';
    }
}

for (var i = 0; i < spaces.length; i++) {
  spaces[i].addEventListener('click', changeMarker);
}
