var decimal_level = 10;
    var counter = 0;
    var adder = 1;
    var base_color = [41, 100, 63];
    var base_piwo_color = [41, 58, 36];
    var piwo_new_color = 'hsl(41, 58%, 36%)';
    function add() {
      counter = counter + adder;
      let points_element = document.getElementById("points");
      points_element.innerHTML = counter;
      check_possible_color_change();
      addPiwo();
    }
    function check_possible_color_change() {
      if (counter >= decimal_level) {
        decimal_level += 1;
        for(var i = 0; i < 3; i++){
          if(base_color[i] - 3 >= 0)base_color[i] -= 0.4;
          if(base_piwo_color[i] - 3 >= 0 ) base_piwo_color[i] -= 0.4;
        }
        //update piwo color value
        piwo_new_color = 'hsl(' + base_piwo_color[0].toString(10) + ', ' + 
          base_piwo_color[1].toString(10) + '%, ' + 
          base_piwo_color[2].toString(10) + '%)'

        //set the updated rgb value as a background color
        document.body.style.backgroundColor =
        'hsl(' + base_color[0].toString(10) + ', ' + 
        base_color[1].toString(10) + '%, ' + 
        base_color[2].toString(10) + '%)';

        //make all the beers darker
        let elements = document.getElementsByClassName('piwo'); 
	      for(var i = 0; i < elements.length; i++){
	    	  elements[i].style.color = piwo_new_color;
      	}
        
      }
    }
    function addPiwo() {
      const max = window.innerWidth - 32;
      const min = 32;
      const elem = document.createElement("div");
      elem.innerHTML =
        "<div class='piwo' style='left:" +
        (Math.random() * (max - min) + min) +
        "px; color:"+ piwo_new_color +"'><i class='fas fa-beer'></i></div>";
      document.body.appendChild(elem);
    }