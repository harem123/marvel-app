import React from 'react';
import {  Button, Grid } from '@mui/material';


const AlphabetNavBar = ({ onLetterClick }) => {
  const alphabet = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];

  const handleLetterClick = (letter) => {
    
    onLetterClick(letter)
    console.log(letter)
  };
  return (
    
        <Grid container spacing={1} justifyContent="center" >
          {alphabet.map((letter) => (
           
              <Button
              onClick={event => handleLetterClick(letter)}
              size="small"
              style={{ borderRadius: '30%', minWidth: 25, padding: 5 }}
              variant="outlined"
              >
                {letter}
              </Button>
            
          ))}
        </Grid>
      
  );
};

export default AlphabetNavBar;