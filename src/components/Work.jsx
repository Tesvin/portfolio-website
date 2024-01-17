import React from 'react'
import WorkImg from '../assets/projects/workImg.jpeg'
//import realEstate from '../assets/projects/realestate.jpg'
//import expensetracker from '../assets/projects/expensetracker3.jpg'
import estatewebapp from '../assets/projects/estateWebapp.PNG'
import foodapp from '../assets/projects/food-app.jpg'
import profileApp from '../assets/projects/ProfileApp.PNG'
import refitinco from '../assets/projects/refitinco.PNG'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>    
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Work</p>
                <p className='py-6'>// Check out some of my recent work</p>
            </div>

            {/* Container */}
            <div 
            className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                <div 
                    style={{backgroundImage: `url(${estatewebapp})`}} 
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                     {/* Hover Effects  */}
                    <div className='opacity-0 group-hover:opacity-80'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Real Estate 
                        </span>
                        <div className='pt-8 text-center'>
                            <a target='_blank' href='https://real-estate-pb6h.onrender.com/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a target='_blank' href='https://github.com/Tesvin/estate-webapp'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div 
                    style={{backgroundImage: `url(${profileApp})`}} 
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                     {/* Hover Effects  */}
                    <div className='opacity-0 group-hover:opacity-80'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Profile App
                        </span>
                        <div className='pt-8 text-center'>
                            <a target='_blank' href='https://profileapp-23kg.onrender.com/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a target='_blank' href='https://github.com/Tesvin/profile-app'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div> 

                <div 
                    style={{backgroundImage: `url(${refitinco})`}} 
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                     {/* Hover Effects  */}
                    <div className='opacity-0 group-hover:opacity-80'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Refintico 
                        </span>
                        <div className='pt-8 text-center'>
                            <a target='_blank' href='https://refitinco.onrender.com'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            {/* <a href=''>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a> */}
                        </div>
                    </div>
                </div>

                {/* <div 
                    style={{backgroundImage: `url(${expensetracker})`}} 
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                         Hover Effects
                    <div className='opacity-0 group-hover:opacity-80'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Expense Tracker
                        </span>
                        <div className='pt-8 text-center'>
                            <a target='_blank' href='https://expenses-webapp.netlify.app/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a target='_blank' href='https://github.com/Tesvin/portfolio-website'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>  */}
                
                {/* Grid Item */}
                <div 
                    style={{backgroundImage: `url(${foodapp})`}} 
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-80'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Recipe App
                        </span>
                        <div className='pt-8 text-center'>
                            <a target='_blank' href='https://find-a-recipe-app.netlify.app/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a target='_blank' href='https://github.com/Tesvin/RecipeApp'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                

                {/* <div 
                    style={{backgroundImage: `url(${realEstate})`}} 
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                     Hover Effects 
                    <div className='opacity-0 group-hover:opacity-80'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React JS Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div> */}

            </div>
        </div>
    </div>
  )
}

export default Work