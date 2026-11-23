const fs = require("fs");
const content = fs.readFileSync("readme.md", "utf-8");
const wordCount = content.split(' ').length;

// const wordReact = content.match(new RegExp(`\\bReact\\b`, "gi") ?? []).length;
const wordReact = content.match(/react/gi ?? []).length;
console.log("palabras ", wordCount);
console.log("palabras React", wordReact);