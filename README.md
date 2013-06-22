# grunt-contrib-jasmine-requirejs-example

> Example application using [grunt-contrib-jasmine] and [grunt-template-jasmine-requirejs].

Cloned from Jarrod Overson's [grunt-contrib-jasmine-example].

## Getting Started
_If you haven't used [grunt][] before, be sure to check out the [Getting Started][] guide._

From the same directory as your project's [Gruntfile][Getting Started] and [package.json][], install the project's dependencies

```bash
npm install
```

Once that's done, you can run the jasmine unit tests via

```js
grunt jasmine
```

`package.json` allows you to define the script to execute when you run 'npm test'

```json
"scripts": {
  "test": "grunt test"
},
```

`grunt test` is registered to run `['jshint', 'jasmine']` to thoroughly test your code.

```js
grunt.registerTask('test', ['jshint', 'jasmine']);
```

[grunt]: http://gruntjs.com/
[Getting Started]: https://github.com/gruntjs/grunt/blob/devel/docs/getting_started.md
[package.json]: https://npmjs.org/doc/json.html
[grunt-contrib-jasmine]: https://github.com/gruntjs/grunt-contrib-jasmine
[grunt-template-jasmine-requirejs]: https://github.com/jsoverson/grunt-template-jasmine-requirejs
[grunt-contrib-jasmine-example]: https://github.com/jsoverson/grunt-contrib-jasmine-example
