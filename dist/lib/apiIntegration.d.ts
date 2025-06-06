export class LaunchDarkly_API {
    constructor(apiKey?: string);
    url: string;
    headers: {
        'User-Agent': string;
        'Content-Type': string;
        Authorization: any;
    };
    headersPatch: {
        'User-Agent': string;
        'Content-Type': string;
        Authorization: any;
    };
    getContextAttributeNames(projectKey: any, environmentKey: any, additionalFilters?: string): Promise<any>;
    getListEnvironments(projectKey: any, additionalFilters?: string): Promise<any>;
    getListFeatureFlags(projectKey: any, additionalFilters?: string): Promise<any>;
    getContexts(projectKey: any, environmentKey: any, kind: any, key: any, additionalFilters?: string): Promise<any>;
    postSearchForContexts(projectKey: any, environmentKey: any, jsonBody: any, additionalFilters?: string): Promise<any>;
    patchUpdateFeatureFlag(projectKey: any, featureFlagKey: any, jsonBody: any, additionalFilters?: string): Promise<any>;
    postEvaluateFlagsForContextInstance(projectKey: any, environmentKey: any, jsonBody: any, additionalFilters?: string): Promise<any>;
}
//# sourceMappingURL=apiIntegration.d.ts.map