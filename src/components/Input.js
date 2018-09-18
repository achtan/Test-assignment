import {withFormsy} from 'formsy-react'
import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin-bottom: 1rem;
`

const Label = styled.label`
    display: block;
    padding-bottom: 5px;
    font-size: 14px;
`

const InputStyled = styled.div`
  display: flex;
    align-items: center;
  border: 2px solid #c7c7c7;
  border-radius: 4px;
  padding: .5rem;
  
  input, select {
    border: 0;
    display: flex;
    flex: 1;
    background-color: transparent;
  }
  
  input {
    padding: 3px 6px;
  }
`

const SymbolPosition = styled.div`
  color: #a0a0a0;
`

class InputControl extends React.Component {
  changeValue = (event) => this.props.setValue(event.currentTarget.value)

  render () {
    const {label, name, type = 'text', min, getValue, placeholder, symbol} = this.props

    return (
      <Wrapper>
        <Label htmlFor={name}>{label}</Label>
        <InputStyled>
          <input
            id={name}
            onChange={this.changeValue}
            type={type}
            value={getValue() || ''}
            placeholder={placeholder}
            min={min}
          />
          {symbol && <SymbolPosition>{symbol}</SymbolPosition>}
        </InputStyled>
      </Wrapper>
    )
  }
}

class SelectControl extends React.Component {
  changeValue = (event) => this.props.setValue(event.currentTarget.value)

  render () {
    const {label, name, getValue} = this.props

    const options = this.props.options.map(({title, value, ...rest}) => (
      <option key={title + value} value={value} {...rest}>
        {title}
      </option>
    ))

    return (
      <Wrapper>
        <Label htmlFor={name}>{label}</Label>
        <InputStyled>
          <select name={name} onChange={this.changeValue} value={getValue()}>
            {options}
          </select>
        </InputStyled>
      </Wrapper>
    )
  }
}

export const Select = withFormsy(SelectControl)
export const Input = withFormsy(InputControl)
