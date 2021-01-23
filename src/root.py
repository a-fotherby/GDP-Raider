from flask import Flask
import redis
from werkzeug.utils import secure_filename

app = Flask(__name__)

redis_url = 'redis://localhost:6379'
conn = redis.from_url(redis_url)

@app.route('/')
def test():
    return 'Hello, World'

@app.route('/api/companies')
def getcompanies():
    companies = []
    return companies

@app.route('/api/companies/<company>')
def getcompanydets(company):
    dets = []
    return dets

@app.route('/api/<username>/<company>')
def getusercompanydetails(username, company):
    details = {}
    return details

@app.route('/api/add-company')
def addcompany(company, details):
    pass

@app.route('/api/getemailtext/<kind>')
def getemailtext(kind):
    return ""

@app.route('/api/sendemail/<username>')
def sendemail(username):
    text = ""
    pass

@app.route('/api/getemails/<username>/<company>')
def getemails(username, company):
    resp = conn.lrange(f"{username}:{company}:emails", 0, -1)
    return str(resp)

@app.route('/api/addemail/<username>/<company>', methods=['GET', 'POST'])
def setemail(username, company):
    email = "test_email"
    resp = conn.lpush(f"{username}:{company}:emails", email)
    return str(resp)
