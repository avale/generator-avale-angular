# generator-avale-angular [![NPM version][npm-image]][npm-url] [![Dependency Status][daviddm-image]][daviddm-url]
> Yeoman generator for quickly scaffolding AngularJS apps, based on [Swiip/generator-gulp-angular](https://github.com/Swiip/generator-gulp-angular/tree/v1.0.0)

## Installation

First, install [Yeoman](http://yeoman.io) and generator-avale-angular using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-avale-angular
```

Then generate your new project:

```bash
yo avale-angular
```
## Yo options
`yo avale-angular --help` or `yo avale-angular -h` for help. All options are not required. If not provided, default values will be used.

* `--app-path='src'` customize Angular's app folder, relative to cwd, default is `src`
* `--dist-path='dist'` customize build target folder, relative to cwd, default is `dist`
* `--e2e-path='e2e'` customize e2e test specs folder, relative to cwd, default is `e2e`
* `--tmp-path='.tmp'` customize pre-processing temp folder, relative to cwd, default is `.tmp`
* `--skip-install` do not run `bower install` and `npm install` after generating the app, default is `false` (not skip)
* `--skip-welcome-message` skip yo welcome messages, default is `false` (not skip)
* `--skip-message` skip install messages, default is `false` (not skip)
* `--default` use default configurations, default is `false`
* `--advanced` prompt for advanced additional features, default is `false`


Paths configuration are stored in `gulpfile.js`. Change `options.(src|dist|tmp|e2e)` in `gulpfile.js` if you want to config paths after the app is generated.

**Warning**: The paths are also written in the `index.html` for the build with useref. If you want to change these paths, you also have to change the paths there in order to have the build task working.

## Use Gulp tasks

* `gulp` or `gulp build` to build an optimized version of your application in `/dist`
* `gulp serve` to launch a browser sync server on your source files
* `gulp serve:dist` to launch a server on your optimized application
* `gulp test` to launch your unit tests with Karma
* `gulp test:auto` to launch your unit tests with Karma in watch mode
* `gulp protractor` to launch your e2e tests with Protractor
* `gulp protractor:dist` to launch your e2e tests with Protractor on the dist files
* `gulp licenses` to generate a licenses file containing all the licenses from the bower_components folder

More information on the gulp tasks in the [generator-gulp-angular/User Guide](https://github.com/Swiip/generator-gulp-angular/blob/v1.0.0/docs/user-guide.md).

## Directory structure

Running the command above will generate the following directory structure:

<pre>
├──  bower_components/
├──  e2e/
├──  gulp/
├──  nodes_modules/
│
├──  src/
│   ├──  app/
│   │   ├──  main/
│   │   │   ├──  main.controller.(js|ts|coffee)
│   │   │   ├──  main.controller.spec.js
│   │   │   └──  main.html
│   │   │
│   │   └──  app.config.(js|ts|coffee)
│   │   └──  app.constants.(js|ts|coffee)
│   │   └──  app.module.(js|ts|coffee)
│   │   └──  app.route.(js|ts|coffee)
│   │   └──  app.run.(js|ts|coffee)
│   │   └──  app.(scss|css)
|   |
│   ├──  assets/
│   │   ├──  styles/
│   │   │   ├──  _misc.scss
│   │   │   ├──  _mixins.scss
│   │   │   ├──  _variables.scss
│   │   │   └──  base.scss
|   |   |
│   │   ├──  translations/
│   │   │   ├──  en.json
│   │   │   └──  sv.json
|   |   |
│   │   └──  images/
|   |
│   ├──  config/
│   │   ├──  env-at.js
│   │   ├──  env-local.js
│   │   └──  env-prod.js
|   |
│   ├──  favico.png
│   └──  index.html
│
├──  .bowerrc
├──  .editorconfig
├──  .gitignore
├──  .eslintrc
├──  bower.json
├──  gulpfile.js
├──  karma.conf.js
├──  package.json
└──  protractor.conf.js
</pre>

## License

MIT © [Andreas Valegård](http://avale.se)


[npm-image]: https://badge.fury.io/js/generator-avale-angular.svg
[npm-url]: https://npmjs.org/package/generator-avale-angular
[daviddm-image]: https://david-dm.org/avale/generator-avale-angular.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/avale/generator-avale-angular
