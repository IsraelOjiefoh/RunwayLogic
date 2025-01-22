export const GetApiUrl = () => {
  const isProd = process.env.NODE_ENV === "production";
  const isStaging =
    window.location.hostname === "runwaylogic-staging.netlify.app"; // Check for staging using hostname

  if (isProd) {
    return "https://server-production-c80e.up.railway.app";
  } else if (isStaging) {
    return "https://server-staging-d0ff.up.railway.app";
  } else {
    return "http://localhost:3000";
  }
};
