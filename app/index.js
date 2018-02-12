import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import {
    Modal,
    ModalHeader,
    ModalTitle,
    ModalClose,
    ModalBody,
    ModalFooter
  } from 'react-modal-bootstrap';

class Memories extends Component {

    constructor() {
        super();

        this.getMemories = this.getMemories.bind(this);

        this.state = {
            memories: [],
            openModal: false
        }
    }

    componentWillMount() {
        this.getMemories();
    }

    getMemories() {
        axios.get('/memories').then((res) => {
            this.setState({ memories: res.data });
        });
    }

    toggleModal() {
        this.setState({ openModal: !this.state.openModal });
    }

    render() {
        return (
            <section id="memories" className="container content-section">
                <div className="row">
                    <div className="col-lg-12">
                        <h2 className="text-center">Memories & Goodbyes</h2>
                        <button className="btn btn-lg btn-default" style={{marginBottom: 15}}>Add your memories</button>
                        <div className="row">
                            {this.state.memories.map((memory, index) => (                          
                                <div className="col-lg-4 col-md-4 col-sm-6" key={index}>
                                    <blockquote className="blockquote-summary">
                                        {memory.body}
                                        <footer style={{ padding: 0, textAlign: 'left' }}> {memory.name}</footer>
                                    </blockquote>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <Modal isOpen={this.state.openModal} onRequestHide={this.toggleModal}>
                <ModalHeader>
                    <ModalClose onClick={this.toggleModal}/>
                    <ModalTitle>Add your memories</ModalTitle>
                </ModalHeader>
                <ModalBody>
                    hello world
                </ModalBody>
                <ModalFooter>
                    <button className='btn btn-primary'>
                    Save
                    </button>
                </ModalFooter>
                </Modal>

            </section>
    
        )
    }
}

ReactDOM.render(<Memories />, document.getElementById('react-app'));