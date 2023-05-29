//user-created clientside js parse-inputsWebApi library - js module file

//returns numberInstObjArrayInstObj
export default (inputsAnyInstObjArrayInstObj) => {
  return inputsAnyInstObjArrayInstObj.map((strAnyInstObj) =>
    parseInt(strAnyInstObj)
  );
};
