import React from "react";
import css from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {

    return (

        <div className={css.statistics}>
            <div className={css.statistics__results__container}>
                <div className={css.statistics__results}>
                    <p>Good: {good}</p>
                    <p>Neutral: {neutral}</p>
                    <p>Bad: {bad}</p>
                </div>

                <div><p>Total: {total}</p>
                    <p>Positive feedback: {positivePercentage + "%"}</p></div></div>

        </div>)

}

export default Statistics;