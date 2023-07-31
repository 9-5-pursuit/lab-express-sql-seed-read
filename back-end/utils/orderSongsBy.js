function orderSongsBy(allSongs, order, is_favorite) {
  if (order === "asc") {
    allSongs.sort((a, b) =>
      a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
    );
  }
  if (order === "desc") {
    allSongs.sort((a, b) =>
      a.name.toLowerCase() > b.name.toLowerCase() ? -1 : 1
    );
  }
  if (is_favorite === "true") {
    allSongs = allSongs.filter((song) => song.is_favorite);
  }
  if (is_favorite === "false") {
    allSongs = allSongs.filter((song) => !song.is_favorite);
  }
  return allSongs;
}

module.exports = orderSongsBy;
