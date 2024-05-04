# API
### md menu-api
cd menu-api
Next, initialize a Node.js project within the project directory by creating a package.json file with default settings:

### npm init -y
Install Project Dependencies
Your Node.js project requires a couple of dependencies to create a secure Express server with TypeScript. Install them like so:

### npm i express dotenv cors helmet
Here's what each of the above packages does in your project:

express: Fast, unopinionated, minimalist web framework for Node.js.

dotenv: Zero-dependency module that loads environment variables from a .env file into process.env.

cors: Express middleware to enable CORS with various options.

helmet: Express middleware to secure your apps by setting various HTTP headers, which mitigate common attack vectors.

To use TypeScript, you also need to install a stable version of typescript as a developer dependency:

### npm i -D typescript
To use TypeScript effectively, you need to install type definitions for the packages you installed previously:

### npm i -D @types/node @types/express @types/dotenv @types/cors @types/helmet
When a package doesn't have built-in types, you can get its type definitions through the @types npm namespace, which hosts TypeScript type definitions from the DefinitelyTyped project. Once you install the packages, the TypeScript compiler automatically includes the types, and your IDE can use them to provide you with code assistance.

Initialize TypeScript in Node.js
To help the TypeScript compiler understand your project's structure, you need to create a tsconfig.json file within the directory you want to use as the root directory of the TypeScript project. In this case, your project directory and the TypeScript project directory are the same.

To easily generate the tsconfig.json file, ensure that you are under the project directory and issue the following command:

### npx tsc --init


Improve TypeScript Development Workflow
The TypeScript compilation process can increase the bootstrapping time of an application. However, you don't need to recompile the entire project whenever there's a change in its source code. You can set up ts-node-dev to significantly decrease the time it takes to restart your application when you make a change.

Start by installing this package to power up your development workflow:

### npm i -D ts-node-dev
ts-node-dev restarts a target Node.js process when any of the required files change. However, it shares the Typescript compilation process between restarts, which can significantly increase the restart speed.


You can create a dev npm script in package.json to run your server:

{
  "name": "menu-api",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "dev": "ts-node-dev --respawn --pretty --transpile-only src/index.ts"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": { ... },
  "devDependencies": { ... }
}

Let's briefly break down the options that ts-node-dev takes:

--respawn: Keep watching for changes after the script has exited.

--pretty: Use pretty diagnostic formatter (TS_NODE_PRETTY).

--transpile-only: Use TypeScript's faster transpileModule (TS_NODE_TRANSPILE_ONLY).

src/index.ts: This is the application's entry file.

Since ts-node-dev is a tweaked version of node-dev that uses ts-node under the hood, some of its options are the combined options of those two packages. Refer to its "Usage" document for more details and available options.

Now, simply run the dev script to launch your project:

### npm run dev
If everything is working correctly, you'll see a message indicating that the server is listening for requests on port 7000.