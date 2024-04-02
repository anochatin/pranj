import React, { useState } from 'react';
import ed_sheeran_perfect from '../../assets/audio/Ed Sheeran - Perfect (Official Music Video).mp3';
import ed_sheeran_photograph from '../../assets/audio/Ed Sheeran - Photograph (Official Music Video).mp3';
import full_video_tum_se_hi from '../../assets/audio/Full Video Tum Se Hi Jab We Met Kareena Kapoor, Shahid Kapoor Mohit Chauhan Pritam.mp3';
import hi_nanna_samayama from '../../assets/audio/Hi Nanna Samayama Lyrical Video Song Nani,Mrunal Thakur Shouryuv Hesham Abdul Wahab.mp3';
import i_wanna_be_yours from '../../assets/audio/I Wanna Be Yours.mp3';
import inthandham_video_song from '../../assets/audio/Inthandham Video Song - Sita Ramam (Telugu) Dulquer Mrunal Vishal Hanu Raghavapudi.mp3';
import katija_turis_lyrics from '../../assets/audio/Kalank Title Track - Lyrical Alia Bhatt , Varun Dhawan Arijit Singh Pritam Amitabh.mp3';
import kites_dil_kyun_yeh_mera from '../../assets/audio/Kites Dil Kyun Yeh Mera Shor Kare Full Song (HD) Hrithik Roshan, Bárbara Mori.mp3';
import kyon_barfi_pritam_papon_sunidhi from '../../assets/audio/Kyon - BarfiPritamPaponSunidhiRanbirPriyanka.mp3';
import niall_horan_must_be_love from '../../assets/audio/Niall Horan - Must Be Love (Official Audio).mp3';
import niall_horan_put_a_little_start_a_cult from '../../assets/audio/Niall Horan - You Could Start a Cult (Official Audio).mp3';
import one_direction_18 from '../../assets/audio/One Direction - 18 (Audio).mp3';
import one_direction_perfect from '../../assets/audio/One Direction - Perfect (Official Video).mp3';
import one_direction_steal_my_girl from '../../assets/audio/One Direction - Steal My Girl.mp3';
import passenger_let_her_go from '../../assets/audio/Passenger - Let Her Go (Feat. Ed Sheeran - Anniversary Edition) [Official Video].mp3';
import risk_astro_always_gonna_stay from '../../assets/audio/Rick Astley - Never Gonna Give You Up (Official Music Video).mp3';
import shawn_mendes_theres_nothing from "../../assets/audio/Shawn Mendes - There's Nothing Holdin' Me Back (Official Music Video).mp3";
import shayad_love_aaj_kal from '../../assets/audio/Shayad - Love Aaj Kal Kartik Sara Arushi Pritam Arijit Singh.mp3';
import stephen_sanchez_until_i_found_you from '../../assets/audio/Stephen Sanchez - Until I Found You (Official Video).mp3';
import tone_jo_na_kaha from '../../assets/audio/Tune Jo Na Kaha Song New York John Abraham, Katrina Kaif, Neil Nitin M Mohit Chauhan Pritam.mp3';
import you_are_my_sunshine from '../../assets/audio/you are my sunshine.mp3';
import zaroori_tha from '../../assets/audio/Zaroori Tha (1 Minute Trending Version).mp3';
import zehnaseeb_lyric_video from '../../assets/audio/Zehnaseeb Lyric Video - Hasee Toh PhaseeParineeti, SidharthChinmayi S, Shekhar Ravjiani.mp3';

import { MusicPlayer } from '../general';

export interface MusicProjectsProps {}

const styles: StyleSheetCSS = {
    sitePage: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: 'auto', // Updated
        maxWidth: 800,
        padding: 32,
        paddingTop: 64,
        backgroundColor: '#f7f7f7',
        border: '1px solid #ccc',
        borderRadius: 10,
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 24,
        textAlign: 'center',
        color: '#333',
        textTransform: 'uppercase',
    },
    musicPlayer: {
        marginBottom: 20,
    },
    paragraph: {
        fontSize: 16,
        marginBottom: 20,
        textAlign: 'center',
        color: '#666',
    },
};




const MusicProjects: React.FC<MusicProjectsProps> = () => {
    const [currentSong, setCurrentSong] = useState<string>('');

    return (
        <div style={styles.sitePage}>
            <h1 style={styles.heading}>Music Player</h1>
    
        <MusicPlayer
            src={ed_sheeran_perfect}
            title="Perfect - Ed Sheeran"
            subtitle="Ed Sheeran - 2017"
            currentSong={currentSong}
            setCurrentSong={setCurrentSong}
        />
       
       
        <MusicPlayer
              src={shawn_mendes_theres_nothing}
              title="There's Nothing Holdin' Me Back "
              subtitle="Shawn Mendes - 2016"
              currentSong={currentSong}
              setCurrentSong={setCurrentSong}
        />
        <MusicPlayer
            src={shayad_love_aaj_kal}
            title="Shayad - Love Aaj Kal"
            subtitle="Kartik Sara Arushi Pritam Arijit Singh - 2019"
            currentSong={currentSong}
            setCurrentSong={setCurrentSong}
        />
        <MusicPlayer
            src={stephen_sanchez_until_i_found_you}
            title="Until I Found You"
            subtitle="Stephen Sanchez - 2023"
            currentSong={currentSong}
            setCurrentSong={setCurrentSong}
        />
        <MusicPlayer
            src={tone_jo_na_kaha}
            title="Tune Jo Na Kaha  - New York"
            subtitle="Neil Nitin M Mohit Chauhan Pritam - 2011"
            currentSong={currentSong}
            setCurrentSong={setCurrentSong}
          
        />
        <MusicPlayer
             src={you_are_my_sunshine}
             title="You Are My Sunshine"
             subtitle="Ujjwal - Just Now"
             currentSong={currentSong}
             setCurrentSong={setCurrentSong}
        />
        <MusicPlayer
            src={zaroori_tha}
            title="Zaroori Tha "
            subtitle=""
            currentSong={currentSong}
            setCurrentSong={setCurrentSong}
        />
        <MusicPlayer
            src={zehnaseeb_lyric_video}
            title="Zehnaseeb "
            subtitle="Parineeti, Sidharth Chinmayi S, Shekhar Ravjiani - 2011"
            currentSong={currentSong}
            setCurrentSong={setCurrentSong}
        />
        <MusicPlayer
            src={ed_sheeran_photograph}
            title="Photograph - Ed Sheeran"
            subtitle="Ed Sheeran - 2015"
            currentSong={currentSong}
            setCurrentSong={setCurrentSong}
        />
       
       <MusicPlayer
            src={full_video_tum_se_hi}
            title="Tum Se Hi Jab We Met"
            subtitle="Mohit Chauhan, Pritam - 2009"
            currentSong={currentSong}
            setCurrentSong={setCurrentSong}
        />
        <MusicPlayer
            src={hi_nanna_samayama}
            title="Samayama"
            subtitle="Shouryuv Hesham Abdul Wahab - 2022"
            currentSong={currentSong}
            setCurrentSong={setCurrentSong}
        />
     
        <MusicPlayer
            src={i_wanna_be_yours}
            title="I Wanna Be Yours"
            subtitle="Arctic Monkeys - 2013"
            currentSong={currentSong}
            setCurrentSong={setCurrentSong}
        />
        <MusicPlayer
            src={inthandham_video_song }
            title="Inthandham - Sita Ramam (Telugu)"
            subtitle="Dulquer Mrunal Vishal Hanu Raghavapudi - 2020"
            currentSong={currentSong}
            setCurrentSong={setCurrentSong}
        />
        <MusicPlayer
            src={katija_turis_lyrics}
            title="Kalank "
            subtitle="Arijit Singh Pritam Amitabh - 2019"
            currentSong={currentSong}
            setCurrentSong={setCurrentSong}
        />
        <MusicPlayer
            src={kites_dil_kyun_yeh_mera}
            title="Dil Kyun Yeh Mera Shor Kare"
            subtitle="Bárbara Mori - Release Year"
            currentSong={currentSong}
            setCurrentSong={setCurrentSong}
        />
        <MusicPlayer
            src={kyon_barfi_pritam_papon_sunidhi}
            title="Kyon - Barfi"
            subtitle="Pritam, Papon, Sunidhi - 2012"
            currentSong={currentSong}
            setCurrentSong={setCurrentSong}
        />
        <MusicPlayer
            src={niall_horan_must_be_love}
            title="Must Be Love - Niall Horan"
            subtitle="Niall Horan - 2013"
            currentSong={currentSong}
            setCurrentSong={setCurrentSong}
        />
        <MusicPlayer
            src={niall_horan_put_a_little_start_a_cult}
            title="Put A Little Start a Cult - Niall Horan"
            subtitle="Niall Horan - 2013"
            currentSong={currentSong}
            setCurrentSong={setCurrentSong}
        />
        <MusicPlayer
            src={one_direction_18}
            title="18 - One Direction"
            subtitle="One Direction - 2014"
            currentSong={currentSong}
            setCurrentSong={setCurrentSong}
        />
        <MusicPlayer
            src={one_direction_perfect}
            title="Perfect - One Direction"
            subtitle="One Direction - 2015"
            currentSong={currentSong}
            setCurrentSong={setCurrentSong}
        />
        <MusicPlayer
            src={one_direction_steal_my_girl}
            title="Steal My Girl - One Direction"
            subtitle="One Direction - 2014"
            currentSong={currentSong}
            setCurrentSong={setCurrentSong}
        />
        
        <MusicPlayer
            src={risk_astro_always_gonna_stay}
            title="Always Gonna Stay "
            subtitle="Risk Astro - 2012"
            currentSong={currentSong}
            setCurrentSong={setCurrentSong}
        />
        <p> you have been rick rolled </p>
        <MusicPlayer
            src={passenger_let_her_go}
            title="Let Her Go - Passenger"
            subtitle="Passenger - 2012"
            currentSong={currentSong}
            setCurrentSong={setCurrentSong}
        />
        

            <br />
            <br />

            <br/>
            <hr/>
            <h4 className="sectionTitle">By Me with ❤️:</h4>
            <p className="paragraph">"My Dearest ,"</p>

            <h4 className="sectionTitle">Expressing:</h4>
            <p className="paragraph">"As I sit down to create this little musical journey for you, my heart overflows with love and affection. Words can hardly express the depth of my feelings for you. Every beat of these songs echoes the rhythm of my love for you."</p>
            <h4 className="sectionTitle">Forever:</h4>
            <p className="paragraph">"As you listen to these songs, I hope they serve as a reminder of my unwavering commitment to you. My love for you knows no bounds, "</p>
            <h4 className="sectionTitle">Looking Ahead:</h4>
            <p className="paragraph">"I look forward to creating many more memories, sharing countless laughs, and growing even closer with each passing day. With you, the future holds endless possibilities, and I can't wait to explore them all by your side."</p>


            <br />
            <h1></h1>
            <h1></h1>
            <h1></h1>
            <h1></h1>
            <h1></h1>
            <p style={styles.paragraph}> It took me 2 days to make, Hopefully you like it</p>
            
        </div>
    );
};



export default MusicProjects;
