import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import PieChart from 'react-minimal-pie-chart'

import {Flex, Row, Column} from '../components/Grid'
import Widget from '../components/Widget'

const PieWrapper = styled.div`
  position: relative;
`

const CompaniesCount = styled.div`
  position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
`
const Number = styled.div`
  font-size: 44px;
  font-weight: bold;
  line-height: 1.2;
`
const Label = styled.div`
  text-transform: uppercase;
`

const Dot = styled.div`
  background-color: ${p => p.color};
  margin-right: 8px;
  height: 10px;
  width: 10px;
  border-radius: 10px;
`

// eslint-disable-next-line max-len
const colors = ['#e67e22', '#1abc9c', '#3498db', '#e74c3c', '#9b59b6', '#2ecc71', '#f1c40f', '#34495e', '#e67e22', '#1abc9c', '#3498db', '#e74c3c', '#9b59b6', '#2ecc71', '#f1c40f', '#34495e']

const CompaniesByInvestmentSize = ({companies}) => {
  const data = companies.map((c, i) => ({
    title: c.name,
    color: colors[i],
    value: c.investmentSize,
  }))

  return (
    <Widget label="companies by investment size">
      <Row>
        <Column width={[1, 1 / 2]}>
          <PieWrapper>
            <PieChart
              animate
              lineWidth={30}
              paddingAngle={0.5}
              data={data}
              style={{height: '300px', width: 'auto', margin: '2rem 1rem'}}
            />
            <CompaniesCount>
              <Number>{data.length}</Number>
              <Label>companies</Label>
            </CompaniesCount>
          </PieWrapper>
        </Column>
        <Column width={[1, 1 / 2]}>
          <Row mt={4}>
            {data.map(v => (
              <Column key={v.name + v.color} width={[1/2]} my={2}>
                <Flex alignItems="center">
                  <Dot color={v.color} />
                  {v.title}
                </Flex>
              </Column>
            ))}
          </Row>
        </Column>
      </Row>
    </Widget>
  )
}

CompaniesByInvestmentSize.propTypes = {
  companies: PropTypes.array.isRequired,
}

export default CompaniesByInvestmentSize
