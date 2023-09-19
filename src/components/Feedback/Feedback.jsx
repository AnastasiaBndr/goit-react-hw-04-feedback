import React, { Component } from 'react';
import css from './Feedback.module.css';
import Statistics from '../Statistics';
import FeedbackOptions from '../FeedbackOptions';
import Section from '../Section';
import PropTypes from 'prop-types'

export class Feedback extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    countTotalFeedback() {
        return this.state.good + this.state.neutral + this.state.bad;
    }

    countPositiveFeedbackPercentage() {
        return Math.round((this.state.good) / (this.state.neutral + this.state.bad + this.state.good) * 100);
    }

    handleLeaveFeedback = (option) => {
        this.setState((prevState) => ({ [option.toLowerCase()]: prevState[option.toLowerCase()] + 1 }));
    };

    render() {
        const { good, bad, neutral } = this.state;
        const options = ['Good', 'Neutral', 'Bad'];

        return (<div className={css.feedback__container}>

            <Section title="Please leave feedback">
                <FeedbackOptions options={options} onLeaveFeedback={this.handleLeaveFeedback} />
            </Section>

            <Section title="Statistics">
                {good === 0 && bad === 0 && neutral === 0 ? (<p>No feedback given</p>) : (<Statistics
                    good={good}
                    neutral={neutral}
                    bad={bad}
                    total={this.countTotalFeedback()}
                    positivePercentage={this.countPositiveFeedbackPercentage()} />)}

            </Section>



        </div>)
    }
}

Feedback.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
}