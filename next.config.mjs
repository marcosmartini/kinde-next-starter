/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    KINDE_SITE_URL:
      process.env.KINDE_SITE_URL ?? process.env.VERCEL_ENV === "production"
        ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
        : `https://${process.env.VERCEL_URL}`,
    KINDE_POST_LOGOUT_REDIRECT_URL:
      process.env.KINDE_POST_LOGOUT_REDIRECT_URL ?? process.env.VERCEL_ENV === "production"
        ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
        : `https://${process.env.VERCEL_URL}`,
    KINDE_POST_LOGIN_REDIRECT_URL:
      process.env.KINDE_POST_LOGIN_REDIRECT_URL ?? process.env.VERCEL_ENV === "production"
        ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}/dashboard`
        : `https://${process.env.VERCEL_URL}/dashboard`,
  },
};

export default nextConfig;
