//auth routes 
const SIGN_IN_URL: string = '/auth/sign-in';
const SIGN_UP_URL: string = '/auth/sign-up';
const VERIFY_OTP_URL: string = '/auth/verify-otp'
const FORGET_PASSWORD_URL: string = '/auth/forget-password'


// dashboard routes
const DASHBOARD_URL: string = '/dashboard'
const PROFILE_COMPLETION_URL: string = `${DASHBOARD_URL}/profile-completion`

//dashboard service request routes
const SERVICE_REQUEST_URL: string = `${DASHBOARD_URL}/service-request`
const MOBILE_SERVICE_REQUEST_URL: string = `${SERVICE_REQUEST_URL}/mobile`
const ICT_SERVICE_REQUEST_URL: string = `${SERVICE_REQUEST_URL}/ict`
const FIXED_SERVICE_REQUEST_URL: string = `${SERVICE_REQUEST_URL}/fixed`
const CONVERGED_SERVICE_REQUEST_URL: string = `${SERVICE_REQUEST_URL}/converged`



export {
  CONVERGED_SERVICE_REQUEST_URL, DASHBOARD_URL, FIXED_SERVICE_REQUEST_URL, FORGET_PASSWORD_URL, ICT_SERVICE_REQUEST_URL, MOBILE_SERVICE_REQUEST_URL, PROFILE_COMPLETION_URL, SERVICE_REQUEST_URL, SIGN_IN_URL,
  SIGN_UP_URL,
  VERIFY_OTP_URL
};

