import { useEffect, useState } from 'react';
import css from './Feedback.module.css';
import Statistics from '../Statistics';
import FeedbackOptions from '../FeedbackOptions';
import Section from '../Section';
import PropTypes from 'prop-types';

export default function Feedback() {
const [good, setGood]=useState(0);
const [neutral, setNeutral]=useState(0);
const [bad, setBad]=useState(0);
const [countTotalFeedback, setCountTotalFeedback]=useState(0);
const[posFeedbackPercentage, setPosFeedbackPercentage]=useState(0);

const handleLeaveFeedback = e =>{

        switch(e.toLowerCase()){
            case 'good':
                setGood(prevState => prevState+1);
                break;
            case 'neutral':
                setNeutral(prevState => prevState+1);
                break;
            case 'bad':
                setBad(prevState => prevState+1);
                break;
            default: return;
        }
}
useEffect(()=>{
    setCountTotalFeedback(good+neutral+bad);
    setPosFeedbackPercentage(Math.round((good) / (neutral + bad + good) * 100));
},[good, neutral, bad]);


const options = ['Good', 'Neutral', 'Bad'];

return (
<div className={css.feedback__container}>
                <Section title="Please leave feedback">
                    <FeedbackOptions options={options} onLeaveFeedback={handleLeaveFeedback} />
                </Section>
    
                <Section title="Statistics">
                    {good === 0 && bad === 0 && neutral === 0 ? (<p>No feedback given</p>) : (<Statistics
                        good={good}
                         neutral={neutral}
                        bad={bad}
                        total={countTotalFeedback}
                        positivePercentage={posFeedbackPercentage} />)}
    
                </Section>
             </div>)

}


Feedback.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
}