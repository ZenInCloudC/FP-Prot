exports.config = {
 directConnect: true,
  capabilities: {
    'browserName': 'chrome'
  },

    
   // seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ["spec.js"],
    allScriptsTimeout: 200000,
    getPageTimeout: 30000,
    framework: 'jasmine',
    jasmineNodeOpts: {
      isVerbose: false,
      showColors: true,
      includeStackTrace: true,
      defaultTimeoutInterval: 100000
    }
  };