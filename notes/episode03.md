JSX - HTML like syntax in js - not understood by browsers JS Engine, it only understands ECMASCipt(ES6...) - so we need a tranpiler (Babel) to convert it into js.
---Expression are included in {5+ 4}
---Multiplr lines wrap in ()
---One Top level Element - can return only one element. - use Fragment to wrap multiple element. (using Fragment prevents adding multiple elements to DOM tree).
---Elements must be closed (Empty elements should be closed)
---Attribute names like class -> className (bcz class is a reserved keyword in JS)
---Same with label attr - for = forHtml
---conditional if statement -> should be placed outside JSX.
---can use terinary operators / Logical AND

Transplier - Which is used to converts code from one high-level language to another high-level language. - Babel is a mostly used transpiler.
Babel - Babel is a compiler and transpiler.
Babel transpiles modern JavaScript (ES6+) or JSX into older JavaScript (ES5) so it works in older browsers.
//JSX element -> babel converts this React Element(Object) -> when rendered on DOM converts to HTML Elements
JSX -> React.createElement -> ReactElement(Js Object) -> HTMLElement(render)
babel react reactDOM
HTML JSX
class="root" className="root"
for="fnameInput" forHtml="fnameInput"

Parcel - has this babel package included

extensions - bracket pair coloriser - prettier
-ESLint
-Better comments

React Components - evertything in react is a component - (button/heading/footer)
2 types of components

1. class components
2. functional components -
   normal js function - returns a JSX element - starts with a Capital letter

React Element - is js object creste by using JSX / REact.createElement('tganame', {}, children). - represents what you want to see on the screen.
React Component - can be class or function that returns React ELements. - components allow you to reuse logic, accept props,manage state.

Component Composition -

Cross-site-scripting -

waht makes your app faster -
Not react alone does it.
JSX - Makes ur code readble
Babel - A transpiler that converts the JSX to JS
Parcel - Bundle tool -> ZERO Config required and does so much like  
 HMR; bundles all ur js, css, hmtl; Caching; Dev and prod build;
Tree shaking, Optimisation, minification
