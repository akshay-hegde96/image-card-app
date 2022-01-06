<!-- 📢 Use this project, [contribute](https://github.com/{OrganizationName}/{AppName}) to it or open issues to help evolve it using [Store Discussion](https://github.com/vtex-apps/store-discussion). -->

# Vertical Image Card

<!-- DOCS-IGNORE:start -->
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-0-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->
<!-- DOCS-IGNORE:end -->

This app can be used as vertical image card block.

![Media Placeholder](https://user-images.githubusercontent.com/91450011/148213464-23c8a7e2-097b-4967-81e2-253b94b15dfc.png)

## Configuration 
### steps to use this app in your store theme:

#### step1:
Add `echidna.image-card@0.0.1` in store dependencies.
```json
  "dependencies": {
    "echidna.image-card": "0.x"
  },
  ```
#### step2:
Add `"image-card"` block where you want to display it

example: in home.jsonc 
                    ```json     
                         {
                         "store.home": {
                           "blocks": ["image-card"]
                           }
                           ```
#### step3:
Declare the block with necessary props as shown below:
```json
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
  ```
  

### props

| Prop name    | Type            | Description    | Default value                                                                                                                               |
| ------------ | --------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | 
| `image`      | `link`       | Add the link of the image which you want to display         | 
| `alt`      | `string`       |  Alternative text for image         | 
| `cardHeight`      | ` string(px)`       |   Height of the card, it accepts px units(ex:"200px")         |
| `cardWidth`      | `string(px)`       |    Width of the card         | 
| `heading`      | `string`       |   Heading to be shown on card         | 
| `firstParagraph`      | `string`       | First paragraph you can add using this prop.         | 
| `secondParagraph`      | `string`       | Second paragraph you can add using this prop.         | 
| `footerText`      | `string`       | use this prop, if u want to add footer text.         |
| `buttonLabel`      | `string`       |  Text to be displayed on button  `mandatory, if you use button`       | 
| `blockClass`      | `string`       |  blockclass for the block         | 
| `backgroundColor`      | `string`       |  you can set background color of the card using this prop         | 
| `buttonWidth`      | `  string(px)`       |  Width of the button         | 
| `buttonHeight`      | `  string(px) `       | Height of the button         | 
| `buttonAlignment`      | `string`       |   Alignment of the button inside the card          | 
| `buttonLink`      | `string`       | Link for the button         | 
| `target`      | `string`       |   Button specs         | 
| `textAlignment`      | `string`       | Alignment of texts inside card         | 

##### Note: Use Css Handles instead, if any of the styling props not working properly as per your requirements.Use only props which are necessory for your requirements
             
## CSS Handles

| CSS Handles |
| ----------- | 
| `.cardButtonWrapper` | 
| `.cardContainer` | 
| `.cardImage` | 
| `.cardTextArea` | 
| ` .cardHeading` |
| `.firstParagraph` |
| ` .secondParagraph` |
| ` .cardFooter` |
| `.cardButton` |


<!-- DOCS-IGNORE:start -->

## Contributors ✨

Thanks goes to these wonderful people:

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [akshay-hegde96](https://github.com/akshay-hegde96) specification. Contributions of any kind are welcome!

<!-- DOCS-IGNORE:end -->


