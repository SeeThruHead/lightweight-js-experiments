# lightweight-js-experiments
testing out preact, preact-redux, rollup to see if we can get a framework for js applications that is more suitable to embedding with similar DX as our standard react setup

Rollup seems to have trouble with commonjs modules in node_modules folder.

Either I import the commonjs module and cannot use named imports anymore,
or I import the src, and have to run babel on it, which means i need the babelrc of the project as well as all it's babel plugins (this is not an option)
some projects export a jsnext:main field that has es5 code but with es6 exports, this works best with rollup but is rare. Would need to be an npm standard for it to be considerable.

I can create my own import filer that exports the name exports that i want from the properties of the commonjs module
but this sucks for many reasons
