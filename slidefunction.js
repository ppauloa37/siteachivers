//github site to khana academy
/* html code 
<!doctype html>
<html>
<head>
<title>example</title>
<meta charset="utf-8">
</head>
<body>
hello word
</body>
</html>
^
|
|
structure site
*/
    var nextSlide = function() {
        for (var i = 0; i < this.images.length; i++) {
            this.images[i].style.display = "none";
        }
        this.images[this.curImage].style.display = "block";
        this.curImage++;
        if (this.curImage >= this.images.length) {
            this.curImage = 0;
        }
        window.setTimeout(nextSlide.bind(this), 1000);
    };
    
    nextSlide.call(this);
};
slideShow(document.getElementById("slideshow"));
