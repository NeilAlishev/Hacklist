const Environments = {
  production:  {BASE_URL: '', API_KEY: ''},
  development: {
    BASE_URL: '',

    githubOAuth: 'https://github.com/login/oauth/authorize?client_id=&',
    vkOAuth: 'https://oauth.vk.com/authorize?client_id=&redirect_uri=http://your_ip_here:8080/api/oauth/vk&response_type=code&v=5.62&'
  }
}

export default Environments.development
