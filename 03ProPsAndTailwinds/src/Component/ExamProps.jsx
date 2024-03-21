import React from 'react'

const ExamProps = ({about = "Kya Haal Hai jii"}) => {
  return (
    <div>
          <h1 className='bg-pink-200 text-red p-8'>Welcome To Learn props</h1>
          <p>Lorem, ipsum dolor sit amet {about} consectetur adipisicing elit. Omnis quibusdam inventore quos nemo impedit accusantium facilis deleniti quod repudiandae eum,
              qui minus ab laboriosam libero adipisci quia fuga porro minima!</p>
    </div>
  )
}

export default ExamProps
