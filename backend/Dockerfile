FROM python:3.8

ADD . /app
WORKDIR /app

ENV DJANGO_DEBUG=False

RUN pip install -r requirements.txt
RUN python manage.py makemigrations
RUN python manage.py migrate
RUN python manage.py collectstatic --no-input
EXPOSE 8000

CMD ["gunicorn", "--bind", "0.0.0.0:8000", "--workers", "3", "hedge_fund.wsgi"]