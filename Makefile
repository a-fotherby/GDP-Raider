
.PHONY: run debug
run:
	FLASK_APP=src/root.py flask run

debug:
	FLASK_APP=src/root.py FLASK_ENV=development flask run
