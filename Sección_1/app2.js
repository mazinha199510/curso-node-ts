const fs = require("fs");
const data = fs.readFileSync("readme.md", "utf-8");

const newContent = data.replace(/React/ig, "Angular");

fs.writeFileSync("Readme-angular.md", newContent);

console.log(newContent);