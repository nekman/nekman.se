# CSS Directory
CSS_DIR = css/
 
# LESS Directory
LESS_DIR = less/
 
# compile CSS with LESSC 
# minify font-awesome.min.css and main.css with cleancss
# remove output file
css:
	lessc ${LESS_DIR}main.less ${CSS_DIR}main.css
	cat ${CSS_DIR}font-awesome.min.css ${CSS_DIR}main.css | cleancss -o ${CSS_DIR}app.min.css
	rm -f ${CSS_DIR}main.css
 
# minify JavaScript with RequireJS optimizer
js:
	r.js -o build.js

#run specs with jasmine
test: 
	jasmine-node test --verbose

all: css js test

.PHONY: css js test

