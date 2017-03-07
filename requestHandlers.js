function start() {
  console.log("Request handler 'start' was called.");
  return "Start! Start! Start!";
}

function upload() {
  console.log("Request handler 'upload' was called.");
  return "Upload! Upload! Upload!";
}

exports.start = start;
exports.upload = upload;