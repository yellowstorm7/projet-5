window.onload = function() {



var request = new XMLHttpRequest();
request.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        var response = JSON.parse(this.responseText);
        //console.log(response);
        response.forEach((article) => {
        	var articleNode = document.createElement("article");

        		var newId = article["_id"];

        		var myImg = new Image();
				myImg.src = article["imageUrl"];
				/*articleNode.appendChild(myImg);*/
				

				var titleNode = document.createElement("h2");
        		var textnode = document.createTextNode(article['name']);
        		titleNode.appendChild(textnode);
        		articleNode.appendChild(titleNode);
        		
        		var descriptionNode = document.createElement("p");
        		var textnode = document.createTextNode(article['description']);
        		descriptionNode.appendChild(textnode);
        		articleNode.appendChild(descriptionNode);
        
        		var priceNode = document.createElement("div");
        		var textnode = document.createTextNode(article['price']);
        		priceNode.appendChild(textnode);
        		articleNode.appendChild(priceNode);

        		var colorNode = document.createElement("select");
        		var colors = article["colors"];

        		for (var color in colors){
        
        			var option = document.createElement("option");
        			option.text = colors[color]; 
        			colorNode.add(option);
        		}
        		articleNode.appendChild(colorNode);

        	var section = document.getElementsByClassName("catalogue");
        	section[0].appendChild(articleNode);

 	
        });
    }
};
request.open("GET", "http://localhost:3000/api/teddies/"+[newId]);
request.send();

}