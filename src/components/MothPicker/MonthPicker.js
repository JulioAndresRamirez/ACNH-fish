/* eslint-disable jsx-quotes */
import React from 'react'
import moment from 'moment'

const MothPicker = () => {
  return (
    <div className="mothSelector flex flex-row flex-no-wrap justify-center items-center ml-4 px-4 py-2 bg-white rounded-lg shadow-md border border-1 border-solid border-gray-100">
      <h3 className="font-poppins text-base font-bold mb-0 pb-0">Month</h3>

      <div className="relative pl-4">
        <select
          className="block focus:outline-none focus:border-transparent appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 font-poppins font-bold text-sm py-1 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="grid-state"
          /* value={moment().format('MMM')} */
        >
          <option value="All">All</option>
          <option value="Jan">Jan</option>
          <option>Feb</option>
          <option>Mar</option>
          <option>Apr</option>
          <option>May</option>
          <option>Jun</option>
          <option>Jul</option>
          <option>Aug</option>
          <option>Sep</option>
          <option>Oct</option>
          <option>Nov</option>
          <option>Dec</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default MothPicker
