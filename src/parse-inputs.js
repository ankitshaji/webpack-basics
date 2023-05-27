//user-created clientside js webApi library - js script file

//returns numberInstObjArrayInstObj
const parseInputsFunctionObject = (inputsAnyInstObjArrayInstObj) => {
  return inputsAnyInstObjArrayInstObj.map((strAnyInstObj) =>
    parseInt(strAnyInstObj)
  );
};
