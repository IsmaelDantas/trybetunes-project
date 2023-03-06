import React, { Component } from 'react';
import '../style/Loading.css';

class Loading extends Component {
  render() {
    return (
      <div className="loading-container">
        <h2>Carregando...</h2>
        <img src="https://acegif.com/wp-content/uploads/loading-29.gif" alt="red loading gif" />
      </div>
    );
  }
}

export default Loading;
