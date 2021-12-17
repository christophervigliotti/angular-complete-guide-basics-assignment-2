# wat

## Overview

Assignment 2

## getting this code running (before completing the assignment)

### ng serve...

Error: An unhandled exception occurred: Cannot find module '@angular-devkit/build-angular/package.json'
Require stack:
- /usr/lib/node_modules/@angular/cli/node_modules/@angular-devkit/architect/node/node-modules-architect-host.js
- /usr/lib/node_modules/@angular/cli/node_modules/@angular-devkit/architect/node/index.js
- /usr/lib/node_modules/@angular/cli/models/architect-command.js
- /usr/lib/node_modules/@angular/cli/commands/serve-impl.js
- /usr/lib/node_modules/@angular/cli/node_modules/@angular-devkit/schematics/tools/export-ref.js
- /usr/lib/node_modules/@angular/cli/node_modules/@angular-devkit/schematics/tools/index.js
- /usr/lib/node_modules/@angular/cli/utilities/json-schema.js
- /usr/lib/node_modules/@angular/cli/models/command-runner.js
- /usr/lib/node_modules/@angular/cli/lib/cli/index.js
- /usr/lib/node_modules/@angular/cli/lib/init.js
See "/tmp/ng-mk0LOC/angular-errors.log" for further details.

### ng update...

The installed local Angular CLI version is older than the latest stable version.
Installing a temporary version to perform the update.
✔ Package successfully installed.
Using package manager: 'npm'
Collecting installed dependencies...
Found 0 dependencies.
    We analyzed your package.json, there are some packages to update:
    
      Name                               Version                  Command to update
     --------------------------------------------------------------------------------
      @angular/cli                       11.0.7 -> 12.2.9         ng update @angular/cli@12
      @angular/core                      11.0.9 -> 12.2.9         ng update @angular/core@12
    
    There might be additional packages which don't provide 'ng update' capabilities that are outdated.
    You can update the additional packages by running the update command of your package manager.

### ng update @angular/cli@12

The installed local Angular CLI version is older than the latest stable version.
Installing a temporary version to perform the update.
✔ Package successfully installed.
Using package manager: 'npm'
Collecting installed dependencies...
Found 0 dependencies.
Package '@angular/cli' is not a dependency.

### ng update @angular/core@12

same as previous message

### ng serve (no bueno)

### ng update (no bueno, same error)

### npm install @angular/core@12

npm ERR! code ERESOLVE
npm ERR! ERESOLVE unable to resolve dependency tree
npm ERR! 
npm ERR! While resolving: my-first-app@0.0.0
npm ERR! Found: zone.js@0.10.3
npm ERR! node_modules/zone.js
npm ERR!   zone.js@"~0.10.2" from the root project
npm ERR! 
npm ERR! Could not resolve dependency:
npm ERR! peer zone.js@"~0.11.4" from @angular/core@12.2.15
npm ERR! node_modules/@angular/core
npm ERR!   @angular/core@"12" from the root project
npm ERR! 
npm ERR! Fix the upstream dependency conflict, or retry
npm ERR! this command with --force, or --legacy-peer-deps
npm ERR! to accept an incorrect (and potentially broken) dependency resolution.
npm ERR! 
npm ERR! See /home/parallels/.npm/eresolve-report.txt for a full report.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/parallels/.npm/_logs/2021-12-17T14_27_03_223Z-debug.log
parallels@ubuntu-linux-20-04-desktop:~/Documents/Code/basics-assignment-2$ 

### npm install @angular/core@12 -- force

### npm audit fix --force

### ng serve

Your global Angular CLI version (13.0.1) is greater than your local version (11.0.7). The local Angular CLI version is used.

To disable this warning use "ng config -g cli.warnings.versionMismatch false".
The specified command ("server") is invalid. For a list of available options,
run "ng help".

Did you mean "serve"?
parallels@ubuntu-linux-20-04-desktop:~/Documents/Code/basics-assignment-2$ 

### following along with https://update.angular.io/?v=11.0-13.0 
...but first...
- deleted package.json.lock (file name may not be correct)
- committed changes to repo

#### npx @angular/cli@12 update @angular/core@12 @angular/cli@12
The installed local Angular CLI version is older than the latest stable version.
Installing a temporary version to perform the update.
Installing packages for tooling via npm.
Installed packages for tooling via npm.
Using package manager: 'npm'
Collecting installed dependencies...
Found 30 dependencies.
Fetching dependency metadata from registry...
Package '@angular/core' is already up to date.
                  Package "@angular-devkit/build-angular" has an incompatible peer dependency to "@angular/compiler-cli" (requires "^13.0.0 || ^13.1.0-next" (extended), would install "12.2.15").
                  Package "@angular-devkit/build-angular" has an incompatible peer dependency to "typescript" (requires ">=4.4.3 <4.6", would install "4.3.5").
✖ Migration failed: Incompatible peer dependencies found.
Peer dependency warnings when installing dependencies means that those dependencies might not work correctly together.
You can use the '--force' option to ignore incompatible peer dependencies and instead address these warnings later.
  See "/tmp/ng-uRg1L5/angular-errors.log" for further details.

#### npm update --force

blech

#### npx @angular/cli@12 update @angular/core@12 @angular/cli@12
