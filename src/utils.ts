export const GetApiUrl = () => {
  if (window.location.hostname === "runwaylogic-staging.netlify.app") {
    return "https://server-staging-d0ff.up.railway.app";
  } else if (window.location.hostname === "runwaylogic.netlify.app") {
    return "https://server-production-c80e.up.railway.app";
  } else {
    return "http://localhost:3000";
  }
};
