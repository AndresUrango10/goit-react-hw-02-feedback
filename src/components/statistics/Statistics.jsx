import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StatsContainer, StatParagraph } from './Statistics.styled';

class Statistics extends Component {
  render() {
    return (
      <StatsContainer>
        <StatParagraph>Good: {this.props.good}</StatParagraph>
        <StatParagraph>Neutral: {this.props.neutral}</StatParagraph>
        <StatParagraph>Bad: {this.props.bad}</StatParagraph>
        <StatParagraph>Total: {this.props.total}</StatParagraph>
        <StatParagraph>
          Positive Feedback: {this.props.positivePercentage}%
        </StatParagraph>
      </StatsContainer>
    );
  }
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
