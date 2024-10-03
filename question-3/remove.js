import { existsSync, readdirSync, unlinkSync, rmdirSync } from "fs";
import { resolve } from "path";

const logsDir = resolve("Logs");

if (existsSync(logsDir)) {
  readdirSync(logsDir).forEach((file) => {
    console.log(`delete files...${file}`);
    unlinkSync(resolve(logsDir, file));
  });

  rmdirSync(logsDir);
}
