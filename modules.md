# JavaScript: Modules

- Modules are reusable pieces of code in a file that can be exported and then imported for use in another file. 
- A modular program is one whose components can be separated, used individually, and recombined to create a complex system.

- This modular strategy is sometimes called separation of concerns and is useful for the following reasons:
  - find, fix, and debug code more easily.
  - reuse and recycle defined logic in different parts of your application.
  - keep information private and protected from other modules.
  - prevent pollution of the global namespace and potential naming collisions, by cautiously selecting variables and behavior we load into a program.

## Implementing Modules in Node

- Every JavaScript file that runs in a Node environment is treated as a distinct module. 
- The functions and data defined within each module can be used by any other module, as long as those resources are properly exported and imported.

### `module.exports`

- `module.exports` is an object that is built-in to the Node.js runtime environment.

- To create a module, create a new file where the functions can be declared. 
- Then, to make these functions available to other files, add them as properties to the built-in `module.exports` object

### `require()`
- The `require()` function accepts a string as an argument. That string provides the file path to the module you would like to import.
- use object destructuring to be more selective With `require()` and extract only the needed functions/ data from the module.


## Implementing Modules in a browser’s runtime environment using ES6 Syntax

### ES6 Named Export Syntax

- The two functions are exported using the ES6 export statement.

```
export { resourceToExportA, resourceToExportB, ...};

```

- Individual values may be exported as named exports by simply placing the export keyword in front of the variable’s declaration.

```
export const variable = (arg) => {
  // logic omitted...
}
 
```

- The exported functions are now available to be imported and used by other files!

### ES6 Import Syntax

```
import { exportedResourceA, exportedResourceB } from '/path/to/module.js';

```

### Rename imports to avoid naming colissions

Use `as` if two or more imports have the same name and give it a new name. 

```
import { exportedResource as newlyNamedResource } from '/path/to/module'

```

### Default Exports and Imports

- Often, though not always, the default export value is an object containing the entire set of functions and/or data values of a module.

- The syntax for exporting a default object looks like this:

```
const resources = { 
  valueA, 
  valueB 
}
export { resources as default };

```

- shorthand syntax:

```
const resources = {
  valueA,
  valueB
}
export default resources;

```

- The syntax for importing default exports looks like this:

```
import { default as importedResources } from 'module.js 
```

-shorthand syntax:
```
import importedResources from 'module.js';

```
