# generator-bon-angular [![NPM version][npm-image]][npm-url] [![Dependency Status][daviddm-image]][daviddm-url]
> Yeoman generator for quickly bootstrapping AngularJS apps at Bontouch, based on [Swiip/generator-gulp-angular](https://github.com/Swiip/generator-gulp-angular/tree/v1.0.0)

## Installation

First, install [Yeoman](http://yeoman.io) and generator-bon-angular using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-bon-angular
```

Then generate your new project:

```bash
yo bon-angular
```

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
│   │   │   ├──  sv.json
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

MIT © [Andreas Valegård](http://bontouch.com)


[npm-image]: https://badge.fury.io/js/generator-bon-angular.svg
[npm-url]: https://npmjs.org/package/generator-bon-angular
[daviddm-image]: https://david-dm.org/avale/generator-bon-angular.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/avale/generator-bon-angular
