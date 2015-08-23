var group = new Group();

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

                //var group = new Group();

								// As the web is asynchronous, we need to wait for the raster to load
								// before we can perform any operation on its pixels.
								raster.on('load', function() {
									// Since the example image we're using is much too large,
									// and therefore has way too many pixels, lets downsize it to
									// 40 pixels wide and 30 pixels high:
									raster.size = new Size(4, 6);

                  startAnimation();

									for (var y = 0; y < raster.height; y++) {
										for(var x = 0; x < raster.width; x++) {
								      if (y == 0 && x == 0 ) {
								        var text = new PointText(new Point(x, y+0.3) * gridSize);
								        text.content = 'V';
								        text.style = {
								            fontFamily: 'Circular Std',
								            fontWeight: '500',
								            fontSize: 40,
								            fillColor: 'black',
								            justification: 'center'
								        };
								      }
								      else if (y == 1 && x == 1 ) {
								        var text = new PointText(new Point(x, y+0.2) * gridSize);
								        text.content = 'A';
								        text.style = {
								            fontFamily: 'Circular Std',
								            fontWeight: '500',
								            fontSize: 40,
								            fillColor: 'black',
								            justification: 'center'
								        };
								      }
								      else if (y == 2 && x == 0 ) {
								        var text = new PointText(new Point(x, y+0.3) * gridSize);
								        text.content = 'L';
								        text.style = {
                            fontFamily: 'Circular Std',
                            fontWeight: '500',
								            fontSize: 40,
								            fillColor: 'black',
								            justification: 'center'
								        };
								      }
								      else if (y == 3 && x == 2 ) {
								        var text = new PointText(new Point(x, y+0.2) * gridSize);
								        text.content = 'A';
								        text.style = {
                            fontFamily: 'Circular Std',
                            fontWeight: '500',
								            fontSize: 40,
								            fillColor: 'black',
								            justification: 'center'
								        };
								      }
								      else if (y == 4 && x == 1 ) {
								        var text = new PointText(new Point(x, y+0.3) * gridSize);
								        text.content = 'N';
								        text.style = {
                            fontFamily: 'Circular Std',
                            fontWeight: '500',
								            fontSize: 40,
								            fillColor: 'black',
								            justification: 'center'
								        };
								      }
								      else if (y == 5 && x == 3 ) {
								        var text = new PointText(new Point(x, y+0.3) * gridSize);
								        text.content = 'D';
								        text.style = {
                            fontFamily: 'Circular Std',
                            fontWeight: '500',
								            fontSize: 40,
								            fillColor: 'black',
								            justification: 'center'
								        };
								      }
											else if (y == 0) {
												// Get the color of the pixel:
								  			var color = raster.getPixel(x, y);

												var triangle = new Path.RegularPolygon(new Point(x, y) * gridSize, 3, 25);
												triangle.rotate(180);
												// and its center
												//triangle.center = new Point(x, y) * gridSize;
												// var path = new Path.Rectangle(rect);
								  			triangle.fillColor = color;
                        group.addChild(triangle);
											}
											else if (y == 1 || y == 3) {
												// Get the color of the pixel:
								  			var color = raster.getPixel(x, y);

												var triangle = new Path.RegularPolygon(new Point(x, y+0.2) * gridSize, 3, 25);

												// and its center
												//triangle.center = new Point(x, y) * gridSize;
												// var path = new Path.Rectangle(rect);
								  			triangle.fillColor = color;
                        group.addChild(triangle);
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
                        group.addChild(path);
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
                        group.addChild(path);
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
                        group.addChild(path);
								      }
										}
									}

                  for (var i = 0; i < group.children.length; i++) {
                    group.children[i].scale(0.01);
                  }

                  // group.children[15].scale(0.1);
                  // group.children[16].scale(0.1);
                  // group.children[17].scale(0.1);
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

function startAnimation()
{
    paper.view.attach('frame', animation);
    console.log("first animation start");
}

function animation(event) {
  // the number of times the frame event was fired:
  console.log(event.count);

  // The total amount of time passed since
  // the first frame event in seconds:
  //console.log(event.time);

  // The time passed in seconds since the last frame event:
  //console.log(event.delta);

  if (event.count < 38) {
    for (var i = 0; i < group.children.length; i++) {
      //console.log(group.length);
      group.children[i].rotate(10);
      group.children[i].scale(1.128);
    }
  }
  else if (event.count > 38 && event.count < 41) {
    for (var i = 0; i < group.children.length; i++) {
      //console.log(group.length);
      group.children[i].rotate(-10);
    }
  }
  else if (event.count > 41) {
    for (var i = 0; i < group.children.length; i++) {
      //console.log(group.length);
      group.children[i].rotate(0);
    }
    paper.view.detach('frame', animation);
  }
}


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
