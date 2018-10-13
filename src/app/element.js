import React from 'react'

const Element = ({ title, arr, zIndex }) =>
  arr.map(({ index, style }) => (
    <div
      key={index}
      className="randomEffect"
      style={{
        ...style,
        zIndex,
      }}
    >
      {title}
    </div>
  ))

export default Element
