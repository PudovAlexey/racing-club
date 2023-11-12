function makeTarget(env) {
    if (env === 'production') return 'browserslist'

    return 'web'
}

module.exports = {
    makeTarget
}