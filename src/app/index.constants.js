
export default function () {
  return {
    ENV: {
      /*startEnvInject*/
      'env': 'live',
    'url': 'https://prod.com/v1/',
    'socket_url': 'https://prod.com',
    'dashboard_url': 'https://prod.com/#/redirect/token'
      /*endEnvInject*/
    }
  }
}