const { bootstrap } = require("@kaholo/plugin-library");
const { readFile } = require("fs/promises");
const { resolve } = require("path");

async function parseJsonHTML(params) {
  const {
    filePath,
  } = params;

  const absoluteFilePath = resolve(filePath);

  const fileContent = await readFile(
    absoluteFilePath,
    {
      encoding: "utf-8",
      flag: "r",
    },
  );

  return JSON.parse(fileContent);
}

async function parseJsonHTML(params) {
  const {
    filePath,
  } = params;

  const absoluteFilePath = resolve(filePath);

  const fileContent = await readFile(
    absoluteFilePath,
    {
      encoding: "utf-8",
      flag: "r",
    },
  );

  return ` 
  <!DOCTYPE html>
  <html>
  <body>
  <h2> Kaholo SonarQube Report </h2>
  
  
  `
  
  
}


/** 
async function writeJsonFile(params) {
  const {
    filePath,
    json, // parserType:object validates that for us
  } = params;

  const absoluteFilePath = resolve(filePath);
  const jsonString = JSON.stringify(json);

  await writeFile(
    absoluteFilePath,
    jsonString,
    { encoding: "utf-8" },
  );
}
*/
module.exports = bootstrap({
  parseJsonHTML
});
