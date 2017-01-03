const Environments = {
  production:  {BASE_URL: '', API_KEY: ''},
  development: {
    BASE_URL: '',

    githubClientId: '',
    githubSecret: '',
    githubOAuth: 'https://github.com/login/oauth/authorize?client_id=',
    githubToken: 'https://github.com/login/oauth/access_token'

    vkOAuth: 'https://oauth.vk.com/authorize?client_id=&redirect_uri=&response_type=code&v=5.60',
    vkToken: 'https://oauth.vk.com/access_token?client_id=&client_secret=&redirect_uri=&code='
  }
}

export default Environments.development
