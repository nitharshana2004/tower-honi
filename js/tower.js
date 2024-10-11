
let counter = 0;

let pegs = [];
let diskArray = [];
const game = document.getElementById('game');

function plotAll(pegMap) {
  pegArray.map((peg, pegindex) => {
   
    let disks = pegMap[peg]; 
    if (disks.length > 0) {
      disks.map((disk, index) => {
        let pickDisk = diskArray.filter((item) => {
          return item.id == disk;
        });
        positionDisk(pickDisk[0].newdiv, disk, index, pegindex); 
      });
    }
  });
}

function positionDisk(domdiv, diskNumber, indexOnPeg, pegindex) {
  let pegCenter = 300 * pegindex + 100;
  let diskWidth = diskNumber * 40 + 20;
  let base = 400;
  let diskHeight = 20;

  domdiv.style.left = pegCenter - diskWidth / 2 + 'px';
  domdiv.style.width = diskWidth + 'px';
  domdiv.style.top = base - diskHeight * indexOnPeg + 'px';
  console.log('Disk:' + diskNumber + ' at top: ' + domdiv.style.top);
  domdiv.style.height = diskHeight + 'px';
  domdiv.innerHTML = ' ' + diskNumber;
}

const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

function diskFactory(id, indexOnPeg, pegNumber, type) {
  let newdiv = document.createElement('div');
  positionDisk(newdiv, id, indexOnPeg, pegNumber);
  newdiv.setAttribute('class', type);
  newdiv.setAttribute('id', id);
  game.appendChild(newdiv);
  return {
    id,
    newdiv,
  };
}

function pegFactory(id, indexOnPeg, pegNumber, type) {
  let newdiv = document.createElement('div');
  newdiv.setAttribute('class', 'peg');
  newdiv.setAttribute('id', id);
  let pegCenter = 300 * pegNumber + 60;
  let base = 400;
  let diskHeight = 200;
  newdiv.style.left = pegCenter + 'px';
  newdiv.style.width = '20px';
  newdiv.style.top = '200px';
  newdiv.style.height = '200px';
  game.appendChild(newdiv);
}

function initializeDisks(pegMap) {
  let disks = pegMap[pegArray[0]];
  diskArray = disks.map((diskid, indexOnPeg) => {
    return diskFactory(diskid, indexOnPeg, 0, 'disk');
  });
  pegArray.map((item, pegId) => {
    pegFactory(pegId, 0, pegId, 'peg');
  });
}

function makeMove() {
  var InputNum = Number(document.getElementById("InputNum").value)
console.log(InputNum)
  if (counter == 0) {
    var nDisks = InputNum;

    initialize(nDisks, pegMap);
    moveDisks(nDisks, 'A', 'C', 'B');
    initializeDisks(pegHist[0]);
  }
  if (counter < pegHist.length) {
    plotAll(pegHist[counter]);
  } else {
    alert('Tower is Finished');
  }
  counter++;
}
