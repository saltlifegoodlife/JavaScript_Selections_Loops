for (let i = 1; i <= 100; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
  continue;
}

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(`${i}: FIZZBUZZ`);
  } else if (i % 3 === 0) {
    console.log(`${i}: FIZZ`);
  } else if (i % 5 === 0) {
    console.log(`${i}: BUZZ`);
  } else {
  }
}

let i = 1;
while (i <= 100) {
  if (i % 2 !== 0) {
    console.log(i);
  }
  i++;
}
i = 1;

while (i <= 100) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(`${i}: FIZZBUZZ`);
  } else if (i % 3 === 0) {
    console.log(`${i}: FIZZ`);
  } else if (i % 5 === 0) {
    console.log(`${i}: BUZZ`);
  } else {
  }
  i++;
}
i = 1;

do {
  if (i % 2 !== 0) {
    console.log(i);
  }
  i++;
} while (i <= 100);
i = 1;

do {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(`${i}: FIZZBUZZ`);
  } else if (i % 3 === 0) {
    console.log(`${i}: FIZZ`);
  } else if (i % 5 === 0) {
    console.log(`${i}: BUZZ`);
  } else {
  }
  i++;
} while (i <= 100);
