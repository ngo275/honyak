const {Translate} = require('@google-cloud/translate').v2;
const fs = require('fs');
const yaml = require('js-yaml');
const argv = require('minimist')(process.argv.slice(2));
const { checkFormat, FORMATS } = require("./supportedFormats");

const inputFilePath = argv["i"] || argv["input"];

if (!inputFilePath) {
  console.error("Please pass an input file path.");
  return;
}
const format = checkFormat(inputFilePath);
if (format === FORMATS.unknown) {
  console.error("This tool supports only json and yaml.");
  return;
}

const outputFilePath = argv["o"] || argv["output"] || `output.${format}`;
const lang = argv["l"] || argv["lang"] || argv["language"] || "ja";

const fileContents = fs.readFileSync(inputFilePath);
let localizationData = {};
if (format === FORMATS.json) {
  localizationData = JSON.parse(fileContents);
} else if (format === FORMATS.yaml) {
  localizationData = yaml.load(fileContents);
}

const translate = new Translate();

async function translateText(text, target) {
  let [translations] = await translate.translate(text, target);
  translations = Array.isArray(translations) ? translations : [translations];
  return translations[0];
}

async function translateObject() {
  let translatedObject = localizationData;
  const target = lang;
  const keys = Object.keys(localizationData);
  await Promise.all(keys.map(async (key) => {
    translatedObject[key] = await translateText(localizationData[key], target);
  }));
  return translatedObject;
}

translateObject().then((object) => {
  if (format === FORMATS.json) {
    const data = JSON.stringify(object, null, 2);
    fs.writeFileSync(outputFilePath, data);
  } else if (format === FORMATS.yaml) {
    const data = yaml.dump(object);
    fs.writeFileSync(outputFilePath, data);
  }
  console.log("Translation completed!")
});
