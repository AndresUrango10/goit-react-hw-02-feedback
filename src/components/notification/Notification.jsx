import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ContainerParagraph } from './Notification.styled';
export class Notification extends Component {
  render() {
    return (
      <>
        <ContainerParagraph>{this.props.message}</ContainerParagraph>
      </>
    );
  }
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
export default Notification;
