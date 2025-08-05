Start creating a restuarant app

1. Plan the UI design on pen and paper
2. Now deside the components

css units for responsive web design
CSS Varibles

var() -> to insert value of a CSS Varibale.

CSS Variable - must start with --.
**Local and Global varibale.**
Global Variables - declared in :root pseudo class.
Local variables - are declares in the selector where u want to use it.
--color: '#1e099'

.className {
color: var(--color, OptDefaultValue)
}

**Pseudo-class** -> selector used to select an element based on its state.

````Denoted with single color -> :root, :hover, :active, :focus, :visited, :unvisited

:root -> selects the doc root elemnt -(HTML)

**Pseudo-element** -> selector used to select a particular part of an elemnt
```DEnoted with :: -> ::first-line, ::first-letter



**Config driven UI**

always give key prop when you render a component using loop.

````
