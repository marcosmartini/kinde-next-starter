/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    KINDE_SITE_URL:
      process.env.KINDE_SITE_URL ?? process.env.NEXT_PUBLIC_VERCEL_ENV === "production"
        ? `https://${process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL}`
        : `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`,
    KINDE_POST_LOGOUT_REDIRECT_URL:
      process.env.KINDE_POST_LOGOUT_REDIRECT_URL ?? process.env.NEXT_PUBLIC_VERCEL_ENV === "production"
        ? `https://${process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL}`
        : `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`,
    KINDE_POST_LOGIN_REDIRECT_URL:
      process.env.KINDE_POST_LOGIN_REDIRECT_URL ?? process.env.NEXT_PUBLIC_VERCEL_ENV === "production"
        ? `https://${process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL}/dashboard`
        : `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/dashboard`,
  },
};

export default nextConfig;
