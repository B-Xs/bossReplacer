const fs = require('fs');
const IN_ = fs.readFileSync("input.lua", "utf8");
const C3 = fs.readFileSync("combine.lua", "utf8");
const C4 = {};
const C5 = fs.readFileSync("replacement.lua", "utf8").split("\n");
for (const line of C5) {
  const parts = line.trim().split(" = ");
  if (parts.length === 2) {
    C4[parts[0]] = parts[1];
  }
}
let OUT_ = C3 + "\n" + IN_;
for (const Wordddddddd in C4) {
  const jsEquivalent = C4[Wordddddddd];
  const regex = new RegExp("\\b" + Wordddddddd + "\\b", 'g');
  OUT_ = OUT_.replace(regex, jsEquivalent);
}
OUT_ = "--// Project made by 0x3k6902 (rob boss utilities simple replace tool)" + OUT_;
fs.writeFileSync("output.lua", OUT_);
console.log("Keywords in replacement.lua have been changed, check output.lua for your output! ily");
