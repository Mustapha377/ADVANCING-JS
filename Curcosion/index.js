function printNumber(number) {
  if (number >= 10) return;

  console.log(number);
  printNumber(number + 1);
  console.log("existing loop");
}

printNumber(1);
console.log("end's here!");

/*an exersies to loop thorough the person 
 object an get all the friends names 
 - but with curcosion not loop*/

const person = {
  name: "kyle",
  friend: {
    name: "joe",
    friend: {
      name: "sally",
    },
  },
};

// let currentPerson = person;
// while (currentPerson != null) {
//   console.log(currentPerson.name);
//   currentPerson = currentPerson.friend;
// }

function printPerson(currentPerson) {
  if (currentPerson == null) return;
  console.log(currentPerson.name);
  printPerson(currentPerson.friend);
}

printPerson(person);
