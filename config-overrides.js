const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');
const rewireMobx = require('react-app-rewire-mobx');

module.exports = function override(config, env) {
    config = rewireMobx(config, env);

    config = injectBabelPlugin(['import', { 
        libraryName: 'antd', 
        libraryDirectory: 'es', 
        style: true 
    }], config);

    config = rewireLess.withLoaderOptions({
        modifyVars: { "@primary-color": "#1DA57A" },
    })(config, env);

    return config;
};