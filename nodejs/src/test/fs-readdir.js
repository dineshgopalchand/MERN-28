const fs = require("fs");
const path = require("path");
const dirName = "data";
fs.readdir(dirName, function (err, files) {
  //handling error
  if (err) {
    return console.log("Unable to scan directory: " + err);
  }
  let allFileData='';
  //listing all files using forEach
  files.forEach(function (file) {
    // Do whatever you want to do with the file
    const filePath = path.join(".", dirName, file);
    readFile(filePath);
  });
});

function readFile(filename) {
  console.log(filename);
  let data = "";
    try {
      const fileData = fs.readFileSync(filename, "utf8");
      console.log(fileData);
      data = fileData;
    } catch (err) {
      console.log("error", err);
    }
  return data;
}
