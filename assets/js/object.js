const data = {
  Artists: [
    {
      key: 0,
      image:
        "https://thumbor.forbes.com/thumbor/1950x1950/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5ceec355142c500008f42068%2F0x0.jpg%3FcropX1%3D32%26cropX2%3D1982%26cropY1%3D257%26cropY2%3D2207",
      title: "Singer, SongWriter",
      name: "Rihanna",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, aspernatur!",
    },
    {
      key: 1,
      image:
        "https://cdn.vox-cdn.com/thumbor/kQ80fqXhGa5gqX783fBzPhxonCc=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/20045463/drake_raptor.jpg",
      title: "Singer, SongWriter",
      name: "Drake",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, aspernatur!",
    },
    {
      key: 2,
      image:
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dua-lipa-attends-varietys-2nd-annual-hitmakers-brunch-at-news-photo-1604677508.?crop=1xw:0.87967xh;center,top&resize=640:*",
      title: "Singer, SongWriter",
      name: "Dua Lipa",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, aspernatur!",
    },
    {
      key: 3,
      image:
        "https://static01.nyt.com/images/2020/07/30/arts/30beyonce-walkup/30beyonce-walkup-mediumSquareAt3X.jpg",
      title: "Singer, SongWriter",
      name: "Beyonce",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, aspernatur!",
    },
    {
      key: 4,
      image:
        "https://static01.nyt.com/images/2021/02/12/arts/12justin-item/12justin-item-mobileMasterAt3x.jpg",
      title: "Singer, SongWriter",
      name: "justin Timberlakes",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, aspernatur!",
    },
    {
      key: 5,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Gj4ZGx3Fb70avGIcS3RgvY9CvhLIPAibpQ&usqp=CAU",
      title: "Singer, SongWriter",
      name: "Bruno Mars",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, aspernatur!",
    },
  ],
};
// const myProjects = data.speakerDetails;
// IMPLEMENT Speakers Details
function addArtist() {
  const speakersWrap = document.querySelector(".Artist-content");
  data.Artists.forEach((Artist) => {
    const speakerCards = `
  <div class = 'feature-details${Artist.key + 1} feature-speaker'>
  <div class = 'speaker-frame'>
  <img class = ' face-shot'  src ='${Artist.image}' alt = 'speaker-image'>
  </div>
  <div class = 'speaker-info'>
  <h2>${Artist.name}</h2>
  <h3>${Artist.title}</h3>
  <p>${Artist.description}</p>
  </div>
  </div>
  `;
    speakersWrap.innerHTML += speakerCards;
  });
}
if (document.querySelector(".feature-container")) {
  addArtist();
}
