
\c songs_dev;

INSERT INTO 
    artists(name)

VALUES
    ('Baby Keem'),
    ('The Chainsmokers'),
    ('Conner Price')
    ;

INSERT INTO
    songs(name, artist, album, time, is_favorite)
    
VALUES
    ('APOLOGIZE', 'Baby Keem', 'DIE FOR MY', '3:33', true),
    ('bank account', 'Baby Keem', 'The Melodic Blue', '3:35', true),
    ('Self Dustrction Mode', 'The Chainsmokers', 'Self Destruction Mode', '2:27', false),
    ('Jungle', 'The Chainsmokers', 'Self Destruction Mode', '2:55', false),
    ('See You Again', 'The Chainsmokers', 'Self Destruction Mode', '2:27', false),
    ('Chatter', 'Conner Price', 'Chatter', '2:20', true);