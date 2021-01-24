import yagmail
import argparse

oauth2_file = 'oauth2_creds.json'

args = argparse.ArgumentParser()
args.add_argument('target_email', str, 'Email address you want to send to.')
args.add_argument('user_name', str, 'Name of the user, e.g. Richard Head.')
args.add_argument('login_credentials', list, 'Name of the user, e.g. Richard Head.')
args.add_argument('sender', list, "User's email address.")

message = templates.request_template(args.sender, args.target_email, args.user_name, args.login_credentials)

yag = yagmail.SMTP(args.sender, oauth2_file=oauth2_file)
yag.send(to=args.target_email, message=message)