NPM- Node Package Manager - global registry - CLI - to install, update the dependency packages.

npm init - creates package.json - configuration file - contains meta info about our projects - contains all the dependencies along with the versions that ur package needs - ~2.8.3 -> auto update to only patch version. - ^major.minor.patch -> auto upgrade to minor and patch versions if available

package-lock.json -> contains exact verison of all the dependencies and transitive dependencies.

mode_modules -> auto generated when git install cmd run.
-> contains code for all the dependenices+transitive dependencies
-> DONOT COMMIT node_modules to git.

Transitive dependencies -> ur project may depned on some dependencies and that package may internaly needs some dependencies which is may need the same again.

Commit package.json and package-lock.json to GIT (IMP)

.gitignore -> contians path to the files which do not need to commit to git.

dev-dependencies -> used for development environment (testing-jest/cypress, building-parcel/webpack)
npm install -D <package_name> -> installs the package to devdependencies.

dependencies -> are required for both development and production.
npm install <pack_name> -> installs package to dependencies.

npm i/ npm install -> to install a package
npx -> for executing the package.

npx parcel index.html -> builds ur app hosts that in port 1234
WHAT PARCEL dOES-
 --different prod and devolopment builds
 --LIVE server for local development
 --HTTPS -for local app
 --HMR -Hot Module Reload
   --using fileWatching Algorithm - wirtten in c++
 --Tree shaking - removes unused code
 --minification - removes comments and whitespaces
 --different browser supported builds
 
 --browsersList- 
    allows us to specify upto what versions ur app should work.
    last 10 chrome versions (app will work 100% in last 10 version of chrome)
  --Faster Builds -> using build cacheing.

