import React, { useEffect, useState } from 'react';
import { Link } from '../general';
// import forHire from '../../assets/pictures/forHireGif.gif';
import { useLocation} from 'react-router';

export interface VerticalNavbarProps {}

const VerticalNavbar: React.FC<VerticalNavbarProps> = () => {
    const location = useLocation();
   // const [projectsExpanded, setProjectsExpanded] = useState(false);
    const [isHome, setIsHome] = useState(false);

   // const navigate = useNavigate();
 

    useEffect(() => {
        if (location.pathname === '/') {
            setIsHome(true);
        } else {
            setIsHome(false);
        }
        return () => {};
    }, [location.pathname]);

    return !isHome ? (
        <div style={styles.navbar}>
            <div style={styles.header}>
                <h1 style={styles.headerText}>Welcome</h1>
                <h1 style={styles.headerText}>To  P95</h1>
                <h3 style={styles.headerShowcase}>Pranjali</h3>
            </div>
            <div style={styles.links}>
                
                <Link containerStyle={styles.link} to="" text="HOME" />
                <Link 
                    containerStyle={styles.link} 
                    to = "about" 
                    text = "ABOUT"
                />  
                <Link
                    containerStyle={styles.link}
                    to="whyyou"
                    text="WHY YOU"
                />
                <Link containerStyle={styles.link} to="whyme" text="WHY ME" />
            </div>
            <div style={styles.spacer} />
           
            </div>
       
    ) : (
        <></>
    );
};

const styles: StyleSheetCSS = {
    navbar: {
        width: 300,
        height: '100%',
        flexDirection: 'column',
        padding: 48,
        boxSizing: 'border-box',
        position: 'fixed',
        overflow: 'hidden',
    },
    header: {
        flexDirection: 'column',
        marginBottom: 64,
    },
    headerText: {
        fontSize: 38,
        lineHeight: 1,
    },
    headerShowcase: {
        marginTop: 12,
    },
    logo: {
        width: '100%',
        marginBottom: 8,
    },
    link: {
        marginBottom: 32,
    },
    expandedLink: {
        marginBottom: 16,
    },
    insetLinks: {
        flexDirection: 'column',
        marginLeft: 32,
        marginBottom: 16,
    },
    insetLink: {
        marginBottom: 8,
    },
    links: {
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'center',
    },
    image: {
        width: '80%',
    },
    spacer: {
        flex: 1,
    },
    forHireContainer: {
        cursor: 'pointer',

        width: '100%',
    },
};

export default VerticalNavbar;
