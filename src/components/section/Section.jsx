import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SectionContainer } from './Section.styled';

export class Section extends Component {
  render() {
    return (
      <SectionContainer>
        <h2>{this.props.title}</h2>
        {this.props.children}
      </SectionContainer>
    );
  }
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
export default Section;
