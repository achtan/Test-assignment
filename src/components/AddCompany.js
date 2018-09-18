import React from 'react'
import Modal from 'react-modal'

import Button from './Button'
import AddCompanyForm from './AddCompanyForm'
import {Flex} from './Grid'

const modalStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.79)',
  },
  content: {
    position: 'absolute',
    top: '70px',
    left: '70px',
    right: '70px',
    bottom: 'auto',
    background: 'white',
    overflow: 'auto',
    outline: 'none',
    padding: '20px',
    borderRadius: 0,
    border: 0,
  },
}

class CompaniesList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      showModal: false,
    }
  }

  handleOpenModal = () => {
    this.setState({showModal: true})
  }

  handleCloseModal = () => {
    this.setState({showModal: false})
  }

  render () {
    return (
      <Flex my={3} flexDirection="column">
        <Button onClick={this.handleOpenModal}>Add new company</Button>
        <Modal
          style={modalStyles}
          isOpen={this.state.showModal}
          contentLabel="Minimal Modal Example"
          onRequestClose={this.handleCloseModal}
        >
          <AddCompanyForm onCreated={this.handleCloseModal} />
        </Modal>
      </Flex>
    )
  }
}

export default CompaniesList
