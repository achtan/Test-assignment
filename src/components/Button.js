import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Button = styled.div`
  cursor: pointer;
  border: 1px solid ${p => p.theme.primary};
  color: ${p => p.theme.primary};
  padding: 0.9rem 1.8rem;
  border-radius: 3px;
  margin: 0 auto;
  font-size: 14px;
`

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func
}

export default Button
