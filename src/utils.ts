export const GetApiUrl = () => {
  const isProd = process.env.NODE_ENV === "production";

  if (isProd) {
    if (window.location.hostname === "runwaylogic.netlify.app") {
      return "https://server-production-c80e.up.railway.app";
    }
  } else {
    return "http://localhost:3000";
  }
};
