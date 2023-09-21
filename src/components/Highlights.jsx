


const HighlightsContent = ({ src, title, content, pattern }) => {
  return (
    <div className="relative grid justify-items-center">
        <img src={`/assets/images/homepage/${src}`} alt="/" />
        <>
            <h2>{title}</h2>
            <p>{content}</p>
            <img src={`/assets/images/patterns/${pattern}`} alt="/" />
        </>
    </div>
  )
}



function Highlights() {
  return (
    <>
        <HighlightsContent src={'enjoyable-place-mobile.jpg'} title={'Enjoyable place for all the family'} content={'Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange a tour of the farm before your meal.'} pattern={'pattern-curve-top-left.svg'}/>

        <HighlightsContent src={'locally-sourced-mobile.jpg'} title={'The most locally sourced'} content={'All our ingredients come directly from our farm or local fishery. So you can be sure that you’re eating the freshest, most sustainable food.'} pattern={'pattern-curve-bottom-right.svg'}/>
    </>
  )
}

export default Highlights