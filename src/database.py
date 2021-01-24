import redis
import json
from datetime import datetime
from os import listdir

# Users {username, password, legal name}

# Companies {slug, name, email address}

# Users:Company [{email;time}]

redis_url = 'redis://localhost:6379'
conn = redis.from_url(redis_url)

def decode(b):
    return b.decode('utf-8')

def get_user_details(user_hash):
    username = conn.hget(user_hash, 'username')
    username = decode(username)
    legal = conn.hget(user_hash, 'legal-name')
    legal = decode(legal)
    return {
            'username':username,
            'legal-name': legal
    }

def set_user_details(user_hash, details):
    conn.hset(user_hash, 'username', details['username'])
    conn.hset(user_hash, 'legal-name', details['legal-name'])

def get_company(slug):
    return {
            'name':decode(conn.hget(slug, 'name')),
            'email':decode(conn.hget(slug, 'email'))
            }

companies_set = 'companies'
def get_companies():
    _, companies = conn.sscan(companies_set)
    companies = [decode(c) for c in companies]
    return companies

def add_company(slug, details):
    conn.sadd(companies_set, slug) 
    for key,value in details.items():
        conn.hset(slug, key, value)

def get_user_email_path(user_hash, company_slug):
    return f'{user_hash}:{company_slug}:emails'

def get_emails(user_hash, company_slug):
    emails = conn.lrange(get_user_email_path(user_hash, company_slug), 0, -1)
    emails = [decode(e) for e in emails]
    return [json.loads(email) for email in emails]

def get_last_response(user_hash, company_slug):
    latest = conn.lindex(get_user_email_path(user_hash, company_slug), 0)
    latest = decode(latest)
    if latest == None:
        return None
    return json.loads(latest)

def add_email_to_db(user_hash, company_slug, email_body):
    email = {
            'timestamp':datetime.now().timestamp(),
            'body':email_body
            }
    email = json.dumps(email)
    conn.lpush(get_user_email_path(user_hash, company_slug), email)

def ingest_company_db():
    path = 'company_database'
    files = listdir(path)
    for filename in files:
        filepath = f"{path}/{filename}"
        print(filepath)
        with open(filepath) as file:
            blob = json.load(file)

        slug = blob['slug']
        email = blob['email']
        add_company(slug, {'name':slug, 'email':email})
