export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=Ybv7qyJTLZlFeYjALdj6OAPiGCkQiYgO&q=${category}&limit=10`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img) => {
    if (img.title.trim().length < 1) {
      return {
        id: img.id,
        title: `${category} GIF`,
        url: img.images.original.url,
      };
    } else {
      return {
        id: img.id,
        title: img.title,
        url: img.images.original.url,
      };
    }
  });

  return gifs;
};
