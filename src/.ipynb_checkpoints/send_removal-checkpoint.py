import yagmail

oauth2_file = 'oauth2_creds.json'

def send_email(msg, src, dst):
    yag = yagmail.SMTP(src, oauth2_file=oauth2_file)
    yag.send(to=dst, message=msg)

def send_request(sender, target_email, username, removal_list, login_credentials):
    message = templates.removal_template(sender, target_email, user_name, removal_list, login_credentials)
    send_email(message, sender, target_email)

if __name__ == "__main__":
    import argparse

    args = argparse.ArgumentParser()
    args.add_argument('sender', str, "User's email address.")
    args.add_argument('target_email', str, 'Email address you want to send to.')
    args.add_argument('user_name', str, 'Name of the user, e.g. Richard Head.')
    args.add_argument('removal_list', list, 'List of data categories to be removed.')
    args.add_argument('login_credentials', list, 'List of login credentials associated with accounts.')
                      
    send_request(args.sender, args.target_email, args.user_name, args.removal_list, args.login_credentials)
