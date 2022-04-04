var dataset = [19, 7, 9, 5, 16, 19, 13, 13, 8, 5, 7, 6, 7, 20, 18, 16, 6, 14, 11, 22, 11, 17, 17, 8, 22];
      
console.log(dataset.length);

 var gridMax = Math.sqrt(dataset.length);

 var content1 = d3.select("#graph1");
 var content2 = d3.select("#graph2");
 var content3 = d3.select("#graph3");

var myBars = content1.selectAll("a-box.bar")
              .data(dataset)
              .enter()
              .append("a-box")
              .classed("bar", true);

// we use d3's enter/update/exit pattern to draw and bind our dom elements
var myCylinder = content2.selectAll("a-cylinder.cylinder")
               .data(dataset)
               .enter()
               .append("a-cylinder")
               .classed("cylinder", true);
// we set attributes on our cubes to determine how they are rendered

var mySphere = content3.selectAll("a-sphere.sphere")
               .data(dataset)
               .enter()
               .append("a-sphere")
               .classed("sphere", true);

//var x = -dataset.length/2;
//var x = 1;
 var y = 1;
 var z = 1;
 var m = 0;

 myBars.attr({
  position: function(d,i) {
       x=i % gridMax;
       z=Math.floor(i/gridMax);
       y=d/4;
       m ++;
       console.log("Count: " + m + " - " + "x: " + x + " y: " + y + " z: " + z);
       return x + " " + y + " " + z;
       },
   height: function(d){return d/2;},
   width: function(d){return 0.9;},
   depth: function(d){return 0.9;},
   //radius: function(d){return 0.9/2;},
   color: function(d){
     var letters = '0123456789ABCDEF'.split('');
     var color = '#';
     for (var i = 0; i < 6; i++) {
         color += letters[Math.floor(Math.random() * 16)];
     }
     return color;}
 });

myCylinder.attr({
  position: function(d,i) {
       x=i % gridMax;
       z=Math.floor(i/gridMax);
       y=d/4;
       m ++;
       console.log("Count: " + m + " - " + "x: " + x + " y: " + y + " z: " + z);
       return x + " " + y + " " + z;
       },
   height: function(d){return d/2;},
   radius: function(d){return 0.5;},
   //radius: function(d){return 0.9/2;},
   color: function(d){
     var letters = '0123456789ABCDEF'.split('');
     var color = '#';
     for (var i = 0; i < 6; i++) {
         color += letters[Math.floor(Math.random() * 16)];
     }
     return color;}
 });

 mySphere.attr({
  position: function(d,i) {
       x=i % gridMax;
       z=Math.floor(i/gridMax);
       y=(d/2)-0.45;// The -0.45 is the raduis of the spheres therefore the top of the spheres are in the correct lcoation
       m ++;
       console.log("Count: " + m + " - " + "x: " + x + " y: " + y + " z: " + z);
       return x + " " + y + " " + z;
       },
   //height: function(d){return d/2;},
   radius: function(d){return 0.45;},
   //radius: function(d){return 0.9/2;},
   color: function(d){
     var letters = '0123456789ABCDEF'.split('');
     var color = '#';
     for (var i = 0; i < 6; i++) {
         color += letters[Math.floor(Math.random() * 16)];
     }
     return color;} 
    });

    /*
    //These are cylinders to help with debugging (small cylinders under the spheres to localise them)
    var myCylinder2 = content3.selectAll("a-cylinder.cylinder")
               .data(dataset)
               .enter()
               .append("a-cylinder")
               .classed("cylinder", true);

    myCylinder2.attr({
      position: function(d,i) {
           x=i % gridMax;
           z=Math.floor(i/gridMax);
           y=d/4;
           m ++;
           console.log("Count: " + m + " - " + "x: " + x + " y: " + y + " z: " + z);
           return x + " " + y + " " + z;
           },
       height: function(d){return d/2;},
       radius: function(d){return 0.1;},
       //radius: function(d){return 0.9/2;},
       color: function(d){
         var letters = '0123456789ABCDEF'.split('');
         var color = '#';
         for (var i = 0; i < 6; i++) {
             color += letters[Math.floor(Math.random() * 16)];
         }
         //return color="#FFFFFF";}
         return color;}
     });
     */