import React from 'react'
import PropTypes from 'prop-types'
import Formsy from 'formsy-react'
import styled from 'styled-components'
import {Mutation} from 'react-apollo'

import {ADD_COMPANY, updateCompaniesCache} from '../queries'
import {Input, Select} from './Input'
import {Box, Row, Column} from './Grid'
import {Heading} from './Typography'

const ErrorMessage = styled.div`
    color: #c4270a;
`

const Button = styled.button`
  border: 1px solid ${p => p.theme.primary};
  background-color: ${p => p.theme.primary};
  color: white;
  opacity: ${p => p.disabled ? 0.5 : 1};
  cursor: ${p => p.disabled ? 'no-drop' : 'pointer'};
  padding: 0.9rem 1.8rem;
  display: flex;
  margin: 2rem auto 1rem;
  border-radius: 3px;
`

const stageOptions = [ 'Idea', 'Prototype', 'Seed', 'Series A', 'Series B', 'Series C' ]
  .map(v => ({title: v, value: v}))
stageOptions.unshift({title: 'Select stage from the list', value: null})

const sectorOptions = [ 'Fintech', 'IOT', 'Roboadvisory', 'Insuretech' ]
  .map(v => ({title: v, value: v}))
sectorOptions.unshift({title: 'Select sector from the list', value: null})

export default class AddCompanyForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {canSubmit: false}
  }

  disableButton = () => {
    this.setState({canSubmit: false})
  }

  enableButton = () => {
    this.setState({canSubmit: true})
  }

  handleSubmit = addCompany => values => {
    addCompany({variables: values})
      .then(() => {
        this.props.onCreated()
      })
  }

  render () {
    return (
      <Row justifyContent="space-around">
        <Column width={[ 1, 1, 1 / 2.5 ]}>
          <Box mb={40}>
            <Heading align="center">add new company</Heading>
          </Box>
          <Mutation mutation={ADD_COMPANY} update={updateCompaniesCache}>
            {(addCompany, {error}) => (
              <Formsy
                onValidSubmit={this.handleSubmit(addCompany)}
                onValid={this.enableButton}
                onInvalid={this.disableButton}
              >
                <Input
                  label="Company Name"
                  name="name"
                  placeholder="Company name"
                  validations="minLength:3"
                  validationErrors="Company name has to be longer then 2 characters"
                />
                <Select
                  label="Stage"
                  name="stage"
                  options={stageOptions}
                  required
                />
                <Select
                  label="Sector"
                  name="sector"
                  options={sectorOptions}
                  required
                />
                <Input
                  label="Investment size"
                  name="investmentSize"
                  placeholder="Enter amount"
                  symbol="EUR"
                  required
                  min={0}
                  max={1000000000}
                  type="number"
                />
                {error && <ErrorMessage>{error.message}</ErrorMessage>}
                <Button disabled={!this.state.canSubmit}>Add new company</Button>
              </Formsy>
            )}
          </Mutation>
        </Column>
      </Row>
    )
  }
}

AddCompanyForm.propTypes = {
  onCreated: PropTypes.func.isRequired
}
