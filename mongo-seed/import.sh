#! /bin/bash

mongoimport --host mongodb --db weMaintain --collection bands --type json --file /tmp/bands.json --jsonArray; mongoimport --host mongodb --db weMaintain --collection venues --type json --file /tmp/venues.json --jsonArray; mongoimport --host mongodb --db weMaintain --collection concerts --type json --file /tmp/concerts.json --jsonArray