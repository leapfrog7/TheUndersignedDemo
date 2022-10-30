import React from "react";
import {Link} from 'react-router-dom';
import Pagination from "../components/Pagination";
import { StatCard } from "./CghsRates";
import { DOTS } from "../components/usePagination";
import nabh from "../images/nabh.png";
import nabl from "../images/Nabl.png"

import {empanelledCenter} from '../database/DBempanelledcenter';

let matchesFound = 0 //counter for
let currentPage = 1
let pageSize = 10
let totalCount = 0
let listCityWise = []
let filteredArr = []
let city = 'Delhi-NCR'


export default function CghsCenter(){
   
    const [formData, setFormData] = React.useState({searchInput:''})
    const [empanelledList, setEmpanelledList] = React.useState(()=>{
           
        //load the values pertaining to the City 
        listCityWise = empanelledCenter.filter(function(center){
            return (center.City== city && center.isActive)
        })
        totalCount = listCityWise.length
        //return only those values for the selected city
        return(
                listCityWise.map(function(center,index){
                    if (index<pageSize)
                    return(
                        <RowOfCenters 
                            key={center.Key}
                            name = {center.Name}
                            address = {center.Address}
                            facilities = {center.Facilities}
                            accreditation = {center.Accreditation}
                        />
                    )
                })
            )
    })

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

    function onPageChange(e){
        console.log ('onPageChange clicked')
        console.log (e.target)

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
               setEmpanelledList(listCityWise.map(function(center,index){
       
                   if(index>=startIndex && index<=lastIndex)
                   return(
                       <RowOfCenters 
                           key = {center.key}
                           name = {center.Name}
                           address = {center.Address}
                           facilities = {center.Facilities}
                           accreditation = {center.Accreditation}
                          
                       />
                   ) 
               }))
           }
   
           else{
               
               setEmpanelledList(filteredArr.map(function(center,index){
       
                   if(index>=startIndex && index<=lastIndex)
                   return(
                    <RowOfCenters 
                        key = {center.key}
                        name = {center.Name}
                        address = {center.Address}
                        facilities = {center.Facilities}
                        accreditation = {center.Accreditation}
                   
                />
                   ) 
               }))
           }     
    }

    function updateTable(searchStr){
        //if(searchStr=='') {currentPage=1}
        currentPage = 1 // this is required for resetting the page to 1 when user types
        //pageSize = parseInt(document.getElementById('pagePerRow').value)
        filteredArr = []
         filteredArr = listCityWise.filter(function(center){
             return (center.Name.toLowerCase().indexOf(searchStr.toLowerCase())>=0 ||
                         center.Address.toLowerCase().indexOf(searchStr.toLowerCase())>=0||
                         center.Facilities.toLowerCase().indexOf(searchStr.toLowerCase())>=0)
         })
         //console.log(filteredArr)
         matchesFound = filteredArr.length
 
         totalCount = Math.ceil(filteredArr.length)
 
         setEmpanelledList(filteredArr.map(function(center,index){
            // console.log(rate) 
            if(index<pageSize)   
             return(
                   <RowOfCenters 
                        key = {center.key}
                        name = {center.Name}
                        address = {center.Address}
                        facilities = {center.Facilities}
                        accreditation = {center.Accreditation}
           
                     />
                 ) 
             }))
     }

     //this function sets the page size when the rows per page are changed through select
    function setPageSize(){
    
        pageSize = parseInt(document.getElementById('pagePerRow').value) // gets the new value of the page per row
        
        let startIndex = 0 //the page is reset and starts again from zero
        let lastIndex = pageSize-1 //due to zero based array

        setFormData({searchInput:''}) // setting the input back to null ... to remove any previous entry if any

        setEmpanelledList(listCityWise.map(function(center,index){
            totalCount = listCityWise.length
            if(index>=startIndex && index<=lastIndex)
           
            return(
                <RowOfCenters 
                key = {center.key}
                name = {center.Name}
                address = {center.Address}
                facilities = {center.Facilities}
                accreditation = {center.Accreditation}
   
             />
            ) 
         }))
        
       
        
        console.log(pageSize)
    }

    function setCity(){

        city = document.getElementById('cityList').value // gets the new value of the city
        
        let startIndex = 0 //the page is reset and starts again from zero
        let lastIndex = pageSize-1 //due to zero based array

        setFormData({searchInput:''}) // setting the input back to null ... to remove any previous entry if any

        listCityWise = empanelledCenter.filter(function(center){
            
            return (center.City== city && center.isActive)
        })

        setEmpanelledList(listCityWise.map(function(center,index){
            totalCount = listCityWise.length
            if(index>=startIndex && index<=lastIndex)
           
            return(
                <RowOfCenters 
                key = {center.key}
                name = {center.Name}
                address = {center.Address}
                facilities = {center.Facilities}
                accreditation = {center.Accreditation}
   
             />
            ) 
         }))


    }


    function RowOfCenters(props){

        //this helps append a NABH logo depending on Accreditation 
        let isNabh = false
        let isNabl = false
        if(props.accreditation.toLowerCase()==='nabh') 
            {   
                isNabh=true
            }
        
        if (props.accreditation.toLowerCase()==='nabl'){
            isNabl = true
        }

        return(
            <tr className="border-b hover:bg-gray-100 text-xs md:text-sm">
                <td className="p-2">
                   {props.name}  <span className={`${isNabh?'':'hidden'} m-1 inline`}><img src={nabh} alt="hh" width={20} height={20} /></span>
                   <span className={`${isNabl?'':'hidden'} m-1 inline`}><img src={nabl} alt="hh" width={20} height={20}/></span>
                </td>
                <td className="p-1 whitespace-normal">
                    {props.address} 
                </td>
                <td className="p-1">
                    {props.facilities}
                </td>
            </tr>
        )
    }

    return(
        <div className="min-h-screen w-11/12 md:w-3/4 lg:2/3 mx-auto my-2 flex flex-col">

                <div className="my-4">
                    <h1 className="text-xl text-primary">CGHS empanelled Hospital/Diagnostics Center</h1>
                    <h3 className="text-sm text-gray-600 mb-4 font-light md:font-normal">Find the latest CGHS empanelled centers across various CGHS cities. Search by Name, Locality or Medical Facilities you are looking for. </h3> 
                </div>

                <div className="flex flex-col gap-4 md:flex-row">
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
                    
                    <div className="flex gap-2 items-center justify-around">

                            <div className="flex items-center gap-1 md:gap0.5 flex-col md:flex-row">
                                
                                <label for="pagePerRow" className="mb-0 text-xs md:text-sm font-light md:font-medium text-gray-800">Rows Per Page</label>
                                <select id="pagePerRow" className="border border-primary h-6 text-gray-700 text-xs md:text-sm rounded-sm w-16 p-1 lg:p-2 md:h-10 focus:ring-1 focus:ring-primary focus:border-0" onChange={setPageSize}>
                                
                                    <option value="10">10</option>
                                    <option value="15">15</option>
                                    <option value="25">25</option>
                                    
                                </select>
                            </div>

                            <div className="flex items-center gap-1 md:gap0.5 flex-col md:flex-row">
                                
                                <label for="cityList" className="mb-0 text-xs md:text-sm font-light md:font-medium text-gray-800">Select City</label>
                                <select id="cityList" className="border border-primary h-6 text-gray-700 text-xs md:text-sm rounded-sm w-24 md:w-32 p-1 lg:p-2 md:h-10 focus:ring-1 focus:ring-primary focus:border-0" onChange={setCity}>
                                
                                    <option value="Delhi-NCR">Delhi-NCR</option>
                                    <option value="Mumbai">Mumbai</option>
                                    <option value="Kolkata">Kolkata</option>
                                    <option value="Chennai">Chennai</option>
                                    
                                </select>
                            </div>


                        <div className={`p-0 h-8 md:h-12 `}>
                                <StatCard 
                                text = {'Total Centers :'}
                                totalMatches = {listCityWise.length}
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

                <div className="flex gap-4 my-2 md:my-4">
                     <div className="mt-4 px-4 flex gap-2 items-center text-xs md:text-sm">
                        <img src={nabh} alt="" width={30} height={30} />
                        <span> - NABH Accredited</span>
                    </div>

                    <div className="mt-4 px-4 flex gap-2 items-center text-xs md:text-sm">
                        <img src={nabl} alt="" width={30} height={30} />
                        <span> - NABL Accredited</span>
                    </div>

                </div>
               

                <div class="overflow-x-auto relative shadow-md my-4">
                            <table className="min-w-full">
                            <thead className="border-b">
                                <tr className="bg-primary text-white text-xs md:text-sm">
                                    <th scope="col" className="text-left p-2">
                                        Name of Empanelled Center
                                    </th>
                                    <th scope="col" className="text-left p-2">
                                        Address
                                    </th>
                                    <th scope="col" className="text-left p-2">
                                        Empanelled for
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                            
                                {empanelledList}
                            </tbody>
                        </table>
                </div>
                    
                <div className ="flex gap-4 items-center justify-center text-center my-8">
                        <Pagination currentPage={currentPage}
                                        totalCount = {totalCount}
                                        siblingCount = {1}
                                        pageSize = {pageSize} 
                                        onPageChange = {onPageChange}/>
                </div>
        </div>
    )
}