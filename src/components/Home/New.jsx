import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Expo } from 'gsap';
import Shery from 'sheryjs';
import  "./Home.css";

const NewHome = () => {
  const backRef = useRef(null);
  const mainRef = useRef(null);

  useEffect(() => {
    // Initialize Shery effect
    if (backRef.current) {
      Shery.imageEffect(backRef.current, {
        style: 5,
        config: {
          "a": { "value": 2, "range": [0, 30] },
          "b": { "value": 0.75, "range": [-1, 1] },
          "zindex": { "value": -9996999, "range": [-9999999, 9999999] },
          "aspect": { "value": 2.2078559738134205 },
          "gooey": { "value": true },
          "infiniteGooey": { "value": true },
          "growSize": { "value": 4, "range": [1, 15] },
          "durationOut": { "value": 1, "range": [0.1, 5] },
          "durationIn": { "value": 1.5, "range": [0.1, 5] },
          "displaceAmount": { "value": 0.5 },
          "masker": { "value": false },
          "maskVal": { "value": 1, "range": [1, 5] },
          "scrollType": { "value": 0 },
          "geoVertex": { "range": [1, 64], "value": 1 },
          "noEffectGooey": { "value": true },
          "onMouse": { "value": 1 },
          "noise_speed": { "value": 0.2, "range": [0, 10] },
          "metaball": { "value": 0.2, "range": [0, 2], "_gsap": { "id": 3 } },
          "discard_threshold": { "value": 0.5, "range": [0, 1] },
          "antialias_threshold": { "value": 0.03, "range": [0, 0.1] },
          "noise_height": { "value": 0.53, "range": [0, 2] },
          "noise_scale": { "value": 11.57, "range": [0, 100] }
        },
        gooey: true
      });
    }

    // GSAP animation logic
    const elems = document.querySelectorAll('.elem');

    elems.forEach(elem => {
      const h1s = elem.querySelectorAll('h1');
      let index = 0;
      let animating = false;

      const handleClick = () => {
        if (!animating) {
          animating = true;
          gsap.to(h1s[index], {
            top: '-=100%',
            ease: Expo.easeInOut,
            duration: 1,
            onComplete: function () {
              gsap.set(this._targets[0], { top: '100%' });
              animating = false;
            }
          });

          index = (index === h1s.length - 1) ? 0 : index + 1;

          gsap.to(h1s[index], {
            top: '-=100%',
            ease: Expo.easeInOut,
            duration: 1
          });
        }
      };

      if (mainRef.current) {
        mainRef.current.addEventListener('click', handleClick);
      }

      // Cleanup event listener on component unmount
      return () => {
        if (mainRef.current) {
          mainRef.current.removeEventListener('click', handleClick);
        }
      };
    });
  }, []);

  return (
    <div id="main" ref={mainRef}>
      <div id="back" ref={backRef}>
        <img src="assest/jujutsu (1).jpg" alt="Background 1" />
        <video src="assest/Jujutsu Kaisen.mp4" />
        <img src="assest/jujutsu (3).jpg" alt="Background 2" />
        <video src="assest/gojo.mp4" />
        <img src="assest/yuta.jpg" alt="Yuta" />
        <video src="assest/Jujutsu Kaisens.mp4" />
        <video src="assest/gojo tec.mp4" />
      </div>
      <div id="top">
        <div id="workingarea">
          <div id="nav">
            <div id="nleft">
              <h3>Shubham</h3>
            </div>
            <div id="footer">
              <h3>Product</h3>
              <h3>About</h3>
            </div>
            <div id="nright">
              <h3>Contact</h3>
              <h3>Domain Expansion</h3>
            </div>
          </div>
          <div id="hero">
            <div id="heroleft">
              <div className="elem">
                <h1>Gojo Satoru</h1>
                <h1>Jujutsu Kaisen</h1>
                <h1>Sukuna</h1>
                <h1>Creater Shubham</h1>
                <h1>Yuta Okkotsu</h1>
                <h1>Shubham</h1>
                <h1>Creater Shubham</h1>
              </div>
              <div className="elem">
                <h1>Special Grade Sorcerer</h1>
                <h1>Gege Akutami</h1>
                <h1>Cursed Techniques</h1>
                <h1>Anime</h1>
                <h1>Cursed Techniques</h1>
                <h1>Mern Stack Dev</h1>
                <h1>Anime</h1>
              </div>
              <div className="elem">
                <h1>Ability Limitless</h1>
                <h1>Shueisha's Manga</h1>
                <h1>Dismantle Cleave</h1>
                <h1>Jujutsu Kaisen</h1>
                <h1>reverse cursed</h1>
                <h1>Java Developer</h1>
                <h1>Jujutsu Kaisen</h1>
              </div>
              <button>Explore Now</button>
            </div>
            <div id="heroright">
              <p>Wake up to Reality of this world</p>
              <div id="imagediv"></div>
              <p>
                Jujutsu Kaisen is a Japanese manga series written and
                illustrated by Gege Akutami. It has been serialized in
                Shueisha's shōnen manga magazine Weekly Shōnen
              </p>
              <p>
                Jujutsu Kaisen is a Japanese manga series written and
                illustrated by Gege Akutami. It has been serialized in
                Shueisha's shōnen manga magazine Weekly Shōnen
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewHome;
