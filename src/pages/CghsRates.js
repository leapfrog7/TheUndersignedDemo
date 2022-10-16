import React from "react";
import {Link} from 'react-router-dom';
import Pagination from "../components/Pagination";
import { DOTS } from "../components/usePagination";

import {CGHS_Rates} from '../database/DBcghsrate';

let matchesFound = 0 //counter for 
let currentPage = 1
let pageSize = 10
let totalCount = Math.ceil(CGHS_Rates.length)
let filteredArr = []

export default function CghsRates(){
    
    const [formData, setFormData] = React.useState({searchInput:''})
    
    const [tableData, setTableData] = React.useState(()=>{

        return CGHS_Rates.map(function(rate,index){
            
           if(index<pageSize)

            return(
                    <TableRow 
                        key = {rate.key}
                        cghsCode = {rate.CghsCode}
                        listedItem = {rate.ListedItem}
                        nabhRate = {rate.NabhRate}
                        nonNabhRate = {rate.NonNabhRate}
                    />
                ) 
            })

    });
    

    //const [tableData, setTableData] =React.useState([...RateElements])
    //console.log(RateElements);
    function handleChange(event){
        //console.log(event.target.value)
        setFormData(function(previousInput){
            //console.log('dfddfdfdfddfddf')
            return(
                { ...previousInput, [event.target.name]: event.target.value }
            )
        })

        updateTable(event.target.value)
    }

    function updateTable(searchStr){
       //if(searchStr=='') {currentPage=1}
       currentPage = 1 // this is required for resetting the page to 1 when user types
       //pageSize = parseInt(document.getElementById('pagePerRow').value)
       filteredArr = []
        filteredArr = CGHS_Rates.filter(function(rateItem){
            return (rateItem.ListedItem.toLowerCase().indexOf(searchStr.toLowerCase())>=0 ||
                        parseInt(rateItem.CghsCode) === parseInt(searchStr))
        })
        //console.log(filteredArr)
        matchesFound = filteredArr.length

        totalCount = Math.ceil(filteredArr.length)

        setTableData(filteredArr.map(function(rate,index){
           // console.log(rate) 
           if(index<pageSize)   
            return(
                    <TableRow 
                        key = {rate.id}
                        cghsCode = {rate.CghsCode}
                        listedItem = {rate.ListedItem}
                        nabhRate = {rate.NabhRate}
                        nonNabhRate = {rate.NonNabhRate}
                    />
                ) 
            }))
    }

    //this function is called when the paginated cells are clicked
    function onPageChange(e){
        
        console.log(e.target.id)
        let pageNumClicked = parseInt(e.target.id) // each cell has the id associated with it starting with 0
        
         //go further only when the clicked element's id is a number
         if(Number.isInteger(parseInt(e.target.id))){

            //checks the condition if the right dots are clicked
            if(e.target.innerHTML === DOTS && pageNumClicked === 5){
               // console.log(e.target)
                currentPage = parseInt(document.getElementById((e.target.id)-1).innerHTML)
                  
            }
            //checks the condition if the left dots are clicked
            if(e.target.innerHTML === DOTS && pageNumClicked === 1){
               // console.log(e.target)
                currentPage = parseInt(document.getElementById(pageNumClicked+1).innerHTML)-1
                
            }
            //if the clicked element is not a dot then simply updated the current page
            if(e.target.innerHTML !== DOTS)
            {
                
                //console.log('current page: '+ currentPage)
                currentPage = parseInt(document.getElementById(pageNumClicked).innerHTML)
                //console.log('current page: '+ currentPage)
                
            }
         }
        
        let startIndex = (currentPage-1)*pageSize
        let lastIndex = startIndex + (pageSize-1) //subtracting one for adjustment to zero index

           // console.log('current page: '+ currentPage)
           // console.log(e.target)
           // console.log('pageNumClick: '+pageNumClicked)
           // console.log('formdata-'+formData)
            
            if(formData.searchInput===''){
                //currentPage = 1
                setTableData(CGHS_Rates.map(function(rate,index){
        
                    if(index>=startIndex && index<=lastIndex)
                    return(
                        <TableRow 
                            key = {rate.id}
                            cghsCode = {rate.CghsCode}
                            listedItem = {rate.ListedItem}
                            nabhRate = {rate.NabhRate}
                            nonNabhRate = {rate.NonNabhRate}
                        />
                    ) 
                }))
            }
    
            else{
                
                setTableData(filteredArr.map(function(rate,index){
        
                    if(index>=startIndex && index<=lastIndex)
                    return(
                        <TableRow 
                            key = {rate.key}
                            cghsCode = {rate.CghsCode}
                            listedItem = {rate.ListedItem}
                            nabhRate = {rate.NabhRate}
                            nonNabhRate = {rate.NonNabhRate}
                        />
                    ) 
                }))
            }     
    }
   
    function TableRow(props){
        return(
            <tr className="border-b bg-blue-50">
                <td className="text-center px-0 py-2 whitespace-nowrap text-xs md:text-sm font-medium text-gray-900">{props.cghsCode}</td>
                <td className="text-xs md:text-sm text-gray-900 font-medium px-2 py-2">
                    {props.listedItem}
                </td>
                <td className="text-center text-xs md:text-sm text-gray-900 font-medium px-2 py-2 whitespace-nowrap">
                    {props.nabhRate}
                </td>
                <td className="text-center text-xs text-gray-900 font-medium px-2 py-2 whitespace-nowrap md:text-sm">
                    {props.nonNabhRate}
                </td>
            </tr>
        )
    }

    //this function sets the page size when the rows per page are changed through select
    function setPageSize(){
    
        pageSize = parseInt(document.getElementById('pagePerRow').value) // gets the new value of the page per row
        
        let startIndex = 0 //the page is reset and starts again from zero
        let lastIndex = pageSize-1 //due to zero based array

        setFormData({searchInput:''}) // setting the input back to null ... to remove any previous entry if any

        setTableData(CGHS_Rates.map(function(rate,index){
            
            if(index>=startIndex && index<=lastIndex)
            return(
                <TableRow 
                    key = {rate.id}
                    cghsCode = {rate.CghsCode}
                    listedItem = {rate.ListedItem}
                    nabhRate = {rate.NabhRate}
                    nonNabhRate = {rate.NonNabhRate}
                />
            ) 
         }))
        
       
        
        console.log(pageSize)
    }

    return(
        <div className="w-11/12 md:w-4/5 xl:2/3 mx-auto min-h-screen pb-12">
            <div>
                <div className="my-4">
                    <h1 className="text-xl">Table of Latest CGHS Rates</h1>
                    <h3 className="text-sm text-gray-500">Find the latest CGHS rates for the listed investigation and treatment</h3> 
                </div>
                
            </div>
            
            <div className="flex flex-col md:items-center gap-2 md:flex-row my-2 md:my-4 md:gap-1 lg:gap-8">
               
                <div className="flex items-center justify-center">
                    <input className="w-full rounded-l focus:ring-0 focus:border-primary placeholder:text-xs h-12" placeholder="Type in here..." id="searchInput"
                        type="text" 
                        name="searchInput" 
                        value={formData.searchInput} 
                        onChange={handleChange} 
                    ></input>
                    <p className="flex items-center bg-primary h-12 px-1 rounded-r border-primary">
                    <span className="material-symbols-outlined text-white">search</span></p>
                    
                </div>


                <div className="flex justify-around items-center md:gap-2 lg:gap-8 gap-0.5 mt-2 md:mt-0">
                    
                    <div className="flex items-center gap-1 md:gap0.5 flex-col md:flex-row">
                        
                        <label for="pagePerRow" className="mb-0 text-xs md:text-sm font-light md:font-medium text-gray-800">Rows Per Page</label>
                        <select id="pagePerRow" className="border border-primary h-6 text-gray-700 text-xs md:text-sm rounded-sm w-16 p-1 lg:p-2 md:h-10 focus:ring-1 focus:ring-primary focus:border-0" onChange={setPageSize}>
                        
                            <option value="10">10</option>
                            <option value="20">20</option>
                            <option value="40">40</option>
                            
                        </select>
                    </div>

                   <div className="p-0 h-8 md:h-12">
                            <StatCard 
                            text = {'Total Items :'}
                            totalMatches = {CGHS_Rates.length}
                            bgColor = {'bg-pink-50'}
                            textColor = {'text-pink-800'}/>
                    </div>

                    <div className={`p-0 h-8 md:h-12 ${formData.searchInput?'animate-sbEnter':'hidden'}`}>
                            <StatCard 
                            text = {'Matches Found :'}
                            totalMatches = {matchesFound}
                            bgColor = {'bg-green-50'}
                            textColor = {'text-green-800'}/>
                    </div>
                </div>

            </div>

            <div className="flex flex-col h-full mt-4 md:mt-8">

                

                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="overflow-scroll">
                        <table className="min-w-full">
                            <thead className="border-b bg-primary text-white">
                                <tr >
                                    <th scope="col" className="font-light text-center text-sm font-medium px-2 py-2 text-left">
                                        Code
                                    </th>
                                    <th scope="col" className="font-light text-sm font-medium px-2 py-2 text-left">
                                        Investigation/ Procedure
                                    </th>
                                    <th scope="col" className="font-light text-center text-sm font-medium px-2 py-2 text-left">
                                        NABH
                                    </th>
                                <th scope="col" className="font-light text-center text-sm font-medium px-2 py-2 text-left">
                                    Non-NABH
                                </th>
                                </tr>
                            </thead>
                        <tbody>
                            
                            {tableData}

                          
                        </tbody>
                        </table>
                    </div>
                </div>
             </div>
               
                <div className="flex gap-4 items-center justify-center text-center mt-8">
                    <Pagination currentPage={currentPage}
                                totalCount = {totalCount}
                                siblingCount = {1}
                                pageSize = {pageSize} 
                                onPageChange = {onPageChange}/>
                </div>
                
                
            </div>
           
        </div>
    )
}

// function PaginatedRow({totalCount, pageSize, currentPage}){

//     const PaginaterArr = [];
//     console.log(totalCount)

//     function NumberRow(props){
//         return(

//             <div className="rounded-full h-6 w-6 bg-slate-200 hover:bg-slate-400 text-gray-600, hover:cursor-pointer text-center m-2">
//               {props.item}
//             </div>
//         )
//     }

//     return(
//         <div className="flex gap-4 items-center">
//             <div>
//                 <span className="material-symbols-outlined text-sm">arrow_back_ios</span>
//             </div>

            

//             <div>
//                 <span className="material-symbols-outlined text-sm">arrow_forward_ios</span>
//             </div>
//         </div>
//     )
// }



function StatCard(props){
    return(
        <div class={`flex flex-col items-center md:flex-row items-center ${props.bgColor} mx-1 md:mx-2 p-1 md:p-2 rounded border`}>

                    <div class="px-2 flex items-center text-lg font-light">
                    <p class={`${props.textColor} text-xs md:text-sm`}>{props.text}</p>
                    </div>

                    <div class={`text-sm md:text-normal md:p-1 rounded-b-lg break-words ${props.textColor}`}>
                    {props.totalMatches}
                    </div>
            
         </div>
    )
}


