//why you

import React from 'react';


export interface ExperienceProps {}

const WhyYou: React.FC<ExperienceProps> = (props) => {
    return (
        <div className="site-page-content">
            <div className='text-block'>
                <p> 
                    Why you it cannot be expressed in words what I saw in you was majistic 
                    <p>
                    Oh now i realized that What I wrote was too cringe and I think it will redce whatever probablity is there of getting a yes so maybe sometimes else 
                   <p>We will skip this for now </p> 
                    </p>
                    <p><b>
                    go through the rest of the apps.
                    </b>
                    </p>

                </p>
            </div>
            
        </div>
    );
};

const styles: StyleSheetCSS = {
    header: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
    },
    skillRow: {
        flex: 1,
        justifyContent: 'space-between',
    },
    skillName: {
        minWidth: 56,
    },
    skill: {
        flex: 1,
        padding: 8,
        alignItems: 'center',
    },
    progressBar: {
        flex: 1,
        background: 'red',
        marginLeft: 8,
        height: 8,
    },
    hoverLogo: {
        height: 32,
        marginBottom: 16,
    },
    headerContainer: {
        alignItems: 'flex-end',
        width: '100%',
        justifyContent: 'center',
    },
    hoverText: {
        marginBottom: 8,
    },
    indent: {
        marginLeft: 24,
    },
    headerRow: {
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    row: {
        display: 'flex',
        justifyContent: 'space-between',
    },
};

export default WhyYou;
