import axios from 'axios'
// import VueCookies from 'vue-cookies'

// 프로젝트 설정에 맞게, 기본적인 정보를 넣어주세요
const service = axios.create({
  //baseURL: 'http://localhost:9090/', // local
  baseURL: 'https://cc637a0d-ed0c-4cc6-a1b7-e421613ec154.mock.pstmn.io/', // mockup
  timeout: '10000',
  withCredentials: false
})
  
// axios 요청 시 필요한 정보를 넣어주세요
service.interceptors.request.use((config) => {
    // config.headers = {}
    // const CancelToken = axios.CancelToken;
    // return {
    //     ...config,
    //     cancelToken: new CancelToken((cancel) => cancel('Cancel repeated request'))
    //   }
    // }

    console.log('service.interceptors.request config', config)

    // const accessToken = VueCookies.get('accessToken')
    const accessToken = localStorage.getItem('access_token')

    console.log('axios request accessToken', accessToken)

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`
    }

      // if (localStorage.getItem('profile')) {
      //     config.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
      // }
    return config
  }
)

// 응답에 필요한 처리를 넣어주세요.
service.interceptors.response.use(function(config) {
  // 요청을 보내기 전에 수행할 일
  console.log('----- service.interceptors.response');
  console.log('----- config', config);
  console.log('----- service.interceptors.response');

  // if u add new Chainable promise or other interceptor
  // You have to return `config` inside of a rquest
  // otherwise u will get a very confusing error
  // and spend sometime to debug it.
  return config;
}, function(error) {
  // 오류 요청을 보내기전 수행할 일
  return Promise.reject(error);
})

// 각 메소드별 함수를 생성해 주세요.
export default {
  async get(...options) {
    try {
      const res = await service.get(...options)
      console.log('async get', res)

      console.log('async get res.code', res.code)
      console.log('async get res.data', res.data)

      return res.data
    } catch (e) {
      console.log('async get', e)
      return e.response.data
    }
  },

  async post(...options) {
    // 공통
    try {
        const res = await service.post(...options)
        console.log('async post', res)
        return res.data
    } catch (e) {
        console.log('async post', e)
        return e.response.data
    }
  },

  async put(...options) {
    // 공통
    try {
        const res = await service.put(...options)
        console.log('async put', res)
        return res.data
    } catch (e) {
        console.log('async put', e)
        return e.response.data
    }
  },

  async delete(...options) {
    // 공통
    try {
        const res = await service.delete(...options)
        console.log('async delete', res)
        return res.data
    } catch (e) {
        console.log('async delete', e)
        return e.response.data
    }
  },
}