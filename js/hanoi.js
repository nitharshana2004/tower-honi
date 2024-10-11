const writeAll = (pegMap) => {
    let s = JSON.stringify(pegMap);
    console.log(s);
    pegHist.push(JSON.parse(s));
  };
  
  const pegHist = [];
  const pegMap = {
    A: [],
    B: [],
    C: [],
  };
  const pegArray = ['A', 'B', 'C'];
  
  const updateMapAndPlot = (pegMap, from, to) => {
    try {
      let theDisk = pegMap[from].pop();
      pegMap[to].push(theDisk);
      writeAll(pegMap);
    } catch (e) {
      console.log('no disk in Map');
    }
  };
  let moves = 0;
  
  const moveDisks = function (n, from, to, spare) {
    if (n === 1) {
      updateMapAndPlot(pegMap, from, to);
      moves++;
    } else {
      moveDisks(n - 1, from, spare, to);
      updateMapAndPlot(pegMap, from, to);
      moves++;
      moveDisks(n - 1, spare, to, from);
    }
  };
  const missing = (from, to) => {
    const all = {
      A: 1,
      B: 2,
      C: 3,
    };
    let total = all[from] + all[to];
    let miss = 5 - total; 
    let keys = Object.keys(all);
    return keys[miss];
  };
  
  const initialize = (nDisks, pegMap) => {
    for (let i = nDisks; i >= 1; i--) {
      pegMap['A'].push(i); 
    }
    writeAll(pegMap);
  };
  