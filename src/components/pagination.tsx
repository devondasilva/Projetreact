import React from 'react'

export const Pagination = () => {
  return (
        <div className=" relative flex text-center items-center justify-between px-4 py-4">
          <div className="flex-1 justify-between">
            <div>
            </div>
          </div>
          <div className="flex-1 text-center sm:items-center justify-between">
            <div>
              <nav className="relative inline-flex space-x-1 rounded-1-md shadow-sm" aria-label="Pagination">
                <div aria-current="page" className="relative z-10 inline-flex items-center bg-red-500 px-4 py-2 text-sm font-semibold text-white  ">1</div>
                <div className="relative inline-flex items-center px-4 py-2 text-sm font-semibold ring-1 ring-inset ring-red-500 hover:bg-red-500 hover:text-white">2</div>
                <div className="relative inline-flex items-center px-4 py-2 text-sm font-semibold  ring-1 ring-inset ring-red-500 hover:bg-red-500 hover:text-white md:inline-flex">3</div>
              </nav>
            </div>
          </div>
          <div className="flex-1  justify-between">
            <div className="relative  inline-flex items-center  border border-red-500 bg-white px-4 py-2 text-sm font-medium hover:text-black hover:bg-red-500">Next <span aria-hidden="true">→</span></div>
          </div>
        </div>
  )
}
