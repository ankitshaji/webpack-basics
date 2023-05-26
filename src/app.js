//user-created clientside js webApi library - js script file

const numberOneHTMLInputElementInstObj =
  window.document.getElementById("numberone");
const numberTwoHTMLInputElementInstObj =
  window.document.getElementById("numbertwo");
const addValuesHTMLButtonElementInstObj =
  window.document.getElementById("addvalues");
const resultHTMLSpanElementInstObj = window.document.getElementById("result");
const errorBoxHTMLDivElementInstObj =
  window.document.getElementById("errorbox");

//returns numberInstObjArrayInstObj
const parseInputsFunctionObject = (inputsAnyInstObjArrayInstObj) => {
  return inputsAnyInstObjArrayInstObj.map((strAnyInstObj) =>
    parseInt(strAnyInstObj)
  );
};

//Note - spread operator on a parameter variable to convert single numberInstObj to numberInstObjArrayInstObj,
//since it does the opposite of what it usually does when put on a parameter variable
//returns booleanInstObj
const inputsAreValidFunctionObject = (...inputsNumberInstObjArrayInstObj) => {
  return inputsNumberInstObjArrayInstObj.every(
    (numNumberInstObj) =>
      typeof numNumberInstObj === "number" && !window.isNaN(numNumberInstObj)
  );
};

//returns void/undefined
const handleAdditionErrorFunctionObject = (
  inputsAnyInstObjArrayInstObj,
  numbersNumberInstObjArrayInstObj
) => {
  const finalMessageStringInstObj = inputsAnyInstObjArrayInstObj.reduce(
    (messageStringInstObj, valueAnyInstObj, indexNumberInstObj) => {
      if (
        inputsAreValidFunctionObject(
          numbersNumberInstObjArrayInstObj[indexNumberInstObj]
        )
      ) {
        return messageStringInstObj + "";
      } else {
        return messageStringInstObj + `${valueAnyInstObj} is not a number. `;
      }
    },
    "Please enter two valid numbers. "
  );
  errorBoxHTMLDivElementInstObj.classList.remove("invisible");
  errorBoxHTMLDivElementInstObj.innerText = finalMessageStringInstObj;
};

//returns void/undefined
const hideErrorsFunctionObject = () => {
  errorBoxHTMLDivElementInstObj.classList.add("invisible");
};

//hideErrorsFunctionObject execution
hideErrorsFunctionObject();

//note - fake async webApi method
addValuesHTMLButtonElementInstObj.addEventListener("click", () => {
  //hideErrorsFunctionObject execution
  hideErrorsFunctionObject();
  const inputsAnyInstObjArrayInstObj = [
    numberOneHTMLInputElementInstObj.value,
    numberTwoHTMLInputElementInstObj.value,
  ];
  //parseInputsFunctionObject execution
  const parsedInputsNumberInstObjArrayInstObj = parseInputsFunctionObject(
    inputsAnyInstObjArrayInstObj
  );
  //inputsAreValidFunctionObject execution
  if (inputsAreValidFunctionObject(...parsedInputsNumberInstObjArrayInstObj)) {
    const [numANumberInstObj, numBNumberInstObj] =
      parsedInputsNumberInstObjArrayInstObj;
    resultHTMLSpanElementInstObj.innerText =
      numANumberInstObj + numBNumberInstObj;
  } else {
    resultHTMLSpanElementInstObj.innerText = "";
    //handleAdditionErrorFunctionObject execution
    handleAdditionErrorFunctionObject(
      inputsAnyInstObjArrayInstObj,
      parsedInputsNumberInstObjArrayInstObj
    );
  }
});
