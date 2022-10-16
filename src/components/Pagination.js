import React from 'react';
import { usePagination, DOTS } from './usePagination';

let active=false

const Pagination = props => {
  const {
    totalCount,
    pageSize,
    siblingCount = 1,
    currentPage,
    onPageChange = {onPageChange}
  } = props;

  const paginationRange = usePagination({
    
    totalCount,
    siblingCount,
    pageSize,
    currentPage
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const compareRange = paginationRange.map(function(value,i){
    if(currentPage == paginationRange[i]){
      return true
    }
    else return false
  })

  // const onNext = () => {
  //   onPageChange(currentPage + 1);
  // };

  // const onPrevious = () => {
  //   onPageChange(currentPage - 1);
  // };

  let lastPage = paginationRange[paginationRange.length - 1];
  console.log('paginationRange')
  
  const PillsArr = paginationRange.map(function(item,index){

    return(
        <Row item = {item}
            i = {index}
            currentPage = {currentPage}/>
    )
  })
  
  function Row(props){


    return(
        <div className={`cursor-pointer rounded w-8 h-8 pagePills ${compareRange[props.i]?'bg-primary text-white':'bg-slate-200'}`}
                id = {`${props.i}`} onClick = {(e)=>{
                 console.log('Current Page in Pagination '+currentPage)
                 
                  onPageChange(e)}}>
                    {props.item}

        </div>
    )
  }

  return (
    PillsArr
  );
};

export default Pagination;