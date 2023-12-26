const reporter = require('cucumber-html-reporter');
const fs = require('fs');
const path = require('path');

const jsonDir = 'cypress/cucumber-json';
const jsonFiles = fs.readdirSync(jsonDir)
  .filter(file => file.endsWith('.json'))
  .map(file => path.join(jsonDir, file));

// Se não houver arquivos JSON, lance um erro ou saia do script.
if (jsonFiles.length === 0) {
  console.error('No JSON files found in the directory:', jsonDir);
  process.exit(1);
}

var today = new Date();
var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
var time = today.getHours() + "h" + today.getMinutes() + "m" + today.getSeconds() + "s";
var dateTime = date+'_'+time;

var options = {
  theme: 'bootstrap',
  jsonDir: jsonDir, // Usar jsonDir ao invés de jsonFile para especificar a pasta
  output: "cypress/reports/report_"+dateTime+".html",
  reportSuiteAsScenarios: true,
  scenarioTimestamp: true,
  launchReport: true,
  metadata: {
    "Test Environment": "PROD",
    "Browser": "Electron  114",
    "Platform": "Windows 11",
    "Executed": "Local"
  }
};

reporter.generate(options);
