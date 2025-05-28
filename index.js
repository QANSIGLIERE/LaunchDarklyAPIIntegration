var { LaunchDarkly_API } = require("./lib/apiIntegration");

// Remove me at the end
(async function API() {
  let newIntegration = new LaunchDarkly_API();
  let request = await newIntegration.getListEnvironments("edgewater");

  console.log(JSON.stringify(request));
})();

module.exports.LaunchDarkly_API = LaunchDarkly_API;
