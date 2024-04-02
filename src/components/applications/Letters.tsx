import React, { useEffect, useState } from 'react';
import Window from '../os/Window';
import { useInterval } from 'usehooks-ts';
import { motion } from 'framer-motion';

export interface CreditsProps extends WindowAppProps {}

const LETTERS = [
    {
        title: 'Cosmic Love',
        rows: [
            ['In a cosmic expanse, vast and grand,'],
            ['Countless galaxies, stars unplanned.'],
            ['Yet amid this celestial sight afar,'],
            ['On one small planet, you are.'],
            [''],
            ['Through swirling cosmos, paths align,'],
            ['In the dance of fate, your hand in mine.'],
            ['A collision of souls, by destiny set,'],
            ['In this vast universe, our meeting met.'],
            [''],
            ['Millions of galaxies, billions of stars,'],
            ['Trillions of planets, near and far.'],
            ['But in this moment, our love defined,'],
            ['In the tapestry of space, our hearts entwined.'],
        ],
    },
    {
        title: 'Hidden Beauty',
        rows: [
            ['Your hairs hide your smile, a gem concealed,'],
            ["But I've glimpsed its surreal beauty revealed."],
            ['Behind specs, your eyes, a radiance bright,'],
            ['Gorgeous and gleaming, a captivating sight.'],
            [''],
            ['In your calmness, a tranquil sea,'],
            ['Serene and deep, where I long to be.'],
            ['Though veiled by layers, your essence shines through,'],
            ['In every hidden facet, my love for you grew.'],
        ],
    },
    {
        title: 'My Eyes',
        rows: [
            ['If I could give you, one thing in life'],
            ['I would give you the ability'],
            ['to see yourself through my eyes.'],
            [' Only then will you realize'],
            ['how special you are to me.'],
        ],
    },
    {
        title: 'Beneath the Moon',
        rows: [
            ['In the quiet of night, beneath starry skies, With words'],
            ['unspoken, love in our eyes, Your laughter, a melody,'],
            ['sweet and clear,In every moment, drawing me near.'],
            [''],
            ['With each passing day, my love, it grows, Like a river flowing,'],
            ['endlessly it flows, In your presence,'],
            ['I find my peace, A bond so deep, it will never cease.'],
            [''],
            ['So here, beneath the moon\'s gentle glow, I kneel before you,'],
            ['my heart all aglow. With trembling hands and bated breath,'],
            ['I ask you now, to journey with me till death.'],
            [''],
            ['Will you be the light to guide my way? Forever by my side,'],
            ['come what may, In this vast universe, our love will shine bright,'],
            ['So, my dear, will you be my light?'],
        ],
    },
    {
        title: 'Enchanting Beauty',
        rows: [
            ['Even after weeks have passed, I find myself unable to grasp'],
            ['the full extent of your beauty. It\'s as if each glimpse of your'],
            ['smile unveils new layers of enchantment, leaving me entranced'],
            ['in a perpetual state of awe. Your radiance defies time,'],
            ['transcending mere moments to etch itself into the very fabric'],
            ['of my existence, a testament to the surreal feelings ignited'],
            ['within me since our first encounter.']
        ],
    },
    
 
];

const Letters: React.FC<CreditsProps> = (props) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [time, setTime] = useState(0);

    // every 5 seconds, move to the next slide
    useInterval(() => {
        setTime(time + 1);
        // setCurrentSlide((currentSlide + 1) % CREDITS.length);
    }, 2000);

    useEffect(() => {
        if (time > 5) {
            setCurrentSlide((currentSlide + 1) % LETTERS.length);
            setTime(0);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [time]);

    const nextSlide = () => {
        setTime(0);
        setCurrentSlide((currentSlide + 1) % LETTERS.length);
    };

    return (
        // add on resize listener
        <Window
            top={48}
            left={48}
            width={1100}
            height={900}
            windowTitle="Poems"
            windowBarIcon="trailIcon"
            closeWindow={props.onClose}
            onInteract={props.onInteract}
            minimizeWindow={props.onMinimize}
            bottomLeftText={'© Copyright 2024 Ujjwal Raj'}
        >
            <div
                onMouseDown={nextSlide}
                className="site-page"
                style={styles.credits}
            >
                <h2>Letters and Poems</h2>
                <p>By Ujjwal With 🩷</p>
                <br />
                <br />
                <br />
                <div style={styles.slideContainer}>
                    {
                        <motion.div
                            animate={{ opacity: 1, y: -20 }}
                            transition={{ duration: 0.5 }}
                            key={`section-${LETTERS[currentSlide].title}`}
                            style={styles.section}
                        >
                            <h3 style={styles.sectionTitle}>
                                {LETTERS[currentSlide].title}
                            </h3>
                            {LETTERS[currentSlide].rows.map((row, i) => {
                                return (
                                    <div key={`row-${i}`} style={styles.row}>
                                        <p>{row.join(' ')}</p>
                                    </div>
                                );
                            })}
                        </motion.div>
                    }
                </div>
                <p>Click to continue...</p>
                <br />
                <div style={styles.nextSlideTimer}>
                    {/* make a time number of dots */}
                    {Array.from(Array(time)).map((i) => {
                        return (
                            <div key={i}>
                                <p>.</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </Window>
    );
};

const styles: StyleSheetCSS = {
    credits: {
        width: '100%',
        backgroundColor: 'black',
        paddingTop: 64,
        flexDirection: 'column',
        alignItems: 'center',
        paddingBottom: 64,
        color: 'white',
        overflow: 'hidden',
    },
    row: {
        overflow: 'none',
        justifyContent: 'center', // Center items horizontally
        flexDirection: 'column', // Stack items vertically
        width: 600,
        alignSelf: 'center', // Center the row container
        alignItems: 'center', // Center items vertically
    },
    section: {
        overflow: 'none',
        alignItems: 'center',
        flexDirection: 'column',
        marginBottom: 32,
        opacity: 0,
    },
    sectionTitle: {
        marginBottom: 32,
    },
    slideContainer: {
        width: '100%',
        height: '70%',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
    },
    nextSlideTimer: {
        width: 64,
        height: 32,
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
};

export default Letters;
