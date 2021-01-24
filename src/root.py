from flask import Flask, request, render_template
import redis
from werkzeug.utils import secure_filename

import email_templates as templates
from emailing import send_email
import database as db
import json

app = Flask(__name__)

#Populate companies field
db.ingest_company_db()

dummy_user = "user"

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/api/send-request', methods=['POST'])
def endpoint_send_request():
    print(request.get_json())
    data = request.get_json()
    sender = data['name']
    company_id = data['company']
    login_credentials = data['account']

    userid = dummy_user

    user = db.get_user_details(userid)
    target_email = db.get_company(company_id)['email']
    body = templates.request_template(sender, target_email, user['legal-name'], login_credentials)

    send_email(body, sender, target_email)
    db.save_email(userid, company_id, 'data-request', body)

@app.route('/api/send-removal', methods=['POST'])
def endpoint_send_removal():
    data = request.get_json()
    sender = data['name']
    company_id = data['company']
    removal_list = data['removal_list']
    login_credentials = data['account']

    userid = dummy_user

    user = db.get_user_details(userid)
    target_email = db.get_company(company_id)['email']
    body = templates.removal_template(sender, target_email, user['legal-name'], removal_list, login_credentials)

    send_email(body, sender, target_email)
    db.save_email(userid, company_id, 'data-removal', body)

@app.route('/api/send-followup', methods=['POST'])
def endpoint_send_followup():
    data = request.get_json()
    sender = data['name']
    company_id = data['company']
    login_credentials = data['account']

    userid = dummy_user

    user = db.get_user_details(userid)
    target_email = db.get_company(company_id)['email']
    previous_date = db.get_last_response(userid, company_id)['timestamp']
    previous_date = datetime.fromtimestamp(previous_date).strftime('%Y-%m-%d')
    body = templates.followup_template(sender, target_email, user['legal-name'], previous_date)

    send_email(body, sender, target_email)
    db.save_email(userid, company_id, 'followup', body)

@app.route('/api/get-emails/<userid>/<companyid>')
def get_emails(userid, companyid):
    return db.get_emails(userid, companyid)

@app.route('/api/new-company', methods=['POST'])
def add_company():
    company_name = request.form['company-name']
    email_address = request.form['email_address']
    db.add_company(company_name, {'name':company_name, 'email':email_address})

@app.route('/api/get-companies')
def get_companies():
    return json.dumps(db.get_companies())

@app.route('/api/get-company/<company>')
def get_company(company):
    emails = db.get_emails(dummy_user, company)
    return {'company':db.get_company(company), 'interaction':emails}

@app.route('/api/set-user', methods=['POST'])
def set_user():
    userid = request.form['userid']
    legal_name = request.form['legal-name']

    db.set_user_details(userid, {'username':userid, 'legal-name':legal_name})

@app.route('/api/add-email', methods=['POST'])
def add_email():
    userid = request.form['userid']
    companyid = request.form['companyid']
    email = request.form['email']

    db.add_email_to_db(userid, companyid, email)
