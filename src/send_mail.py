import yagmail
import argparse

user_email = 'gdpraider@gmail.com'
oauth2_file = 'oauth2_creds.json'

args = argparse.ArgumentParser()
args.add_argument('target_email', str, 'Email address you want to send to.')
args.add_argument('message_type', str, 'Type of message you want to send.')

template = None

yag = yagmail.SMTP(user_email, oauth2_file=oauth2_file)
yag.send(to=args.target_email, subject="Great!", message=template)