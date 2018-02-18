Condensed Email is a front-end email app using ReactJs to create a dashboard in that user can view all their mail inbox.
Tech we are using: NodeJS, ReactJS, redux, redux saga

### Prerequisites
- You have to install nodeJS on your machine
- Install json server globally `npm install -g json-server`

### Structure
- **index.js:** Our entry point
- **app.js:** Our main app. It utilize react router to navigate to pages
- **pages:** We have only one page email board. Pages contains **containers**
- **containers:** Contains all smart components. Containers contains **components**
- **components:** Contains all normal components

### CSS Architect
- Theme: We use global theme scss in that: **core** theme overide **bootstrap**, our **customization** overide **core** theme
- We use [BEM methodology](https://www.toptal.com/css/introduction-to-bem-methodology)

### Mock data
We create mock json data using [json-schema-faker](https://github.com/json-schema-faker/json-schema-faker) and mock API using [json-server](https://github.com/typicode/json-server). Know more [here](https://medium.freecodecamp.org/rapid-development-via-mock-apis-e559087be066).
Here's steps:
 - `json-schema-faker` generate `db.json` file based on mock data schema we provide
 - `json-server` will run mock api server based on the generated db.json
Run mock:
 `npm run start-mockapi`
### Notes
- We're using [React Font Awesome 5](https://github.com/FortAwesome/react-fontawesome)

### Credits
- [Cloned theme](http://pages.revox.io/dashboard/3.0.0/html/condensed/email.html)
