import React from 'react'

const Pagination = ({usersPerPage, totalUsers}) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++){
        pageNumbers.push(i)
    }

  return (
    <nav className='p-2'>
        <ul className='flex flex-wrap text-sm text-gray-700'>
            {pageNumbers.map(number => (
                <li key={number} className='font-medium border p-2 m-1'>
                    <a href='!#'>{number}</a>
                </li>
            ))}
        </ul>
    </nav>
  )
}

export default Pagination