-- INSERT INTO songs(name,artist,album,time,is_favorite)
-- VALUES
--  ('This Love', 'Taylor Swift','This love','4:10',true) ,
--  ('I Like Yor','Post Malone','Twelve Carat Tootache','3:12',true),
--  ('We Not Humping','Monaleo','We Not Humping','2:23',false),
--  ('Thousand Miles','The Kid Laori','Thousand Miles','2:24',false),
--  ('Special','Lizzo','Special','2:54',false),
--  ('SNAP','Rosa Linn','SNAP','2:59',false);

-- INSERT INTO artists (name) 
-- VALUES ('David Bowie') ,('Talking Heads'),('Hüsker Dü'),('Wolf Parade'),('Icona Pop'),('Eminem');

-- INSERT INTO albums (name) 
-- VALUES ('Young Americans'),('Remain in Light'),('Sand in the Vaseline'),('New Day Rising'),('Thin Mind'),('This is ...'),('Curtain Call: The Hits')

--  INSERT INTO songs (name, artist, album, time, is_favorite,artist_id,album_id) 
--  VALUES
--     ('Fame', 'David Bowie', 'Young Americans', '4:12', true,1 ,1),
--     ('Once in a Lifetime', 'Talking Heads', 'Remain in Light', '4:19', true ,2,2),
--     ('The Great Curve', 'Talking Heads', 'Sand in the Vaseline', '5:39', true,2,3 ),
--     ('(Nothing But) Flowers',  'Talking Heads', 'Remain in Light', '6:28', false,2,2 ),
--     ('Books about UFOs', 'Hüsker Dü', 'New Day Rising', '2:49', true,3 ,4),
--     ('Mr. Startup', 'Wolf Parade', 'Thin Mind', '3:31', true,4,5 ),
--     ('We Got the World', 'Icona Pop', 'This is...', '3:17', false ,5,6);

\c tuner_db;

INSERT INTO artists (name) 
VALUES ('Eminem'),('Adele'),('Taylor Swift');

INSERT INTO albums (name) 
VALUES ('Curtain Call: The Hits'),('30'),('Midnight');

-- Eminem 
INSERT INTO songs(name,artist,album,time,picture,preview,is_favorite,artist_id,album_id) VALUES ('Mockingbird','Eminem','Curtain Call: The Hits',251,'https://e-cdns-images.dzcdn.net/images/cover/e2b36a9fda865cb2e9ed1476b6291a7d/500x500-000000-80-0-0.jpg','https://cdns-preview-6.dzcdn.net/stream/c-655dfb802c35579d26a32136e3d0e7b3-12.mp3','false',1,1);
INSERT INTO songs(name,artist,album,time,picture,preview,is_favorite,artist_id,album_id) VALUES ('Lose Yourself (From "8 Mile" Soundtrack)','Eminem','Curtain Call: The Hits',326,'https://e-cdns-images.dzcdn.net/images/cover/e2b36a9fda865cb2e9ed1476b6291a7d/500x500-000000-80-0-0.jpg','https://cdns-preview-1.dzcdn.net/stream/c-13039fed16a173733f227b0bec631034-12.mp3','true',1,1);
INSERT INTO songs(name,artist,album,time,picture,preview,is_favorite,artist_id,album_id) VALUES ('The Real Slim Shady','Eminem','Curtain Call: The Hits',284,'https://e-cdns-images.dzcdn.net/images/cover/e2b36a9fda865cb2e9ed1476b6291a7d/500x500-000000-80-0-0.jpg','https://cdns-preview-d.dzcdn.net/stream/c-d28ee67c24d60e740866c7709d772f55-12.mp3','true',1,1);
INSERT INTO songs(name,artist,album,time,picture,preview,is_favorite,artist_id,album_id) VALUES ('Stan','Eminem','Curtain Call: The Hits',404,'https://e-cdns-images.dzcdn.net/images/cover/e2b36a9fda865cb2e9ed1476b6291a7d/500x500-000000-80-0-0.jpg','https://cdns-preview-d.dzcdn.net/stream/c-dbbd5055e0b4b64397e939f75ca0662b-13.mp3','true',1,1);
INSERT INTO songs(name,artist,album,time,picture,preview,is_favorite,artist_id,album_id) VALUES ('The Way I Am','Eminem','Curtain Call: The Hits',291,'https://e-cdns-images.dzcdn.net/images/cover/e2b36a9fda865cb2e9ed1476b6291a7d/500x500-000000-80-0-0.jpg','https://cdns-preview-6.dzcdn.net/stream/c-648abd8c64b8452a703bf48139b0ba64-12.mp3','false',1,1);
INSERT INTO songs(name,artist,album,time,picture,preview,is_favorite,artist_id,album_id) VALUES ('My Name Is','Eminem','Curtain Call: The Hits',268,'https://e-cdns-images.dzcdn.net/images/cover/e2b36a9fda865cb2e9ed1476b6291a7d/500x500-000000-80-0-0.jpg','https://cdns-preview-b.dzcdn.net/stream/c-b410ccaf3c000eeaa74025f558892638-12.mp3','false',1,1);
INSERT INTO songs(name,artist,album,time,picture,preview,is_favorite,artist_id,album_id) VALUES ('When Im Gone','Eminem','Curtain Call: The Hits',281,'https://e-cdns-images.dzcdn.net/images/cover/e2b36a9fda865cb2e9ed1476b6291a7d/500x500-000000-80-0-0.jpg','https://cdns-preview-8.dzcdn.net/stream/c-8aaafada99fb0a10485ea594f664d917-13.mp3','true',1,1);
INSERT INTO songs(name,artist,album,time,picture,preview,is_favorite,artist_id,album_id) VALUES ('Shake That','Eminem','Curtain Call: The Hits',274,'https://e-cdns-images.dzcdn.net/images/cover/e2b36a9fda865cb2e9ed1476b6291a7d/500x500-000000-80-0-0.jpg','https://cdns-preview-f.dzcdn.net/stream/c-f08b2561c8d6d7c0739ac3d83e6903b0-12.mp3','true',1,1);

-- adele 
INSERT INTO songs(name,artist,album,time,picture,preview,is_favorite,artist_id,album_id) VALUES ('Oh My God','Adele',30,225,'https://e-cdns-images.dzcdn.net/images/cover/a87ee7c212c7b0f9ae687c378f260324/500x500-000000-80-0-0.jpg','https://cdns-preview-e.dzcdn.net/stream/c-e97933f9e92c750923baaf2b278aa0a2-3.mp3','true',2,2);
INSERT INTO songs(name,artist,album,time,picture,preview,is_favorite,artist_id,album_id) VALUES ('I Drink Wine','Adele',30,376,'https://e-cdns-images.dzcdn.net/images/cover/a87ee7c212c7b0f9ae687c378f260324/500x500-000000-80-0-0.jpg','https://cdns-preview-5.dzcdn.net/stream/c-521ae12a39824d0a6c13c65fb2a6b31a-3.mp3','false',2,2);
INSERT INTO songs(name,artist,album,time,picture,preview,is_favorite,artist_id,album_id) VALUES ('Easy On Me','Adele',30,224,'https://e-cdns-images.dzcdn.net/images/cover/a87ee7c212c7b0f9ae687c378f260324/500x500-000000-80-0-0.jpg','https://cdns-preview-8.dzcdn.net/stream/c-8b175d5fccd6b1c54973c9307f572010-3.mp3','false',2,2);
INSERT INTO songs(name,artist,album,time,picture,preview,is_favorite,artist_id,album_id) VALUES ('Can I Get It','Adele',30,210,'https://e-cdns-images.dzcdn.net/images/cover/a87ee7c212c7b0f9ae687c378f260324/500x500-000000-80-0-0.jpg','https://cdns-preview-c.dzcdn.net/stream/c-c33035daa9d95b3102a8a28efefb9b09-3.mp3','true',2,2);
INSERT INTO songs(name,artist,album,time,picture,preview,is_favorite,artist_id,album_id) VALUES ('All Night Parking (with Erroll Garner) Interlude','Adele',30,161,'https://e-cdns-images.dzcdn.net/images/cover/a87ee7c212c7b0f9ae687c378f260324/500x500-000000-80-0-0.jpg','https://cdns-preview-6.dzcdn.net/stream/c-66b2eae67a194a445e059ef1d28ee618-3.mp3','false',2,2);
INSERT INTO songs(name,artist,album,time,picture,preview,is_favorite,artist_id,album_id) VALUES ('To Be Loved','Adele',30,403,'https://e-cdns-images.dzcdn.net/images/cover/a87ee7c212c7b0f9ae687c378f260324/500x500-000000-80-0-0.jpg','https://cdns-preview-d.dzcdn.net/stream/c-dd7b537159da2a4308eb389d578fbeb0-3.mp3','false',2,2);
INSERT INTO songs(name,artist,album,time,picture,preview,is_favorite,artist_id,album_id) VALUES ('Hold On','Adele',30,366,'https://e-cdns-images.dzcdn.net/images/cover/a87ee7c212c7b0f9ae687c378f260324/500x500-000000-80-0-0.jpg','https://cdns-preview-3.dzcdn.net/stream/c-3547204c0c61148dd9f3334c4e7d3a06-3.mp3','true',2,2);
INSERT INTO songs(name,artist,album,time,picture,preview,is_favorite,artist_id,album_id) VALUES ('My Little Love','Adele',30,389,'https://e-cdns-images.dzcdn.net/images/cover/a87ee7c212c7b0f9ae687c378f260324/500x500-000000-80-0-0.jpg','https://cdns-preview-b.dzcdn.net/stream/c-b534f98b41e3a8ed379ee72b0a989e0d-3.mp3','true',2,2);

-- Taylor 
INSERT INTO songs(name,artist,album,time,picture,preview,is_favorite,artist_id,album_id) VALUES ('Anti-Hero','Taylor Swift','Midnights',200,'https://e-cdns-images.dzcdn.net/images/cover/f571cb780b339ec087201b1cea53c3d9/500x500-000000-80-0-0.jpg','https://cdns-preview-8.dzcdn.net/stream/c-828a4c6ef4e912f1459f09791d26f863-4.mp3','true',3,3);
INSERT INTO songs(name,artist,album,time,picture,preview,is_favorite,artist_id,album_id) VALUES ('Lavender Haze','Taylor Swift','Midnights',202,'https://e-cdns-images.dzcdn.net/images/cover/f571cb780b339ec087201b1cea53c3d9/500x500-000000-80-0-0.jpg','https://cdns-preview-5.dzcdn.net/stream/c-5ad7b80d593b56fbd319f81936b4e8c5-4.mp3','false',3,3);
INSERT INTO songs(name,artist,album,time,picture,preview,is_favorite,artist_id,album_id) VALUES ('Bejeweled','Taylor Swift','Midnights',194,'https://e-cdns-images.dzcdn.net/images/cover/f571cb780b339ec087201b1cea53c3d9/500x500-000000-80-0-0.jpg','https://cdns-preview-6.dzcdn.net/stream/c-65d361185515a5d491cafb004b5d9c18-4.mp3','true',3,3);
INSERT INTO songs(name,artist,album,time,picture,preview,is_favorite,artist_id,album_id) VALUES ('Midnight Rain','Taylor Swift','Midnights',174,'https://e-cdns-images.dzcdn.net/images/cover/f571cb780b339ec087201b1cea53c3d9/500x500-000000-80-0-0.jpg','https://cdns-preview-3.dzcdn.net/stream/c-3b6104ea5017ea5706f6da2f858221a4-4.mp3','true',3,3);
INSERT INTO songs(name,artist,album,time,picture,preview,is_favorite,artist_id,album_id) VALUES ('You''re On Your Own, Kid','Taylor Swift','Midnights',194,'https://e-cdns-images.dzcdn.net/images/cover/f571cb780b339ec087201b1cea53c3d9/500x500-000000-80-0-0.jpg','https://cdns-preview-f.dzcdn.net/stream/c-f06ed0f38cb2488fe3408eab75236389-4.mp3','true',3,3);

