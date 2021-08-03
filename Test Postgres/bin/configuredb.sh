#!/bin/bash

export PGPASSWORD = 'password'

database="squaddb"

echo "Configuring database: $database"
dropdb -U postgres squaddb
createdb -U postgres squaddb

psql -U postgres squaddb < ./bin/sql/squad.sql

echo "$database conifgured"