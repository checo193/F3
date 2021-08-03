CREATE TABLE squad(
  id serial,
  name varchar(255) NOT NULL,
  games int,
  wins int,
  losses int,
  goals int,
  motms int,
  teamGoals int,
  goalsConceded int,
  url varchar(255)
);

INSERT INTO squad(name, games, wins, losses, goals, motms, teamGoals, goalsConceded, url)
Values
('Daniel', 0,0,0,0,0,0,0,'https://images.generated.photos/W3lBHlZJKg66rxGK6BHV4Ft2pfQ_wQiK2UGv1ikS6bQ/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zLWNv/bmRpdGlvbmFsLzhi/NWFlZDhiLWEyOTQt/NDI1Yy04ZDkyLTlh/NWZlNzQ5ZGI0ZC5q/cGc.jpg');