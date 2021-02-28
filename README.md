# Translator tool - honyak

This tool translates your localization file into whatever language you want to use! This aims to solve pains for developers to localize many files :sparkles:. 

## How to use

```shell script
$ npm i -g honyak
$ export GOOGLE_APPLICATION_CREDENTIALS=/path/to/service-account.json
$ honyak -i YOUR_FILE_PATH -l ja
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
$ honyak -i example/en.json -l vi
```

## Note

The current version is not supporting nested objects for both JSON and YAML formats.
