import { performance } from 'perf_hooks';

const everyone = [
  'marlin',
  'dory',
  'gill',
  'bloat',
  'nemo',
  'bubbles',
  'peach',
  'gurgle',
  'deb',
  'jacques',
  'nigel',
];

const large = new Array(1000).fill('nemo');

function findNemo(array) {
  let t0 = performance.now();

  for (let i = 0; i < array.length; i++) {
    const element = array[i];

    if (element === 'nemo') {
      console.log('found nemo!');
    }
  }

  let t1 = performance.now();

  console.log('Call to findNemo took ' + (t1 - t0) + ' milliseconds');
}

findNemo(large);
