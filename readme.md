# Example installation command

npm install

## Getting Started

"watch": "tsc -w",
"start": "node ./dist/app.js",
"start2": "nodemon ./dist/app.js",
"dev": "npm-run-all --parallel watch start2",
"start:dev": "nodemon ./src/app.ts",
"build": "tsc",
"test": "jest",
"test:watch": "jest --watch"
