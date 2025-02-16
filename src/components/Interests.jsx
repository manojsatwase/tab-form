import React from 'react'

const Interests = ({data,setData,errors}) => {
  const {interests} = data;
  
  const handleDataChange = (e) => {
    setData(prevState=> (
      {
        ...prevState,
        interests: e.target.checked 
         ? [...prevState.interests,e.target.name] 
         : prevState.interests.filter(interest=>interest!==e.target.name) 
      }
    ))
  }

  return (
    <div>
        <div>
           <lebel>  
            <input 
              type="checkbox"
              name='coding'
              checked={interests.includes("coding")}
              onChange={handleDataChange}
              />
              Coding
           </lebel>
        </div>
        <div>
           <lebel>  
            <input 
              type="checkbox"
              name='javascript'
              checked={interests.includes("javascript")}
              onChange={handleDataChange}
              />
              Javascript
           </lebel>
           </div>
        <div>
           <lebel>  
            <input 
              type="checkbox"
              name='music'
              checked={interests.includes("music")}
              onChange={handleDataChange}
              />
              Music
           </lebel>
        </div>
        {errors.interests && <span className='error'>{errors.interests}</span>}
    </div>
  )
}

export default Interests;