import './main.css';
import Imag from './image';

const Main=()=>{
    return(
        <div class="main">
            <div class="sidebar">
                <div>
                    <Imag/>
                </div>
            
                <h2>Home</h2>
                <h2>Introduction</h2>
                <h2>Education</h2>
                <h2>Skills</h2>
                <h2>projects</h2>
                <h2>Address</h2>
            </div>
        <div class="content">
            <div class="home">
                <h1>Home</h1>
                <p>Welcome to my website</p>
                <p>In this website simply you will know about some basic details about me</p>
            </div>
            <div class="introduction">
                <h1>Introduction</h1>
                <p>My name is Sumanth Andra, from Duttalur Village,Duttalur Mandal, SPSR Nellore District</p>
            </div>
            <div class="education">
                <h1>Education</h1>
                <p>SSC   : A.P.Model School, Duttalur</p>
                <p>Inter : Sri Chaitany Junior College, Nellore DLP boys</p>
                <p>B.Tech :Vignan's institue of information technology,Vishakapatnam[ECE]</p>
            </div>
            <div class="certificates">
                <h1>Certificates</h1>
                <p>programming Essentials in PYTHON COURSE, provided by CISCO NETWORKING ACADEMY</p>
            </div>
            <div class="projects">
                <h1>Projects</h1>
                <p>SMART GARBAGE IDENTIFICATION using openCV Module</p>
                <p>SMART ATTENDANCE by QR CODE through Python Modules</p>
                <p>ROCK PAPER SCISSIOR game using PYTHON</p>
                <p>Mini-project on ANTI SLEEPING GLASSES</p>
            </div>
            <div class="address">
                <h1>Addres</h1>
                <p> 1-10,Duttalur Village, Duttalur Mandal, Nellore District[524222] </p>
            </div>
        </div>
    </div>
    );
};

export default Main;