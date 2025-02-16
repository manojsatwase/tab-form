import React from 'react'

const Profile = ({data,setData,errors}) => {
    const {name,age,email} = data;

    const handleChange = (e,name) => {
        setData(prevState => ({...prevState,[name]:e.target.value}))
    }
  return (
    <div className='form'>
        <div className='form-control'>
            <label>Name:</label>
            <input type="text"  onChange={(e)=>handleChange(e,'name')} value={name} />
            {errors.name && <span className='error'>{errors.name}</span>}
        </div>
        <div className='form-control'>
            <label>Age:</label>
            <input type="number" onChange={(e)=>handleChange(e,'age')} value={age}/>
            {errors.age && <span className='error'>{errors.age}</span>}
        </div>
        <div className='form-control'>
            <label>Email:</label>
            <input type="email" onChange={(e)=>handleChange(e,'email')} value={email} />
            {errors.email && <span className='error'>{errors.email}</span>}
        </div>
        
    </div>
  )
}

export default Profile;