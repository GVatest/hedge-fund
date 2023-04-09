from django.core.management import call_command


def my_scheduled_job():
    try:
        call_command("dbbackup")
    except:
        pass
