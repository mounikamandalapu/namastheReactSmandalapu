Never place a constant strings in you js files. 
place the constants in one common file called ->> constant.js


one module -> one default export 
        -> N. no of named exports. 
named exports can be imported with -> {}



Export default exports
export default Component
import Component from 'path'

Named export
export const Component
import {Component} from 'path'

React is more efficient at doing DOM operations. - how - using Virtual DOM.(JS Object representation of actual DOM).
Diff Algorithm
Reconsiliation Algorithm - React Fiber(new way of finding the diff and then Updating the actual DOM (UI))

Virtual DOM  - is a representation of ACtual DOM -Object representation- its an object created by React.Element

Diff Algorithm -> it finds out the diff btwn previous and current virtual DOM, calcualtes the diff, and then updating

**#React Hooks**
(are noraml JS functions - developed by Facebook developer - which performs some utility action)

2 majorly used Hooks
 1. useState() -> To create a Local STATE variable
        ```import this utility function from React library using Named importes
        ```it takes one argument -> initial state value
        ```returns -> an array with 2 values -> one is state variable, two is function to update the STATE variable.
        ``` whenever a state varible changes react will re-render the component.

Fecth API call  -- Promised based interface for making HTTP request to fetch resources/data from server. (replacement of XMLHTTPResquest)
 ---- it takes one 2 arguments
 -----fetch(url, {optional object to configure the request})
 ----fetch('https://domainname:portNumber/path', {
        method: 'POST',
        header: {
                'content-type';
        },
        body: {}
 })
```` it returns a promise. which will eventually resolve to a response object/ or reject if a n/w error occurs.
````when resolved -> response object -> contains statusCode, headers, responseBody
````check for response.ok , for anycases other than 200
