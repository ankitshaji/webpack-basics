//user-created clientside js inputs-are-validWebApi library - js module file

//Note - spread operator on a parameter variable to convert single numberInstObj to numberInstObjArrayInstObj,
//since it does the opposite of what it usually does when put on a parameter variable
//returns booleanInstObj
export default (...inputsNumberInstObjArrayInstObj) => {
  return inputsNumberInstObjArrayInstObj.every(
    (numNumberInstObj) =>
      typeof numNumberInstObj === "number" && !window.isNaN(numNumberInstObj)
  );
};
