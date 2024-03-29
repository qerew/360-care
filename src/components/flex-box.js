import React, { Component } from 'react';

class FlexBox extends Component {
  render() {
    const styles = {
      flex: this.props.flex || 1,
    }
    return (
      <div style={styles} id={this.props.id || ''}>
        {this.props.children}
      </div>
    );
  }
}

export default FlexBox;