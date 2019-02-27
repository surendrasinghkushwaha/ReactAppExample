# ReactAppExample
Install few extension
1. Open in GitHub, Bitbucket, Gitlab, VisualStudio.com !
Windows
cd %USERPROFILE%\.vscode\extensions
git clone https://github.com/ziyasal/vscode-open-in-github.git
cd vscode-open-in-github
npm install

output look like
> vscode-open-in-github@1.4.1 postinstall C:\Users\sk00538811\.vscode\extensions\vscode-open-in-github
> node ./node_modules/vscode/bin/install

Detected VS Code engine version: ^1.30.x
Found minimal version that qualifies engine range: 1.30.0
Fetching vscode.d.ts from: https://raw.githubusercontent.com/Microsoft/vscode/c6e592b2b5770e40a98cb9c2715a8ef89aec3d74/src/vs/vscode.d.ts
vscode.d.ts successfully installed!

npm notice created a lockfile as package-lock.json. You should commit this file.
added 241 packages from 528 contributors and audited 948 packages in 53.048s
found 2 vulnerabilities (1 moderate, 1 critical)
  run `npm audit fix` to fix them, or `npm audit` for details

C:\Users\sk00538811\.vscode\extensions\vscode-open-in-github>
----------------------------------------------------------------------------------------------------
https://code.visualstudio.com/docs/nodejs/reactjs-tutorial

Tip: To test that you have Node.js and npm correctly installed on your machine, you can type 
---------------
node --version 

---------------and ---------------

npm --version 
---------------
in a terminal or command prompt.
To install the create-react-app generator, in a terminal or command prompt type:
------------------------------------
npm install -g create-react-app
------------------------------------
This may take a few minutes to install. You can now create a new React application by typing:
------------------------------
create-react-app my-app
--------------------------------
Success! Created my-app at D:\<folder>\ReactAppExample\my-app

Next, go ahead and install the dependencies as follows:

yarn add bootstrap@3 react-bootstrap
-----------------------------------------
Inside that directory, you can run several commands:

  npm start
    Starts the development server.

  npm run build
    Bundles the app into static files for production.

  npm test
    Starts the test runner.

  npm run eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

where my-app is the name of the folder for your application. This may take a few minutes to create the React application and install its dependencies.
Let's quickly run our React application by navigating to the new folder and typing npm start to start the web server and open the application in a browser:
-----------------
cd my-app
npm start
------------------
You should see "Welcome to React" on http://localhost:3000 in your browser. We'll leave the web server running while we look at the application with VS Code.
To open your React application in VS Code, open another terminal or command prompt window, navigate to the my-app folder and type code .:
--------------
cd my-app
code .
--------------

npm install ts-pnp@1.0.0
npm install popper.js@^1.14.7
npm install jquery@1.9.1
npm install bootstrap
