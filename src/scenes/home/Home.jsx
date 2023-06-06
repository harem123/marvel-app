import { useState, useEffect } from "react";
import useFetch from "../../customHooks/useFetch.jsx";
import AlphabetNavBar from "../../components/AlphabetBar.jsx"
import MaterialCard from "../../components/MaterialCard.jsx"
import PagesButtons from "../../components/PagesButton.jsx";
import { Grid } from '@mui/material';
import TopBar from '../topBar/TopBar.jsx'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function Comics(props) {
  const [comics, setComics] = useState([]);
  const [filter, setFilter] = useState("b");
  const [offset, setOffset] = useState(200);
  const { get, loading } = useFetch();

  useEffect(() => {
    get(`http://gateway.marvel.com/v1/public/comics?titleStartsWith=${filter}&orderBy=title&offset=${offset}`)
      .then((data) => {
        setComics(data.data.results);
        
      })
      .catch((error) => console.log("Could not load comics", error));
  }, [offset,filter]);

  const handleLetterClick = (letter) => {
    // 👇️ take the parameter passed from the Child component
    setFilter(letter);
    console.log(letter)
  };

  const handlePageClick = (num) => {
    // 👇️ take the parameter passed from the Child component
    setOffset(current => current + num);
  };

  return (

    <div className="comics-layout">
      <TopBar/>
      <div className="alphabetBar">
        <AlphabetNavBar onLetterClick={handleLetterClick}/>
      </div>
      <Typography variant = 'h3' style={{color: 'secondary'}}>
        COMICS
      </Typography>
      <Typography variant = 'h4'>
        Take a look at our comics
      </Typography>
     
      
      <Box justifyContent="center" marginTop={2} display="flex" marginBottom={2}>
      <Grid container spacing={1} justifyContent="center">
        {comics.map((comic)=> (
        <Grid item xs={12} sm={6} md={4} key={comic.id}>
       <MaterialCard details = {comic} />
       </Grid>
       
        ))}
      </Grid>
      </Box>
      <Box justifyContent="center" marginTop={2} display="flex" marginBottom={2}>
        <PagesButtons handlePageClick={handlePageClick}/>
        </Box>
    </div>
  );
}