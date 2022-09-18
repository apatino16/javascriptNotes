# JavaScript and the DOM

## HTML script element
- The HTML `<script>` element can contain or reference JavaScript code in an HTML file. 
- The `<script>` element needs both an opening and a closing tag, and JavaScript code can be embedded between the tags.

## HTML script element `src` attribute
- The `src` attribute of a `<script>` element is used to point to the location of a script file.
- The file referenced can be local (using a relative path) or hosted elsewhere (using an absolute path).
`<script src="example.js"></script> `

- Elements, including the <script> element, are by default, parsed in the order they appear in the HTML file.
- When the HTML parser encounters a <script> element, it loads the script then executes its contents before parsing the rest of the HTML.
  
## HTML script element `defer` attribute
- The `defer` attribute of a `<script>` tag is a boolean attribute used to indicate that the script can be loaded but not executed until after the HTML document is fully parsed. 
- It will only work for externally linked scripts (with a src attribute), and will have no effect if it is applied to an inline script.
` <script defer scr="sampleFile.js"></script> `
  
## HTML script tag `async` attribute
- Scripts are loaded synchronously as they appear in an HTML file, before the following HTML is loaded and parsed. 
- The `async` attribute can be used to load the scripts asynchronously, such that they will load in the background without blocking the HTML parser from continuing.
- async is useful for scripts that are independent of other scripts in order to function accordingly.
` <script src="example.js" async></script> `
  
> The convention is to put the `script` tag in the `<head>` element and to use the `defer` and `async` attributes.
