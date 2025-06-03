var { get, post, patch, downloadV2 } = require('qansigliere-axios-utils');

class LaunchDarkly_API {
    constructor(apiKey = '') {
        this.url = 'https://app.launchdarkly.com/api/v2';
        this.headers = {
            'User-Agent': 'QANSIGLIERE',
            'Content-Type': 'application/json',
            Authorization: apiKey ? apiKey : process.env.LAUNCHDARKLY_API_TOKEN,
        };

        this.headersPatch = {
            'User-Agent': 'QANSIGLIERE',
            'Content-Type': 'application/json; domain-model=launchdarkly.semanticpatch',
            Authorization: apiKey ? apiKey : process.env.LAUNCHDARKLY_API_TOKEN,
        };
    }

    async getContextAttributeNames(projectKey, environmentKey, additionalFilters = '') {
        return await downloadV2(
            this.url,
            `projects/${projectKey}/environments/${environmentKey}/context-attributes${
                additionalFilters ? `?${additionalFilters}` : ''
            }`,
            this.headers,
            'launchdarkly',
        );
    }

    async getListEnvironments(projectKey, additionalFilters = '') {
        return await downloadV2(
            this.url,
            `projects/${projectKey}/environments${additionalFilters ? `?${additionalFilters}` : ''}`,
            this.headers,
            'launchdarkly',
        );
    }

    async getListFeatureFlags(projectKey, additionalFilters = '') {
        return await downloadV2(
            this.url,
            `flags/${projectKey}${additionalFilters ? `?${additionalFilters}` : ''}`,
            this.headers,
            'launchdarkly',
        );
    }

    async getContexts(projectKey, environmentKey, kind, key, additionalFilters = '') {
        return await downloadV2(
            this.url,
            `projects/${projectKey}/environments/${environmentKey}/contexts/${kind}/${key}${
                additionalFilters ? `?${additionalFilters}` : ''
            }`,
            this.headers,
            'launchdarkly',
        );
    }

    async postSearchForContexts(projectKey, environmentKey, jsonBody, additionalFilters = '') {
        return await post(
            this.url,
            `projects/${projectKey}/environments/${environmentKey}/contexts/search${
                additionalFilters ? `?${additionalFilters}` : ''
            }`,
            jsonBody,
            this.headers,
            true,
        );
    }

    async patchUpdateFeatureFlag(projectKey, featureFlagKey, jsonBody, additionalFilters = '') {
        return await patch(
            this.url,
            `flags/${projectKey}/${featureFlagKey}${additionalFilters ? `?${additionalFilters}` : ''}`,
            jsonBody,
            this.headersPatch,
            true,
        );
    }
}

module.exports.LaunchDarkly_API = LaunchDarkly_API;
