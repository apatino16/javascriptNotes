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
  
## The Document Object Model
- The Document Object Model, or DOM is a representation of a document (like an HTML page) as a group of objects. 
- While it is often used to represent HTML documents, and most web browsers use JavaScript interfaces to the DOM, it is language agnostic as a model.
- The DOM is tree-like and heirarchical, meaning that there is a single top-level object, and other objects descend from it in a branching structure.
<img src="https://content.codecademy.com/courses/dom/dom_revision_1.svg" alt="Diagram that uses arrows to depict the flow of information between the DOM, its HTML document, and the JavaScript file that accesses it."/>![image](https://user-images.githubusercontent.com/103137175/190958534-f87f1365-7435-49fc-9454-049a98555f4a.png)

### Nodes in DOM tree
- A node in the DOM tree is the intersection of two branches containing data. 
- Nodes can represent HTML elements, text, attributes, etc. 
- The root node is the top-most node of the tree. 
<img src="https://content.codecademy.com/practice/art-for-practice/dom-nodes.png" alt="DOM node"/>![image](https://user-images.githubusercontent.com/103137175/190958326-25302e40-0a1f-4fdd-bdf0-e8f690aa04c6.png)

### The DOM Parent-Child Relationship
- The parent-child relationship observed in the DOM is reflected in the HTML nesting syntax.
- Elements that are nested inside the opening and closing tag of another element are the children of that element in the DOM.
- In the code block, the two <p> tags are children of the <body>, and the <body> is the parent of both <p> tags.
```
<body>
  <p>first child</p>
  <p>second child</p>
</body>
```
 
https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model
  
https://developer.mozilla.org/en-US/docs/Web/API/Document

## The `element.InnerHTML` Property
- The `element.innerHTML` property can be used to access the HTML markup that makes up an element’s contents.
- `element.innerHTML` can be used to access the current value of an element’s contents or to reassign it.
```
// Example:
document.body.innerHTML = '<h2>This is a heading</h2>'; 
```

## The `.querySelector()` Method
- The '.querySelector()' method selects the first child/descendant element that matches its selector argument.
- It can be invoked on the document object to search the entire document or on a single element instance to search that element’s descendants.
 
## The `document.getElementById()` Method
- The `document.getElementById()` method returns the element that has the id attribute with the specified value.
- `document.getElementById()` returns null if no elements with the specified ID exists.
- An ID should be unique within a page. However, if more than one element with the specified ID exists, the `.getElementById()` method returns the first element in the source code.
  
## The `document.getElementsByClassName()`

## The `document.getElementsByTagName()`
  

  




