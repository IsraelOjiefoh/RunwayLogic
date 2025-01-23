export const GetApiUrl = () => {
  console.log("Current hostname: ", window.location.hostname); // Log current hostname

  if (window.location.hostname === "runwaylogic-staging.netlify.app") {
    console.log("Staging detected");
    return "https://server-staging-d0ff.up.railway.app";
  } else if (window.location.hostname === "runwaylogic.netlify.app") {
    console.log("Production detected");
    return "https://server-production-c80e.up.railway.app";
  } else {
    console.log("Default (Localhost) detected");
    return "http://localhost:3000";
  }
};
