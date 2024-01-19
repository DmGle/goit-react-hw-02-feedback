import React, { Component } from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Notification from './Notification';

import './feedback.css';

class FeedbackApp extends Component {
  constructor() {
    super();
    this.state = {
      feedbackCounts: {
        good: 0,
        neutral: 0,
        bad: 0
      }
    };
  }

  handleFeedback = (type) => {
    this.setState((prevState) => ({
      feedbackCounts: {
        ...prevState.feedbackCounts,
        [type]: prevState.feedbackCounts[type] + 1
      }
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state.feedbackCounts;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const totalFeedback = this.countTotalFeedback();
    const { good } = this.state.feedbackCounts;
    return totalFeedback === 0 ? 0 : Math.round((good / totalFeedback) * 100);
  };

  render() {
    const totalFeedback = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <div className='container'>
        <Section title="Expresso Cafe Feedback">
          <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={this.handleFeedback} />
        </Section>

        {totalFeedback > 0 ? (
          <Section title="Statistics">
            <Statistics
              good={this.state.feedbackCounts.good}
              neutral={this.state.feedbackCounts.neutral}
              bad={this.state.feedbackCounts.bad}
              total={totalFeedback}
              positivePercentage={positivePercentage}
            />
          </Section>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </div>
    );
  }
}

export default FeedbackApp;