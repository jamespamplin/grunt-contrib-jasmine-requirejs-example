# grunt-contrib-jasmine-requirejs-example [![Build Status](https://travis-ci.org/jamespamplin/grunt-contrib-jasmine-requirejs-example.png)](https://travis-ci.org/jamespamplin/grunt-contrib-jasmine-requirejs-example)


> Example application using [grunt-contrib-jasmine] and [grunt-template-jasmine-requirejs].

Cloned from Jarrod Overson's [grunt-contrib-jasmine-example].

## Getting Started
- Clone this repo locally.
- If you haven't installed [grunt] yet, check out the [Getting Started] guide, or: `npm install -g grunt-cli`
- Install dependencies by running: `npm install`
- Run the Jasmine tests with: `grunt jasmine`

### Test task
A grunt task has been setup to run jshint and jasmine tests - useful for CI.
- Run the tests with: `grunt test`


Project has also configured [package.json] to run the test tasks by running: `npm test`

## Test setup
Test specs are within the `spec/` directory. Spec files are wrapped in a define method requiring the module to be tested as a dependency.

For example, the spec testing the `player.js` module:
```js
define(['player'], function(player) {
	describe('player module', function() {
		it('should do something with a player object', function() {
			var testPlayer = new player();

			expect(testPlayer.isPlaying).toBeFalsy();
		});
	});
});
```

Generally, spec files should only test a single js module. Ideally, module dependencies should be mocked or stubbed so that the module can be tested in isolation.

[grunt-contrib-jasmine] handles automatic creation of the Jasmine test runner and [grunt-template-jasmine-requirejs] will setup requiring of spec files and module sources. This is all configured within `Gruntfile.js`.

```js
grunt.initConfig({
    jasmine : {
        src : 'src/**/*.js',
        options : {
            specs : 'spec/**/*.js',
            template: require('grunt-template-jasmine-requirejs'),
            templateOptions: {
                requireConfig: {
                        baseUrl: ''
                }
            }
        }
    }
})
```


[grunt]: http://gruntjs.com/
[Getting Started]: https://github.com/gruntjs/grunt/blob/devel/docs/getting_started.md
[package.json]: https://npmjs.org/doc/json.html
[grunt-contrib-jasmine]: https://github.com/gruntjs/grunt-contrib-jasmine
[grunt-template-jasmine-requirejs]: https://github.com/jsoverson/grunt-template-jasmine-requirejs
[grunt-contrib-jasmine-example]: https://github.com/jsoverson/grunt-contrib-jasmine-example
