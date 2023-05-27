//user-created clientside js webApi library - js script file

//Note - spread operator on a parameter variable to convert single numberInstObj to numberInstObjArrayInstObj,
//since it does the opposite of what it usually does when put on a parameter variable
//returns booleanInstObj
const inputsAreValidFunctionObject = (...inputsNumberInstObjArrayInstObj) => {
  return inputsNumberInstObjArrayInstObj.every(
    (numNumberInstObj) =>
      typeof numNumberInstObj === "number" && !window.isNaN(numNumberInstObj)
  );
};
