export const SITE_NAME = "Abdul Hayy Khan";
export const SITE_TITLE = "Abdul Hayy Khan's Portfolio";
export const SITE_DESCRIPTION =
  "Portfolio for Abdul Hayy Khan, a BS AI student at DUET, featuring AI engineering, backend, and full-stack projects.";

export function getSiteUrl() {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (configuredUrl) {
    return configuredUrl.startsWith("http://") || configuredUrl.startsWith("https://")
      ? configuredUrl
      : `https://${configuredUrl}`;
  }

  const vercelUrl = process.env.VERCEL_URL?.trim();
  if (vercelUrl) {
    return `https://${vercelUrl}`;
  }

  return "http://localhost:3000";
}