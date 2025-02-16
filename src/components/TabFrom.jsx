import React, { useState } from 'react'
import Profile from './Profile';
import Interests from './Interests';
import Settings from './Settings';

const TabFrom = () => {
    const [activeTab,setActiveTab] = useState(0);
    const [errors,setErrors] = useState({

    });

    // All the data on the central place
    // this object will be contain all the data on the form
    //  across the tab keep it data on the central place
    // i want this data persistent the across
    // i want validation on the central place
    // so keeping the data on central place
    const [data,setData] = useState({
     name:'',
     age:'',
     email:'',
     interests:['coding','music'],
     theme:'dark'
    })
    const tabs = [
        {
            name:'Profile',
            component:Profile,
            validate:()=>{
                const err = {};
                if(!data.name || data.name.length < 2){
                    err.name = 'Name is not valid !!!';
                }
                if(!data.age || data.age < 18){
                    err.age = ' Age is not valid !!!';
                }
                if(!data.email || data.email.length < 2){
                    err.email = 'Email is not valid !!!';
                }
                setErrors(err);
                return err.name || err.age || err.email ? false : true;
            }

        },{
            name:'Interests',
            component:Interests,
            validate:()=>{
                const err = {};
                if(data.interests.length < 1){
                    err.interests = 'Select atlist one interests';
                }
                setErrors(err);
                return err.interests ? false : true;
            }
        },
        {
            name:'Settings',
            component:Settings,
            validate:()=>{
                return true;
            }
        }
    ]

 const ActiveTabComponent = tabs[activeTab].component; 

 const handleNextClick = () => {
    if(tabs[activeTab].validate()){
        setActiveTab(prevState=>prevState+1);
    }
   
 }
 const handlePrevClick = () => {
    if(tabs[activeTab].validate()){
        setActiveTab(prevState=>prevState-1);
    }
 }
 const handleSubmitClick = () => {
 // may be make an API CALL
 console.log(data);
 }

  return (
    <div className='app'>
        <div className='container'>
            {
                tabs.map((tab,index) => (
                <div  
                    className={`tabs + ${index ===  activeTab ? 'active' : ''} `}
                    key={index}
                    onClick={()=>tabs[activeTab].validate() && setActiveTab(index)}
                >{tab.name}</div>
            ))
            }
        </div>

        <div className='tabBody'>
            <ActiveTabComponent data={data} setData={setData} errors={errors}/>
        </div>
        <div>
            {activeTab > 0 && (
                <button onClick={handlePrevClick} type='submit'>prev</button>
            )}
            {activeTab < tabs.length-1 && (
                <button onClick={handleNextClick} type='submit'>next</button>
            )}
            {activeTab === tabs.length-1 && (
                <button onClick={handleSubmitClick}>submit</button>
            )}
        </div>
    </div>
  )
}

export default TabFrom;