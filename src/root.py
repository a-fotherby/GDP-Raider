from flask import Flask, request, render_template
import redis
from werkzeug.utils import secure_filename

import email_templates as templates
from emailing import send_email
import database as db

app = Flask(__name__)

#Populate companies field
db.ingest_company_db()

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/api/send-request/<userid>', methods=['POST'])
def endpoint_send_request(userid):
    sender = request.form['sender']
    company_id = request.form['company-id']
    login_credentials = request.form['login_credentials']
    target = request.form['target_email']

    user = db.get_user_details(userid)
    target_email = db.get_company(company_id)['email']
    body = templates.request_template(sender, target_email, user['legal-name'], login_credentials)

    send_email(body, sender, target_email)
    db.save_email(userid, company_id, body)

@app.route('/api/send-removal/<userid>', methods=['POST'])
def endpoint_send_removal(userid):
    sender = request.form['sender']
    company_id = request.form['company-id']
    removal_list = request.form['removal_list']
    login_credentials = request.form['login_credentials']

    user = db.get_user_details(userid)
    target_email = db.get_company(company_id)['email']
    body = templates.removal_template(sender, target_email, user['legal-name'], removal_list, login_credentials)

    send_email(body, sender, target_email)
    db.save_email(userid, company_id, body)

@app.route('/api/send-followup/<userid>', methods=['POST'])
def endpoint_send_followup(userid):
    sender = request.form['sender']
    company_id = request.form['company-id']
    login_credentials = request.form['login_credentials']

    user = db.get_user_details(userid)
    target_email = db.get_company(company_id)['email']
    previous_date = db.get_last_response(userid, company_id)['timestamp']
    previous_date = datetime.fromtimestamp(previous_date).strftime('%Y-%m-%d')
    body = templates.followup_template(sender, target_email, user['legal-name'], previous_date)

    send_email(body, sender, target_email)
    db.save_email(userid, company_id, body)

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
    return db.get_companies()

@app.route('/api/get-company/<company>')
def get_company(c):
    return db.get_company(c)

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
