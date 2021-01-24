import yagmail

oauth2_file = 'oauth2_creds.json'

def send_email(msg, src, dst):
    yag = yagmail.SMTP(src, oauth2_file=oauth2_file)
    yag.send(to=dst, message=msg)

def send_request(sender, target_email, username, login_credentials):
    message = templates.request_template(sender, target_email, user_name, login_credentials)
    send_email(message, sender, target_email)

def send_removal(sender, target_email, username, removal_list, login_credentials):
    message = templates.removal_template(sender, target_email, user_name, removal_list, login_credentials)
    send_email(message, sender, target_email)

def send_followup(sender, target_email, username, previous_date):
    message = templates.followup_template(sender, target_email, user_name, previous_date)
    send_email(message, sender, target_email)


