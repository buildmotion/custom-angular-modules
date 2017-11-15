# Custom Angular Modules
A repository of resources for creating shareable custom angular modules. Includes presentation collateral, source code, and guides.

## Setup
The following section outlines the tools that will be used to develop our custom angular modules. 

### Visual Studio Code
Visual Studio Code is a lightweight but powerful source code editor which runs on your desktop and is available for Windows, macOS and Linux. It comes with built-in support for JavaScript, TypeScript and Node.js and has a rich ecosystem of extensions for other languages (such as C++, C#, Java, Python, PHP, Go) and runtimes (such as .NET and Unity). Begin your journey with VS Code with these introductory videos.

* [https://code.visualstudio.com/download](https://code.visualstudio.com/download)

Visual Studio Code also has many extensions that can be downloaded to customize your development environment and experience. 

* [Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome)
* [TSLint](https://marketplace.visualstudio.com/items?itemName=eg2.tslint)

### Node.js and NPM
Download and install node.js. We will use ` npm ` to install packages/libraries from the npm public repository. 

* [https://nodejs.org/en/download/](https://nodejs.org/en/download/)

![](images/node-js-install.png)

## Angular-CLI install
We will use the Angular CLI tool to generate module items. The CLI tool will create/scaffold modules, services, classes, components and more. It also can be used to compile our application. It can be used to setup new web projects (full and lightweight). 

```javascript
npm install -g @angular/cli@latest
```

## Typscript Install
We will use the latest compatible version of Typescript. 

```javascript
npm install -g typescript@'>=2.4.2 <2.5.0'
```

## Create New Module
Now that we have the basic tools installed we are ready to create a new custom angular module. We will need a new folder to build out the new custom module.

Create a ` simple-logger ` folder on your computer. 

```javascript
mkdir simple-logger
```

### package.json
Use the the npm command to create a new package.json file for the new project. This file will be used to define our module dependencies. 

```javascript
npm init
```

The default contents of the ` package.json ` file is:

```javascript
{
  "name": "simple-logger",
  "version": "1.0.0",
  "description": "A simple logger module for Angular applications.",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
    "angular",
    "custom",
    "module",
    "logging"
  ],
  "author": "Matt Vaughn",
  "license": "MIT"
}
```

Update the ` scripts ` section to include the following.

```javascript
"transpile": "ngc",
"build": "npm run transpile"
```

The current ` package.json ` file does not have any ` devDependencies ` or ` Dependencies `. We will need to either update the file or use the ` npm ` command to add the packages to our module project. 

### tsconfig.json
Use the Typescript command to create a ` tsconfig.json ` file for the application. The configuration information in this file will be used to compile the Typescript. 

```javascript
tsc --init
```

The default output of the ` tsc --init ` is below. WE can customize the configuration. I like that there are comments that describe the usage of the different options. 

```javascript
{
  "compilerOptions": {
    /* Basic Options */
    "target": "es5",                          /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', or 'ESNEXT'. */
    "module": "commonjs",                     /* Specify module code generation: 'commonjs', 'amd', 'system', 'umd', 'es2015', or 'ESNext'. */
    // "lib": [],                             /* Specify library files to be included in the compilation:  */
    // "allowJs": true,                       /* Allow javascript files to be compiled. */
    // "checkJs": true,                       /* Report errors in .js files. */
    // "jsx": "preserve",                     /* Specify JSX code generation: 'preserve', 'react-native', or 'react'. */
    // "declaration": true,                   /* Generates corresponding '.d.ts' file. */
    // "sourceMap": true,                     /* Generates corresponding '.map' file. */
    // "outFile": "./",                       /* Concatenate and emit output to single file. */
    // "outDir": "./",                        /* Redirect output structure to the directory. */
    // "rootDir": "./",                       /* Specify the root directory of input files. Use to control the output directory structure with --outDir. */
    // "removeComments": true,                /* Do not emit comments to output. */
    // "noEmit": true,                        /* Do not emit outputs. */
    // "importHelpers": true,                 /* Import emit helpers from 'tslib'. */
    // "downlevelIteration": true,            /* Provide full support for iterables in 'for-of', spread, and destructuring when targeting 'ES5' or 'ES3'. */
    // "isolatedModules": true,               /* Transpile each file as a separate module (similar to 'ts.transpileModule'). */

    /* Strict Type-Checking Options */
    "strict": true                            /* Enable all strict type-checking options. */
    // "noImplicitAny": true,                 /* Raise error on expressions and declarations with an implied 'any' type. */
    // "strictNullChecks": true,              /* Enable strict null checks. */
    // "noImplicitThis": true,                /* Raise error on 'this' expressions with an implied 'any' type. */
    // "alwaysStrict": true,                  /* Parse in strict mode and emit "use strict" for each source file. */

    /* Additional Checks */
    // "noUnusedLocals": true,                /* Report errors on unused locals. */
    // "noUnusedParameters": true,            /* Report errors on unused parameters. */
    // "noImplicitReturns": true,             /* Report error when not all code paths in function return a value. */
    // "noFallthroughCasesInSwitch": true,    /* Report errors for fallthrough cases in switch statement. */

    /* Module Resolution Options */
    // "moduleResolution": "node",            /* Specify module resolution strategy: 'node' (Node.js) or 'classic' (TypeScript pre-1.6). */
    // "baseUrl": "./",                       /* Base directory to resolve non-absolute module names. */
    // "paths": {},                           /* A series of entries which re-map imports to lookup locations relative to the 'baseUrl'. */
    // "rootDirs": [],                        /* List of root folders whose combined content represents the structure of the project at runtime. */
    // "typeRoots": [],                       /* List of folders to include type definitions from. */
    // "types": [],                           /* Type declaration files to be included in compilation. */
    // "allowSyntheticDefaultImports": true,  /* Allow default imports from modules with no default export. This does not affect code emit, just typechecking. */

    /* Source Map Options */
    // "sourceRoot": "./",                    /* Specify the location where debugger should locate TypeScript files instead of source locations. */
    // "mapRoot": "./",                       /* Specify the location where debugger should locate map files instead of generated locations. */
    // "inlineSourceMap": true,               /* Emit a single file with source maps instead of having a separate file. */
    // "inlineSources": true,                 /* Emit the source alongside the sourcemaps within a single file; requires '--inlineSourceMap' or '--sourceMap' to be set. */

    /* Experimental Options */
    // "experimentalDecorators": true,        /* Enables experimental support for ES7 decorators. */
    // "emitDecoratorMetadata": true,         /* Enables experimental support for emitting type metadata for decorators. */
  }
}
```

We will now modify the ` tsconfig.json ` file. Note that the ` rootDir ` item is set to ` src/app ` - this is to support using the ` angular-cli ` tool. The ` paths ` option is to allow the compiler to access the ` dependencies ` of the module.

More information about compiler options: [https://www.typescriptlang.org/docs/handbook/compiler-options.html](https://www.typescriptlang.org/docs/handbook/compiler-options.html)

```javascript
"baseUrl": "./"
"declaration": true
"experimentalDecorators": true
"inlineSourceMap": true
"inlineSources": true
"lib": ["es2015","dom"]
"module": "es2015"
"moduleResolution": "node"
"noImplicitAny": true
"outDir": "dist"
"paths": {"@angular/core": ["node_modules/@angular/core/*"]}
"rootDir": "src/app"
"sourceMap": true
"strictNullChecks": true
```

The following items were added to the the ` compilerOptions ` section. 

* "stripInternal": true
* "skipLibCheck": true

Add the following new sections to the the ` tsconfig.json ` file. These items are not part of the ` compilerOptions ` section.

```javascript
"files": [
    "./src/app/index.ts"
],
"angularCompilerOptions": {
    "strictMetadataEmit": true,
    "genDir": "aot-dist"
}
```

The final configuration for ` tsconfig.json `

```javascript
{
  "compilerOptions": {
    /* Basic Options */
    "target": "es5", /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', or 'ESNEXT'. */
    "module": "es2015", /* Specify module code generation: 'commonjs', 'amd', 'system', 'umd', 'es2015', or 'ESNext'. */
    "lib": [
      "es2015",
      "dom"
    ],
    /* Specify library files to be included in the compilation:  */
    "declaration": true, /* Generates corresponding '.d.ts' file. */
    "sourceMap": true, /* Generates corresponding '.map' file. */
    "outDir": "dist", /* Redirect output structure to the directory. */
    "rootDir": "src/app", /* Specify the root directory of input files. Use to control the output directory structure with --outDir. */
    "skipLibCheck": true,
    /* Strict Type-Checking Options */
    "strict": true, /* Enable all strict type-checking options. */
    "noImplicitAny": true, /* Raise error on expressions and declarations with an implied 'any' type. */
    "strictNullChecks": true, /* Enable strict null checks. */
    "stripInternal": true,
    /* Module Resolution Options */
    "moduleResolution": "node", /* Specify module resolution strategy: 'node' (Node.js) or 'classic' (TypeScript pre-1.6). */
    "baseUrl": "./", /* Base directory to resolve non-absolute module names. */
    "paths": {
      "@angular/core": [
        "node_modules/@angular/core/*"
      ]
    },
    /* Source Map Options */
    "inlineSourceMap": true, /* Emit a single file with source maps instead of having a separate file. */
    "inlineSources": true, /* Emit the source alongside the sourcemaps within a single file; requires '--inlineSourceMap' or '--sourceMap' to be set. */
    /* Experimental Options */
    "experimentalDecorators": true /* Enables experimental support for ES7 decorators. */
  },
  "files": [
    "./src/app/index.ts"
  ],
  "angularCompilerOptions": {
    "strictMetadataEmit": true,
    "genDir": "aot-dist"
  }
}
```


```javascript
.\node_modules\.bin\ngc .\tsconfig.json
```