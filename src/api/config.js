// api list structure
export const API = {
    // 일반사용자 > 로그인 (JWT 토큰 발급)
    signIn: 'auth/login',

    // 일반사용자 > 계정등록
    signUp: 'auth/register',
  
    // 일반사용자 > 대시보드 > 메인 > 기본 : 장비 목록 조회
    getDevices: 'dashboard/general-user/devices',

    // 일반사용자 > 대시보드 > 메인 > 기본 : 대여 신청하기
    requestEquipmentRental: (userId) => `dashboard/general-user/users/${userId}/rentals/request`,

    // 일반사용자 > 대시보드 > 앱바 > 내 정보 : 신청 내역 조회
    getRentalHistory: (userId) => `dashboard/general-user/users/${userId}/rentals/history`,
}