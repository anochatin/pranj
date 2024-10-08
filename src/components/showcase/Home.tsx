import React from 'react';
import { Link } from '../general';
// import { useNavigate } from 'react-router';

export interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
   // const navigate = useNavigate();

   

    return (
        <div style={styles.page}>
            <div style={styles.header}> 
                <h1 style={styles.name}>Ujjwal RAj</h1>
                <h4>Dumb Enough To Make This</h4>
                
            </div>
            <div style={styles.buttons}>
                <Link containerStyle={styles.link} to = "about" text = "ABOUT"/>
                <Link
                    containerStyle={styles.link}
                    to="whyyou"
                    text="WHY YOU"/>
                <Link containerStyle={styles.link} to="whyme" text="WHY ME" />
               
                
            </div>
           
        </div>
    );
};

const styles: StyleSheetCSS = {
    page: {
        left: 0,
        right: 0,
        top: 0,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: '100%',
    },
    header: {
        textAlign: 'center',
        marginBottom: 64,
        marginTop: 64,

        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttons: {
        justifyContent: 'space-between',
    },
    image: {
        width: 800,
    },
    link: {
        padding: 16,
    },
    nowHiring: {
        backgroundColor: 'red',
        padding: 16,
    },
    forHireContainer: {
        marginTop: 64,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
    },
    name: {
        fontSize: 72,
        marginBottom: 16,
        lineHeight: 0.9,
    },
};

export default Home;
