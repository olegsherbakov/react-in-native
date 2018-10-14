import React from 'react'

const Element = ({ title, arr, zIndex }) =>
  arr.map(({ index, style, star }) => (
    <div
      key={index}
      className="element"
      style={{
        ...style,
        zIndex,
      }}
    >
      <div className={`star-five ${star}`} />
      <div className="element-text">{title}</div>
    </div>
  ))

export default Element
