const request = require("request-promise");

export async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}

export function waitFor(ms) {
  return new Promise(r => setTimeout(r, ms));
}

export async function getImage(imageId, token) {
  let options = {
    method: "GET",
    url: `https://contentapi.sandbox.g.sportal365.com/images/${imageId}`,
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${token}`,
      accept: "application/json",
      project: "winbet.bg"
    },
    json: true
  };

  return request(options);
}
export async function getVideo(videoId, token) {
  let options = {
    method: "GET",
    url: `https://contentapi.sandbox.g.sportal365.com/images/${videoId}`,
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${token}`,
      accept: "application/json",
      project: "winbet.bg"
    },
    json: true
  };

  return request(options);
}


