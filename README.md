# ui-ranking
Experiment with users to rank UIs aesthetics properties based on a 1 to 1 comparison

Forked, inspired and edited from https://github.com/nithinkrishna/nerdornot

#Getting started
Assuming you have [python](https://www.python.org/downloads/) installed on your machine,
* cd into the project root directory and start a simple http server
```
python -m SimpleHTTPServer 8888
```
if you are using windows you may have to use the http.server instead of SimpleHTTPServer
```
python -m http.server 8888
```
* then browse to [http://localhost:8888](http://localhost:8888) (may need a refresh first to show content)

#About replacing images
If you want to replace the images used for comparisons, you need to follow those steps (i haven't seek for another solution yet)
* Make sure you have [NodeJS](https://nodejs.org/en/download/package-manager/) installed on your machine
* Add your files with ".jpg" extension in the directory "images" at the root of the project
* run the script (test.js) that will explore the directory and create a json structure with file names with the following cmd
```
nodejs test.js
```
The result is "null". That's ok. You may test the app with your new images now.
