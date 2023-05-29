//user-created clientside js appWebApi library - js module file

import parseInputsFunctionObject from "./utils/parse-inputs"; //functionObeject //user-created clientside js parse-inputsWebApi library - js module file
import inputsAreValidFunctionObject from "./utils/inputs-are-valid"; //functionObeject //user-created clientside js inputs-are-validWebApi library - js module file

//returns void/undefined
export default (alertServiceInstObj, componentServiceInstObj) => {
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
