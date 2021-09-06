import React from 'react'
import PropTypes from 'prop-types'

const Rating = ({ value, text, color }) => {
  return (
    <div className='rating'>
      {[...Array(5).keys()].map(idx => (
        <span key={idx}>
          <i style={{color}} className={value >= idx + 1 ? 'fas fa-star' : value >= idx + 0.5 ? 'fas fa-star-half-alt' : 'far fa-star'}></i>
        </span>
      ))}
      <span>{text && text}</span>
    </div>
  )
}

Rating.defaultProps = {
  color: '#f8e825',
}

Rating.propType = {
  value: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
}

export default Rating
