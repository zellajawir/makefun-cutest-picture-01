const { copyFileSync, mkdirSync } = require('node:fs');
const { join } = require('node:path');

const outputDirectory = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outputDirectory, { recursive: true });
// Resolve the image beside this file even when launched from another directory.
copyFileSync(join(__dirname, 'submission.jpg'), join(outputDirectory, 'entry.png'));
