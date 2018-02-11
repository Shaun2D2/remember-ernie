import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class Memories extends Component {

    constructor() {
        super();

        this.getMemories = this.getMemories.bind(this);

        this.state = {
            memories: []
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

    render() {
        return (
            <section id="memories" className="container content-section">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2>Memories & Goodbyes</h2>
                        {this.state.memories.map((memory, index) => (                          
                            <div className="row" key={index}>
                              <div className="col-lg-4 col-md-4 col-sm-6">
                                <blockquote className="blockquote-summary">
                                  {memory.body}
                                  <footer style={{ padding: 0, textAlign: 'left' }}> {memory.name}</footer>
                                </blockquote>
                              </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
    
        )
    }
}

ReactDOM.render(<Memories />, document.getElementById('react-app'));