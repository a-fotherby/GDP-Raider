from flask import Flask
import redis
from werkzeug.utils import secure_filename

app = Flask(__name__)

redis_url = 'redis://localhost:6379'
conn = redis.from_url(redis_url)

@app.route('/')
def test():
    return 'Hello, World'

@app.route('/api/getemails/<username>/<company>')
def getemails(username, company):
    resp = conn.lrange(f"{username}:{company}:emails", 0, -1)
    return str(resp)

@app.route('/api/addemail/<username>/<company>', methods=['GET', 'POST'])
def setemail(username, company):
    email = "test_email"
    resp = conn.lpush(f"{username}:{company}:emails", email)
    return str(resp)
