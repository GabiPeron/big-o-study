const boxes = ['a', 'b', 'c', 'd', 'e'];

let pair = [];
for (let i = 0; i < boxes.length; i++) {
  for (let j = 0; j < boxes.length; j++) {
    console.log(`Current pair is (${boxes[i]},${boxes[j]})`);
  }
}
