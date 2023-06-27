function spinalCase(str) {
    return str.split(/(?=[A-Z])|[^A-Za-z0-9]/).join('-').toLowerCase();
  }

  //TESTS

//   spinalCase("This Is Spinal Tap") should return the string this-is-spinal-tap.
// Passed:spinalCase("thisIsSpinalTap") should return the string this-is-spinal-tap.
// Passed:spinalCase("The_Andy_Griffith_Show") should return the string the-andy-griffith-show.
// Passed:spinalCase("Teletubbies say Eh-oh") should return the string teletubbies-say-eh-oh.
// Passed:spinalCase("AllThe-small Things") should return the string all-the-small-things.