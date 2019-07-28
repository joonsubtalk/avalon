import React from 'react'
import PropTypes from 'prop-types'

const ProgressMarkers = props => {
  const {isActive} = props;
  const style = isActive
    ? `o-progressMarkers--active`
    : ``;

  return (
    <div className={`o-progressMarkers ${style}`}>
      <div className="o-progressMarkers__circle">{props.children}</div>
    </div>
  )
}

ProgressMarkers.propTypes = {

}

export default ProgressMarkers
