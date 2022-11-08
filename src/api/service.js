import axios from 'axios'
import VueCookies from 'vue-cookies'

// 프로젝트 설정에 맞게, 기본적인 정보를 넣어주세요
const service = axios.create({
  baseURL: 'http://localhost:9090/',
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

    const accessToken = VueCookies.get('accessToken')
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
    console.log('----- service.interceptors.response');
    console.log('----- config', config);
    console.log('----- service.interceptors.response');
  
    // if u add new Chainable promise or other interceptor
    // You have to return `config` inside of a rquest
    // otherwise u will get a very confusing error
    // and spend sometime to debug it.
    return config;
  }, function(error) {
    return Promise.reject(error);
  })

function printError(e) {
    console.log(e)
}

// 각 메소드별 함수를 생성해 주세요.
export default {
  async get(...options) {
    try {
      const res = await service.get(...options)
      return res
    } catch (e) {
      return printError(e)
    }
  },

  async post(...options) {
    // 공통
    try {
        const res = await service.post(...options)
        return res
    } catch (e) {
        return printError(e)
    }
  },

  async put(...options) {
    // 공통
    try {
        const res = await service.put(...options)
        return res
    } catch (e) {
        return printError(e)
    }
  },

  async delete(...options) {
    // 공통
    try {
        const res = await service.delete(...options)
        return res
    } catch (e) {
        return printError(e)
    }
  },
}