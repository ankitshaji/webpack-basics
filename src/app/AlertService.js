//user-created clientside js AlertServiceWebApi library - js module file

import inputsAreValidFunctionObject from "./utils/inputs-are-valid"; //functionObeject //user-created clientside js inputs-are-validWebApi library - js module file

//declaring AlertServiceClass blueprint/template
export default class AlertService {
  //creating an instance variable
  errorBoxHTMLDivElementInstObj;

  //creating the constructor method
  constructor() {
    //implicitly creates a literal jsObject ie(the instance jsObject) and store reference to it in a variable
    //this keyword uses execution scope but instead of windowObject it refer to the implicitly created/returned literal jsObject ie(instance jsObject)

    //initializing the instance variable
    this.errorBoxHTMLDivElementInstObj =
      window.document.getElementById("errorbox");

    //implicitly returns the variable that stores reference to the created literal jsObject(ie instance jsObject)
  }

  //creating an instance method - (kindof)
  //returns void/undefined
  handleAdditionError(
    inputsAnyInstObjArrayInstObj,
    numbersNumberInstObjArrayInstObj
  ) {
    const finalMessageStringInstObj = inputsAnyInstObjArrayInstObj.reduce(
      (messageStringInstObj, valueAnyInstObj, indexNumberInstObj) => {
        //inputsAreValidFunctionObject execution
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

    //this keyword uses execution scope but instead of windowObject it refer to the implicitly created/returned literal jsObject ie(instance jsObject)
    this.errorBoxHTMLDivElementInstObj.classList.remove("invisible");
    this.errorBoxHTMLDivElementInstObj.innerText = finalMessageStringInstObj;
  }

  //creating an instance method - (kindof)
  //returns void/undefined
  hideError() {
    //this keyword uses execution scope but instead of windowObject it refer to the implicitly created/returned literal jsObject ie(instance jsObject)
    this.errorBoxHTMLDivElementInstObj.classList.add("invisible");
  }
}
