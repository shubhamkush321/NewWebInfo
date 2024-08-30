import React, { useEffect } from "react";
import Home1 from "../../assets/asset 42.png";
import Home2 from "../../assets/asset 43.jpeg";
import Home3 from "../../assets/asset 44.png";
import Home4 from "../../assets/asset 45.jpeg";
import Home5 from "../../assets/asset 46.png";
import "./Home.css";

const Home = () => {
  useEffect(() => {
    // Create and append stylesheet link for Shery
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdn.jsdelivr.net/npm/sheryjs/dist/Shery.css';
    document.head.appendChild(link);

    // Create and append external scripts
    const scripts = [
      'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js',
      'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js',
      'https://cdnjs.cloudflare.com/ajax/libs/three.js/0.155.0/three.min.js',
      'https://cdn.jsdelivr.net/gh/automat/controlkit.js@master/bin/controlKit.min.js',
      'https://unpkg.com/sheryjs/dist/Shery.js'
    ];

    const scriptTags = scripts.map(src => {
      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      document.body.appendChild(script);
      return script;
    });

    // Add the custom script
    const customScript = document.createElement('script');
    customScript.type = 'text/javascript';
    customScript.text = `
      Shery.imageEffect("#back", {
        style: 5, config: { 
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
        }, gooey: true
      });

      var elems = document.querySelectorAll(".elem");
      elems.forEach(function (elem) {
        var h1s = elem.querySelectorAll("h1");
        var index = 0;
        var animating = false;

        document.querySelector("#main").addEventListener("click", function () {
          if(!animating){
            animating = true;
            gsap.to(h1s[index], {
              top: '-=100%',
              ease: Expo.easeInOut,
              duration: 1,
              onComplete: function () {
                gsap.set(this._targets[0], { top: "100%" });
                animating = false;
              },
            });

            index === h1s.length - 1 ? (index = 0) : index++;

            gsap.to(h1s[index], {
              top: '-=100%',
              ease: Expo.easeInOut,
              duration: 1,
            });
          }
        });
      });
    `;
    document.body.appendChild(customScript);

    // Cleanup
    return () => {
      document.head.removeChild(link);
      scriptTags.forEach(script => document.body.removeChild(script));
      document.body.removeChild(customScript);
    };
  }, []);

  return (
    <div id="main">
      <div id="back">
        <img src={Home1} alt="Home 1" />
        <img src={Home2} alt="Home 2" />
        <img src={Home3} alt="Home 3" />
        <img src={Home4} alt="Home 4" />
        <img src={Home5} alt="Home 5" />
      </div>
      <div id="workingarea">
        <div id="hero">
          <div id="heroleft">
            <div className="elem">
              <h1>We Are Professional</h1>
              <h1>Gojo Satoru</h1>
              <h1>Gojo Satoru</h1>
              <h1>Gojo Satoru</h1>
              <h1>Gojo Satoru</h1>
            </div>
            <div className="elem">
              <h1>Web InfoMatrix</h1>
              <h1>Gojo Satoru</h1>
              <h1>Gojo Satoru</h1>
              <h1>Gojo Satoru</h1>
              <h1>Gojo Satoru</h1>
            </div>
            <div className="elem">
              <h1>Empower your data</h1>
              <h1>Gojo Satoru</h1>
              <h1>Gojo Satoru</h1>
              <h1>Gojo Satoru</h1>
              <h1>Gojo Satoru</h1>
            </div>
            <button>Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
