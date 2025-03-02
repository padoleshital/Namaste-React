## Namaste React Course by Akshay Saini
# _Chapter 02 - Igniting our App_

### Q : What is Package.JSON?
A :  package.json is configration of npm
it contain all information of project package / dependency of package.

---

### Q : What is Package-lock.JSON?
A : Package-lock.json locks the exact version of packages being
used in the project.

---

### Q : What is `NPM`?
A : It is stands for Node Package Manager it is open source and free . 

---

### Q : What is `Parcel/Webpack`? Why do we need it?
A : Parcel and Webpack are both web bundlers that package assets and dependencies into a single file. This process optimizes files so they can be displayed in browsers. 

---

### Q : What is `.parcel-cache`
A : parcel-cache is used by parcel(bundler) to reduce the building time. It stores information about your project when parcel builds it, so that when it rebuilds, it doesn't have to re-parse and re-analyze everything from scratch. It's a key reason why parcel can be so fast in development mode.

---


### Q : What is `npx` ?
A : NPX stands for Node Package eXecute.it nothing but npm package runner. It allows developers to execute any Javascript.

---

### Q : What is difference between `dependencies` vs `devDependencies`
A : 
- dependencies are packeges that are essential for the application  to run on production.
- devDependencies - These are packages only needed during development and testing, like testing frameworks not include in final production build.
---

### Q : What is Tree Shaking?
- Tree shaking is a process of removing the unwanted code that
we do not use while developing the application.

- In computing, tree shaking is a dead code elimination
technique that is applied when optimizing code.
-----

### Q : What is Hot Module Replacement?
A : It means that parcel will keep a track of all the files which
you are updating.
- There is File Watcher Algorithm (written in C++). It keeps
track of all the files which are changing realtime and it
tells the server to reload.
- These are all done by PARCEL
---
### Q :  List down your favourite 5 superpowers of Parcel and describe any 3
A : 
* Created A Server
 * HMR - Hot Module Replacement
 * File Watcher algorithm - C++ (Execute File when changes occur)
 * BUNDLING
 * MINIFY
 * Cleaning our Code (Example - Remove Console.log)
 * Dev and Production Build
 * Super Fast build algorithm
 * Image Optimization
 * Caching while development
 * Compression
 * Compatible with older version of browser
 * HTTPS on dev [Example - npx parcel index.html --https]
 * Port Number [Example - If port number using in localhost then it will change in port number in another project running on localhost]
 * Consistent Hashing Algorithm
 * Zero Config
 * Tree shaking

 ---


### Q : What is `.gitignore`? What should we add and not add into it?
A : It tells git which file should take and which file should ignore.
- like node_modules , dist.

---

### Q : Why should I not modify `package-lock.json`?
A : Beacuse it contain exact version versioned dependency tree of packages which is use in project. It is automatically generated for any operations.

By deleteing this file we can loss inforamation about project and it will not able to generate node_modules
-----

### Q : What is `node_modules` ? Is it a good idea to push that on git?
A : It most heavy file in project that conatin all packages and there dependency. we should not put this folder on git.

---

### Q:  What is the `dist` folder?
A : It stands for distrubutable. contains the minimized version of the source code. which is use for production web app.

---

### Q : What is `browserlists`
A : a configuration tool that helps developers choose which browsers their projects should support.

---

### Q: What is  ^ - caret and ~ - tilda?
A : The tilde (~) restricts updates to patch versions for stability, while the caret (^) allows updates to both minor and patch versions

---

### Q : What is bundler?
A :  A bundler in React tool that combine all code images and javascript file  together in single file.

- Bundlers are used to reduce the size of the code and improve the performance of the application.
- Common bundler use in react Webpack , Vite and Parcel.
---

### Q : What is Parcel/Webpack?
A : both are consider to be module bundlers. both tools that help build web applications by bundling assets into optimized files

---

### Q : What is Transitive dependecy?
A : 
- We have our package manager which takes care of our
transitive dependencies of our code.
- If we’ve to build a production ready app which uses all
optimisations (like minify, bundling, compression, etc), we
need to do all these.
- But we can’t do this alone, we need some dependencies on it.
Those dependencies are also dependent on other dependencies.