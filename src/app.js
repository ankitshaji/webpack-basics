//user-created clientside js webApi library - js script file

const alertServiceInstObj = new AlertService();
const componentServiceInstObj = new ComponentService();

//returns void/undefined
const runFunctionObject = (alertServiceInstObj, componentServiceInstObj) => {
  alertServiceInstObj.hideError();

  componentServiceInstObj.onClick(() => {
    alertServiceInstObj.hideError();
    const inputsAnyInstObjArrayInstObj = componentServiceInstObj.getInputs();
    //parseInputsFunctionObject execution
    const parsedInputsNumberInstObjArrayInstObj = parseInputsFunctionObject(
      inputsAnyInstObjArrayInstObj
    );
    //inputsAreValidFunctionObject execution
    if (
      inputsAreValidFunctionObject(...parsedInputsNumberInstObjArrayInstObj)
    ) {
      const [numANumberInstObj, numBNumberInstObj] =
        parsedInputsNumberInstObjArrayInstObj;
      componentServiceInstObj.setResult(numANumberInstObj + numBNumberInstObj);
    } else {
      componentServiceInstObj.setResult("");
      alertServiceInstObj.handleAdditionError(
        inputsAnyInstObjArrayInstObj,
        parsedInputsNumberInstObjArrayInstObj
      );
    }
  });
};

///runFunctionObject execution
runFunctionObject(alertServiceInstObj, componentServiceInstObj);
