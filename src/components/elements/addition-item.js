import { ReactComponent as PlusIcon } from './../../assets/icons/plus-icon-circle.svg';

import classes from './addition-item.module.css';

const AdditionItem = ({ text }) => {
    return (
        <div className={classes.addition}>
            <div className={classes['addition__icon']}>
                <PlusIcon />
            </div>
            <h4>{text}</h4>
        </div>
    );
};

export default AdditionItem;
