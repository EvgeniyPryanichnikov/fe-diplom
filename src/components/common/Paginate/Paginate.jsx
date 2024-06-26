import React from 'react'
import ReactPaginate from 'react-paginate'
import s from './Paginate.module.scss'

const Paginate = ({page, lastPage, onChange}) => {
  return (
    <ReactPaginate
      className={s.paginate}
      marginPagesDisplayed={1}
      forcePage={page - 1}
      pageCount={lastPage}
      onPageChange={({ selected }) => onChange(selected + 1)}
    />
  )
}

export default Paginate
