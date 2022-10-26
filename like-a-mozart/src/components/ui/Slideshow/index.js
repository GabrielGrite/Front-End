import React, { createContext, useContext, useState } from "react"
import "./style.css"

const SlideshowContext = createContext();

export const SlideBanner = ({ title, img }) => {
  const { current, total } = useContext(SlideshowContext)

  return (
    <div className="mySlides fade">
      <div className="numbertext">{current + 1} / {total}</div>
      <img
        src={img}
        style={{width:"100%"}}
      />
      <div className="text">{title}</div>
    </div>
  )
}

const SlideBannerWrapper = ({ order, children }) => {
  const { current } = useContext(SlideshowContext)

  return current === order && <>{children}</>
}

const Slideshow = props => {
  const [current, setCurrent] = useState(0)
  const total = React.Children.count(props.children)

  const next = () => setCurrent(val => val === total - 1 ? 0 : val + 1)

  const prev = () => setCurrent(val => val === 0 ? total - 1 : val - 1)

  const value = { current, total }

  const renderWrappedChild = (child, idx) => <SlideBannerWrapper order={idx}>{child}</SlideBannerWrapper>

  return (
    <SlideshowContext.Provider value={value}>
      <div className="slideshow-container">
        {React.Children.map(props.children, renderWrappedChild)}
        <a className="prev" onClick={prev}>&#10094;</a>
        <a className="next" onClick={next}>&#10095;</a>
      </div>
    </SlideshowContext.Provider>
  );
}

export default Slideshow
