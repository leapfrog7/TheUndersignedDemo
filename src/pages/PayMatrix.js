import { tab } from "@testing-library/user-event/dist/tab";
import { data } from "autoprefixer";
import React from "react";
import {Matrix} from '../database/DBpaymatrix'

export default function PayMatrix(){
  
    console.log(Matrix.length)
  let dataCells = Matrix.map(
    function(entireRow){
        return(
                <TableRow row={entireRow}/>    
            
        )
    }
  )

  function TableRow(props){

    const dataCells = props.row.map(function(item){
        return (
            <TableCells item = {item}/>
        )
    })

    return(
        <tr className="border-b border-gray-200 text-gray-700 dark:border-gray-700">
                {dataCells}
        </tr>
    )
  }

  function TableCells(props){

    return(
        <td className="py-4 px-1 md:px-3 first:sticky first:left-0 first:bg-blue-50">
                            {props.item}
        </td>
    )
  }
    return(
        
        // <div className="relative overflow-x-auto relative shadow-md sm:rounded-lg w-full mb-28 md:w-4/5 lg:w-3/4 mx-auto ">

        <div className="w-11/12 md:w-4/5 lg:w-3/4 mx-auto">
            
            <div className="my-6 ">
                <h1 className="text-semibold text-xl text-primary md:text-2xl">Pay Matrix as per 7th CPC </h1>
                <p className="text-sm my-2 text-gray-500">Navigate through the Pay Matrix with convenient horizontal and vertical scrolling without losing the context</p>
            </div>

            <div className="flex flex-col  h-screen">


                <div className="flex-grow overflow-auto">
                    <table className="relative text-xs md:text-sm text-left text-gray-700">
                        <tr className="text-center">
                            <th className="sticky top-0 left-0 py-4 px-2 md:px-4 bg-blue-100 z-10"><span>Cell</span>
                            <span class="material-symbols-outlined font-light text-sm">arrow_downward</span> </th>
                            <th className="sticky top-0 py-4 px-3 bg-teal-50">Level 1</th>
                            <th className="sticky top-0 py-4 px-3 bg-teal-50">Level 2</th>
                            <th className="sticky top-0 py-4 px-3 bg-teal-50">Level 3</th>
                            <th className="sticky top-0 py-4 px-3 bg-teal-50">Level 4</th>
                            <th className="sticky top-0 py-4 px-3 bg-teal-50">Level 5</th>

                            <th className="sticky top-0 py-4 px-3 bg-teal-50 z-0">Level 6</th>
                            <th className="sticky top-0 py-4 px-3 bg-teal-50">Level 7</th>
                            <th className="sticky top-0 py-4 px-3 bg-teal-50">Level 8</th>
                            <th className="sticky top-0 py-4 px-3 bg-teal-50">Level 9</th>
                            <th className="sticky top-0 py-4 px-3 bg-teal-50">Level 10</th>
                            <th className="sticky top-0 py-4 px-3 bg-teal-50">Level 11</th>
                            <th className="sticky top-0 py-4 px-3 bg-teal-50">Level 12</th>

                            <th className="sticky top-0 py-4 px-3 bg-teal-50">Level 13</th>
                            <th className="sticky top-0 py-4 px-3 bg-teal-50">Level 13A</th>
                            <th className="sticky top-0 py-4 px-3 bg-teal-50">Level 14</th>
                            <th className="sticky top-0 py-4 px-3 bg-teal-50">Level 15</th>
                            <th className="sticky top-0 py-4 px-3 bg-teal-50">Level 16</th>
                            <th className="sticky top-0 py-4 px-3 bg-teal-50">Level 17</th>
                            <th className="sticky top-0 py-4 px-3 bg-teal-50">Level 18</th>
                    </tr>
                    
                        <tbody className="text-center">
                            {dataCells}
                        
                        </tbody>
                    </table>
                </div>
            </div>
        </div>


    )
}