clean:
	rm -f Archive.zip

build:
	zip Archive.zip -r css/ js/ index.html
