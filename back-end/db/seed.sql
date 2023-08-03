\c tuner;

INSERT INTO artists (name)
VALUES ('Beyonce'), ('Post Malone'), ('Alex Jean');

INSERT INTO songs (name, artist, album, time, is_favorite, artist_id) 
VALUES ('CUFF IT', 'Beyonce', 'Renaissance', '3:52', false, 1), 
('Sunflower', 'Post Malone', 'Spider-Man: Into the Spider-Verse', '2:38', true, 2), 
('Right Over Wrong', 'Alex Jean', 'Unreleased Album', '3:45', true, 3),
('Single Ladies (Put a Ring on It)', 'Beyoncé', 'I Am... Sasha Fierce', '3:13', true, 1),
('Halo', 'Beyoncé', 'I Am... Sasha Fierce', '4:21', true, 1),
('Crazy in Love', 'Beyoncé', 'Dangerously in Love', '3:56', true, 1),
('Formation', 'Beyoncé', 'Lemonade', '3:26', true, 1),
('Love on Top', 'Beyoncé', '4', '4:27', true, 1),
('Run the World (Girls)', 'Beyoncé', '4', '3:56', true, 1),
('Drunk in Love (feat. Jay-Z)', 'Beyoncé', 'Beyoncé', '5:23', true, 1),
('If I Were a Boy', 'Beyoncé', 'I Am... Sasha Fierce', '4:10', true, 1),
('Partition', 'Beyoncé', 'Beyoncé', '5:19', true, 1);