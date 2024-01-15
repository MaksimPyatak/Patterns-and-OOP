const user = {
  fullName: {
    firstName: 'Max',
    lastName: 'Piatak',
  },
  address: {
    country: 'Ukraine',
    city: 'Malin',
  },
};

function getValue<T, L1 extends keyof T, L2 extends keyof T[L1]>(
  obj: T,
  l1: L1,
  l2: L2
): T[L1][L2] {
  return obj[l1][l2];
}

const userName = getValue(user, 'fullName', 'firstName');
console.log(userName);
