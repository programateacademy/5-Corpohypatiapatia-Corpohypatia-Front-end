import React from 'react'
import { useParams } from 'react-router-dom';

const HomeProjectDetails = () => {

  const { id } = useParams();
  console.log(id)
  return (
    <div>ProjectDetails</div>
  )
}

export default HomeProjectDetails