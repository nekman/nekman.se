# CSS Directory
CSS_DIR = css/
 
# LESS Directory
LESS_DIR = less/
 
# minify CSS with LESSC
css:
	lessc ${LESS_DIR}main.less ${CSS_DIR}main.min.css -compress
 
# minify JavaScript with UgilifyJS
js:
	r.js -o build.js

all: css js

.PHONY: css js

