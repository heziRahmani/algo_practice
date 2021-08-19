import { isEqual } from "lodash";

import { getLetterCount } from "./letter-count";

export const checkForEnegram = (string1, string2) => {
  const s1 = string1.split("");
  const s2 = string2.split("");
  if ((s1.length === 0 && s2.length === 0) || s1.length != s2.length) {
    return false;
  }

  return (
    s1.every((letter) => s2.includes(letter)) &&
    s2.every((letter) => s1.includes(letter))
  );
};



//cleaner way
export const isAnagram = (string1, string2) => {
  const s1 = getLetterCount(string1);
  const s2 = getLetterCount(string2);

  return isEqual(s1, s2);
};


