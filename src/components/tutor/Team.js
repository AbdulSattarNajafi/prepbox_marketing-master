import TeamCard from '../elements/team-card';

import TeamImage1 from './../../assets/images/png/min-lee.png';
import TeamImage2 from './../../assets/images/png/sam-kwon.png';
import TeamImage3 from './../../assets/images/png/jina-seok.png';
import TeamImage4 from './../../assets/images/png/aria-hwang.png';
import TeamImage5 from './../../assets/images/png/payton-coutlis.png';
import TeamImage6 from './../../assets/images/png/kyle-pearce.png';
import TeamImage7 from './../../assets/images/png/sanghon-kim.png';
import Shahrzad from './../../assets/images/png/shahrzad.png';

import classes from './Team.module.css';

const Team = () => {
    return (
        <section className={classes.team}>
            <div className='container'>
                <h3>Team</h3>

                <div className={classes['team__grid']}>
                    <TeamCard
                        image={TeamImage1}
                        name='Min Lee '
                        description='Founder/CEO'
                        experience='20 years'
                        almamater='University of Toronto'
                    />

                    <TeamCard
                        image={TeamImage2}
                        name='Sam Kwon '
                        description='Chief Growth Officer'
                        experience='2 years'
                        almamater='MIT'
                    />

                    <TeamCard
                        image={TeamImage3}
                        name='Jina Seok'
                        description='Senior Lead Tutor'
                        experience='5 years'
                        almamater='University of Toronto'
                    />
                    
                    <TeamCard
                        image={Shahrzad}
                        name='Shahrzad Islami'
                        description='Assistant Tutor'
                        experience='3 years'
                        almamater='Waterloo University'
                    />

                    <TeamCard
                        image={TeamImage4}
                        name='Aria Hwang'
                        description='Assistant Tutor'
                        experience='3 years'
                        almamater='McMaster University'
                    />

                    <TeamCard
                        image={TeamImage5}
                        name='Payton Coutlis'
                        description='Lead Tutor Tutor'
                        experience='4 years'
                        almamater='Harvard University'
                    />
                </div>

                <h3>Advisory Board</h3>
                <div className={classes['team__grid']}>
                    <TeamCard
                        image={TeamImage6}
                        name='Kyle Pearce'
                        description='Consultant to School Board'
                        experience='16 years'
                        almamater='University of Windsor'
                    />

                    <TeamCard
                        image={TeamImage7}
                        name='Sanghon Kim'
                        description="Founder of Queen's College Seoul"
                        experience='15 years'
                        almamater='Oxford University'
                    />
                </div>
            </div>
        </section>
    );
};

export default Team;
