module.exports = function check(str, bracketsConfig) {
  
  if (str.length % 2 !== 0) {
    return false;
  }
  //
  let brArray = str.split('');
  let brackets = [];

  for (let i = 0; i < str.length; i++) {

    for (let j = 0; j < bracketsConfig.length; j++) {
      if (brArray[i] == bracketsConfig[j][1] && brackets[brackets.length - 1] == bracketsConfig[j][0]) {
        brackets.pop();
      } else if (brArray[i] == bracketsConfig[j][0]) {
        brackets.push(brArray[i]);
      }
    }
  }

  // true or false 

  if (brackets.length == 0) {
    return true;
  } else {
    return false;
  }

  
};