import ReactPlayer from 'react-player';
import classes from './Product-demo.module.css';

const ProductDemo = () => {
    return (
        <div className={classes.section}>
            <div className={classes.container}>
            <div className={classes.header2}>
                <h2>See <span className='text-blue'> PrepBox Pro </span> in action</h2>
            </div>
                <div className={classes.content}>
                    <ReactPlayer
                        url='https://www.youtube.com/embed/ih3hNg5Y-4c'
                        width='90%'
                        height='100%'
                        display='flex'
                        justify-content='center'
                        config={{
                            youtube: {
                                playerVars: { showinfo: 1 },
                            },
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default ProductDemo;