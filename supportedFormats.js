const FORMATS = {
  json: "json",
  yaml: "yaml",
  unknown: "unknown",
};

const checkFormat = (name) => {
  return name.endsWith(".json") ? FORMATS.json : name.endsWith(".yaml") ? FORMATS.yaml : name.endsWith(".yml") ? FORMATS.yaml : FORMATS.unknown;
};

module.exports = {
  FORMATS,
  checkFormat,
};
