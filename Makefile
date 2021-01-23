
.PHONY: run
run: redis
	FLASK_APP=src/root.py flask run

.PHONY: debug
debug: redis
	FLASK_APP=src/root.py FLASK_ENV=development flask run

.PHONY: redis
redis:
	redis-cli ping || redis-server --daemonize yes
