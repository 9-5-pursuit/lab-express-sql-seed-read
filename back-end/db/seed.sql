\c songs_dev;

INSERT INTO
  songs(title, artist, album, time, is_favorite)
VALUES
('Risk', 'FKJ', 'risk', 200, TRUE),
('POF', 'Ari Lennox', 'A/S/L', 300, TRUE),
('Slippin', 'DMX', 'Flesh Of My Flesh, Blood Of My Blood', 505, TRUE),
('You Oughta Know', 'Alanis Morrisette', 'Jagged Little Pill', 409, TRUE),
('Thats The Way Of The World', 'Earth, Wind & Fire', 'Thats The Way Of World', 545, TRUE ),
('This Aint A Scene, Its An Arms Race', 'Fall Out Boy','Infinity On High', 332, TRUE),
('NY State Of Mind', 'Nas', 'Illmatic', 453, TRUE),
('Dreams', 'Fleetwood Mac', 'Rumours', 417, TRUE),
('Just a girl','No Doubt', 'Tragic Kingdom', 329, TRUE ),
('Superstition', 'Stevie Wonder', 'Talking Book', 426, TRUE),
('Tell Me', 'Groove Theory', 'Groove Theory', 356, True),
('Rebirth of Slick(Cool Like Dat)', 'Digable Planets', 'Reachin (A New Refutation Of Time And Space)', 421, TRUE ),
('Lets Go Crazy','Prince', 'Purple Rain', 400, TRUE);


INSERT INTO
  playlists( song_id, name, genre)
VALUES
('1', 'Chill Mix', 'R&B/Soul'),
('2','Chill Mix', 'R&B/Soul'),
('11','Chill Mix', 'R&B/Soul'),
('12','Chill Mix', 'Hip Hop'),
('12', '90s Rap', 'Hip Hop'),
('7', '90s Rap', 'Hip Hop'),
('3', '90s Rap', 'Hip Hop'),
('4', 'Rock Mix', 'Alternative Rock'),
('6', 'Rock Mix', 'Rock'),
('8', 'Rock Mix', 'Alternative Rock'),
('9', 'Rock Mix', 'Ska Rock'),
('5', 'Oldie But Goodie', 'R&B/Soul'),
('8', 'Oldie But Goodie', 'Alternative Rock'),
('10', 'Oldie But Goodie', 'R&B Soul'),
('13', 'Oldie But Goodie', 'Funk');
