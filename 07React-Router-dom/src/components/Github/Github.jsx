import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
   const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //  fetch('https://api.github.com/users/Abu-hamid')
    //  .then(response => response.json())
    //  .then(data => {
    //     console.log(data);
    //     setData(data)
    //  })
    // }, [])

      const [following, setFollowing] = useState([]);

//   useEffect(() => {
//     // GitHub API se following ko fetch karein
//     axios.get('https://api.github.com/users/{YOUR_GITHUB_USERNAME}/following')
//       .then(response => {
//         // Fetch kiye gaye following ko state mein set karein
//         setFollowing(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching following:', error);
//       });
//   }, []);
    
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
    <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Abu-hamid')
    return response.json()
}