# hotel vetrina
- home con chi siamo, descrizione, luogo foto ecc..
form con camere
form con contatti (email, text area per info da chiedere alla struttura, pulsante commit)

1. creare progetto / se esistente, eseguire `npm install` per scaricare/installare "i cosi" definiti nel file `package.json`
2. installare ( secondo [link](https://www.freecodecamp.org/news/how-to-use-react-router-version-6/) )
   - npm i react-router
   - npm install react-router-dom@6

<details> <summary>Spoiler index.js</summary>

```js
root.render(
   <React.StrictMode>
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  </React.StrictMode>
);
```
   </details>
1. 