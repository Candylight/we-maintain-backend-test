FROM mongo:latest

ADD import.sh /tmp/
RUN chmod +x /tmp/import.sh
COPY bands.json concerts.json venues.json /tmp/

CMD ["/tmp/import.sh"]
