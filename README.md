# LaunchDarkly API Integration

The main idea of ​​this library created in the JavaScript language is to provide a ready-made set of API methods for
integration with LaunchDarkly

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

Just run in the terminal the following command: `source launchdarkly.env`

### Contexts

#### Context Attribute Names

The documentation is present [here](https://launchdarkly.com/docs/api/contexts/get-context-attribute-names)

```
  let newIntegration = new LaunchDarkly_API();
  let request = await newIntegration.getContextAttributeNames(
    "demo",
    "development"
  );
```

#### Contexts

The documentation is present [here](https://launchdarkly.com/docs/api/contexts/get-contexts)

```
  let newIntegration = new LaunchDarkly_API();
  let request = await newIntegration.getContexts(
    "demo",
    "development",
    "user",
    "1"
  );
```

#### Search for contexts

The documentation is present [here](https://launchdarkly.com/docs/api/contexts/search-contexts)

```
    let newIntegration = new LaunchDarkly_API();
    let request = await newIntegration.postSearchForContexts(
        'demo',
        'development',
        { filter: 'q equals "11156"', sort: '-ts' },
        'includeTotalCount=true',
    );
```

### Environments

#### List Environments

The documentation is present [here](https://launchdarkly.com/docs/api/environments/get-environments-by-project)

```
  let newIntegration = new LaunchDarkly_API();
  let request = await newIntegration.getListEnvironments("demo");
```

### Feature Flags

#### List Feature Flags

The documentation is present [here](https://launchdarkly.com/docs/api/feature-flags/get-feature-flags)

```
  let newIntegration = new LaunchDarkly_API();
  let request = await newIntegration.getListFeatureFlags("demo");
```

## Improvements & Suggestions

https://forms.gle/GZbS9hw42tSYJxKL7

## Related Videos
