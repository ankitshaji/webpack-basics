//user-created clientside js webApi library - js script file

//declaring ComponentServiceClass blueprint/template
class ComponentService {
  //creating instance variables
  numberOneHTMLInputElementInstObj;
  numberTwoHTMLInputElementInstObj;
  addValuesHTMLButtonElementInstObj;
  resultHTMLSpanElementInstObj;

  //creating the constructor method
  constructor() {
    //implicitly creates a literal jsObject ie(the instance jsObject) and store reference to it in a variable
    //this keyword uses execution scope but instead of windowObject it refer to the implicitly created/returned literal jsObject ie(instance jsObject)

    //initializing instance variables
    this.numberOneHTMLInputElementInstObj =
      window.document.getElementById("numberone");
    this.numberTwoHTMLInputElementInstObj =
      window.document.getElementById("numbertwo");
    this.addValuesHTMLButtonElementInstObj =
      window.document.getElementById("addvalues");
    this.resultHTMLSpanElementInstObj =
      window.document.getElementById("result");

    //implicitly returns the variable that stores reference to the created literal jsObject(ie instance jsObject)
  }

  //creating an instance method - (kindof)
  //returns anyInstObjArrayInstObj
  getInputs() {
    //this keyword uses execution scope but instead of windowObject it refer to the implicitly created/returned literal jsObject ie(instance jsObject)
    return [
      this.numberOneHTMLInputElementInstObj.value,
      this.numberTwoHTMLInputElementInstObj.value,
    ];
  }

  //creating an instance method - (kindof)
  //returns void/undefined
  setResult(parVarAnyInstObj) {
    //this keyword uses execution scope but instead of windowObject it refer to the implicitly created/returned literal jsObject ie(instance jsObject)
    this.resultHTMLSpanElementInstObj.innerText = parVarAnyInstObj;
  }

  //creating an instance method - (kindof)
  //returns void/undefined
  onClick(syncCbFunExpDef) {
    //this keyword uses execution scope but instead of windowObject it refer to the implicitly created/returned literal jsObject ie(instance jsObject)
    //note - fake async webApi method
    this.addValuesHTMLButtonElementInstObj.addEventListener(
      "click",
      syncCbFunExpDef
    );
  }
}
