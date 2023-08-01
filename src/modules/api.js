const fetchEpisodes = async () => {
  const url = 'https://api.tvmaze.com/shows/1/episodes';
  const response = await fetch(url);
  const data = await response.json();

  const episodesData = data.map((episode) => ({
    id: episode.id,
    name: episode.name,
    image: episode.image,
    rating: episode.rating,
    summary: episode.summary,
    season: episode.season,
    airdate: episode.airdate,
  }));

  console.log(episodesData);
  return episodesData;
};

export default fetchEpisodes;
