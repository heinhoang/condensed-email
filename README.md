Condensed Email is a front-end email app using ReactJs to create a dashboard in that user can view all their mail inbox.

### Prerequisites
- ReactJS, redux, redux saga

### Structure
- **index.js:** Our entry point
- **app.js:** Our main app. It utilize react router to navigate to pages
- **pages:** We have only one page email board. Pages contains **containers**
- **containers:** Contains all smart components. Containers contains **components**
- **components:** Contains all normal components

### CSS Architect
- Theme: We use global theme scss in that: **core** theme overide **bootstrap**, our **customization** overide **core** theme
- We use [BEM methodology](https://www.toptal.com/css/introduction-to-bem-methodology)

### Notes
- We're using [React Font Awesome 5](https://github.com/FortAwesome/react-fontawesome)

### Credits
- [Cloned theme](http://pages.revox.io/dashboard/3.0.0/html/condensed/email.html)
