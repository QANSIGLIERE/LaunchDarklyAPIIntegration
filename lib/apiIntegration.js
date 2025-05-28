var { get, downloadV2 } = require("qansigliere-axios-utils");

class LaunchDarkly_API {
  constructor(apiKey = "") {
    this.url = "https://app.launchdarkly.com/api/v2/";
    this.headers = {
      "User-Agent": "QANSIGLIERE",
      Accept: "application/json; domain-model=launchdarkly.semanticpatch",
      Authorization: apiKey ? apiKey : process.env.LAUNCHDARKLY_API_TOKEN,
    };
  }

  async getContextAttributeNames(
    projectKey,
    environmentKey,
    additionalFilters = ""
  ) {
    return await get(
      this.url,
      `projects/${projectKey}/environments/${environmentKey}/context-attributes${
        additionalFilters ? `?${additionalFilters}` : ""
      }`,
      this.headers,
      "git"
    );
  }

  async getListEnvironments(projectKey, additionalFilters = "") {
    return await get(
      this.url,
      `projects/${projectKey}/environments${
        additionalFilters ? `?${additionalFilters}` : ""
      }`,
      this.headers,
      "git"
    );
  }
}

module.exports.LaunchDarkly_API = LaunchDarkly_API;
