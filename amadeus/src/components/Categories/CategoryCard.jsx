import React from 'react'

export const CategoryCard = ({nameCategory}) => {
  return (
    <div className="col-lg-6 mb-4">
    <div className="card bg-dark text-white shadow">
      <div className="card-body">
      {nameCategory}
      </div>
    </div>
  </div>
  )
}
