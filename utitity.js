
function btnUnderAddRemove (getId)
{
    const getElement = document.getElementById(getId);
    const btnUnderline = getElement.style.textDecoration;
    getElement.style.textDecoration = btnUnderline === 'underline'?'none':"underline";
}
// this for text bold
document.getElementById('bold').addEventListener('click',function(){

    const getFontweight= document.getElementById('textarea');
    const fontWeight = getFontweight.style.fontWeight;
   getFontweight.style.fontWeight = fontWeight === 'bold'?'normal':'bold'
    btnUnderAddRemove('bold');
})
// this for text Italic 
document.getElementById('italic').addEventListener('click',function(){

  const getItalicElement =   document.getElementById('textarea')
  const getItalic = getItalicElement.style.fontStyle;
   getItalicElement.style.fontStyle = getItalic === 'italic'?"normal":'italic'
    btnUnderAddRemove('italic');
})
// this for text Underline
document.getElementById('underline').addEventListener('click',function(){

 const getElement =    document.getElementById('textarea')
 const makeUnderline = getElement.style.textDecoration;
 getElement.style.textDecoration = makeUnderline === 'underline'?"none":'underline'
    btnUnderAddRemove('underline');
})
// for Justify
document.getElementById('justify').addEventListener('click',function(){
    const getElement = document.getElementById('textarea')
    const makejustify = getElement.style.textAlign;
    getElement.style.textAlign = makejustify === 'justify'?'initial':'justify';
    btnUnderAddRemove('justify');
})
// for left align
document.getElementById('leftAlign').addEventListener('click',function(){

    const getElement = document.getElementById('textarea')
    const makeLeftAlign = getElement.style.textAlign;
    getElement.style.textAlign = makeLeftAlign === 'left'?'initial':'left';
    btnUnderAddRemove('leftAlign');
})
// for center 
document.getElementById('center').addEventListener('click',function(){

    const getElement = document.getElementById('textarea')
    const makeCenterAlign = getElement.style.textAlign;
    getElement.style.textAlign = makeCenterAlign === 'center'?'initial':'center';
    btnUnderAddRemove('center');
})
// for Right align 
document.getElementById('rightAlign').addEventListener('click',function(){
    const getElement = document.getElementById('textarea')
    const makeRightAlign = getElement.style.textAlign;
    getElement.style.textAlign = makeRightAlign === 'right'?'initial':'right';
    btnUnderAddRemove('right');
})



//font size section
// document.getElementById('fontSizeUp').addEventListener('click',function(){

// const fontFild = document.getElementById('fontSizeFild')
// const fontFildValue = parseInt(fontFild.value)
// console.log(fontFildValue)

//     document.getElementById('textarea').style.fontSize = fontFildValue+"px"

// })

const fontUp = document.getElementById ('fontSizeUp')
const fontDown = document.getElementById('fontSizeDown')
const fontFild = document.getElementById('fontSizeFild')
const textArea = document.getElementById('textarea')

// update text area text by textFild
fontFild.addEventListener('input',function(event){
    const fontfildValue = parseInt(fontFild.value);
    textArea.style.fontSize = fontfildValue+'px';
})


// update text area text by up key 
fontUp.addEventListener('click',function(){
    fontSize= parseInt(fontFild.value );
    fontFild.value = fontSize + 1;
    textArea.style.fontSize = fontFild.value + 'px';
    console.log(fontFild.value)
})

// update text area text by down key 
fontDown.addEventListener('click',function(){
    fontSize= parseInt(fontFild.value );
    fontFild.value = fontSize - 1;
    textArea.style.fontSize = fontFild.value + 'px';
    console.log(fontFild.value)
})
const getTextArea = document.getElementById('textarea')
const getColorInput = document.getElementById('colorFild')

getColorInput.addEventListener('input',function(){
    // step 1
    const getColor = getColorInput.value;
    // setp 2
    getTextArea.style.color = getColor;
 })
// const getTextArea = document.getElementById('textarea');
// const getColorInput = document.getElementById('colorFild');

// getColorInput.addEventListener('input', function() {
//   const getColor = getColorInput.value;
//   getTextArea.style.color = getColor;
// });