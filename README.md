# image-card-app

This app can be used as vertical image card block.

![image](https://user-images.githubusercontent.com/91450011/148213464-23c8a7e2-097b-4967-81e2-253b94b15dfc.png)
# steps to use this app in your store theme:

## step1:
Add echidna.image-card@0.0.1 in store dependencies.
  "dependencies": {
    "echidna.image-card": "0.x"
  },
  
## step2:
Add "image-card" block where you want to display it

example: in home.jsonc => {
                         "store.home": {
                           "blocks": ["image-card"]
                           }
## step3:
Declare the block with necessary props as shown below:

"image-card": {
    "props": {
      "image": "https://cdn.pixabay.com/photo/2017/02/08/17/24/fantasy-2049567__480.jpg",
      "alt": "test1",
      "cardHeight":"auto",
      // "cardWidth":50,
      "heading": "Heading test",
      "firstParagraph": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum velit velit, hendrerit eu rhoncus non, interdum vitae ex.",
      // "secondParagraph": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ",
      "footerText": "card footer",
      "buttonLabel": "Button Label",
      "blockClass": "blockTest",
      "backgroundColor": "#dbf8e6",
      "buttonWidth": "230px",
      "buttonHeight": "40px",
      "buttonAlignment": "center",
      "buttonLink": "https://www.facebook.com",
      "target": "_blank",
      "textAlignment": "center"
    }
  },
  

![image](https://user-images.githubusercontent.com/91450011/148217466-22c69705-6d37-48d4-9ba2-2ba28d6c9039.png)

## Available props:
      "image":                                link                         Add the link of the image which you want to display.
      "alt":                                  string                       Alternative text for image
      "cardHeight":                           string(px)                   Height of the card, it accepts px units(ex:"200px")
      "cardWidth":                            string(px)                   Width of the card
      "heading":                              string                       Heading to be shown on card
      "firstParagraph":                       string                       First paragraph you can add using this prop.
      "secondParagraph":                      string                       Second paragraph you can add using this prop.
      "footerText":                           string                       use this prop, if u want to add footer text.
      "buttonLabel":                          string                       Text to be displayed on button
      "blockClass":                           string                       blockclass for the block
      "backgroundColor":                      string                       you can set background color of the card using this prop
      "buttonWidth":                          string(px)                   Width of the button
      "buttonHeight":                         string(px)                   Height of the button
      "buttonAlignment":                      string                       Alignment of the button inside the card               
      "buttonLink":                           link                         Link for the button
      "target":                               string                       Button specs
      "textAlignment":                        string                       Alignment of texts inside card
      
  #### Use only props which are necessory for your requirements

## css handles
      .cardButtonWrapper
      .cardContainer
      .cardImage
      .cardTextArea
      .cardHeading
      .firstParagraph
      .secondParagraph
      .cardFooter
      .cardButton
 
