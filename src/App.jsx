import { useState } from 'react'
import './App.css'

import Particles from './components/Particles'
import AnimatedList from './components/AnimatedList'
import TiltedCard from './components/TiltedCard.jsx'
import Dock from './components/Dock.jsx'
import ProfileCard from './components/ProfileCard.jsx'
import Carousel from './components/Carousel.jsx'


const items = ['Java', 'Python', 'C', 'JavaScript', 'TypeScript', 'SQL', 'HTML', 
  'CSS', 'React', 'Node.js', 'Express.js', 'Firebase', 'Tensorflow', 'Pytorch', 
  'OpenCV', 'Keras']; 


import {VscHome, VscArchive, VscAccount,  } from 'react-icons/vsc';
import { CiAt, CiFolderOn } from "react-icons/ci";
import { IoNewspaperOutline } from "react-icons/io5";

const items2 = [
  { icon: <CiAt size={18} />, label: 'Email: ejk255@gmail.com', onClick: () => {
      navigator.clipboard.writeText('ejk255@cornell.edu')
        .then(() => alert('Email copied to clipboard!'))
        .catch(err => {
          console.error('Failed to copy email:', err);
          alert('Failed to copy email. Please try manually.');
        });
    } },
  { icon: <CiFolderOn size={18} />, label: 'Github', onClick: () => window.open('https://github.com/ByeByeKIMKIM', '_blank')  },
  { icon: <VscAccount size={18} />, label: 'LinkedIn', onClick: () => window.open('https://www.linkedin.com/in/ethan-kim-7a7912254/', '_blank') },
  { icon: <IoNewspaperOutline size={18} />, label: 'Resume', onClick: () => {
    const confirmed = window.confirm("Do you want to download Ethan's resume?");
    if (confirmed) {
      const link = document.createElement('a');
      link.href = '/resume.pdf'; // make sure this file exists in /public
      link.download = 'Ethan_Kim_Resume.pdf';
      link.click();
    }
  } },
];

const items3 = [
  {
    image: 'https://picsum.photos/300/300?grayscale',
    link: 'https://google.com/',
    title: 'Anime',
    description: 'I like anime'
  },
  {
    image: 'https://picsum.photos/400/400?grayscale',
    link: 'https://google.com/',
    title: 'Vehicles',
    description: 'Im interested in cars and motorcycles'
  },
  {
    image: 'https://picsum.photos/500/500?grayscale',
    link: 'https://google.com/',
    title: 'Friends',
    description: 'Love these guys to death'
  },
  {
    image: 'https://picsum.photos/600/600?grayscale',
    link: 'https://google.com/',
    title: 'Traveling',
    description: 'Ive been all over, favorite place is Japan. Going to visit Korea next.'
  }
];

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={false}
          alphaParticles={false}
          disableRotation={false}
        />

        <div className="grid-container">
          <div className="box box-1">
            <ProfileCard
              name="Ethan Kim"
              title="University Student"
              handle="javicodes"
              status="Online"
              contactText="Contact Me"
              avatarUrl="/path/to/avatar.jpg"
              showUserInfo={false}
              enableTilt={false}
              enableMobileTilt={false}
              onContactClick={() => console.log('Contact clicked')}
            />
          </div>
          <div className="box box-2">
            <div style={{ height: '100%', position: 'relative'}}>
              <Carousel
                baseWidth={300}
                autoplay={false}
                autoplayDelay={3000}
                pauseOnHover={true}
                loop={false}
                round={false}
              />
            </div>
          </div>
          <div className="box box-3">
            <AnimatedList
              items={items}
              onItemSelect={(item, index) => console.log(item, index)}
              showGradients={false}
              enableArrowNavigation={false}
              displayScrollbar={false}
            />
          </div>
          <div className="box box-4">
            <div className="grid-container-2">
                <div className="box-4-i box-4-1">
                <TiltedCard
                  className="z"
                  imageSrc="/projectsc5.png"
                  altText="Project 1"
                  captionText=""
                  containerHeight="250px"
                  containerWidth="100%"
                  imageHeight="200px"
                  imageWidth="200px"
                  rotateAmplitude={20}
                  scaleOnHover={1.7}
                  showMobileWarning={false}
                  showTooltip={false}
                  displayOverlayContent={true}
                  overlayContent={
                    <>
                      <p className="tilted-card-title">
                        This Portfolio
                      </p>
                      <p className="project-info">React project with components from React Bits.</p>
                    </>
                  }
                />
                </div>
                <div className="box-4-i box-4-2">
                <TiltedCard
                  imageSrc="/projectsc4.png"
                  altText="Project 1"
                  captionText="Project 1"
                  containerHeight="220px"
                  containerWidth="100%"
                  imageHeight="200px"
                  imageWidth="200px"
                  rotateAmplitude={20}
                  scaleOnHover={1.7}
                  showMobileWarning={false}
                  showTooltip={false}
                  displayOverlayContent={true}
                  overlayContent={
                    <>
                      <p className="tilted-card-title">
                        Synthetic MRI Volume Pipeline
                      </p>
                      <p className="project-info">A synthetic data generation pipeline for MRI volumes using numpy and tensorflow. Utilizes deformations and noise.</p>
                    </>
                  }
                />
                </div>
                <div className="box-4-i box-4-3">
                <TiltedCard
                  imageSrc="/projectsc1.png"
                  altText="Project 1"
                  captionText="Project 1"
                  containerHeight="220px"
                  containerWidth="100%"
                  imageHeight="200px"
                  imageWidth="200px"
                  rotateAmplitude={20}
                  scaleOnHover={1.7}
                  showMobileWarning={false}
                  showTooltip={false}
                  displayOverlayContent={true}
                  overlayContent={
                    <>
                      <p className="tilted-card-title">
                        Recipie Web App
                      </p>
                      <p className="project-info">Fullstack dumbed down version of Pintrest. Uses Firebase for storage. Uses OpenAI API for AI features.</p>
                    </>
                  }
                />
                </div>
                <div className="box-4-i box-4-4">
                <TiltedCard
                  imageSrc="/projectsc3.png"
                  altText="Project 1"
                  captionText="Project 1"
                  containerHeight="220px"
                  containerWidth="100%"
                  imageHeight="200px"
                  imageWidth="200px"
                  rotateAmplitude={20}
                  scaleOnHover={1.7}
                  showMobileWarning={false}
                  showTooltip={false}
                  displayOverlayContent={true}
                  overlayContent={
                    <>
                      <p className="tilted-card-title">
                        Chrome Extension
                      </p>
                      <p className="project-info">Uses AniList API to get anime data. Currently working on an in-browser AI email assistant extension.</p>
                    </>
                  }
                />
                </div>
                <div className="box-4-i box-4-5">
                <TiltedCard
                  imageSrc="/projectsc2.png"
                  altText="Project 1"
                  captionText="Project 1"
                  containerHeight="220px"
                  containerWidth="100%"
                  imageHeight="200px"
                  imageWidth="200px"
                  rotateAmplitude={20}
                  scaleOnHover={1.7}
                  showMobileWarning={false}
                  showTooltip={false}
                  displayOverlayContent={true}
                  overlayContent={
                    <>
                      <p className="tilted-card-title">
                        Intelligent Image Cropper
                      </p>
                      <p className="project-info">School project. Used Java and Java Swing for GUI. Uses Dijkstra's algorithm for the "intelligent" cropping mode.</p>
                    </>
                  }
                />
                </div>
                <div className="box-4-i box-4-6">
                <TiltedCard
                  imageSrc="/projectsc6.png"
                  altText="Project 1"
                  captionText="Project 1"
                  containerHeight="220px"
                  containerWidth="100%"
                  imageHeight="200px"
                  imageWidth="200px"
                  rotateAmplitude={20}
                  scaleOnHover={1.7}
                  showMobileWarning={false}
                  showTooltip={false}
                  displayOverlayContent={true}
                  overlayContent={
                    <>
                      <p className="tilted-card-title">
                        Python Web Scraping Script
                      </p>
                      <p className="project-info">Created a Python script to scrape text from the internet. Used HTML and CSS patterns to build the logic. (Software solving an inconvenience in my life)</p>
                    </>
                  }
                />
                </div>
            </div>
          </div>
          <div className="box box-5">
            <img className="profo" src="profo.png"/>
            <p className="desc">University student studying computer science at Cornell University. Always looking improve my skills and learn something new. Connect with me →</p>
          </div>
          <div className="box box-6">
          <Dock 
              items={items2}
              panelHeight={55}
              baseItemSize={40}
              magnification={40}
              />
          </div>
        </div>
    </>
  )
}

export default App
