/*
setting up a minimal tsconfig file

{
  "compilerOptions": {
    "outDir": "dist", // where to put the TS files
    "module": "commonjs", // so that exports work 
    "target": "ES2015", // JS language level (as a build target)
    "moduleResolution": "Node" // Find cjs modules in node_modules
  },
  "include": ["src"] // which files to compile
}

increasing the target up to ES2022 was possible

additional changes can be

   "target": "ES2022",
+  "module": "NodeNext",
-  "module": "CommonJS",
-  "moduleResolution": "Node"

*/

console.log('all done')