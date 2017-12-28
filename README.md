# emrbackend

> Nuxt.js project

## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm start
```

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).

## Backpack

We use [backpack](https://github.com/palmerhq/backpack) to watch and build the application, so you can use the latest ES6 features (module syntax, async/await, etc.).


##Current App Flow

1. Client lands on emrworx.com, search bar is populated via Diagnosis.js
2. Client clicks a diagnosis, the diagnosis CODE is sent to the Server
3. The CODE is a proxy for a template in Finds.js
4. The server populates the template in the Finds model and sends back template
(The template is divided into its meta data and sections, and therefore populates
  its sections. A section being just a header + text)
5. Client sees template data (like name) + sections
