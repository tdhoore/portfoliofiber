import React, { useEffect } from "react";
import logo from "../../assets/img/timdhooreLogoWhite.svg";
import { useSpring, animated as a } from "react-spring";

const Home = props => {
  const [mainLineAnimation, setMainLineAnimation] = useSpring(() => ({
    rotAndZ: [-10, -10, -400],
    config: { mass: 1, tension: 200, friction: 15 }
  }));

  const [lineAnimation, setLineAnimation] = useSpring(() => ({
    scale: 0,
    config: { mass: 1, tension: 100, friction: 20 }
  }));

  const [lineAnimationDelay, setLineAnimationDelay] = useSpring(() => ({
    scale: 0,
    config: { mass: 1, tension: 100, friction: 20 }
  }));

  const [logoAnimation, setLogoAnimation] = useSpring(() => ({
    posZ: -500,
    opacity: 0,
    config: { mass: 1, tension: 200, friction: 30 }
  }));

  const [textAnimation, setTextAnimation] = useSpring(() => ({
    opacity: 0,
    config: { mass: 1, tension: 200, friction: 30 }
  }));

  const [titleAnimation, setTitleAnimation] = useSpring(() => ({
    opacity: 0,
    config: { mass: 1, tension: 200, friction: 30 }
  }));

  const playIntro = () => {
    setTimeout(() => {
      //logo
      setLogoAnimation({
        posZ: 0,
        opacity: 1
      });

      //text
      setTimeout(() => {
        setTitleAnimation({ opacity: 1 });

        setTimeout(() => {
          setTextAnimation({ opacity: 1 });
        }, 100);
      }, 200);

      //outline
      setMainLineAnimation({ rotAndZ: [0, 0, 0] });
      setLineAnimation({ scale: 1 });
      setTimeout(() => {
        setLineAnimationDelay({ scale: 1 });
      }, 200);
    }, 1000);
  };

  useEffect(() => {
    playIntro();
  });

  return (
    <article className="homeArticle">
      <a.div
        className="homeAnimationHolder"
        style={{
          transform: mainLineAnimation.rotAndZ.interpolate(
            (rotX, rotY, posZ) =>
              `perspective(1920px) rotateY(${rotY}deg) rotateX(${rotX}deg) translateZ(${posZ}px)`
          )
        }}
      >
        <header>
          <a.h2 style={titleAnimation}>Tim D'hoore</a.h2>
          <a.p style={textAnimation}>Creative developer</a.p>
        </header>
        <a.img
          src={logo}
          alt="Tim D'hoore logo"
          style={{
            transform: logoAnimation.posZ.interpolate(
              posZ => `perspective(1920px) translateZ(${posZ}px)`
            ),
            opacity: logoAnimation.opacity.interpolate(opacity => opacity)
          }}
        />
        <div className="scrollIndicator"></div>
        <div className="homeOutlineHolder">
          <a.div
            style={{
              transform: lineAnimationDelay.scale.interpolate(
                scale => `scaleX(${scale})`
              )
            }}
            className="homeOutline"
          ></a.div>
          <a.div
            style={{
              transform: lineAnimationDelay.scale.interpolate(
                scale => `scaleY(${scale})`
              )
            }}
            className="homeOutline homeOutline1"
          ></a.div>
          <a.div
            style={{
              transform: lineAnimationDelay.scale.interpolate(
                scale => `scaleX(${scale})`
              )
            }}
            className="homeOutline homeOutline2"
          ></a.div>
          <a.div
            style={{
              transform: lineAnimationDelay.scale.interpolate(
                scale => `scaleY(${scale})`
              )
            }}
            className="homeOutline homeOutline3"
          ></a.div>
          <a.div
            style={{
              transform: lineAnimation.scale.interpolate(
                scale => `scaleX(${scale})`
              )
            }}
            className="homeOutline blueBg"
          ></a.div>
          <a.div
            style={{
              transform: lineAnimation.scale.interpolate(
                scale => `scaleY(${scale})`
              )
            }}
            className="homeOutline homeOutline1 blueBg"
          ></a.div>
          <a.div
            style={{
              transform: lineAnimation.scale.interpolate(
                scale => `scaleX(${scale})`
              )
            }}
            className="homeOutline homeOutline2 blueBg"
          ></a.div>
          <a.div
            style={{
              transform: lineAnimation.scale.interpolate(
                scale => `scaleY(${scale})`
              )
            }}
            className="homeOutline homeOutline3 blueBg"
          ></a.div>
        </div>
      </a.div>
    </article>
  );
};

export default Home;
