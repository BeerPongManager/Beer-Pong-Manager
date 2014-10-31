Beer Pong Manager
=================

About ?
================

Website of http://Bpong.eu and future home of Beer Pong Manager System

How to run the project:
=================

You will need to run a mongo database or connection to a remote one, you can set the mongo DSN on config/db.js

All the jade files should be in the templates foler to be compiled to html

```javascript
npm install // this runs npm and bower install for all deps

npm start // runs the server with local mongo database
```

* If you are asked by bower to choose a suitable angular version, chose angular#_1.3.0

Grunt Commands:
=================

grunt watch   - Waits for JADE and SASS changes and compiles the files.
