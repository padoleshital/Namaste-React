
## Namaste React Course by Akshay Saini
# _Chapter 01 - Inception_

## Q: What is Emmet?
A: Emmet is the essential toolkit for web-developers. It allows you to type shortcuts that are then expanded into full pieces of code for writing HTML and CSS, based on an abbreviation structure most developers already use that expands into full-fledged HTML markup and CSS rules.


## Q: Why is React known as React?
A: React is called React because it reacts to changes in the state or props of its components. This reactivity is a core principle of React.


## Q: What is React? why?
A: 
- React is an open-source JavaScript library developed by Meta.
-  for building interactive user interfaces (UI) efficiently single-page applications (SPAs)
- component-based architecture, making UI development more modular and reusable.

    - Fast rendering with Virtual DOM
    - Reusable components for efficient development
    - Large community and support 

        - Key Feature
        - Component-Based Architecture.
        - Virtual DOM (VDOM)
        - One-Way data binding
        - Declarative UI
        - JSX (JavaScript XML)
        - Hooks (useState, useEffect)
        - React Router
        - State Management


## Q: What is `CDN`? why use it?
A : Content Delivery Network . It provide instant access to React and its Library, CDNs can significantly reduce page load times


## Q: What crossorigin in script tag?
A : CORS is an HTTP feature that allows a browser to request resources from another domain.
 - CORS prevents malicious websites from accessing data on other sites without permission. 



## Q: What is difference between react.development.js and react-dom.development.js?
A : react.development.js focuses on the internal React logic such as creating and managing components, managing state and lifecycle methods, handling hooks, and other React-specific functionality. it contains the core React library.

react-dom.development.js focuses on interacting with the DOM to render and update the components. it is reaponsible rendering the React components. it provide functionality event handling,reconciliation (updating the DOM efficiently),managing the DOM tree that React uses.


## Q: What is diff between react developement.js  and production.js CDN links?
A : 
developement.js
- useful for debugging in developement Phase.
- helpful for warining error meassge.
production.js
- Removes warnings and development-specific features to reduce file size.
- Reduce page load time.
- use for production developement.



## Q: Difference between a React and Angular?

| Feature | React | Angular |
| --- | --- | --- |
| Developed by |Meta (startup webApp)|Google (large-scale enterprise applications)|
| Type | Library (UI) | Full-fledged framework
| Architecture | Component-based | Component-based but with MVC pattern
| Language | JavaScript | TypeScript
| Uses | Virtual DOM (dynamic UI applications) | Real DOM (enterprise-level applications)
| Performance | updates faster and more efficient |change detection help improve performance
| Data Binding | One-way data binding |  two-way data binding
State Managemenet | built-in useState Third-party library (Redux, Context API, Zustand,) | use Rxjs with Observable 

## Q:  What is async and defer? 
A :  The script is downloaded asynchronously (in parallel with the HTML parsing).
    `<script async src="script.js"></script>`
    The script is downloaded asynchronously, but execution is delayed until the HTML is fully parsed.
    `<script defer src="script.js"></script>`


## Reference

https://www.youtube.com/watch?v=IrHmpdORLu8