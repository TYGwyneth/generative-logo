$("#fileUpload").on('change', function () {

        if (typeof (FileReader) != "undefined") {
            // var image_holder = $("#image-holder");
            // image_holder.empty();
						//
            var reader = new FileReader();
            reader.onload = function (e) {

								// Create a raster item using the image tag with id='mona'
								var raster = new Raster(e.target.result);

								// Hide the raster:
								raster.visible = false;

								// The size of our grid cells:
								var gridSize = 50;

								// Space the cells by 120%:
								var spacing = 1.2;

								// As the web is asynchronous, we need to wait for the raster to load
								// before we can perform any operation on its pixels.
								raster.on('load', function() {
									// Since the example image we're using is much too large,
									// and therefore has way too many pixels, lets downsize it to
									// 40 pixels wide and 30 pixels high:
									raster.size = new Size(4, 6);

									for (var y = 0; y < raster.height; y++) {
										for(var x = 0; x < raster.width; x++) {
								      if (y == 0 && x == 0 ) {
								        var text = new PointText(new Point(x, y+0.2) * gridSize);
								        text.content = 'V';
								        text.style = {
								            fontFamily: 'Futura',
								            fontWeight: 'bold',
								            fontSize: 36,
								            fillColor: 'black',
								            justification: 'center'
								        };
								      }
								      else if (y == 1 && x == 1 ) {
								        var text = new PointText(new Point(x, y+0.2) * gridSize);
								        text.content = 'A';
								        text.style = {
								            fontFamily: 'Futura',
								            fontWeight: 'bold',
								            fontSize: 36,
								            fillColor: 'black',
								            justification: 'center'
								        };
								      }
								      else if (y == 2 && x == 0 ) {
								        var text = new PointText(new Point(x, y+0.2) * gridSize);
								        text.content = 'L';
								        text.style = {
								            fontFamily: 'Arial',
								            fontWeight: 'bold',
								            fontSize: 36,
								            fillColor: 'black',
								            justification: 'center'
								        };
								      }
								      else if (y == 3 && x == 2 ) {
								        var text = new PointText(new Point(x, y+0.2) * gridSize);
								        text.content = 'A';
								        text.style = {
								            fontFamily: 'Arial',
								            fontWeight: 'bold',
								            fontSize: 36,
								            fillColor: 'black',
								            justification: 'center'
								        };
								      }
								      else if (y == 4 && x == 1 ) {
								        var text = new PointText(new Point(x, y+0.2) * gridSize);
								        text.content = 'N';
								        text.style = {
								            fontFamily: 'Arial',
								            fontWeight: 'bold',
								            fontSize: 36,
								            fillColor: 'black',
								            justification: 'center'
								        };
								      }
								      else if (y == 5 && x == 3 ) {
								        var text = new PointText(new Point(x, y+0.2) * gridSize);
								        text.content = 'D';
								        text.style = {
								            fontFamily: 'Arial',
								            fontWeight: 'bold',
								            fontSize: 36,
								            fillColor: 'black',
								            justification: 'center'
								        };
								      }
											else if (y == 0) {
												// Get the color of the pixel:
								  			var color = raster.getPixel(x, y);

												var triangle = new Path.RegularPolygon(new Point(x, y+0.1) * gridSize, 3, 25);
												triangle.rotate(180);
												// and its center
												//triangle.center = new Point(x, y) * gridSize;
												// var path = new Path.Rectangle(rect);
								  			triangle.fillColor = color;

											}
											else if (y == 1 || y == 3) {
												// Get the color of the pixel:
								  			var color = raster.getPixel(x, y);

												var triangle = new Path.RegularPolygon(new Point(x, y+0.1) * gridSize, 3, 25);

												// and its center
												//triangle.center = new Point(x, y) * gridSize;
												// var path = new Path.Rectangle(rect);
								  			triangle.fillColor = color;

											}
											else if (y == 2) {
												// Get the color of the pixel:
								  			var color = raster.getPixel(x, y);

												// We start by creating a rectangle of dimension and
												// location set to 0
												var rect = new Rectangle();

												// Now we can for example define its size...
												rect.size = new Size(40, 40);

												// and its center
												rect.center = new Point(x, y) * gridSize;
												var path = new Path.Rectangle(rect);
								  			path.fillColor = color;

											}
											else if (y == 4) {
												// Get the color of the pixel:
								  			var color = raster.getPixel(x, y);

												// We start by creating a rectangle of dimension and
												// location set to 0
												var rect = new Rectangle();

												// Now we can for example define its size...
												rect.size = new Size(40, 40);

												// and its center
												rect.center = new Point(x, y) * gridSize;
												var path = new Path.Rectangle(rect);
								  			path.fillColor = color;

											}
								      else {

								        // Get the color of the pixel:
								  			var color = raster.getPixel(x, y);

								  			// Create a circle shaped path:
								  			var path = new Path.Circle({
								  				center: new Point(x, y) * gridSize,
								  				radius: gridSize / 2 / spacing
								  			});

								  			// Set the fill color of the path to the color
								  			// of the pixel:
								  			path.fillColor = color;

								      }
										}
									}

									// Move the active layer to the center of the view, so all
									// the created paths in it appear centered.
									project.activeLayer.position = view.center;
									//downloadAsSVG();
                  // var svg = encodeURIComponent(paper.project.exportSVG({asString:true}));
                  // var blob = new Blob([svg], {type: "image/svg+xml;charset=utf-8"});
                  // saveAs(blob, 'image.svg');
								});

								// Move the active layer to the center of the view:
								project.activeLayer.position = view.center;
            }
            // image_holder.show();
            reader.readAsDataURL($(this)[0].files[0]);
        } else {
            alert("This browser does not support FileReader.");
        }
    });
//*

$("#save").click(function(){
  downloadAsSVG();
});

var downloadAsSVG = function (fileName) {

   if(!fileName) {
       fileName = "paperjs_example.svg"
   }

   var url = "data:image/svg+xml;utf8," + encodeURIComponent(paper.project.exportSVG({asString:true}));

   var link = document.createElement("a");
   link.download = fileName;
   link.href = url;
   link.click();
}

// function Download(url) {
//   console.log("hej");
//     document.getElementById('my_iframe').src = url;
// };
