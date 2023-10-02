import SessionCard from '../elements/session-card';
import classes from './Session.module.css';

const tuesday = [
    { from: '6:30AM', to: '8:30AM' },
    { from: '6:00PM', to: '8:00PM' },
    { from: '9:00PM', to: '11:00PM' },
];

const wednesday = [
    { from: '6:00PM', to: '8:00PM' },
    { from: '9:00PM', to: '11:00PM' },
];
const thursday = [
    { from: '6:30AM', to: '8:30AM' },
    { from: '9:00PM', to: '11:00PM' },
];

const saturday = [
    { from: '6:30AM', to: '8:30AM' },
    { from: '10:00AM', to: '12:00PM' },
];

// const secondTuesday = [
//     { from: '1:00PM', to: '3:00PM' },
//     { from: '6:00PM', to: '8:00PM' },
//     { from: '8:00PM', to: '10:00PM' },
// ];

// const secondWednesday = [
//     { from: '6:00PM', to: '8:00PM' },
//     { from: '8:00PM', to: '10:00PM' },
// ];

// const secondThursday = [
//     { from: '1:00PM', to: '3:00PM' },
//     { from: '6:00PM', to: '8:00PM' },
//     { from: '8:00PM', to: '10:00PM' },
// ];

const Session = () => {
    return (
        <section className={classes.session}>
            <div className='container'>
                <div className={classes.sessionHeader}>
                    <h2>Our Sessions</h2>
                    <p>All times are U.S. Eastern Standard Time</p>
                </div>

                <div className={classes['session__grid-top']}>
                    <SessionCard weekday='Tuesday' availability={tuesday} />
                    <SessionCard weekday='Wednesday' availability={wednesday} />
                    <SessionCard weekday='Thursday' availability={thursday} />
                    <SessionCard weekday='Saturday' availability={saturday} />
                </div>

                {/* <div className={classes.sessionHeader}>
                    <h2>Our Summer Sessions</h2>
                    <p>
                        Our times are different during summer break between July 5th and August 15th. U.S. Eastern Time.
                    </p>
                </div>

                <div className={classes['session__grid-buttom']}>
                    <SessionCard weekday='Tuesday' availability={secondTuesday} />
                    <SessionCard weekday='Wednesday' availability={secondWednesday} />
                    <SessionCard weekday='Thursday' availability={secondThursday} />
                </div> */}
            </div>
        </section>
    );
};

export default Session;
