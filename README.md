##### passos

* npx create-react-app react teste

* yarn add -D eslint eslint-config-prettier eslint-plugin-prettier prettier 

* .prettierrc
`{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "useTabs": false
}`

* yarn eslint --init

* ✔ How would you like to use ESLint? · ultima opção
* ✔ What type of modules does your project use? · import/export
* ✔ Which framework does your project use? · react
* ✔ Does your project use TypeScript? · Não
* ✔ Where does your code run? · browser
* ✔ How would you like to define a style for your project? · user popular style guide
* ✔ Which style guide do you want to follow? · airbnb
* ✔ What format do you want your config file to be in? · JavaScript

Checking peerDependencies of eslint-config-airbnb@latest
The config that you've selected requires the following dependencies:

* babel.config.js
* yarn add -D babel-plugin-module-resolver
