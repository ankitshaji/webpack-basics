//user-created clientside js srcWebApi library/module/npm package - main file - js module file - webpack entry point
//main file - it is the entry point for this module in the invisible package.json,it gets passed in all the thirdparty/built-in/user-created
//serverside js webApi libraries/modules/npm packages and in this case, user-created clientside js webApi libraries - js module files and can export things if it
//wants to.

import runFunctionObject from "./app/app"; //functionObeject //user-created clientside js appWebApi library - js module file
import AlertService from "./app/AlertService"; //Class //user-created clientside js AlertServiceWebApi library - js module file
import ComponentService from "./app/ComponentService"; //Class //user-created clientside js ComponentServiceWebApi library - js module file
import _ from "lodash"; //functionObject //thirdparty serverside js lodashWebApi library/module/npm package
import "./style.scss"; //user-created clientside scss library (eg.style.scss file)
//import(/* webpackChunkName: "style" */ "./style.scss"); //realAsync/dynamic importFakeFunctionObject execution //user-created clientside scss library (eg.style.scss file)
import "./style.css"; //user-created clientside css library (eg.style.css file)

const alertServiceInstObj = new AlertService();
const componentServiceInstObj = new ComponentService();

///runFunctionObject execution
runFunctionObject(alertServiceInstObj, componentServiceInstObj);

//windowWebApiInstObj.lodashWebApiSyncObjMethod.syncObjMethod(numberInstObj,numberInstObj) execution
window.console.log(window._.add(1, 1));
