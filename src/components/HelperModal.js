import React from 'react'
import PropTypes from 'prop-types'

function HelperModal(props) {
  return (
    <div className={`${props.active ? 'modal-active' : 'modal-inactive'}`}>
      <div className="modal-content">
        <h2>{props.text.header}</h2>
        <p>{props.text.content}</p>
        <button className="modal-button" onClick={() => props.setActive(false)}>
          ×
        </button>
      </div>
    </div>
  )
}

HelperModal.propTypes = {
  active: PropTypes.bool.isRequired,
  text: PropTypes.object.isRequired,
  setActive: PropTypes.func.isRequired,
}

export default HelperModal
