const Cache = require("@11ty/eleventy-cache-assets");

module.exports = async function () {
  try {
    // https://benborgers.com/posts/google-sheets-json
    let donor = await Cache(
      "https://opensheet.elk.sh/1VTkUFJkoz3mEzkU3ctD1AbeQ-ldlKfyHNeKWCSwghsg/1",
      {
        duration: "1d", // 1 day
        type: "json", // also supports "text" or "buffer"
      }
    );
    return donor;
  } catch (e) {
    return [];
    console.log("Failed getting google sheet donor info, returning 0");
  }
};
