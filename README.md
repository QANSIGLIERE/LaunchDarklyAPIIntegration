# LaunchDarkly API Integration

The main idea of ​​this library created in the JavaScript language is to provide a ready-made set of API methods for integration with LaunchDarkly

## Author

https://www.youtube.com/@QANSIGLIERE/

## Support the project

https://buymeacoffee.com/qansigliere

## Installation

Using npm `npm i qansigliere-launchdarkly-api-integration`

## How to use it

### Create a \*.env file

Create any \*.env file (like `launchdarkly.env`) and write the following information in the created file

```
export LAUNCHDARKLY_API_TOKEN="__YOUR_APIKEY__"
```

### Make the \*.env file works

Just run in the terminal the following command: `source github.env`

### Contexts

#### Get information about Context Attribute Names

```
  let newIntegration = new LaunchDarkly_API();
  let request = await newIntegration.getContextAttributeNames(
    "demo",
    "development"
  );
```

### Environments

#### Get information about List Environments

```
  let newIntegration = new LaunchDarkly_API();
  let request = await newIntegration.getListEnvironments("demo");
```

## Improvements & Suggestions

https://forms.gle/GZbS9hw42tSYJxKL7

## Related Videos
