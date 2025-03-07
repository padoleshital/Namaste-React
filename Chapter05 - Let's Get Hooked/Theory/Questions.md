## Namaste React Course by Akshay Saini
# Chapter 05 - Let's get Hooked!

### Q : What is the difference between Named Export, Default export and * as export?

A : Named exports : in JavaScript allow you to export multiple functions, variables, or classes from a single file as separate entities. Instead of exporting everything as a single unit, you can specifically name and export each part individually.
- Default exports :are useful when you want to export only one main thing from a file. It is like marking that one thing as the most important to share.
When importing a default export in another file, you can give it any name you want during the import, and you don't need to use curly braces {}.
A file can have only one default export.
-  a way to import all named exports from a module into a single object.

----

### Q : What is the importance of config.js file

A:  The config.js file is typically used in JavaScript projects to store configuration settings such as API keys, database connection details, URLs, environment variables, and other reusable settings. 
`const config = {
  API_URL: "https://api.example.com",
  DATABASE_URL: "mongodb://localhost:27017/mydb",
  PORT: 3000,
  ENV: "development",
};
`

---

### Q What are React Hooks?
A :
- You can only use hooks inside function components. 
- You must use hooks at the top of your component, not inside loops or conditions. 
- React provides a few built-in hooks, like useState(), useReducer(), useEffect(), useLayoutEffect(), useCallback(), and useMemo(). 

---

### Q : Why do we need a useState Hook?
A : useState is use for event function  
- useState provides an easy way to update state and re-render the component whenever the state changes.
- Previously, functional components were stateless. useState enables them to store and update state without converting them into class components.
- Functional components with Hooks make it easier to reuse logic across multiple components.

---

