## Easy unit testing.

So after perusing the web and reading a few blogs, I've discovered that karma with jasmine is pretty easy and cool to use.

So right now, I'm simply just running a test on one spec file, testing vars inside the file alone, and not relying on any other js file to be executed.

In a real world, I would be testing this against either a bundle or source files.

## Create some tiny project

Using bash or explorer or something make some tiny project dir
```bash
mkdir ~/my-cool-project
```

git push -u origin master
## Setup the node

```bash
npm init  (then press enter a bunch of times)
```

## Install global dependencies:

So from [this blog](http://kroltech.com/2013/11/20/javascript-tdd-with-jasmine-and-karma/) I ran this:

Also installing karma-cli is based on the [introduction instructions](http://karma-runner.github.io/0.13/intro/installation.html) from their website.
```bash
npm install -g mocha karma-cli phantomjs
```
## install local dependencies:

Aside from the previously mentioned blog post, I discovered how to [make the test runner use mocha](https://www.npmjs.com/package/karma-mocha-reporter), and also [use phantomJS instead of chrome](https://github.com/karma-runner/karma-phantomjs-launcher).


```bash
npm install jasmine-core phantomjs karma karma-jasmine karma-mocha-reporter karma-phantomjs-launcher --save-dev
```

## run karma configurator

I used the config generator by running `karma init` - explained [here](http://karma-runner.github.io/0.13/intro/configuration.html)

```bash
karma init my.conf.js
```

... Pressed enter a bunch of times...


## The karma config file

However, it wasn't perfect, and I ended up [http://karma-runner.github.io/0.13/config/configuration-file.html](reviewing the documentation here) to modify my config file..

- I set autowatch to true
- I set singeRun to true
- I set the tests to ``src/**/*.spec.js``

## Running Karma

I found it easier to just throw in the command to package.json instead of typing it out..

```bash
karma start my.conf.js
```


## package.json file ends up looking like this:

```javascript
{
  "name": "my-cool-project",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
    "scripts": {
      "test": "karma start my.conf.js --single-run"
    },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "jasmine-core": "^2.3.4",
    "karma": "^0.13.15",
    "karma-jasmine": "^0.3.6",
    "karma-mocha-reporter": "^1.1.1",
    "karma-phantomjs-launcher": "^0.2.1",
    "phantomjs": "^1.9.18"
  }
}

```

## actual test

The test is in src/derp.spec.js - and is closely following the [documentation found on jasmine's website](http://jasmine.github.io/2.3/introduction.html).