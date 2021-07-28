import "regenerator-runtime/runtime";
import { check, fail } from 'k6';

// Importa as funcoes auxiliares
import helperFunction1 from './core/helpers/helper_1';
import setHeader from './core/helpers/helper_1';

// Importa e inicia o Services One
import ServicesOne from './core/services/service_one';
const servicesOne = new ServicesOne();


import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
import { textSummary } from "https://jslib.k6.io/k6-summary/0.0.1/index.js";


export default function () {

  const myResult =  servicesOne.myAwesomeRequest('myAwesomeToken');

  if(!check(myResult, { 'status was 200': (r) => r.status == 200 })){
    fail('status code was *not* 200, was ' + myResult.status);
  }; 
  
  //const extractValue = JSON.parse(myResult['body'])[0]['sku'];
}


export function handleSummary(data) {
  return {
    "result_custom.html": htmlReport(data),
    stdout: textSummary(data, { indent: " ", enableColors: true }),
    "result.json": JSON.stringify(data)
  };
}




