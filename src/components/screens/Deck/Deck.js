import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export const Decks = (props) => {
  return (
    <div>
      <p>Decks</p>
    </div>
  )
}

Decks.propTypes = {
  props: PropTypes
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Decks)
