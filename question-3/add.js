import fs from "fs";
import path from "path";

const logsDir = path.resolve("Logs");

if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir);
}

process.chdir(logsDir);

for (let i = 0; i < 10; i++) {
  const fileName = `log${i}.txt`;

  fs.writeFileSync(fileName, `Log: ${i}`);

  console.log(fileName);
}
