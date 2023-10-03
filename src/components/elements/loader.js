import classes from './loader.module.css';

const Loader = () => {
    return (
        <div className={classes.loader}>
            <div className={classes['loader-element']}></div>
        </div>
    );
};

export default Loader;
