import React from 'react';

import Window from '../os/Window';
import MusicProjects from './Music';

// import useInitialWindowSize from '../../hooks/useInitialWindowSize';
// import { MusicPlayer } from '../general';

export interface ShowcaseExplorerProps extends WindowAppProps {}



const MusicPlayerApp: React.FC<ShowcaseExplorerProps> = (props) => {
    // const { initWidth, initHeight } = useInitialWindowSize({ margin:40  });

    return (
        <Window
            top={24}
            left={56}
            width={800}
            height={800}
            windowTitle="Music Player"
            windowBarIcon="MusicIcon"
            closeWindow={props.onClose}
            onInteract={props.onInteract}
            minimizeWindow={props.onMinimize}
            bottomLeftText={'© Copyright 2024 Music Player'}
        >
            <div className="">
            <MusicProjects/>
            </div>
        </Window>
    );
};

export default MusicPlayerApp;