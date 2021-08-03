import React from 'react'
import { useParams } from 'react-router-dom'
const CatogryPage = () => {
  const {catogry, id} = useParams()
  console.log(catogry, id)
  return (<div>Catogry</div>)
}

export default CatogryPage