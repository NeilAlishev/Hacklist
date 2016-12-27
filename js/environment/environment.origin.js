const Environments = {
  production:  {BASE_URL: '', API_KEY: ''},
  development: {
    BASE_URL: '',

    githubClientId: '',
    githubSecret: '',
    githubOAuth: 'https://github.com/login/oauth/authorize?client_id=',
    githubToken: 'https://github.com/login/oauth/access_token'
  }
}

export default Environments.development
