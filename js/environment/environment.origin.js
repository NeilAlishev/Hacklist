const Environments = {
  production: {
    BASE_URL: 'http://prod_ip_here:8080',

    githubOAuth: 'https://github.com/login/oauth/authorize?client_id=&',
    vkOAuth: 'https://oauth.vk.com/authorize?client_id=&redirect_uri=BASE_URL/api/oauth/vk&response_type=code&v=5.62&'
  },
  development: {
    BASE_URL: 'http://your_ip_here:8080',

    githubOAuth: 'https://github.com/login/oauth/authorize?client_id=&',
    vkOAuth: 'https://oauth.vk.com/authorize?client_id=&redirect_uri=BASE_URL/api/oauth/vk&response_type=code&v=5.62&'
  }
}

export default Environments.{development/production}
