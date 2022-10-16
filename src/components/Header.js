import { parse } from 'postcss';
import React from 'react'
import { nav_Menu } from '../database/navigation';
import {Link} from 'react-router-dom'
//import SideBar from './SideBar';

let lastItemSelected='';
const Header = () => {

   document.addEventListener('click', checkMenu);
   
   //stores the state of the drop down menu
   const [menuDropDownState, setMenuDropDownState] = React.useState(nav_Menu);

   //stores the state of the hamburger menu
   const [isHamburgerClicked, setIsHamburgerClicked]=React.useState(false);

   function  dropDownState(id){

    resetMenuDropDown(); //resetting the menu
    console.log(id);
    const menuId = parseInt(id.slice(0,1)); //the id is stored in string so converting to number
    const subId = parseInt(id.slice(1,2));

    console.log(menuId);
    console.log(subId);

    //this function sets the menu state of the clicked menu option by setting the isclicked property
    setMenuDropDownState(function(previousDropDown){
      
      const subMenuArr = previousDropDown[menuId].subMenu;
      subMenuArr[subId].isClicked = true; //setting the array by turning the isClicked to true

      return  previousDropDown.map(function(menuItem)
              {
                //the item which is clicked is being identified and for settign the new state
                return menuItem.subMenu[subId].id == parseInt(id) ? {...menuItem, subMenu:[...subMenuArr] }: {...menuItem}
              })
    })
 
  
  }

  //this function resets the state of the menudropdown to white background by setting isClicked to false. 
  function resetMenuDropDown(){

    menuDropDownState.forEach(function(menuItem){
        menuItem.subMenu.forEach(function(subMenuItem){
         subMenuItem.isClicked=false;  
      })
    })
  }

 //this function returns the entire vertical menu drop down
  function RenderDropDown(props){

    const dropDownArr = menuDropDownState[props.id].subMenu; //contains the drop down item from nav_Menu
    
    const dropDownElements = dropDownArr.map(function(item){
      //looping through each item of dropdown and mapping it onto an array
      return(
        <DropDownMenu 
  
            key = {item.id} 
            id = {item.id}
            menuIcon= {item.iconURL}
            menuTitle={item.title} 
            menuDescription= {item.description}
            isClicked ={item.isClicked}
            handleClickDD = {dropDownState} />
      )
    })
  
    return (
      <div className='hidden dropDown absolute top-12 shadow w-3/4 flex gap-1 flex-col bg-gray-300 p-1 rounded'>
        {dropDownElements}
      </div>
    )
  }
  
  //this function returns the individual entry in the dropdown
  function DropDownMenu(props){
  
  return(
    <div className={`flex gap-1  text-gray-500 items-center  border border-slate-400 rounded hover:bg-yellow-50 hover:cursor-pointer ${props.isClicked? 'bg-yellow-100':'bg-white'}`} onClick={()=>props.handleClickDD(props.id)}>
  
        <img src= {props.menuIcon} alt="error" width={40} height={40} className="pl-2 pr-2"/>
        <div className='flex flex-col gap-1'>
            <h3 className='text-gray-700 font-bold pt-2'>{props.menuTitle}</h3>
            <p className='text-xs pb-2'>{props.menuDescription}</p>  
        </div>  
    </div>
    
    );
  }

  //this function toggles the boolean to see if the Hamburger menu is clicked. 
  function toggleHmenu(){
    setIsHamburgerClicked(function(){
      return(!isHamburgerClicked);
    })
  }
  
  // this function uses the above function to toglle the sidebar through hamburger icon
  React.useEffect(function(){
      document.getElementById('sidebar').classList.toggle('hidden'); //toggles the Hamburger Menu
  },[isHamburgerClicked])

  return (
    <div className='bg-primary'>  
      <nav className='w-11/12 mx-auto flex items-center justify-between'>
        <div className='flex items-center lg:gap-36'> 
          {/* wrapper for Logo and Primary menu */}
              <div className='py-2'>
                <img src= {require('../images/undersigned.png')} alt="error" width={100} height={80}/>
              </div>
              <div className=' hidden pt-12 md:flex'>
                
                <ul className='flex text-white relative menuList'> 
                 
                  <li className='data-menu-1'>

                    <div className='flex gap-1 items-center px-2 py-1 lg:px-4
                    hover:bg-yellow-300 hover:text-neutral-600 rounded hover:cursor-pointer'>
                      <SVGcghs/>
                    <PrimaryHeading heading = "CGHS"/>

                    </div>

                    <RenderDropDown id={0}/>
                  
                  </li>

                  <li className='data-menu-2'>
                    <div className='flex gap-0 items-center px-2 py-1 lg:px-4
                    hover:bg-yellow-300 hover:text-neutral-600 rounded hover:cursor-pointer'>

                      <SVG7cpc/>

                    <PrimaryHeading heading = "7th CPC"/>

                    </div>

                    <RenderDropDown id={1}/>
                   
                  </li>

                  <li className='data-menu-3'>
                    <div className='flex gap-1 items-center px-2 py-1 lg:px-4
                    hover:bg-yellow-300 hover:text-neutral-600 rounded hover:cursor-pointer' >
                      
                      <SVGtools/>
                  
                     <PrimaryHeading heading = "Tools"/>
                    </div>

                    <RenderDropDown id={2}/>
 
                  </li>

                  <li className='data-menu-4'>

                    <div className='flex gap-1 items-center px-2 py-1 lg:px-4
                    hover:bg-yellow-300 hover:text-neutral-600 rounded hover:cursor-pointer'>

                        <SVGresources/>

                      <PrimaryHeading heading = "Resources"/>
                    </div>

                    <RenderDropDown id={3}/>
                  </li>
                  
                </ul>

              </div>
        </div>

        <div className='hidden md:flex'>
          {/* for the secondary options */}
            <SecondaryMenu />
        </div>

        {/* Hamburger Menu Icon */}
        <HamburgerMenu toggleHmenu={toggleHmenu}/>

      </nav>

        <div className={`absolute top-0`} id='sidebar'>
           <SideBar 
              toggleHmenu={toggleHmenu} 
              currentState = {menuDropDownState}
            />
        </div>
    </div>
  )
}

export default Header

// Returns the Heading Text and dropdown
function PrimaryHeading(props){

  return(
    <>
         <span>{props.heading}</span>
          
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" className="w-3 h-3">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
         </svg>
    </>
  )
}

//This functions renders the Secondary menu options (home and about)
function SecondaryMenu(){
  
  return(
    
    <ul className='flex text-white menuItems'>
                
                <Link to= '/'>
                
                  <li className=' px-1 lg:px-4 py-2 
                  hover:bg-yellow-300 hover:text-neutral-600 rounded hover:cursor-pointer'>

                    <div className='flex gap-0 lg:gap-1'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className='h-6 w-6'>
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                      </svg>
                      
                      <span>Home</span>

                    </div>
                  </li>
                </Link>

                <Link to='/about'>
                
                  <li className='px-2 lg:px-4 py-2 
                  hover:bg-yellow-300 hover:text-neutral-600 rounded hover:cursor-pointer'>

                    <div className='flex gap-0 lg:gap-1'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className='h-6 w-6'>
                      <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                    </svg>
                    <span>About</span>

                    </div></li>
                </Link>
                
            </ul>

);

}

//this function renders the Hamburger menu icon for responsive layout
function HamburgerMenu(props){

  return (
    <div className='mr-4 md:hidden hover:cursor-pointer' onClick={props.toggleHmenu}>
            <svg className='text-white w-8 h-8' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"  stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
    </div>
  );
}




// ****************SVG Elements*********************
export function SVGcghs(){
  return(
    <svg className="h-6 w-6 "  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="3" y1="21" x2="21" y2="21" />  <path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16" />  <path d="M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4" />  <line x1="10" y1="9" x2="14" y2="9" />  <line x1="12" y1="7" x2="12" y2="11" /></svg>
  )
}

function SVG7cpc(){
  return(
    <svg  width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"  fill="currentColor"><path d="M17 6V4H6v2h3.5c1.302 0 2.401.838 2.815 2H6v2h6.315A2.994 2.994 0 0 1 9.5 12H6v2.414L11.586 20h2.828l-6-6H9.5a5.007 5.007 0 0 0 4.898-4H17V8h-2.602a4.933 4.933 0 0 0-.924-2H17z"/></svg>
  )
}

function SVGtools(){
 return(
  <svg className="h-6 w-6"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />  <circle cx="12" cy="12" r="3" /></svg>
 )
}

function SVGresources(){
 return (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
    </svg>
 )
}

// ************** Programmed Elements********************


// This function checks whether the drop down menu is open or not 
function checkMenu(e){
  
  const dd = document.getElementsByClassName('dropDown'); //get the Nodelist of all classes with dropDown
  const sbDD = document.getElementsByClassName('sbDropDown');

  if(e.target.closest('.menuList')!=null){ //if the click is within the menu buttons. menuList is the class of ul
    
      for(let i=0; i<dd.length;i++)
      { //looping through the options to check which one is hidden and setting the appropriate value
        if(e.target.closest('li').classList.contains(`data-menu-${i+1}`))
          {
            if(dd[i].classList.contains('hidden')){
              console.log(dd[i])
              dd[i].classList.remove('hidden');
              
            }
          }
         else{
              dd[i].classList.add("hidden");
            }
      }
  }
  else{
    hideAllDropDown(); //it means the click was not in menu options and thus closing all the dropdown if any
    //console.log("here");
  }

  if(e.target.closest('.subMenuList')!=null){
    //console.log('inside sb')
    for(let i=0; i<sbDD.length;i++)
      { //looping through the options to check which one is hidden and setting the appropriate value
        if(e.target.closest('li').classList.contains(`data-sbmenu-${i+1}`))
          {
            if(sbDD[i].classList.contains('hidden'))
             {
              if(sbDD[i].classList.contains('animate-sbOut'))
                { sbDD[i].classList.remove('animate-sbOut');} //remove animation if present
              sbDD[i].classList.remove('hidden');
              } 
              else{
                if(!sbDD[i].classList.contains('animate-sbOut'))
                  { sbDD[i].classList.add('animate-sbOut');} //add animation class only when it is not present
                
                  //to add some delay for animation purpose
                  setTimeout(function(){
                  sbDD[i].classList.add('hidden');
                },290)
               
              }
          }
      }
         
      }
  }

//hides the drop down
function hideAllDropDown(){

    const dd = document.querySelectorAll('.dropDown');

 // console.log(dd[0].classList.contains('hidden'));
  
  for(let i =0; i<dd.length;i++){
      if(!dd[i].classList.contains("hidden")){
        dd[i].classList.add("hidden");
      }
    }
}

// *****************************Sidebar**************

function SideBar(props){

  //using this function to stop the side bar from appearing when reloaded
  React.useEffect(function(){
      props.toggleHmenu();
  },[])

  const sbItemArr = props.currentState; //this is the state of the menu
  
  const sbSubMenu = sbItemArr.map(function(sbItem){
    return (sbItem.subMenu.map(function(item){
      return(
        <SbSubItems key={item.id} title={item.title} id={item.id} isClicked={item.isClicked} to={item.to} toggleHmenu={props.toggleHmenu}/>
      )
    }))
  })

  function rotateSVG(id){

    document.getElementById(`svg-${id}`).classList.toggle('rotate-90') //rotate the left arrow
     
  }

  //this function renders the Sidebar Sub Menu Items
function SbSubItems(props){

  function toggleSelectItem(id){
    console.log(document.getElementById(id));
    if(lastItemSelected==''){
      lastItemSelected = id
    } else{
      document.getElementById(lastItemSelected).classList.remove('bg-sky-100')
      lastItemSelected = id
    }
    document.getElementById(id).classList.add('bg-sky-100')
    props.toggleHmenu()
  }

  React.useEffect(function(){
    if(lastItemSelected!==''){
      document.getElementById(lastItemSelected).classList.add('bg-sky-100')
    }
  },[lastItemSelected])

  return(
    <div>
      <Link to={`${props.to}`}>
      
            <ul className='pl-6 pb-2'>
              <li className={`pl-6 mr-2 py-2 text-sm rounded-full transition-all hover:scale-105`} id={`${props.id}`} onClick= {()=>toggleSelectItem (props.id)}>
                  {props.title}
              </li>
            </ul>
      </Link>
    </div>
  )
}

  return(

    // The Modal
    <div className='flex'>

          {/* The SIDEBAR */}
          <div className="transition-all fixed inset-0 z-10 overflow-y-auto w-80 bg-white md:hidden">

                <div className="flex items-center justify-between bg-primary text-white">
                    
                    <img src={require('../images/undersigned.png')} alt="error" className='h-28  w-30 pl-4 py-2'/>
                    <CloseButton toggleHmenu={props.toggleHmenu}/>
                  
                </div>
                <p className='p-4 text-xl text-center tracking-[.25em]'>MENU</p>
                
                <ul className='subMenuList'>
                    <li className={`p-0 text-lg cursor-pointer border-b border-gray-300 data-sbmenu-1 `} 
                        >

                        <div className="p-3 flex justify-between items-center gap-4 font-poppins sbMenuTitle-1 " onClick={()=>{rotateSVG(sbItemArr[0].id)}}>
                          
                          <div className='flex gap-4 text-primary'> 
                            <img src={require('../images/cghs-sb.png')} alt="error" className='h-8 w-8'/>
                            <h2 className='p-0 m-0'>{props.currentState[0].menuTitle}</h2>
                          </div>

                          <div className='pr-8'>
                            <DownArrowSVG index={props.currentState[0].id}/> 
                          </div>
                          
                        </div>

                        <div className='hidden sbDropDown animate-sbEnter'>
                          {sbSubMenu[0]}
                        </div>
                        
                    </li>

                    <li className={`p-0 text-lg cursor-pointer border-b border-gray-300 data-sbmenu-2 `} 
                        >
                     <div className="p-3 flex justify-between items-center gap-4 font-poppins sbMenuTitle-2 " onClick={()=>{rotateSVG(props.currentState[1].id)}}>
                          
                          <div className='flex gap-4 text-primary'> 
                            <img src={require('../images/rupee-sb.png')} alt="error" className='h-8 w-8'/>
                            <h2 className='p-0 m-0'>{props.currentState[1].menuTitle}</h2>
                          </div>

                          <div className='pr-8'>
                            <DownArrowSVG index={props.currentState[1].id}/> 
                          </div>
                        </div>

                        <div className='hidden sbDropDown animate-sbEnter'>
                          {sbSubMenu[1]}
                        </div>
                        
                    </li>

                    <li className={`p-0 text-lg cursor-pointer border-b border-gray-300 data-sbmenu-3 `} 
                        >
                     <div className="p-3 flex justify-between items-center gap-4 font-poppins sbMenuTitle-3 " onClick={()=>{rotateSVG(props.currentState[2].id)}}>
                          
                          <div className='flex gap-4 text-primary'> 
                            <img src={require('../images/tools-sb.png')} alt="error" className='h-8 w-8'/>
                            <h2 className='p-0 m-0'>{props.currentState[2].menuTitle}</h2>
                          </div>

                          <div className='pr-8'>
                            <DownArrowSVG index={props.currentState[2].id}/> 
                          </div>
                        </div>
                        <div className='hidden sbDropDown animate-sbEnter'>
                          {sbSubMenu[2]}
                        </div> 
                    </li>

                    <li className={`p-0 text-lg cursor-pointer border-b border-gray-300 data-sbmenu-4 `}>
                     <div className="p-3 flex justify-between items-center gap-4 font-poppins sbMenuTitle-4 " onClick={()=>{rotateSVG(props.currentState[3].id)}}>
                          
                          <div className='flex gap-4 text-primary'> 
                            <img src={require('../images/resources-sb.png')} alt="error" className='h-8 w-8'/>
                            <h2 className='p-0 m-0'>{props.currentState[3].menuTitle}</h2>
                          </div>

                          <div className='pr-8'>
                            <DownArrowSVG index={props.currentState[3].id}/> 
                          </div>
                        </div>
                        <div className='hidden sbDropDown animate-sbEnter'>
                          {sbSubMenu[3]}
                        </div>
                    </li> 
                </ul> 
          </div>

          <div className={`fixed inset-0 bg-gray-600 bg-opacity-80 transition-opacity md:hidden`} onClick={props.toggleHmenu}>
            {/* this is the translucent portion besides the side bar */}
          </div>

      </div>
  )



}

function DownArrowSVG(props){

  return(
    
    <svg id={`svg-${props.index}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4 ease-in duration-200">
    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
  </svg>
  
  )
}

function CloseButton(props){
 
  return (
      <div className="p-2 mr-4 text-bg-primary h-10-w-10 hover:cursor-pointer hover:bg-white hover:text-primary rounded-full" onClick={props.toggleHmenu}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
      </div>    
  )
}


