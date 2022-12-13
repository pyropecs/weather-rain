-- CREATE DATABASE weather;

CREATE TABLE weather(
id BIGSERIAL PRIMARY KEY,
temperature NUMERIC,
time TIMESTAMP,
altitude NUMERIC,
dew_point NUMERIC,
pressure NUMERIC,
rain NUMERIC,
humidity NUMERIC );