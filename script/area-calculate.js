//triangle ==============================================================================
function onClickTriangle(){
    //base
    const baseFiled = document.querySelector('#triangleBase')
     const baseValuetext = baseFiled.value
     const base = parseFloat(baseValuetext)
     baseFiled.vale = ''
  // hight
      const hightfiled = document.querySelector('#triangle-hight')
      const hightValuetext = hightfiled.value
      const hight = parseFloat(hightValuetext)
      hightfiled.vale = ''

    //rectangle-area
    const area = 0.5 * base * hight
    const rectangleArea = document.querySelector('#rectangle-area')
    rectangleArea.innerText = area
     
}

// regtangle ==============================================================================
function onClickRectangle(){
  //width
    const widthFiled = document.querySelector('#rectangle-width')
    const withValuetext = widthFiled.value
    const width  = parseFloat(withValuetext)
    widthFiled.value=''

    // length
    const lengthFiled = document.querySelector('#rectangle-width')
    const lengthValuetext = lengthFiled.value
    const length  = parseFloat(lengthValuetext)
    lengthFiled.vale = ''
     //rectangle-area
     const area = width * length
     const rextangleArea = document.querySelector('#rextangle-area')
     rextangleArea.innerText = area

  }




  // reuse able function
  // get input value
  function getInputValuee(filedId){
    //get input value
    const inputValue = document.getElementById(filedId)
    const inputValuetext  = inputValue.value
    const value = parseFloat(inputValuetext)
    return value
  }
//set inner text
function setElementTextfiled(elementId, area){
  const element = document.getElementById(elementId)
  element.innerText = area
}




  // rallelogram  ==============================================================================
  function onClickparallelogram(){
    // base
    const base = getInputValuee('parallelogram-b')
    //hight
    const hight = getInputValuee('parallelogram-h')

    const area = base * hight
    setElementTextfiled('parallelogram-area', area)
  }


  // rhombus =====================================================================================
  function onClickrhombus(){
    //dx
    const dx = getInputValuee('Rhombus-dx')
    //dx
    const dy = getInputValuee('Rhombus-dy')
    
    const area = 0.5 * dx * dy
    setElementTextfiled('Rhombus-area', area)
  }

  // pentogon==============================================================================
  function onClickPentagon(){
    const p = getInputValuee('Pentagon-p')
    const b = getInputValuee('Pentagon-b')

    const area = 0.5 * p * b
    setElementTextfiled('Pentagon-area', area)
  }
  // elips =====================================================================
  function onClickEllipse(){
    const a = getInputValuee('Ellipse-a')
    const b = getInputValuee('Ellipse-b')
    const area = 3.1416 * a * b
    setElementTextfiled('Ellipse-area', area)
  }