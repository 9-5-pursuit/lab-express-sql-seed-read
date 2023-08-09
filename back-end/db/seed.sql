\c songs_dev;

-- INSERT INTO artists (name, genre)
-- VALUES 
-- ('Dr. Dre', 'Rap'),
-- ('Boston', 'Rock'),
-- ('Nirvana', 'Grunge Rock'),
-- ('The Weeknd', 'R&B'),
-- ('Frank Sinatra', 'Vocal Jazz');

-- INSERT INTO songs (name, artist, album, time, is_favorite, artist_id)
-- VALUES
-- ('Still D.R.E.', 'Dr. Dre', '2001', '4:50', true, '1'), 
-- ('More than a Feeling', 'Boston', 'Boston', '3:36', true, '2'),
-- ('Come as you are', 'Nirvana', 'Nevermind', '3:44', true, '3'),
-- ('Smells Like Teen Spirit', 'Nirvana', 'Nevermind', '5:01', true, '3'),
-- ('Blinding Lights', 'The Weeknd', 'After hours', '4:22', true, '4'),
-- ('Peace of Mind', 'Boston', 'Boston', '5:05', false, '2'),
-- ('Fly Me To The Moon', 'Frank Sinatra', 'Nothing But The Best', '2:28', false, '5'),
-- ('The Best is Yet To Come', 'Frank Sinatra', 'Nothing But The Best', '2:56', true, '5'),
-- ('Lithium', 'Nirvana', 'Nevermind', '4:17', false, '3');


INSERT INTO songs (name, artist, album, time, is_favorite)
VALUES
('Still D.R.E.', 'Dr. Dre', '2001', '4:50', true), 
('More than a Feeling', 'Boston', 'Boston', '3:36', true),
('Come as you are', 'Nirvana', 'Nevermind', '3:44', true),
('Smells Like Teen Spirit', 'Nirvana', 'Nevermind', '5:01', true),
('Blinding Lights', 'The Weeknd', 'After hours', '4:22', true),
('Peace of Mind', 'Boston', 'Boston', '5:05', false),
('Fly Me To The Moon', 'Frank Sinatra', 'Nothing But The Best', '2:28', false),
('The Best is Yet To Come', 'Frank Sinatra', 'Nothing But The Best', '2:56', true),
('Lithium', 'Nirvana', 'Nevermind', '4:17', false);

