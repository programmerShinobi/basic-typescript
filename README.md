#### TypeScript
- TypeScript is a programming language developed by Microsoft.
- TypeScript is a superset of JavaScript, which means that when executed, applications running file-name.ts will compile into file-name.js.

***
#### System Requirement

Requirement  | Version
------------- | -------------
NodeJS  | >= 18.20

***
#### Setup Installation
1. Create tsconfig.json :
   ```json
   {
      "compilerOptions": {
         "module": "commonjs",
         "noImplicitAny": true,
         "removeComments": true,
         "preserveConstEnums": true,
         "sourceMap": true
      }
   }
   ```
####
2. Add typescript (devDependencies) :
   ```bash
   $ yarn add typescript --dev
   ```
####
2. Add ts-node (dependencies) :
   ```bash
   $ yarn add ts-node
   ```
####
3. Run your project in path/file-name.ts :
   ```bash
   $ yarn ts-node path/file-name.ts
   ```
####


***
#### Contributors
- Faqih Pratama Muhti