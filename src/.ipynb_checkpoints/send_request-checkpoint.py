import yagmail

oauth2_file = 'oauth2_creds.json'

def send_email(msg, src, dst):
    yag = yagmail.SMTP(src, oauth2_file=oauth2_file)
    yag.send(to=dst, message=msg)

def send_request(sender, target_email, username, login_credentials):
    message = templates.request_template(sender, target_email, user_name, login_credentials)
    send_email(message, sender, target_email)

if __name__ == "__main__":
    import argparse

    args = argparse.ArgumentParser()
    args.add_argument('sender', str, "User's email address.")
    args.add_argument('target_email', str, 'Email address you want to send to.')
    args.add_argument('user_name', str, 'Name of the user, e.g. Richard Head.')
    args.add_argument('login_credentials', list, 'List of login credentials associated with accounts.')

    send_request(args.sender, args.target_email, args.user_name, args.login_credentials)
