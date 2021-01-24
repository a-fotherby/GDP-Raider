
.PHONY: run
run: redis ui
	FLASK_APP=src/root.py flask run

.PHONY: debug
debug: redis ui
	FLASK_APP=src/root.py FLASK_ENV=development flask run

.PHONY: redis
redis:
	redis-cli ping || redis-server --daemonize yes

.PHONY: ui
ui:
	cd ui && npm run build
