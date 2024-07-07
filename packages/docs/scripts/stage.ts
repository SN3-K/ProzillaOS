import fs from "node:fs";
import path from "node:path";
import { ANSI } from "../../core/src/constants";
import { name } from "../package.json";

const BUILD_DIR = "dist";

function stage() {
	try {
		console.log(`Context: ${ANSI.decoration.bold}${name}${ANSI.reset}\n`);

		console.log(`${ANSI.fg.yellow}Staging build...${ANSI.reset}`);
		fs.cpSync(BUILD_DIR, path.resolve(__dirname, `../../../${BUILD_DIR}/docs/`), { recursive: true });
		console.log(`\n${ANSI.fg.green}✓ Staging complete${ANSI.reset}`);
	} catch (error) {
		console.error(error);
		console.log(`${ANSI.fg.red}⚠ Staging failed${ANSI.reset}`);
		process.exit(1);
	}
}

stage();