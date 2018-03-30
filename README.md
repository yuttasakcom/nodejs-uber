# NodeJS Uber

## Table of Contents

* src
  * controllers
    * [driverController](https://github.com/yuttasakcom/nodejs-uber/blob/master/src/controllers/driverController.js)
  * models
    * [driver](https://github.com/yuttasakcom/nodejs-uber/blob/master/src/models/driver.js)
  * routes
    * [404](https://github.com/yuttasakcom/nodejs-uber/blob/master/src/routes/404.js)
    * [api](https://github.com/yuttasakcom/nodejs-uber/blob/master/src/routes/api.js)
    * [error](https://github.com/yuttasakcom/nodejs-uber/blob/master/src/routes/error.js)
    * [index](https://github.com/yuttasakcom/nodejs-uber/blob/master/src/routes/index.js)
  * [app](https://github.com/yuttasakcom/nodejs-uber/blob/master/src/app.js)
  * [server](https://github.com/yuttasakcom/nodejs-uber/blob/master/src/server.js)
* test
  * controllers
    * [driverController_test](https://github.com/yuttasakcom/nodejs-uber/blob/master/test/controllers/driverController_test.js)
  * [app_test](https://github.com/yuttasakcom/nodejs-uber/blob/master/test/app_test.js)
  * [test_helper](https://github.com/yuttasakcom/nodejs-uber/blob/master/test/test_helper.js)
* credit
  * [https://www.udemy.com/the-complete-developers-guide-to-mongodb](https://www.udemy.com/the-complete-developers-guide-to-mongodb)

## package.json

```json
{
  "name": "nodejs-uber",
  "version": "1.0.0",
  "main": "index.js",
  "repository": "git@github.com:yuttasakcom/nodejs-uber.git",
  "author": "Yuttasak Pannawat <yuttasakcom@gmail.com>",
  "license": "MIT",
  "scripts": {
    "dev": "nodemon src/server.js",
    "test": "NODE_ENV=test mocha --recursive --exit",
    "test-watch": "NODE_ENV=test nodemon --exec 'mocha --recursive -R min'"
  },
  "dependencies": {
    "body-parser": "^1.18.2",
    "express": "^4.16.3",
    "mocha": "^5.0.5",
    "mongoose": "^5.0.12",
    "supertest": "^3.0.0"
  },
  "devDependencies": {
    "nodemon": "^1.17.2"
  }
}
```
