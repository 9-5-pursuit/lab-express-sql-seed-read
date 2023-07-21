```bash
http POST localhost:9009/songs/ -j <<< '{"name": "soul", "artist": "pak", "album": "intime", "time": "2023-07-18T02:17:56.371Z", "is_favorite": false}'

http PUT localhost:9009/songs/4 -j <<< '{"name": "train", "artist": "example", "album": "intime", "time": "2023-07-18T02:18:56.371Z", "is_favorite": false}'

http localhost:9009/songs order==asc

http localhost:9009/songs order==desc

http localhost:9009/albums album==example artist==example

http localhost:9009/playlist/new/:name

http POST localhost:9009/playlist/addSong name==example id==1
```