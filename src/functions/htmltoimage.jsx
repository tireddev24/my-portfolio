import html2canvas  from 'html2canvas'


function handleSaveImage () {
    const element = document.getElementById('image')
    html2canvas(element).then(canvas => {
      const dataURL = canvas.toDataURL()
      const link = document.createElement('a')
      link.href = dataURL
      link.download = 'image.png'
      link.click()
    })}

    console.log(handleSaveImage)