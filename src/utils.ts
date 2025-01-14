export const GetApiUrl = () => {
  const isProd = process.env.NODE_ENV === "production";

  if (isProd) {
    if (window.location.hostname === "runwaylogic.netlify.app") {
      return "https://server-auth-twxy.onrender.com";
    }
  } else {
    return "http://localhost:3000";
  }
};
