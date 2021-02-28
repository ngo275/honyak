# Translator

This tool translates your file into whatever language you want to use! This aims to solve pains for developers to localize many texts :sparkles:. 

## How to use

```shell script
$ npm i -g translator
$ export GOOGLE_APPLICATION_CREDENTIALS=/path/to/service-account.json
$ translator start -i YOUR_FILE_PATH -l ja
```

Since this library leverages Google Translate API, this requires Google service account (`GOOGLE_APPLICATION_CREDENTIALS`).
Please refer to Google documentation regarding the service account key.
:link: [https://cloud.google.com/translate/docs/setup](https://cloud.google.com/translate/docs/setup).

### Options

- `-i`
  - __(Required)__ Input file path (`.json`, `.yaml`, `.yml` are supported).
- `-o`
  - (Optional) Output file path. Default is `output.json` or `output.yaml` depending on its input.
- `-l`
  - __(Required)__ Target language you want to use. e.g. `ja`, `vi`.
  
If you want to translate `./exmaple/en.json` to Vietnamese, then 

```shell script
$ translator start -i example/en.json -l vi
```

## Note

The current version is not supporting nested objects for both JSON and YAML formats.
