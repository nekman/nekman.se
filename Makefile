# CSS Directory
CSS_DIR = css/
 
# LESS Directory
LESS_DIR = less/
 
# minify CSS with LESSC
css:
	lessc ${LESS_DIR}main.less ${CSS_DIR}main.min.css -compress
 
# minify JavaScript with RequireJS optimizer
js:
	r.js -o build.js

#run specs with jasmine
test: 
	jasmine-node spec --verbose

all: css js test

.PHONY: css js

