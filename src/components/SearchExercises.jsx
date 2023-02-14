import React, {useState, useEffect} from 'react'
import {Stack, Box, Typography, Button, TextField} from "@mui/material"

import {exerciseOptions, fetchData} from "../utilis/fetchData"
import HorizontalScrollbar from './HorizontalScrollbar'

const SearchExercises = ({setExercises,bodyPart,setBodyPart}) => {
  const[search, setSearch] = useState("")
 
  const[bodyParts, setBodyParts] = useState([])


  useEffect(() => {

    const fetchBodyPartsData = async() => {

      const bodyPartsData = await fetchData("https://exercisedb.p.rapidapi.com/exercises/bodyPartList", exerciseOptions)


      setBodyParts(["all", ...bodyPartsData])

    }

    fetchBodyPartsData()


  },[])



  const handleSearch = async() => {
    if(search) {
      const exerciseData = await fetchData("https://exercisedb.p.rapidapi.com/exercises", exerciseOptions)

      const searchedExerciseData = exerciseData.filter(
        (item) => item.bodyPart.toLowerCase().includes(search)
        || item.name.toLowerCase().includes(search)
        || item.equipment.toLowerCase().includes(search)
        || item.target.toLowerCase().includes(search)

      )

    
      
    setSearch("")
    setExercises(searchedExerciseData)
    const targetDiv = document.getElementById("exercises");
    targetDiv.scrollIntoView({ behavior: 'smooth' });
  
  
    }

  }

  return (
  <Stack alignItems="center" justifyContent = "center" mt="37px"  p="20px">
    <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="49px" textAlign="center">
    Awesome Exercises You <br /> Should Know
    </Typography>
    <Box position = "relative"  mb="72px">
      <TextField
         height="76px"
         sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '4px' }, width: { lg: '1170px', xs: '350px' }, backgroundColor: '#fff', borderRadius: '40px' }}
         value={search}
         onChange={(e) => setSearch(e.target.value.toLowerCase())}
         placeholder="Search Exercises"
         type="text"
        />
      <Button  className="search-btn" sx={{ bgcolor: '#FF2625', color: '#fff', textTransform: 'none', width: { lg: '173px', xs: '80px' }, height: '56px', position: 'absolute', right: '0px', fontSize: { lg: '20px', xs: '14px' } }} onClick={handleSearch} >Search</Button>
    </Box>
    <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
      <HorizontalScrollbar data = {bodyParts} bodyParts bodyPart = {bodyPart} setBodyPart = {setBodyPart} />
    </Box>

  </Stack>
  )
}

export default SearchExercises