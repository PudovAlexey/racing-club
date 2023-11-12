function makePlugins(env) {
    const plugins = [];

    if (env === 'development') {
        plugins.push('react-refresh/babel');
    }

    return plugins
}

module.exports = {
    makePlugins
}