import classes from './session-card.module.css';

const SessionCard = ({ weekday, availability }) => {
    return (
        <div className={classes.card}>
            <div className={classes.cardHeader}>
                <h5>{weekday}</h5>
            </div>
            <div className={classes.cardBody}>
                {availability?.map((available, i) => {
                    return (
                        <div key={i} className={classes.available}>
                            <p>
                                {available.from} - {available.to}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default SessionCard;
