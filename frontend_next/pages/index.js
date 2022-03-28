import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Home = ({postsData}) => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    setPosts(postsData.data)
  }, [])

  return (
    <div>
     <h1>{posts[0]?.attributes?.title}</h1>
     <h1>{posts[1]?.attributes?.title}</h1>
    </div>
  )
}

export default Home

export const getStaticProps = async () => {
  const postReq = await axios.get('http://localhost:1337/api/posts')
  console.log(postReq)
  return {
    props : {
      postsData: postReq.data,
    }
  }
}
