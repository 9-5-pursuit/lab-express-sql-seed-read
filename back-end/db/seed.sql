\c tuner_dev;

INSERT INTO artists (name)
VALUES
('David Bowie'),
('Talking Heads'),
('Hüsker Dü'),
('Wolf Parade'),
('Icona Pop');

INSERT INTO songs (name, artist, album, time, is_favorite, artist_id) VALUES
('Fame', 'David Bowie', 'Young Americans', '4:12', true, 1 ),
('Once in a Lifetime', 'Talking Heads', 'Remain in Light', '4:19', true, 2 ),
('The Great Curve', 'Talking Heads', 'Sand in the Vaseline', '5:39', true, 2 ),
('(Nothing But) Flowers',  'Talking Heads', 'Remain in Light', '6:28', false, 2 ),
('Books about UFOs', 'Hüsker Dü', 'New Day Rising', '2:49', true, 3 ),
('Mr. Startup', 'Wolf Parade', 'Thin Mind', '3:31', true, 4 ),
('We Got the World', 'Icona Pop', 'This is...', '3:17', false, 5 );