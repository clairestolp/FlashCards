import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export const Login = (props) => {
  return (
    <div>
      <p>Login</p>
    </div>
  )
}

Login.propTypes = {
  props: PropTypes
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)

