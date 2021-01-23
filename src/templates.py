def request_template(sender, receiver, user_name, login_credentials):
    """Initial email to request GDPR data from a company."""
    
    login_string=compose_list(login_credentials)
    
    template = f"""\
Subject: GDPR Request
To: {receiver}
From: {sender}

To Whom It May Concern:

I am hereby requesting access according to Article 15 GDPR. Please confirm whether or not you are processing personal data (as defined by Article 4(1) and (2) GDPR) concerning me.

The data is associated with the following login credentials:

{login_string}

In case you are, I am hereby requesting access to the following information pursuant to Article 15 GDPR:

all personal data concerning me that you have stored, including any potential pseudonymised data on me as per Article 4(5) GDPR;
the purposes of the processing;
the categories of personal data concerned;
the recipients or categories of recipient to whom the personal data have been or will be disclosed;
where possible, the envisaged period for which the personal data will be stored, or, if not possible, the criteria used to determine that period;
where the personal data are not collected from the data subject, any available information as to their source;
the existence of automated decision-making, including profiling, referred to in Article 22(1) and (4) GDPR and, at least in those cases, meaningful information about the logic involved, as well as the significance and the envisaged consequences of such processing for me.
In case you are processing anonymised data concerning me, please not only inform me about that but also explain the procedure used in an easily understandable way.

If you are transferring my personal data to a third country or an international organisation, I request to be informed about the appropriate safeguards according to Article 46 GDPR concerning the transfer.

[Please make the personal data concerning me, which I have provided to you, available to me in a JSON format as laid down in Article 20(1) GDPR.]

My request explicitly includes any other services and companies for which you are the controller as defined by Article 4(7) GDPR.

As laid down in Article 12(3) GDPR, you have to provide the requested information to me without undue delay and in any event within one month of receipt of the request. According to Article 15(3) GDPR, you have to answer this request without cost to me.

I am including the following information necessary to identify me:
Enter your identification data here. This often includes information like your name, your date of birth, your address, your email address and so on.

If you do not answer my request within the stated period, I am reserving the right to take legal action against you and to lodge a complaint with the responsible supervisory authority.

Thank you in advance.

Yours sincerely,
{user_name}"""

    return template

def removal_template(sender, receiver, user_name, removal_list, login_credentials):
    
    removal_string = compose_list(removal_list)
    
    login_string = compose_list(login_credentials)
    
    template = f"""\
Subject: GDPR Request
To: {receiver}
From {sender}
Hello,

In accordance with Article 17 of the European General Data Protection Regulation, please proceed to the erasure of my personal data without undue delay.

Please delete the following information associated with my accounts:

{removal_string}
Accounts may be associated with the following login credentials.

{login_string}
Please confirm when this operation has been completed.

Best wishes,

{user_name}
"""
    
    return template

def followup_template(sender, receiver, user_name, last_date):
    template = f"""\
Subject: GDPR Request
To: {receiver}
From {sender}
Hello,

I am following up on the GDPR request made on {last_date}. I am reminding you that in accordance with In accordance with Article 17 of the
European General Data Protection Regulation you must comply with my requst within one month of the intial request. This time frame has now elapsed
and I am entitled to take legal action against your organisation.

Please comply within the next two weeks or I will be forced to initiate legal preoceedings.

Please confirm when this operation has been completed.

Best wishes,

{user_name}
"""
    
    return None

def compose_bullet_list(lst):
    
    bullet_list = ""
    
    for entry in lst:
            for entry in lst:
        bullet_list += ("- {}\n".format(entry))
    
    return bullet_lst