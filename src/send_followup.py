import yagmail
from emailing import send_followup

oauth2_file = 'oauth2_creds.json'

if __name__ == "__main__":
    import argparse

    args = argparse.ArgumentParser()
    args.add_argument('sender', str, "User's email address.")
    args.add_argument('target_email', str, 'Email address you want to send to.')
    args.add_argument('user_name', str, 'Name of the user, e.g. Richard Head.')
    args.add_argument('previous_date', str, 'Date of the previously sent GDPR request.')

    send_followup(args.sender, args.target_email, args.user_name, args.previous_data)
