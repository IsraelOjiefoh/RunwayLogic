export const GetApiUrl = () => {
  const isProd = process.env.NODE_ENV === "production";
  const isStaging = process.env.NODE_ENV === "staging"; // Check for staging environment

  if (isProd) {
    if (window.location.hostname === "runwaylogic.netlify.app") {
      return "https://server-production-c80e.up.railway.app";
    }
  } else if (isStaging) {
    if (window.location.hostname === "runwaylogic-staging.netlify.app") {
      return "https://server-staging-d0ff.up.railway.app";
    }
  } else {
    // Development environment
    return "http://localhost:3000";
  }
};
