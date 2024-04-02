import React from 'react';
import me from '../../assets/pictures/workingAtComputer.jpg';
import meNow from '../../assets/pictures/currentme.jpg';
import { Link } from 'react-router-dom';


export interface AboutProps {}

const WhyMe: React.FC<AboutProps> = (props) => {
    return (
        // add on resize listener
        <div className="site-page-content">
            <div className='text-block'>
                <p> 
                    I really dont know Im really bad at pitching myself  but still I'will try cause its my website

                    <p>.</p>
                    <p>
                        I'm taking a moment to reflect on what makes me the right person for you. And truth be told, I'm not about grand gestures or flashy displays. Instead, I believe it's the small things that count—the quiet moments shared, the laughter that fills the air .
                    </p>

                    <p>
                        I'm not the most extraordinary guy out there. I'm just me, with all my quirks and imperfections. But what I lack in grandeur, I make up for in sincerity. When I love, I love deeply and wholeheartedly.
                    </p>

                    <p>
                        I may not have all the answers, and I'm sure there are others who could offer you more. But what I can promise is that I'll be there for you, through the highs and lows, the good times and bad. I'll be your rock, your confidant, your partner in crime. I'll take care of you, cherish you, and support you in every way I can.
                    </p>

                    <p>
                        So, why me? Because I may not be perfect, but I'll always strive to be the best partner I can be for you. And in the end, isn't that what really matters?
                    </p>
                    <p>
                        Also I'm not toxic at all if that helps.
                    </p>
                        
                </p>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    contentHeader: {
        marginBottom: 16,
        fontSize: 48,
    },
    image: {
        height: 'auto',
        width: '100%',
    },
    topImage: {
        height: 'auto',
        width: '100%',
        marginBottom: 32,
    },
    verticalImage: {
        alignSelf: 'center',
        // width: '80%',
        marginLeft: 32,
        flex: 0.8,

        alignItems: 'center',
        // marginBottom: 32,
        textAlign: 'center',
        flexDirection: 'column',
    },
};

export default WhyMe;
