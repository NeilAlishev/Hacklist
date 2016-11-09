var _Environments = {
    production:  {BASE_URL: '', API_KEY: ''},
    development: {BASE_URL: 'http://192.168.0.6:8080', API_KEY: ''}
}

function getEnvironment() {
    return _Environments.development
}

var Environment = getEnvironment()
module.exports = Environment
