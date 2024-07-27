FROM python:3.12.4

WORKDIR /Users/mustafahaita/Desktop/DjangoAirBnb/backend/airbnb_backend

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONBUFFERED 1

RUN apt-get update && apt-get install -y netcat-traditional

RUN pip install --upgrade pip
COPY ./requirements.txt .
RUN pip install -r requirements.txt

COPY ./entrypoint.sh .
RUN sed -i 's/\r$//g' /Users/mustafahaita/Desktop/DjangoAirBnb/backend/airbnb_backend/entrypoint.sh
RUN chmod +x /Users/mustafahaita/Desktop/DjangoAirBnb/backend/airbnb_backend/entrypoint.sh

COPY . .

ENTRYPOINT [ "/Users/mustafahaita/Desktop/DjangoAirBnb/backend/airbnb_backend/entrypoint.sh" ]
