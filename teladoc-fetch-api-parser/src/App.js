import './App.scss';
import Species from './Species';
import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const API_URL = 'https://swapi.dev/api/films/2/';
const SPECIES_IMAGES = {
  droid:
    'https://static.wikia.nocookie.net/starwars/images/f/fb/Droid_Trio_TLJ_alt.png',
  human:
    'https://static.wikia.nocookie.net/starwars/images/3/3f/HumansInTheResistance-TROS.jpg',
  trandoshan:
    'https://static.wikia.nocookie.net/starwars/images/7/72/Bossk_full_body.png',
  wookie:
    'https://static.wikia.nocookie.net/starwars/images/1/1e/Chewbacca-Fathead.png',
  yoda: 'https://static.wikia.nocookie.net/starwars/images/d/d6/Yoda_SWSB.png',
};
const CM_TO_IN_CONVERSION_RATIO = 2.54;

const BlackContainerTop = styled.div`
  width: 120%;
  height: 100px;
  margin: -10px;
  background-color: black;
  position: sticky;
  margin-bottom: 30px;
`;

const BlackContainerBottom = styled.div`
  width: 120%;
  height: 100px;
  margin: -10px;
  background-color: black;
  position: fixed;
  bottom: 0;
`;

function App() {
  const [APIData, setAPIData] = useState([]);
  const [loading, setLoading] = useState(false);

  const formatData = results => {
    results.forEach(data => {
      const speciesName = data.name;
      const formattedName = speciesName.toLowerCase().split("'");
      const imageURL = SPECIES_IMAGES[formattedName[0]];
      data.image = imageURL;
      const height = +data['average_height'];
      if (!isNaN(height)) {
        const inches = Math.ceil(height / CM_TO_IN_CONVERSION_RATIO);
        data['average_height'] = inches + "''";
      }
    });
  };

  const fetchData = async () => {
    try {
      const dataLinks = await fetch(API_URL).then(res => res.json());
      const species = dataLinks['species'];
      const promises = [];
      for (let link of species) {
        const data = await fetch(link).then(res => res.json());
        promises.push(data);
      }
      const results = await Promise.all(promises);
      formatData(results);
      setAPIData(results);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    setLoading(true);
    let isMounted = true;
    const loadDataOnlyOnce = async () => {
      await fetchData();
      if (isMounted) {
        setLoading(false);
        isMounted = false;
      }
    };
    loadDataOnlyOnce();
  }, []);

  return (
    <div className="App">
      <BlackContainerTop />
      <h1>Empire Strikes Back - Species Listing</h1>
      <div
        className="App-species"
        style={{
          paddingBottom: '100px',
        }}
      >
        {loading && <p>Loading Data...</p>}
        {APIData.map((data, index) => (
          <Species
            key={index}
            name={data.name ? data.name : 'N/A'}
            classification={data.classification ? data.classification : 'N/A'}
            designation={data.designation ? data.designation : 'N/A'}
            height={data.average_height ? data.average_height : 'N/A'}
            image={data.image}
            numFilms={data.films.length}
            language={data.language ? data.language : 'N/A'}
          />
        ))}
      </div>
      <BlackContainerBottom />
    </div>
  );
}

export default App;
