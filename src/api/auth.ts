import { request, setToken } from './client';

export { setToken } from './client';

export interface AuthUser {
  id: string;
  email: string;
  firstName: string | null;
  lastName: string | null;
  userName: string;
  role: string;
}

export interface VerifyOtpResponse {
  user: AuthUser;
  token: string;
}

/** intent: 'login' = only send if user exists; 'signup' = only send if user does not exist */
export function sendOtp(email: string, intent?: 'login' | 'signup'): Promise<{ message: string }> {
  return request('/auth/send-otp', {
    method: 'POST',
    body: { email: email.trim().toLowerCase(), ...(intent && { intent }) },
  });
}

export function verifyOtp(params: {
  email: string;
  otp: string;
  firstName?: string;
  lastName?: string;
}): Promise<VerifyOtpResponse> {
  const { email, otp, firstName, lastName } = params;
  return request<VerifyOtpResponse>('/auth/verify-otp', {
    method: 'POST',
    body: {
      email: email.trim().toLowerCase(),
      otp: otp.trim(),
      ...(firstName !== undefined && { firstName }),
      ...(lastName !== undefined && { lastName }),
    },
  }).then((res) => {
    setToken(res.token);
    return res;
  });
}

export function getMe(): Promise<{ user: AuthUser }> {
  return request('/auth/me');
}

export function clearAuthToken(): void {
  setToken(null);
}
