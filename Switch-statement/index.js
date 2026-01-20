const number = 3;

switch (number) {
  case 0:
    console.log("its zero");
    break;
  case 1:
  case 2:
    console.log("its small");
    break;
  case 3:
  case 4:
    console.log("its medium");
    break;
  case 5:
    console.log("its large number");
    break;
  default:
    console.log("try again");
}
