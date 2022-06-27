const array = [1, 53, 62, 20, 60];

let max = array[0];
let SecondMax = 0;

for(let i = 1; i < array.length; i++) {
	if(array[i] > max) {
    SecondMax = max;
    max = array[i];  
    }
  else if (array[i] !== max && array[i] > SecondMax) {
  SecondMax = array[i];
  }
};

return SecondMax;
