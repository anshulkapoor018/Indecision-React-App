var nameVar = 'Anshul';
var nameVar = 'Kapoor';
console.log('nameVar', nameVar);

let nameLet = 'Akshay';
nameLet = 'Ashwini';
console.log('nameLet', nameLet);

const nameConst = 'Rohan';
console.log('nameConst', nameConst);

// Block scoping

const fullName = 'Anshul Kapoor';
let firstName;

if (fullName) {
  firstName = fullName.split(' ')[0];
  console.log(firstName);
}

console.log(firstName);
