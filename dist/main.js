let totalPics = [
  './Images/penguin0.png',
  './Images/penguin1.png',
  './Images/penguin2.png',
  './Images/penguin3.png',
  './Images/penguin4.png',
  './Images/penguin5.png',
  './Images/penguin6.png',
  './Images/penguin7.png',
  './Images/yeti.png',
];

let count = 0;

function randomNumber(array) {
  var i = array.length,
    j = 0,
    temp;

  while (i--) {
    j = Math.floor(Math.random() * (i + 1));

    // swap randomly chosen element with current element
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  return array;
}

var ranNums = randomNumber([0, 1, 2, 3, 4, 5, 6, 7, 8]);
// console.log(ranNums);

// document.getElementById(this.id).addEventListener("click");

function changeImageOne(e) {
  count++;
  let i = 0;
  document.getElementById('oneImg').src = `${totalPics[ranNums[i]]}`;

  var x = `${totalPics[ranNums[i]]}`;

  if (x == './Images/yeti.png') {
    window.location.href = 'http://127.0.0.1:5500/roarr.html';
  }
  countPoints();
  return;
}

function changeImageTwo(e) {
  count++;
  let i = 1;
  document.getElementById('twoImg').src = `${totalPics[ranNums[i]]}`;
  var x = `${totalPics[ranNums[i]]}`;

  if (x == './Images/yeti.png') {
    roar();
  }
  countPoints();
  return;
}

function changeImageThree(e) {
  count++;
  let i = 2;
  document.getElementById('threeImg').src = `${totalPics[ranNums[i]]}`;
  var x = `${totalPics[ranNums[i]]}`;

  if (x == './Images/yeti.png') {
    roar();
  }
  countPoints();
  return;
}

function changeImageFour(e) {
  count++;
  let i = 3;
  document.getElementById('fourImg').src = `${totalPics[ranNums[i]]}`;
  var x = `${totalPics[ranNums[i]]}`;

  if (x == './Images/yeti.png') {
    roar();
  }
  countPoints();
  return;
}

function changeImageFive(e) {
  count++;
  let i = 4;
  document.getElementById('fiveImg').src = `${totalPics[ranNums[i]]}`;
  var x = `${totalPics[ranNums[i]]}`;

  if (x == './Images/yeti.png') {
    roar();
  }
  countPoints();
  return;
}

function changeImageSix(e) {
  count++;
  let i = 5;
  document.getElementById('sixImg').src = `${totalPics[ranNums[i]]}`;
  var x = `${totalPics[ranNums[i]]}`;

  if (x == './Images/yeti.png') {
    roar();
  }
  countPoints();
  return;
}

function changeImageSeven(e) {
  count++;
  let i = 6;
  document.getElementById('sevenImg').src = `${totalPics[ranNums[i]]}`;
  var x = `${totalPics[ranNums[i]]}`;

  if (x == './Images/yeti.png') {
    roar();
  }
  countPoints();
  return;
}

function changeImageEight(e) {
  count++;
  let i = 7;
  document.getElementById('eightImg').src = `${totalPics[ranNums[i]]}`;
  var x = `${totalPics[ranNums[i]]}`;

  if (x == './Images/yeti.png') {
    roar();
  }
  countPoints();
  return;
}

function changeImageNine(e) {
  count++;
  let i = 8;
  document.getElementById('nineImg').src = `${totalPics[ranNums[i]]}`;
  var x = `${totalPics[ranNums[i]]}`;

  if (x == './Images/yeti.png') {
    roar();
  }
  countPoints();
  return;
}

function roar() {
  window.location.href = 'roarr.html';
}

function countPoints() {
  const points = 25;
  Total_Points = count * points;
  localStorage.setItem('Points', Total_Points);
}
