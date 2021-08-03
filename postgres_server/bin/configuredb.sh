#!/bin/bash

export PGPASSWORD = 'password'

database="squaddb"

echo "Configuring database: $database"
dropdb -U node_user squaddb
createdb -U node_user squaddb

psql -U node_user squaddb < ./bin/sql/squad.sql

echo "$database conifgured"