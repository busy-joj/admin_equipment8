const methods = {
    console_log(str) {
        console.log('[common.js]', str)
    },

    /**
     * Decode JWT (without using a library)
     *
     * @param {String} token 인코딩된 JWT 토큰
     * @returns 디코딩된 객체
     */
    parseJwt (token) {
        console.log('[common.js][parseJwt]', token)
        var base64Url = token.split('.')[1]
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
        var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
        }).join(''))

        return JSON.parse(jsonPayload)
    },

    /**
     * Gets Date Formatted As yyyy-MM-dd
     *
     * @param {Date} date Date 형식 날짜값
     * @returns yyyy-MM-dd
     */
    formatDate(date) {
        console.log('[common.js][formatDate]', date)
        const tzOffset = date.getTimezoneOffset() * 60 * 1000
        return new Date(date - tzOffset).toISOString().split('T')[0]
    }
}

export default {
    install(Vue) {
        Vue.config.globalProperties.$log = methods.console_log
        Vue.config.globalProperties.$parseJwt = methods.parseJwt
        Vue.config.globalProperties.$formatDate = methods.formatDate
    }
}