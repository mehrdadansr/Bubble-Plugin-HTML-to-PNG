function(instance, context) {
	instance.data.divName = "id"+Math.round(Math.random()*1000000) + 1;
    var newDiv = $('<div id="'+instance.data.divName+'"></div>');
    instance.canvas.append(newDiv);
	newDiv.css("width", "100%");
	newDiv.css("height", "100%");
    var cani = instance.canvas[0];
    cani.style.display = "none";    
}