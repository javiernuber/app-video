import React, { Component } from 'react';
import HomeLayout from '../components/home-layout';
import Categories from '../../categories/componets/categories';
import Related from '../components/related';
import ModalContainer from '../../widgets/containers/modal';
import Modal from '../../widgets/components/modal';
import HandleError from '../../error/containers/handle-error';

class Home extends Component {
  state = {
    modalVisible: false
  }

  handleOpenModal = (event) => {
    this.setState({
      modalVisible: true
    });
  }

  handleCloseModal = (event) => {
    this.setState({
      modalVisible: false
    });
  }

  render() {
    return (
      <HandleError>
        <HomeLayout>
          <Related />
          <Categories
            handleOpenModal={this.handleOpenModal}
            categories={this.props.data.categories}
          />
          {
            this.state.modalVisible &&
            <ModalContainer>
              <Modal
                handleClick={this.handleCloseModal}
              >
                <h1>Esto es un modal con un Portal</h1>
              </Modal>
            </ModalContainer>
          }
        </HomeLayout>
      </HandleError>
    );
  }
}

export default Home;
