document.getElementById('BtnDonate').addEventListener('click', function(){
  console.log("There are " + greatSpeeches.length + " speeches on the page.");
  //Code in here executes when the user clicks the "Donate" button.
});

document.getElementById('BtnChurchill').addEventListener('click', function(){
  console.log("This speech was written by " + greatSpeeches[0].author + " in " + greatSpeeches[0].year + ". It is " + greatSpeeches[0].bce + " that this year is B.C.E.");
  //Code in here executes when the user clicks the "Churchill" button.
});

document.getElementById('BtnGhandi').addEventListener('click', function(){
  console.log("This speech was written by " + greatSpeeches[1].author + " in " + greatSpeeches[1].year + ". It is " + greatSpeeches[1].bce + " that this year is B.C.E.");
  //Code in here executes when the user clicks the "Ghandi" button.
});

document.getElementById('BtnDemosthenes').addEventListener('click', function(){
  console.log("This speech was written by " + greatSpeeches[2].author + " in " + greatSpeeches[2].year + ". It is " + greatSpeeches[2].bce + " that this year is B.C.E.");
  //Code in here executes when the user clicks the "Demosthenes" button.
});

var greatSpeeches = [
  //array of featured speech objects with corresponding properties
  {
    "author" : "Churchill",
    "year"   : "1940",
    "bce"    :  false,
    "title"  : "Their Finest Hour"
  },
  {
    "author" : "Ghandi",
    "year"   : "1942",
    "bce"    :  false,
    "title"  : "Quit India"
  },
  {
    "author" : "Demosthenes",
    "year"   : "342",
    "bce"    :  true,
    "title"  : "The Third Philippic"
  }
];

var differenceInYears = greatSpeeches[1].year-greatSpeeches[0].year; //difference in years between Churchill's and Ghandi's featured speeches

window.onload = function() {
  console.log("Ghandi's speech and Churchill's speech are " + differenceInYears + " years apart.")
  //logs in console once entire page has loaded
};
