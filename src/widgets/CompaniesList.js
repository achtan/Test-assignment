import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import {Title} from '../components/Typography'
import {Row, Column} from '../components/Grid'
import Widget, {Header} from '../components/Widget'
import AddCompany from '../components/AddCompany'

const Table = styled.div`
  min-width: 650px;
`

const List = styled.div`
  border-bottom: 1px solid ${p => p.theme.divider};
  overflow: scroll;
`

const RowWrapper = styled.div`
  padding: 2rem 0;
  margin: 0 1rem 0;
  border-bottom: ${p => (p.isLast ? null : `1px solid ${p.theme.divider}`)};
`

const CompaniesList = ({companies}) => (
  <Widget>
    <Table>
      <Header>
        <Row>
          <Column width={1 / 4}><Title>company name</Title></Column>
          <Column width={1 / 4}><Title style={{textAlign: 'right'}}>stage</Title></Column>
          <Column width={1 / 4}><Title style={{textAlign: 'right'}}>sector</Title></Column>
          <Column width={1 / 4}><Title style={{textAlign: 'right'}}>investment size</Title></Column>
        </Row>
      </Header>
      <List>
        {companies.map((company, i) => (
          <RowWrapper key={i} isLast={i + 1 === companies.length}>
            <Row>
              <Column width={1 / 4}>{company.name}</Column>
              <Column width={1 / 4} style={{textAlign: 'right'}}>{company.stage}</Column>
              <Column width={1 / 4} style={{textAlign: 'right'}}>{company.sector}</Column>
              <Column width={1 / 4} style={{textAlign: 'right'}}>{company.investmentSize} EUR</Column>
            </Row>
          </RowWrapper>
        ))}
      </List>
    </Table>
    <AddCompany />
  </Widget>
)

CompaniesList.propTypes = {
  companies: PropTypes.array.isRequired,
}

export default CompaniesList
