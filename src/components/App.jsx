import React, { Component } from 'react';
import FeedbackOptions from './feedbackptions/FeedbackOptions';
import Statistics from './statistics/Statistics';
import Section from './section/Section';
import Notification from './notification/Notification';
import { ContainerApp } from './App.styled';

export class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
    this.countTotalFeedback = this.countTotalFeedback.bind(this);
    this.countPositiveFeedbackPercentage = this.countPositiveFeedbackPercentage.bind(this);
  }

  leaveFeedback = option => {
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  };

  countTotalFeedback() {
    let total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  } 

  countPositiveFeedbackPercentage() {
    const positiveFeedback = Math.round(
      (this.state.good / this.countTotalFeedback()) * 100
    );
    return positiveFeedback;
  }

  render() {
    const totalFeedback = this.countTotalFeedback();
    //const options = Object.keys(this.state);
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <ContainerApp>
        <Section title="Please leave feedback 👇">
          <FeedbackOptions
            options={{ good: 'Good', neutral: 'Neutral', bad: 'Bad' }}
            leaveFeedback={this.leaveFeedback}
          />
        </Section>

        <Section title="Statistics 📈">
          {totalFeedback === 0 ? (
            <Notification message="There is no feedback 😁" />
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={totalFeedback}
              positivePercentage={positivePercentage}
            />
          )}
        </Section>
      </ContainerApp>
    );
  }
}
