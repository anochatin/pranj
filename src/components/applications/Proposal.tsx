import React from 'react';
import Window from '../os/Window';
import useInitialWindowSize from '../../hooks/useInitialWindowSize';

export interface ValProps extends WindowAppProps {}

const moveRandomEl = (elm: HTMLElement) => {
    elm.style.position = 'absolute';
    elm.style.top = Math.floor(Math.random() * 90 + 5) + '%';
    elm.style.left = Math.floor(Math.random() * 90 + 5) + '%';
  };

  
const Proposal: React.FC<ValProps> = (props) => {
    const { initWidth, initHeight } = useInitialWindowSize({ margin: 100 });

    return (
        <Window
            top={24}
            left={56}
            width={initWidth}
            height={initHeight}
            windowTitle="Ujjwal Raj 2024"
            windowBarIcon="windowExplorerIcon"
            closeWindow={props.onClose}
            onInteract={props.onInteract}
            minimizeWindow={props.onMinimize}
            bottomLeftText={'Please dont say no'}
        >
        
            <div className="site-page">
                
            <div className="external-website">
                <iframe
                    title="External Website"
                    src="../../../Ask-her-out-main/index.html" // Adjust the path to your HTML file
                    style={{ width: initWidth, height: '100vh', border: 'none' }} // Adjust dimensions and styles
                />
            </div>
            </div>
        </Window>
    );
};
export default Proposal;
