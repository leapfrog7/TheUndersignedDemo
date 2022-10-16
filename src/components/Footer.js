import React from "react"
import { Link } from "react-router-dom"


export default function Footer(){
    return( 
        
            

            <footer className="h-24 p-2 bg-primary text-white shadow md:px-6 md:py-4 dark:bg-gray-900">
            <div className="flex items-center justify-around sm:flex-col md:flex-row lg:flex-row  ">
                {/* <div className="">
                    
                    <a href="#" className="flex items-center  mb-1 sm:mb-0">
                        <img src={require('../images/undersigned.png')} className="mr-1 w-20 h-16" alt=" Logo"/>
                    </a>
                </div> */}
                <ul className="flex mb-0 items-center text-sm text-gray-300 sm:mb-0 dark:text-gray-400">
                      

                        <li>
                            <Link to='/' className="mr-4 hover:underline hover:text-white md:mr-6 ">About</Link>
                        </li>
                        <li>
                            <Link to='/' className="mr-4 hover:underline hover:text-white md:mr-6">Privacy Policy</Link>
                        </li>
                        
                        <li>
                            <Link to='/' className="hover:underline hover:text-white">Contact</Link>
                        </li>
                      
                </ul>
            </div>
            <hr className="my-4 border-gray-500 sm:mx-auto dark:border-gray-700 lg:my-4"/>
            <span className="block text-sm text-gray-300 text-center dark:text-gray-400">© 2022 <a href="#" className="hover:underline hover:text-white">TheUndersigned™</a>. All Rights Reserved.
            </span>
    </footer>
      
    )
}