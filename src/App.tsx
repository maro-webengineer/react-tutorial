import './App.css'

function App() {

  const defaultMovieList = [
    {
      id: 1,
      name: "君の名は",
      image:
        "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/yLglTwyFOUZt5fNKm0PWL1PK5gm.jpg",
      overview:
        "1ヵ月後に1000年ぶりの彗星が訪れる日本。東京で暮らす平凡な男子高校生・瀧と、山深い村で都会の生活に憧れながら憂鬱な日々を送る女子高校生・三葉。つながりのない2人は、互いが入れ替わる不思議な夢を見る。",
    },
    {
      id: 2,
      name: "ハウルの動く城",
      image:
        "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/v0K2e1t6ocUNnkZ9BeiFdcOT9LG.jpg",
    },
    {
      id: 3,
      name: "もののけ姫",
      image:
        "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/mVdz3vlmioKWZaHTGfu99zIuayZ.jpg",
    },
    {
      id: 4,
      name: "バック・トゥ・ザ・フューチャー",
      image:
        "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/oHaxzQXWSvIsctZfAYSW0tn54gQ.jpg",
    },
  ];

  return (
    <div>
      <div>
        <p>{defaultMovieList[0].name}</p>
        <img src={defaultMovieList[0].image} alt={defaultMovieList[0].name} />
        <p>{defaultMovieList[0].overview}</p>
      </div>
      <div>
        <p>{defaultMovieList[1].name}</p>
        <img src={defaultMovieList[1].image} alt={defaultMovieList[1].name} />
        <p>{defaultMovieList[1].overview}</p>
      </div>
      <div>
        <p>{defaultMovieList[2].name}</p>
        <img src={defaultMovieList[2].image} alt={defaultMovieList[2].name} />
        <p>{defaultMovieList[2].overview}</p>
      </div>
      <div>
        <p>{defaultMovieList[3].name}</p>
        <img src={defaultMovieList[3].image} alt={defaultMovieList[3].name} />
        <p>{defaultMovieList[3].overview}</p>
      </div>
    </div>
  )
}

export default App
