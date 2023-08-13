\c songs_dev;
INSERT INTO artist (name,genre) VALUES
('Vybz Kartel','Dancehall'),
('50 Cent', 'Hip-Hop'),
('Mavado', 'Dancehall'),
('Elephant Man','Dancehall'),
('Killah Priest', 'Hip-Hop'),
('Bayka','Dancehall'),
('NSG', 'Afrobeats'),
('Alaine','R&B'),
('Positive','Dancehall'),
('Eminem','Hip-Hop');

INSERT INTO songs (name, artist, album, time ,is_favorite) VALUES
('Truth', 'Bayka, NSG', 'Single','2:36', true),
('Real & Blessed', 'Positive, Alaine', 'Heartwired','3:40', true),
('Who We Are', 'Elephant Man, Killah Priest', 'Good 2 Go','3:45', true),
('Put It On Hard', 'Vybz Kartel', 'Snap Back Riddim','2:30', true),
('Hustle the Money', 'Vybz Kartel', 'Single','2:36', false),
('Blood Moon', 'Mavado', 'Single','2:55', true),
('Big League', 'Mavado', 'Cure Pain Riddim','3:26', true),
('Patiently Waiting', '50 Cent, Eminem', 'Get Rich Or Die Tryin','4:49', true);

INSERT INTO collaborations (song_id, artist_id) VALUES
(1,6),
(1,7),
(2,9),
(2,8),
(3,4),
(3,5),
(8,2),
(8,10);