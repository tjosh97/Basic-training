let text = "Howdvdkkmkke  enfjn grgnj";
const myArray = text.split("");
const count = {};

for (const element of myArray) {
  if (count[element]) {
    count[element] += 1;
  } else {
    count[element] = 1;
  }
}

console.log(count);
