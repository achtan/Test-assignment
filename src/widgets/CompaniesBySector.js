import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import {Row, Column} from '../components/Grid'
import Widget from '../components/Widget'
import {Title} from '../components/Typography'

const SectorWrapper = styled(Column)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem 0;
  border-right: 1px solid ${p => p.theme.primary};
  
  :last-child {
    border-right: 0;
  }
`

const Icon = styled.div`
  margin-top: 5px;
  svg {
    height: 22px;
  }
  path {
    fill: ${p => p.theme.primary};
  }
`

const Count = styled.div`
    font-size: 25px;
    font-weight: bold;
    margin-bottom: 5px;
`

let sectors = [ 'Fintech', 'IOT', 'Roboadvisory', 'Insuretech' ]
  .map(v => ({
    count: 0,
    title: v,
    svg: require(`../../Assets/Assetts/Icons/ico_${v.toLowerCase()}.svg`),
  }))

const CompaniesBySector = ({companies}) => {
  // reset counts
  sectors = sectors.map(s => ({...s, count: 0}))

  // calculate counts
  const data = companies.reduce((accumulator, value) => {
    accumulator.find(v => v.title === value.sector).count++
    return accumulator
  }, sectors)

  return (
    <Widget label="companies by investment size">
      <Row mx={0}>
        {data.map((s, i) => (
          <SectorWrapper key={s.title} width={[ 1 / 2, 1 / 4 ]} isLast={i + 1 === data.length}>
            <Count>{s.count}</Count>
            <Title>{s.title}</Title>
            <Icon>{React.createElement(s.svg)}</Icon>
          </SectorWrapper>
        ))}
      </Row>
    </Widget>
  )
}

CompaniesBySector.propTypes = {
  companies: PropTypes.array.isRequired,
}

export default CompaniesBySector
