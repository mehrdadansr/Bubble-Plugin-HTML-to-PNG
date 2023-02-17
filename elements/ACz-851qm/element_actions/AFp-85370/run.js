function(instance, properties, context) {

      //Load any data 

        const htmlId = properties.htmlid;
    const quality = properties.image_qu;
    
      //Do the operation

    html2canvas(document.getElementById(htmlId), {
  allowTaint: true,
  useCORS: true,
})
.then(function (canvas) {
  // It will return a canvas element
  instance.publishState("image", canvas.toDataURL("image/png", quality));
	instance.triggerEvent("imageTaken");
    })
.catch((e) => {
  // Handle errors
  console.log(e);
});





}