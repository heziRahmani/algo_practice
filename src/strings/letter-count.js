/*
function that returns a letter count of a string
excemple: "cat"=>{c:1,a:1,t:1}
*/

export const getLetterCount = (string) => {
  //   return null;//failing test
  //return {};//passing test stop adding code antil you make anuther filing test

  //secont instens of test = cheking the letters
  const letters = string.split("");
  console.log(letters);
  let letterCount = {};
  letters.forEach((letter) => {
    if (!letterCount[letter]) {
      letterCount[letter] = 1;
    } else if (letterCount[letter]) {
      letterCount[letter] += 1;
    }
  });

  return letterCount;
};
console.log("sdasd");