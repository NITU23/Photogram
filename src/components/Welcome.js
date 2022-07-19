import { Box } from '@mui/system';
import React from 'react';


const Welcome = () => {
  return (
    <>
        <Box
          maxWidth={400}
          display="flex"
          flexDirection={"column"}
          alignItems="center"
          justifyContent={"center"}
          boxShadow="10px 10px 20px #ccc"
          padding={3}
          margin="auto"
          marginTop={5}
          borderRadius={5}
        > Hey Welcome To Photogram</Box>
    </>
  )
}

export default Welcome