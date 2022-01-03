import React from 'react'
import styles from './ImageCard.css'
// import { Button } from 'vtex.styleguide'
import { useCssHandles } from 'vtex.css-handles'

const CSS_HANDLES = ['cardButtonWrapper','cardContainer', 'cardImage', 'cardTextArea', 'cardHeading','firstParagraph','secondParagraph','cardFooter','cardButton']
const ImageCard = (props) => {
  const handles = useCssHandles(CSS_HANDLES)
  return(
    <div className={styles.card} style={{backgroundColor:`${props.backgroundColor}`,width:`${props.cardWidth}`,height:`${props.cardHeight}`}}>
    <img src={props.image} alt={props.alt} className={handles.cardImage}/>
    <div style={{textAlign:`${props.textAlignment}`}} className={handles.cardTextArea}>
      <h4 className={handles.cardHeading}><b>{props.heading}</b></h4>
      <p className={handles.firstParagraph}>{props.firstParagraph}</p>
      <p className={handles.secondParagraph}>{props.secondParagraph}</p>
      <div className={styles.cardButtonWrapper}  style={{display:'flex',justifyContent:`${props.buttonAlignment}`}}>
      <a href={props.buttonLink} target={props.target}><button className={handles.cardButton} style={{width:`${props.buttonWidth}`,height:`${props.buttonHeight}`}}>{props.buttonLabel}</button></a>
      </div>
      <div className={styles.cardFooter}>{props.footerText}</div>

    </div>
  </div>
  )
}
export default ImageCard
