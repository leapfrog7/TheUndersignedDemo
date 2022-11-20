
import React from "react"
import { Link } from "react-router-dom"


export function Home(){
    return(
        
            <div className="bg-hero bg-center bg-no-repeat bg-cover bg-fixed ">
                <HeroSection/>
                
                <div className="p-2 m-2" >
                    <h3 className="text-center text-xl">Direct Links</h3>
                </div>

                <div className="px-2 grid grid-cols-2 mx-auto md:grid-cols-4 lg:w-4/5 xl:w-3/4 gap-2 md:gap-4">
                    <DirectLink
                        iconClass = 'material-symbols-outlined text-red-700'
                        iconText = 'search'
                        title = 'Search CGHS Rates'
                        description = 'Find the listed CGHS rates for investigation and treatment for Delhi/NCR'
                        to='cghsrates'
                        btnBorderColor = 'border-red-700'
                        btnTextColor = 'text-red-700'
                        btnHover = 'hover:bg-red-50'
                    />

                    <DirectLink
                        iconClass = 'material-symbols-outlined text-green-600'
                        iconText = 'local_hospital'
                        title = 'CGHS Empanelled Hospital'
                        description = 'A list of CGHS empanelled Hospital and diagnostics center for Delhi/NCR'
                        btnBorderColor = 'border-green-600'
                        btnTextColor = 'text-green-600'
                        btnHover = 'hover:bg-green-50'
                        to='cghscenter'
                    />

                    <DirectLink
                        iconClass = 'material-symbols-outlined text-purple-600'
                        iconText = 'table'
                        title = 'Pay Matrix'
                        description = 'Table of pay matrix as per 7th CPC from Level 1 to 18'
                        btnBorderColor = 'border-purple-600'
                        btnTextColor = 'text-purple-600'
                        btnHover = 'hover:bg-purple-50'
                        to = 'paymatrix'
                    />

                    <DirectLink
                        iconClass = 'material-symbols-outlined text-pink-600'
                        iconText = 'article'
                        title = 'Download Forms'
                        description = 'Find the commonly needed forms here'
                        btnBorderColor = 'border-pink-600'
                        btnTextColor = 'text-pink-600'
                        btnHover = 'hover:bg-pink-50'
                    />
                </div>
                    
            </div>
            
            )
}


function HeroSection(){

    
    return(
        <div className="h-full text-primary">
                <HeroText/>
        </div>
    )
}
// bg-hero3 bg-center bg-cover bg-no-repeat
function HeroText(){
    // md:bg-hero bg-no-repeat bg-cover bg-center
    return(
        <div className="text-gray-700 flex flex-col bg-slate-100 py-8 bg-hero bg-center bg-no-repeat bg-cover bg-fixed ">
                <div className="px-4 py-2 mx-auto w-11/12 md:w-4/5 bg-white bg-opacity-50">
                    <h1 className=" text-xl font-semibold md:text-2xl"> <span >A portal</span>  for the <span className="text-rose-700">employees of Ministries and Departments</span>  under the Central Government</h1>

                    <h3 className="pt-2 pb-4 text-sm">
                        The project is being run by the Officers of Central Secretariat Service with the aim to simplify the everyday routine work we handle in Ministries.     
                    </h3>
                </div>

                <div className="py-4 flex flex-col gap-12 mx-auto justify-center md:flex-row md:gap-2">
                    
                    <div className="flex flex-col max-w-sm bg-white bg-opacity-70 rounded-lg border border-gray-200 shadow-md justify-center items-center mx-4 pt-4">
                        {/* <SVGconvenience/> */}
                        <div className="bg-convenience bg-center bg-cover h-32 w-48"></div>
                        <HeroCards title='Convenience' description = 'Find the commonly used utilities such as CGHS Listed rates, CGHS Empanelled Center, Pay Matrix etc. without any hassle'/>
                    </div>
                    
                    <div className="flex flex-col max-w-sm bg-white bg-opacity-70 rounded-lg border border-gray-200 shadow-md justify-center items-center mx-4 pt-4">
                        {/* <SVGproductivity/> */}
                        <div className="bg-productivity bg-center bg-cover h-36 w-40"></div>
                        <HeroCards title='Productivity' description='Increase your daily productivity at work with the set of tools that help automate the routine and repetitive work'/>
                    </div>
                    
                    <div className="flex flex-col max-w-sm bg-white bg-opacity-70 rounded-lg border border-gray-200 shadow-md justify-center items-center mx-4 pt-4">
                        {/* <SVGhelpguide/> */}
                        <div className="bg-guide bg-center bg-cover h-32 w-48"></div>
                        <HeroCards title='Help Guide' description='A collection of most referenced rules and orders which hold significance for officers of CSS and CSSS'/>
                    </div>

                </div>
        </div>


    )
}   

function HeroCards(props){
    
    return(
       
        <div className=" flex flex-col justify center items-center p-4 w-80">
               
                <h5 className="mb-2 text-xl md:text-2xl font-bold tracking-tight text-gray-800">{props.title}</h5>
              
                <p className="mb-3 md:text-normal text-sm md:font-normal text-gray-700 dark:text-gray-400 text-center">{props.description}</p>

                <Link to='/' className="w-28 inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-800 rounded-lg hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                    <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </Link>
            </div>

    )
}

// ******************DirectLinks********************

function DirectLink(props){
    return(

    <div className="border rounded-lg flex justify-center mt-4 mb-8 ease-in duration-200 hover:-translate-y-[4px]">
        <div className="flex rounded-lg bg-white bg-opacity-70 shadow-lg">
            
            <div className="p-4 flex flex-col">
                <div className="flex gap-2 items-center">
                    <span className={`${props.iconClass}`}>{props.iconText}</span>
                    {/* <span className={`${material-symbols-outlined text-red-500}`}>search</span> */}
                    <h5 className="text-gray-700 text-normal font-semibold">{props.title}</h5>
                </div>
                
                <div className="pl-2 pt-2">
                <p className="text-gray-700 text-sm mb-4 line-clamp-2">
                    {props.description}
                </p>
                </div>
                
                <BtnOutlineType 
                    linkTo={`${props.to}`}
                    btnBorderColor={`${props.btnBorderColor}`}
                    btnTextColor = {`${props.btnTextColor}`}
                    btnHover = {`${props.btnHover}`}
                />
            </div>

        </div>
</div>
    )
}

// *********************SVGs*******************
function SVGconvenience(){
    return (<svg className="h-20 w-20 fill-primary" viewBox="0 0 104.31 122.88">
    <path d="M25.85,63.15c-0.04-0.12-0.08-0.28-0.1-0.42c-0.22-1.89-0.43-3.98-0.62-5.78c-0.26-2.64-0.55-5.69-0.76-7.83 c-0.14-1.45-0.6-2.83-1.27-3.86c-0.45-0.66-0.95-1.15-1.51-1.39c-0.45-0.18-1-0.2-1.57,0.02c-0.78,0.3-1.65,0.93-2.62,2.03 c-0.86,0.98-1.53,2.29-2.09,3.68c-0.79,2.03-1.26,4.19-1.45,5.67c-0.02,0.1-0.02,0.18-0.06,0.26L8.42,86.07 c-0.08,0.4-0.24,0.76-0.48,1.04c-1.81,2.33-2.95,4.33-3.28,5.95c-0.24,1.19,0,2.15,0.79,2.9l19.8,19.8 c1.26,1.21,2.72,1.97,4.47,2.29c1.91,0.36,4.14,0.16,6.7-0.54c0.04,0,0.1-0.02,0.14-0.02c0.97-0.26,2.24-0.57,3.46-0.88 c5.31-1.29,9.94-2.43,14.23-6.33l5.52-5.76c0.05-0.1,0.14-0.18,0.22-0.26s0.62-0.62,1.35-1.31c3.78-3.69,8.45-8.25,5.61-12.24 l-2.21-2.21c-1.07,1.04-2.21,2.05-3.3,3.02c-1,0.88-1.93,1.69-2.78,2.55c-0.91,0.91-2.38,0.91-3.3,0c-0.91-0.92-0.91-2.38,0-3.3 c0.86-0.86,1.91-1.79,3-2.76c3.74-3.3,8.03-7.07,
    5.73-10.38l-2.19-2.19c-0.12-0.12-0.22-0.26-0.31-0.4c-1.26,1.29-2.64,2.52-4,3.72 c-1,0.88-1.93,1.69-2.78,2.55c-0.91,0.91-2.38,0.91-3.3,0s-0.91-2.38,0-3.3c0.86-0.86,1.91-1.79,3-2.76 c3.74-3.3,8.03-7.07,5.73-10.38l-2.19-2.19c-0.16-0.16-0.28-0.31-0.38-0.5l-6.42,6.42c-0.91,0.91-2.38,0.91-3.3,0s-0.91-2.38,0-3.3 l17.22-17.25c2.88-2.88,3.54-5.88,2.78-8.15c-0.28-0.83-0.74-1.57-1.31-2.14s-1.31-1.03-2.14-1.31c-2.24-0.74-5.23-0.06-8.19,2.9 l-30.2,30.2c-0.91,0.91-2.38,0.91-3.3,0s-0.91-2.38,0-3.3l3.07-3.07L25.85,63.15L25.85,63.15L25.85,63.15z M83.23,24.31 c-1.22,1.3-3.24,1.34-4.52,0.14c-1.3-1.22-1.34-3.24-0.14-4.52l8.82-9.39c1.22-1.3,3.25-1.34,4.52-0.14 c1.3,1.22,1.34,3.24,0.14,4.52L83.23,24.31L83.23,24.31L83.23,24.31L83.23,24.31z M43.96,23.65c1.3,1.22,1.34,3.25,0.14,4.52 c-1.22,1.3-3.25,1.34-4.52,0.14l-9.4-8.82c-1.29-1.23-1.33-3.25-0.14-4.52c1.22-1.3,3.25-1.34,4.52-0.14L43.96,23.65L43.96,23.65 L43.96,23.65z M63.69,15.96c0.05,1.76-1.34,3.24-3.09,3.3s-3.24-1.34-3.3-3.09L56.91,3.3c-0.06-1.75,1.34-3.24,3.09-3.3 c1.76-0.05,3.24,1.34,3.29,3.09L63.69,15.96L63.69,15.96L63.69,15.96z M76.88,63.31c-1.3-1.22-1.34-3.25-0.14-4.52 c1.22-1.3,3.24-1.34,4.52-0.14l9.39,8.82c1.3,1.22,1.34,3.24,0.14,4.52c-1.22,1.3-3.24,1.34-4.52,0.14L76.88,63.31L76.88,63.31 L76.88,63.31z M88.36,44.35c-1.75,0.06-3.24-1.34-3.3-3.09c-0.05-1.75,1.34-3.24,3.09-3.3l12.86-0.43c1.75-0.06,3.24,1.34,3.3,3.09 s-1.34,3.24-3.09,3.3L88.36,44.35L88.36,44.35L88.36,44.35z M60.88,58.97c0.17,0.1,0.34,0.22,0.5,0.38l2.29,2.29 c0.12,0.12,0.24,0.28,0.34,0.42c2.57,3.52,2.17,6.66,0.42,9.52c0.31,0.12,0.62,0.29,0.86,0.54l2.29,2.29 c0.12,0.12,0.24,0.28,0.34,0.42c2.76,3.8,2.07,7.12,0,10.14c0.1,0.05,0.17,0.14,0.28,0.24l2.29,2.29c0.12,0.12,0.24,0.28,0.34,0.42 c5.31,7.26-1.02,13.42-6.1,18.39l-1.31,1.31l-5.67,5.95l-0.18,0.17c-5.19,4.71-10.33,5.97-16.28,7.42c-1,0.24-2,0.5-3.4,0.86 c-0.04,0-0.06,0.02-0.1,0.02c-3.22,0.88-6.14,1.09-8.76,0.62c-2.66-0.48-4.97-1.67-6.9-3.56L2.31,99.29 c-2-1.93-2.69-4.31-2.12-7.14c0.43-2.26,1.75-4.77,3.81-7.47L9.3,54.74v-0.12c0.24-1.71,0.78-4.24,1.71-6.68 c0.71-1.83,1.67-3.62,2.92-5.07c1.51-1.71,3-2.76,4.47-3.32c1.81-0.69,3.54-0.6,5.07,0.06c1.43,0.6,2.64,1.69,3.56,3.08 c1.12,1.67,1.85,3.8,2.05,6.02c0.16,1.83,0.48,4.85,0.78,7.81l0.24,2.47L53,36.07c4.4-4.4,9.16-5.27,12.97-4.02 c1.53,0.5,2.88,1.33,4,2.45s1.95,2.47,2.45,4c1.26,3.8,0.4,8.63-3.92,12.95l-7.59,7.59L60.88,58.97L60.88,58.97L60.88,58.97z"/>
    </svg>)
}

function SVGproductivity(){
    return <svg className="h-20 w-24 fill-primary" viewBox="0 0 104.31 122.88"><path xmlns="http://www.w3.org/2000/svg" d="M58.15,52.98l28.6-18.22c0.2-0.15,0.48-0.12,0.65,0.06l2.76,2.94c0.17,0.18,0.18,0.47,0.02,0.66L68.51,63.6 c-3.08,3.31-6.37,3.96-9.02,3.1c-1.32-0.43-2.47-1.22-3.35-2.25c-0.88-1.02-1.49-2.27-1.74-3.61c-0.49-2.67,0.49-5.66,3.73-7.85 L58.15,52.98L58.15,52.98z M19.33,106.17c-3.05-2.87-5.8-6.05-8.21-9.48c-2.39-3.4-4.44-7.06-6.11-10.91 C3.38,82,2.12,78.02,1.26,73.88C0.44,69.86,0,65.7,0,61.44c0-8.32,1.66-16.25,4.65-23.49C7.77,30.43,12.33,23.66,18,18 c5.66-5.66,12.43-10.23,19.95-13.34C45.19,1.66,53.12,0,61.44,0c8.3,0,16.21,1.66,23.43,4.66c7.52,3.12,14.28,7.7,19.95,13.37 c5.68,5.68,10.26,12.46,13.38,19.97c3.01,7.24,4.68,15.16,4.68,23.44c0,4.05-0.4,8.01-1.16,11.85c-0.78,3.94-1.95,7.75-3.46,11.4 c-1.54,3.71-3.43,7.25-5.64,10.55c-2.23,3.34-4.78,6.45-7.6,9.3c-0.19,0.19-0.51,0.19-0.7,0l-3.07-3.06 c-0.06-0.02-0.12-0.06-0.17-0.11l-8.56-8.56c-0.19-0.19-0.19-0.51,0-0.7l4.49-4.49c0.19-0.19,0.51-0.19,0.7,0l6.61,6.61 c1.4-1.82,2.69-3.72,3.85-5.7c1.25-2.12,2.35-4.34,3.3-6.63c1.28-3.1,2.29-6.35,2.97-9.71c0.64-3.12,1-6.35,1.07-9.64h-9.11 c-0.27,0-0.5-0.22-0.5-0.5V55.7c0-0.27,0.22-0.5,0.5-0.5h8.76c-0.68-5.85-2.31-11.43-4.72-16.58c-2.49-5.31-5.82-10.15-9.82-14.37 l-5.86,5.86c-0.19,0.19-0.51,0.19-0.7,0l-4.49-4.49c-0.19-0.19-0.19-0.51,0-0.7l5.65-5.65c-4.44-3.57-9.45-6.46-14.87-8.5 C75.1,8.8,69.47,7.62,63.6,7.39v8.03c0,0.27-0.22,0.5-0.5,0.5h-6.36c-0.27,0-0.5-0.22-0.5-0.5V7.59 c-5.83,0.55-11.4,2.04-16.54,4.29c-5.31,2.33-10.17,5.49-14.42,9.3l5.87,5.87c0.19,0.19,0.19,0.51,0,0.7l-4.49,4.49 c-0.19,0.19-0.51,0.19-0.7,0l-5.8-5.8c-3.73,4.4-6.78,9.41-8.96,14.86C9.1,46.6,7.79,52.29,7.44,58.23h9.03 c0.27,0,0.5,0.22,0.5,0.5v6.36c0,0.27-0.22,0.5-0.5,0.5H7.5c0.22,2.94,0.68,5.8,1.35,8.58c0.72,3.01,1.7,5.92,2.91,8.72 c1.05,2.43,2.27,4.76,3.64,6.98c1.29,2.09,2.72,4.09,4.28,5.97l7.24-7.24c0.19-0.19,0.51-0.19,0.7,0l4.49,4.49 c0.19,0.19,0.19,0.51,0,0.7c-4.14,4.14-8.09,8.11-12.09,12.36C19.84,106.35,19.53,106.36,19.33,106.17L19.33,106.17z"/></svg>
}

function SVGhelpguide(){
    return <svg className="h-20 w-24 fill-primary" viewBox="0 0 104.31 122.88">

<path xmlns="http://www.w3.org/2000/svg" d="M12.64,77.27l0.31-54.92h-6.2v69.88c8.52-2.2,17.07-3.6,25.68-3.66c7.95-0.05,15.9,1.06,23.87,3.76 c-4.95-4.01-10.47-6.96-16.36-8.88c-7.42-2.42-15.44-3.22-23.66-2.52c-1.86,0.15-3.48-1.23-3.64-3.08 C12.62,77.65,12.62,77.46,12.64,77.27L12.64,77.27z M103.62,19.48c-0.02-0.16-0.04-0.33-0.04-0.51c0-0.17,0.01-0.34,0.04-0.51V7.34 c-7.8-0.74-15.84,0.12-22.86,2.78c-6.56,2.49-12.22,6.58-15.9,12.44V85.9c5.72-3.82,11.57-6.96,17.58-9.1 c6.85-2.44,13.89-3.6,21.18-3.02V19.48L103.62,19.48z M110.37,15.6h9.14c1.86,0,3.37,1.51,3.37,3.37v77.66 c0,1.86-1.51,3.37-3.37,3.37c-0.38,0-0.75-0.06-1.09-0.18c-9.4-2.69-18.74-4.48-27.99-4.54c-9.02-0.06-18.03,1.53-27.08,5.52 c-0.56,0.37-1.23,0.57-1.92,0.56c-0.68,0.01-1.35-0.19-1.92-0.56c-9.04-4-18.06-5.58-27.08-5.52c-9.25,0.06-18.58,1.85-27.99,4.54 c-0.34,0.12-0.71,0.18-1.09,0.18C1.51,100.01,0,98.5,0,96.64V18.97c0-1.86,1.51-3.37,3.37-3.37h9.61l0.06-11.26 c0.01-1.62,1.15-2.96,2.68-3.28l0,0c8.87-1.85,19.65-1.39,29.1,2.23c6.53,2.5,12.46,6.49,16.79,12.25 c4.37-5.37,10.21-9.23,16.78-11.72c8.98-3.41,19.34-4.23,29.09-2.8c1.68,0.24,2.88,1.69,2.88,3.33h0V15.6L110.37,15.6z M68.13,91.82c7.45-2.34,14.89-3.3,22.33-3.26c8.61,0.05,17.16,1.46,25.68,3.66V22.35h-5.77v55.22c0,1.86-1.51,3.37-3.37,3.37 c-0.27,0-0.53-0.03-0.78-0.09c-7.38-1.16-14.53-0.2-21.51,2.29C79.09,85.15,73.57,88.15,68.13,91.82L68.13,91.82z M58.12,85.25 V22.46c-3.53-6.23-9.24-10.4-15.69-12.87c-7.31-2.8-15.52-3.43-22.68-2.41l-0.38,66.81c7.81-0.28,15.45,0.71,22.64,3.06 C47.73,78.91,53.15,81.64,58.12,85.25L58.12,85.25z"/>

    </svg>
}


// **********Buttons**************
function BtnOutlineType(props){
 return(
    <Link to={`${props.linkTo}`}>
        <button type="button" class={`w-24 inline-block px-2 mx-auto py-1 border ${props.btnBorderColor} ${props.btnTextColor} font-medium text-xs leading-tight uppercase rounded-full ${props.btnHover}  focus:outline-none focus:ring-0 transition duration-150 ease-in-out`}>Click Here</button>
    </Link>
    
 )   
}