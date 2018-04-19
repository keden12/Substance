var app = angular.module('Substance', []);
  app.controller('SubController', function($scope){

$scope.subs = [
	      {
	  	"name": "Orthoclase Feldspar",
	  	"description": "First synthesized in 1962, Rhenium diboride, synthetic superhard material, compared to the others on the list is a cheaper material to make as its production does not involve high pressures.",
	  	"formula": "(ReB2)",
		"rank": 5,
	  	"hard": 72,
	  	"rarity": 7,
	  	"images": [
	  		"images/rhenium.jpg",
	  		"images/rhenium2.jpg",
	  		"images/rhenium3.jpg"
	  	],
	  	"reviews": [{
	  		"body": "I love to play with that ball !",
	  		"author": "noel@gmail.com"
	  	}, {
	  		"body": "It's pretty bad i must say.",
	  		"author": "timster@wit.ie"
	  	}]
	  },   {
	  	"name": "Quartz",
	  	"description": "Quartz is a chemical compound consisting of one part silicon and two parts oxygen. It is silicon dioxide (SiO2). It is the most abundant mineral found at Earth's surface, and its unique properties make it one of the most useful natural substances.",
	  	"formula": "(SiO2)",
		"rank": 4,
	  	"hard": 100,
	  	"rarity": 7,
	  	"images": [
	  		"images/quartz.jpg",
	  		"images/quartz2.jpg",
	  		"images/quartz3.jpg"
	  	],
	  	"reviews": [{
	  		"body": "It's pretty tough to be honest.",
	  		"author": "deanson@wit.ie"
	  	}, {
	  		"body": "I heard there's a lot of quartz beside volcanoes!",
	  		"author": "jimmy@hotmail.com"
	  	}]
	  }, {
	  	"name": "Topaz",
	  	"description": "Topaz is a silicate mineral of aluminium and fluorine with the chemical formula Al2SiO4(F,OH)2. Topaz crystallizes in the orthorhombic system, and its crystals are mostly prismatic terminated by pyramidal and other faces.",
	  	"formula": "(Al2SiO4(OH-,F-)2)",
		"rank": 3,
	  	"hard": 200,
	  	"rarity": 8,
	  	"images": [
	  		"images/topaz.jpg",
	  		"images/topaz2.jpg",
	  		"images/topaz3.jpg"
	  	],
	  	"reviews": [{
	  		"body": "I heard they used them to make alien technology.",
	  		"author": "pegaz@wit.ie"
	  	}, {
	  		"body": "It's pretty solid.",
	  		"author": "LouisW407@wit.ie"
	  	}, {
	  		"body": "Nice gem !!!",
	  		"author": "nater@wit.ie"
	  	}]
	  },   {
	  	"name": "Corundum",
	  	"description": "Corundum is a rock-forming mineral that is found in igneous, metamorphic, and sedimentary rocks. It is an aluminum oxide with a chemical composition of Al2O3 and a hexagonal crystal structure.",
	  	"formula": "(Al2O3)",
		"rank": 2,
	  	"hard": 400,
	  	"rarity": 9,
	  	"images": [
	  		"images/corundum.jpg",
	  		"images/corundum2.jpg",
	  		"images/corundum3.jpg"
	  	],
	  	"reviews": [{
	  		"body": "This is just epic !",
	  		"author": "Hello@wit.ie"
	  	}, {
	  		"body": "Really Strong Substance !!!!",
	  		"author": "LouisW407@wit.ie"
	  	}, {
	  		"body": "I have been working with it. All i can say is that it's just really hard.",
	  		"author": "nater@wit.ie"
	  	}]
		
		
	  },	{
	  	"name": "Diamond",
	  	"description": "Diamond is a metastable allotrope of carbon, where the carbon atoms are arranged in a variation of the face-centered cubic crystal structure called a diamond lattice. Diamond is less stable than graphite, but the conversion rate from diamond to graphite is negligible at standard conditions. Diamond is renowned as a material with superlative physical qualities, most of which originate from the strong covalent bonding between its atoms. In particular, diamond has the highest hardness and thermal conductivity of any bulk material.",
	  	"formula": "(C)",
		"rank": 1,
	  	"hard": 1500,
	  	"rarity": 10,
	  	"images": [
	  		"images/diamond.png",
	  		"images/diamond2.jpg",
	  		"images/diamond3.png"
	  	],
	  	"reviews": [{
	  		"body": "This gem is WAY too expensive for its 'rarity' value.",
	  		"author": "turtleguy@wit.ie"
	  	}, {
	  		"body": "This gem is too cool!",
	  		"author": "Louis@wit.ie"
	  	}, {
	  		"body": "I think it's just overpriced !!!!",
	  		"author": "pegaz07@hotmail.com"
	  	}]
		
	  }];
	  var number = 5;
	 
	 $scope.insertSubstance = function(addsub) {
    
	
		for(var z = 0; z <= $scope.subs.length - 1; z++)
		   {
			if(addsub.rank <= $scope.subs[z].rank)
		   {
			  
           		 $scope.subs[z].rank =  $scope.subs[z].rank + 1;  
			   
		   }
   
			   
		   }
		     
	
	
	
 	 var here1 = $("#img1").val();
	 var here2 = $("#img2").val();
	 var here3 = $("#img3").val();
     var img1 = "images/fot_"+here1+".jpg";
	 var img2 = "images/fot_"+here2+".jpg";
     var img3 = "images/fot_"+here3+".jpg";
	       addsub.images = [];
           addsub.images[0] = img1;
		   addsub.images[1] = img2;
		   addsub.images[2] = img3;
           addsub.reviews = [];
	  	   $scope.subs.push(addsub);
	  	   this.sub = {}; 
		   number = number+1;
		   
		   
		$("#num").html(number);
		   
	  }
	  
	  var count = 0;
	  var rankingsys = 6;
	  count = $scope.subs.length + 1;
	  
	 
$(function(){
    $('.add-form').on('click', function(e){
        e.preventDefault();
        $(this).next('.add-sub-form').show("slow");
        $("#rankingsys").attr('max',rankingsys);
	
	
	});
});


    $("#submiter").click(function(){
        $('.add-sub-form').hide("slow");
		rankingsys=rankingsys + 1;

    });
	  
	  
	  $("#num").html(number);
	  

	  $scope.addReview = function (stone) {
	  	   this.sub.reviews.push(stone);
	  	   this.rev = {};
	  }
  });

  app.controller('TabController', function($scope){
    $scope.tab = 1;

    $scope.setTab = function(newValue){
      $scope.tab = newValue;
    };

   $scope.isSet = function(tabNumber){
      return $scope.tab === tabNumber;
    };
  });