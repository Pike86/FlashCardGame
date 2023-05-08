//===============
//ADMIN FUNCTIONS
//===============	

	//-----------------------
	//Random Number Generator
	//-----------------------
	function getRandomInt(min, max)
	{
		return Math.floor(Math.random() * (max - min)) + min;
	}



//==============
//FLIP FUNCTIONS
//==============

	//---------------------
	//Function to Flip Card
	//---------------------
	function flipIt()
	{
	document.getElementById("flip-box-inner").style.transform="rotateY(-180deg)";
	}
	
	//---------------------
	//Function to Flip Back
	//---------------------
	//All that this does is make the inner go back to normal (i.e. stand directly in front of the back, conveying the sense that the two are flipping
	function flipItBack()
	{
	document.getElementById("flip-box-inner").style.transform="";
	}
	
	
	//---------
	//Card Deck
	//---------
	var cardSet = 0;
	function selectDeck()
	{
		if(deckSelection.value=="JavaScript")
		{
			cardSet=0;
			deckSelection.style.background="blue";
			deckSelection.style.color="white";
		}
		else if(deckSelection.value=="Chemistry")
		{
			cardSet=1;
			deckSelection.style.background="green";
			deckSelection.style.color="white";
		}
		else if(deckSelection.value=="ComputerScience")
		{
			cardSet=2;
			deckSelection.style.background="purple";
			deckSelection.style.color="white";
		}
		else if(deckSelection.value=="Electricity")
		{
			cardSet=3;
			deckSelection.style.background="darkorange";
			deckSelection.style.color="white";
		}
		else if(deckSelection.value=="Git")
		{
			cardSet=6;
			deckSelection.style.background="darkgreen";
			deckSelection.style.color="white";
		}
		fisherYatesShuffleCards();
	}
	//------------
	//Fisher Yates
	//------------
	function fisherYatesShuffleCards()
	{
		for (z = cards[cardSet].length -1; z > 0; z--) 
		{
		  j = Math.floor(Math.random() * z)
		  k = cards[cardSet][z]
		  cards[cardSet][z] = cards[cardSet][j]
		  cards[cardSet][j] = k
		}
		cardCounter=-1;
		drawCard();
	}
	
	//---------
	//Draw Card
	//---------
	var cardCounter=-1;
	function drawCard()
	{
		cardCounter++;
		document.getElementById("theQuestionPrompt").innerHTML=cards[cardSet][cardCounter].Prompt;
		document.getElementById("theResponse").innerHTML=cards[cardSet][cardCounter].Response;
		document.getElementById("theURL").href=cards[cardSet][cardCounter].URL;
	}
	
	
//==================
//SCORE CALCULATIONS
//==================

	//-------
	//Correct
	//-------
	var totalAnswered = 0;
	var totalCorrect = 0;
	var totalIncorrect = 0;
	var percentCorrect = 0;
	var percentIncorrect = 0;
	function result(response)
	{
		var theResponse = response;
		totalAnswered++;
		if(theResponse == 0)
		{
			totalCorrect++;
			document.getElementById("totalCorrect").innerHTML=totalCorrect;
		}
		else if(theResponse == 1)
		{
			totalIncorrect++;
			document.getElementById("totalIncorrect").innerHTML=totalIncorrect;
		}
		percentCorrect = (totalCorrect/totalAnswered);
		percentIncorrect = (totalIncorrect/totalAnswered);
		document.getElementById("percentCorrect").innerHTML = (percentCorrect.toFixed(2)*100) + "%";
		document.getElementById("percentIncorrect").innerHTML = (percentIncorrect.toFixed(2)*100) + "%";
	}
	
//=====
//CARDS
//=====

	//-----
	//Cards
	//-----
	var cards = 
	[
		//cards[0] = JavaScript Cards
		[
		
		  {
			ID: 1,
			Prompt: "What is the HTML DOM?",
			Response: "The <b>D</b>ocument <b>O</b>bject <b>M</b>odel. It's construed as a tree of objects.<br><br>"+
			"The DOM is a W3C (World Wide Web Consortium) Standard.<br><br>"+
			"It is a platform and language-neutral interface that allows programs and scripts to dynamically access and update the content, structure, and style of a document.",
			URL: "https://www.w3schools.com/js/js_htmldom.asp"
		  },
		  {
			ID: 2,
			Prompt: "This platform and language-neutral interface allows programs and scripts to dynamically access and update the content, structure, and style of a document.",
			Response: "What is the HTML DOM?",
			URL: "https://www.w3schools.com/js/js_htmldom.asp"
		  },
		  {
			ID: 3,
			Prompt: "What is a '<b>Property</b>' in the context of the HTML DOM?",
			Response: "A <b>property</b> is a value that you can 'get' or 'set' (such as changing the content of an HTML element).",
			URL: "https://www.w3schools.com/js/js_htmldom_methods.asp"
		  },
		  {
			ID: 4,
			Prompt: "What <b>is</b> 'getElementById'?",
			Response: "'getElementById' is a <b>method</b> through which to find an element by element id. i.e. It is an 'action' in the DOM Programming interface.",
			URL: "https://www.w3schools.com/js/js_htmldom_methods.asp"
		  },
		  {
			ID: 5,
			Prompt: "What is a '<b>Method</b>' in the context of the HTML DOM?",
			Response: "A <b>method</b> is an action that you can take (such as adding or deleting an HTML element).",
			URL: "https://www.w3schools.com/js/js_htmldom_methods.asp"
		  },
		  {
			ID: 6,
			Prompt: "What <b>is</b> 'innerHTML'?",
			Response: "'innerHTML' is a <b>property</b>. i.e. It is used to 'get'/'replace' the content of HTML elements in the DOM Programming interface.",
			URL: "https://www.w3schools.com/js/js_htmldom_methods.asp"
		  },
		  {
			ID:7,
			Prompt:
			"<b>DOM Method Puzzle</b>"+
			"<ol>"+
			"<li>Method for Finding an Element By Element ID</li>"+
			"<li>Method for Finding Elements By Tag Name</li>"+
			"<li>Method for Finding Elements By Class Name</li>"+
			"</ol>",
			Response:
			"<b>Solutions</b>"+
			"<ol>"+
			"<li>document.getElementById('id')</li>"+
			"<li>document.getElementsByTagName('name')</li>"+
			"<li>document.getElementsByClassName('name')</li>"+
			"</ol>",
			URL:"https://www.w3schools.com/js/js_htmldom_document.asp"
		  },
		   {
			ID:8,
			Prompt:
			"<b>Adding and Deleting Elements</b>"+
			"<ol>"+
			"<li>Method to <b>Create</b> an HTML Element</li>"+
			"<li>Method to <b>Remove</b> an HTML Element</li>"+
			"<li>Method to <b>Add</b> an HTML Element</li>"+
			"<li>Method to <b>Replace</b> an HTML Element</li>"+
			"<li>Method to <b>Wirte</b> into the HTML Output Stream</li>"+
			"</ol>",
			Response:
			"<b>Adding and Deleting Elements</b>"+
			"<ol>"+
			//First Bullet
			"<li>Method to <b>Create</b> an HTML Element</li>"+
				"<ul>"+
					"<li>document.createElement(element)</li>"+
				"</ul>"+
			//Second Bullet
			"<li>Method to <b>Remove</b> an HTML Element</li>"+
				"<ul>"+
					"<li>document.removeChild(element)</li>"+
				"</ul>"+
			//Third Bullet
			"<li>Method to <b>Add</b> an HTML Element</li>"+
				"<ul>"+
					"<li>document.appendChild(element)</li>"+
				"</ul>"+
			//Fourth Bullet
			"<li>Method to <b>Replace</b> an HTML Element</li>"+
				"<ul>"+
					"<li>document.replaceChild(element)</li>"+
				"</ul>"+
			//Fifth Bullet
			"<li>Method to <b>Wirte</b> into the HTML Output Stream</li>"+
				"<ul>"+
					"<li>document.write(text)</li>"+
				"</ul>"+
			"</ol>",
			URL:"https://www.w3schools.com/js/js_htmldom_document.asp"
		  },
		   {
			ID: 9,
			Prompt: "Describe how to use the document.getElementsByTagName method.",
			Response: "You can create a variable and equate it to 'document.getElementsByTagName(<i>list the tag here, such as p or h1</i>)', then call the variable and populate the array number. (ex. const element = document.getElementsByTagName('p'); element[1].innerHTML)",
			URL: "https://www.w3schools.com/js/tryit.asp?filename=tryjs_dom_getelementsbytagname2"
		  },
		   {
			ID: 10,
			Prompt: "Use the HTML DOM to replace the src of 'image' with 'pic_mountain.jpg'.",
			Response: "document.getElementById('image').src='pic_mountain.jpg",
			URL: "https://www.w3schools.com/js/js_htmldom_html.asp"
		  },
		   {
			ID: 11,
			Prompt: "Create a variable called x, and then add an even listener that fires a function on mouse over, on click, and on mouse out.",
			Response: 
			"var x = document.getElementById('myBtn');"+
			"x.addEventListener('mouseover', myFunction);"+
			"x.addEventListener('click', mySecondFunction);"+
			"x.addEventListener('mouseout', myThirdFunction);"+
			"<br>"+
			"function myFunction() {"+
			  "document.getElementById('demo').innerHTML += 'Moused over!<br>';"+
			"}"+
			"function mySecondFunction() {"+
			  "document.getElementById('demo').innerHTML += 'Clicked!<br>'"+
			"}"+

			"function myThirdFunction() {"+
			  "document.getElementById('demo').innerHTML += 'Moused out!<br>'"+
			"}",
			URL: "https://www.w3schools.com/js/tryit.asp?filename=tryjs_addeventlistener_add_many2"
		  },
		  {
			ID: 12,
			Prompt: "What is a JavaScript Callback?",
			Response: "A JS Callback is a function passed as an argument to another function. Just remember not to include the parenthesis when passing the function as an argument."+
			"Right: myCalculator(5,5,myDisplayer)"+
			"Wrong: myCalculator(5,5,myDisplayer());",
			URL: "https://www.w3schools.com/js/js_callback.asp"
		  },
		   {
			ID: 13,
			Prompt: "What is JSON?",
			Response: "JavaScript Object Notation. It is plain text written in JavaScript object notation and is used to send data between computers."+
			"JSON syntax is derived from JS object notation, but the JSON format is text only. Code for <b>reading</b> JSON exists in many programming languages.",
			URL: "https://www.w3schools.com/js/js_json_intro.asp"
		  },
		  {
		  ID:14,
		  Prompt: "What is the purpose of JSON.parse()?",
		  Response: "JSON.pares() is a built in JavaScript function for converting JSON strings into JavaScript objects.",
		  URL: "https://www.w3schools.com/js/js_json_intro.asp"
		  },
		  {
		  ID:15,
		  Prompt: "What is the purpose of JSON.stringify()?",
		  Response: "JSON.stringify() is a built in JavaScript function for converting an object into a JSON string.",
		  URL: "https://www.w3schools.com/js/js_json_intro.asp"
		  },
		  {
		  ID:16,
		  Prompt: "What are the four key JSON sytax rules?",
		  Response: 
		  "JSON syntax is derived from JavaScript object notation syntax:"+
		  "<ul>"+
		  "<li>Data is in name/value pairs</li>"+
		  "<li>Data is separated by commas</li>"+
		  "<li>Curly braces hold objects</li>"+
		  "<li>Square brackets hold arrays</li>"+
		  "</ul>",
		  URL: "https://www.w3schools.com/js/js_json_intro.asp"
		  },
		  {
		  ID:17,
		  Prompt: "What qualifies as an 'Object' in JavaScript?",
		  Response:"In JavaScript, almost <b>everything</b> is an object."+
			"<ul>"+
				"<li>Booleans can be objects (if defined with the new keyword)</li>"+
				"<li>Numbers can be objects (if defined with the new keyword)</li>"+
				"<li>Strings can be objects (if defined with the new keyword)</li>"+
				"<li>Dates are always objects</li>"+
				"<li>Maths are always objects</li>"+
				"<li>Regular expressions are always objects</li>"+
				"<li>Arrays are always objects</li>"+
				"<li>Functions are always objects</li>"+
				"<li>Objects are always objects</li>"+
				"<li>All JavaScript values, except primitives, are objects.</li>"+
			"</ul>",
		  URL: "https://www.w3schools.com/js/js_object_definition.asp",
		  },
		  {
		  ID:18,
		  Prompt:"Create an 'Object Literal' called 'person', for which you record the first and last name, the age, and the eye color.",
		  Response: "let person = {firstName:'Andy', lastName:'Pike', age:36, eyeColor:'brown'}"+
		  "document.getElementById('demo').innerHTML = person.firstName + ' ' + person.lastName;",
		  URL:"https://www.w3schools.com/js/tryit.asp?filename=tryjs_object_object"
		  },
		  {
		  ID:19,
		  Prompt:"What are the four methods of creating JavaScript Objects?",
		  Response:"<ul>"+
						"<li>Create a single object, using an object literal.</li>"+
						"<li>Create a single object, with the keyword new.</li>"+
						"<li>Define an object constructor, and then create objects of the constructed type.</li>"+
						"<li>Create an object using Object.create().</li>"+
					"</ul>",
		  URL:"https://www.w3schools.com/js/js_object_definition.asp"
		  },
		  {
		  ID:20,
		  Prompt:"Create an object using the <br>keyword new</br> method called 'person', for which you record the first and last name, the age, and the eye color.",
		  Response: "<ul>"+
			"<li>const person = new Object();</li>"+
			"<li>person.firstName = 'John';</li>"+
			"<li>person.lastName = 'Doe';</li>"+
			"<li>person.age = 50;</li>"+
			"<li>person.eyeColor = 'blue';</li>"+
			"</ul>",
		  URL:"https://www.w3schools.com/js/tryit.asp?filename=tryjs_object_object"
		  },
		  {
		  ID:21,
		  Prompt:"What does it mean to be 'mutable'?",
		  Response: "A mutable value is one that can be changed without creating an entirely new value. In JS, objects and arrays are mutable by default, but primitive values are not. Once primitive value is created, it cannot be changed, although the variable that holds such value may be reassigned."
		  },
		  {
		  ID:22,
		  Prompt:"What is the function of the 'Object.values()' method?",
		  Response:"It converts an object to an array."+
		  "document.getElementById('demo').innerHTML = Object.values(person)"+
		  "Result: 'John,30,New York'"
		  },
		  {
		  ID:23,
		  Prompt:"What type of loop should be used to iterate over elements of a string?",
		  Response:"Use a <b>for..of</b> loop",
		  },
		  {
		  ID:24,
		  Prompt:"How do you use template literals?",
		  Response:"Use backticks (`), and then place any variables in the '${x}' format. See URL Link below. <b>Ex</b> `<li>${x}</li>`",
		  URL:"https://www.w3schools.com/JS//js_string_templates.asp"
		  }
		],
		
		//cards[1] = Chemistry Cards
		[
			{
			ID: 1,
			Prompt: "H",
			Response: "Hydrogen",
			URL: "https://www.w3schools.com/js/js_htmldom.asp"
		  },
		  {
			ID: 2,
			Prompt: "He",
			Response: "Helium",
			URL: "https://www.w3schools.com/js/js_htmldom.asp"
		  },
		],
		
		//cards[2] = Computer Science
		[
			{
			ID: 1,
			Prompt: "NAND Gate",
			Response: "A 'NOT-AND' or 'NAND' gate is a logic gate which produces an output which is false only if all of its inputs are true.",
			URL: "https://en.wikipedia.org/wiki/NAND_gate"
			},
			{
			ID: 2,
			Prompt: "De Morgan's Laws",
			Response: "A paire of transformation rules that are both valid rules of inference. Named after Augustus De Morgan, a 19th Century British mathmetician."+
			"<ul>"+
			"<li>The negation of a disjunction is the conjunction of the negations</li>"+
			"<li>The negation of a conjunction is the disjunction of the negations</li>"+
			"</ul>",
			URL:"https://en.wikipedia.org/wiki/De_Morgan%27s_laws"
			},
			{
			ID: 3,
			Prompt: "What is a 'bit', in the context of computer science?",
			Response: "A 'bit' is the most basic unit of information and digital communications. The name is a 'portmanteau' of <b>binary digit</b>",
			URL:"https://en.wikipedia.org/wiki/Bit"
			},
			{
			ID: 4,
			Prompt: "What is a 'transistor', in the context of computer science?",
			Response: "A tiny physical device taht acts like a digital switch in computers. <b>The transistor turns 'on' when 'enough' electricity flows through, and otherwise remains 'off'.</b> The determination as to what classifies as 'on' or 'off' is determined by the threshold voltage of the transistor.",
			},
			{
			ID: 5,
			Prompt: "Mouse USB Plugin Scenario/Illustration",
			Response: "Consider a computer that needs to determine whether a USB cable is plugged in. When you plug the cable of a mouse in the computer's USB port, circuitry in the mouse uses the voltage provided by the port to pull up the voltage in the cable above 3.3 volts. Inside the computer, a transistor detects the high voltage and translates it to 'on' or '1'. This bit of information tells your computer that a USB device is plugged into the port."+
			"In this case, engineers used a transistor with the threshold voltage of 3.3 volts for the 'on' state, and the 0.3 volts for the 'off' state.",
			},
			{
			ID: 6,
			Prompt: "How large are typical computer transistors?",
			Response: "The transistors inside your computer are so small, we would need a high powered microsoft to see them. Some transistors serving other functions, however, are sufficiently large that you could pick them up with your hand.",
			},
			{
			ID: 7,
			Prompt: "What is an 'Inverter', nor 'NOT Gate'?",
			Response: "An Inverter is a logic gate which implements 'logical negation'. It outputs a bit opposite of the bit that is put into it. The bits are typically implemented as two differing voltage levels."
			},
			{
			ID: 8,
			Prompt: "What is a 'Logic Circuit'?",
			Response: "Computers often chain logic gates together, by taking the output from one gate and using it as the input for another. We call that a <b>Logic Circuit</b>.",
			},
		],
		
		//cards[3] = Electricity
		[
			{
			ID: 1,
			Prompt: "What is an electromagnet?",
			Response: "An electromagnet is a type of magnet in which the magnetic field is produced by an elertric current. Electromagnets typically consist of wire wound into a coil.",
			URL: "https://en.wikipedia.org/wiki/Electromagnet",
			},
			{
			ID: 2,
			Prompt: "What did Michael Faraday discover?",
			Response: "He disovered that <b>moving</b> sources of a magnetic field - such as a dropped electrified coil of wire or a rotating magnet - can generate electricity in place of a chemical battery.",
			URL:"https://en.wikipedia.org/wiki/Faraday%27s_law_of_induction",
			},
		],
		
		//cards[4] = Azure Fundamentals
		[
		
			{
			ID:1,
			Prompt: "What is cloud computing",
			Response: "Cloud computing is the delivery of computing services over the internet. Computing services include common IT infrastructure such as virtual machines, storage, databases, and networking."
			},
			{
			ID:2,
			Prompt: "What is the 'shared responsibility model'?",
			Response: 
			"<ul>"+
			"<li>The following responsibilities are divided between the consumer and the vendor:</li>"+
			"<li>Information and data</li>"+
			"<li>Devices (Mobile and PCs)</li>"+
			"<li>Accounts and identities</li>"+
			"<li>Identity and directory infrastructure</li>"+
			"<li>Applications</li>"+
			"<li>Network controls</li>"+
			"<li>Operating system</li>"+
			"<li>Physical hosts</li>"+
			"<li>Physical network</li>"+
			"<li>Physical datacenter</li>"+
			"</ul>"
			},
			{
			ID:3,
			Prompt:"For what activities will the consumer always be responsible, regardless of service model?",
			Response:
			"<ul>"+
			"<li>You'll always be responsible for:</li>"+
			"<li>The information and data stored in the cloud</li>"+
			"<li>Devices that are allowed to connect to your cloud (cell phones, computers, and so on)</li>"+
			"<li>The accounts and identities of people, services, and devices within your organization.</li>"+
			"</ul>"
			},
			{
			ID:4,
			Prompt:"For what activities will the <b>cloud vendor</b> always be responsible, regardless of service model?",
			Response:
			"<ul>"+
			"<li>The cloud provider will always be responsible for:</li>"+
			"<li>The physical datacenter</li>"+
			"<li>The physical network</li>"+
			"<li>The physical hosts.</li>"+
			"</ul>"
			},
			{
			ID:5,
			Prompt:"What responsibilities will vary, depending on the cloud service model?",
			Response:
			"<ul>"+
			"<li>Your service model will determine responsibility for things like:</li>"+
			"<li>Operating systems</li>"+
			"<li>Network controls</li>"+
			"<li>Applications</li>"+
			"<li>Identity and infrastructure</li>"+
			"</ul>",
			},
			{
			ID:6,
			Prompt:"What is a <b>Private Cloud</b>?",
			Response:
			"A private cloud is effectively a natural evolution from a corporate datacenter. it's a cloud (delivering IT services over the internet) taht is used only by a single entity. Private cloud provides much greater control for the company and its IT department. It comes with greater cost and fewer benefits, relative to public cloud deployment. It may be hosted from an on site datacenter. It may also be hosted in a dedicated datacenter offsite, potentially by a third party.",
			},
			{
			ID:7,
			Prompt:"What is a <b>Public Cloud</b>?",
			Response:
			"A public cloud is built, controlled, and maintained by a third-party cloud provider. With a public cloud, anyone that wants to purchase cloud services can access and use such resources. The general public availability is a key difference between public and private clouds.",
			},
			{
			ID:8,
			Prompt:"What is a <b>Hybrid Cloud</b>?",
			Response:
			"A hybrid cloud is a computing environment that uses boht public and private clouds in an inter-connected environment. A hybrid environment can be used to allow a private cloud to surge for increased, temporary demand by deploying public cloud resources. Hybrid cloud can be used to private an extra layer of security. (For example, users can flexibility choose which services to keep in the <u>public</u> cloud and which to deploy to their <u>private</u> cloud infrastructure.",
			},
			{
			ID:9,
			Prompt:"What is Azure Arc?",
			Response:
			"Azure Arc is a set of technologies that helps manage your cloud environment. Azure Arc can help manage your cloud environment, whether it's a public cloud on Azure, a private cloud in your datacenter, a hybrid config, or even a multi-cloud environment.",
			},
			{
			ID:10,
			Prompt:"What is Azure VMware Solution?",
			Response:
			"Azure VMware Solution allows you to run your VMware workloads in Azure with seamless integration and scalability.",
			},
			{
			ID:11,
			Prompt:"What is a Service Level Agreement (SLA)",
			Response:"The agreement between the service provider and the customer. in the context of cloud computing services, such SLAs address availability and scalability.",
			},
			{
			ID:12,
			Prompt:"What distinguishes 'Vertical Scaling' from 'Horizontal Scaling'?",
			Response:"<b>Vertical Scaling</b> is the ability to raise or lower processing power by adding/removing CPUs or RAM to the virtual machine.<br><br><Horizontal Scaling</b> is the ability to expand the number of virtual machines or containers (either automatically or manually)",
			},
			{
			ID:13,
			Prompt:"What is <b>Management <i>of</i> the Cloud</b>?",
			Response:"Management <b>of</b> the cloud speaks to managing your cloud resoruces. In the cloud, you can:"+
			"<ul>"+
			"<li>Automatically scale resource deployment based on need.</li>"+
			"<li>Deploy resources based on a preconfigured template, removing the need for manual configuration.</li>"+
			"<li>Monitor the health of resources and automatically replace failing resources.</li>"+
			"<li>Receive automatic alerts based on configured metrics, so you’re aware of performance in real time.</li>"+
			"</ul>"
			},
			{
			ID:14,
			Prompt:"What is <b>Management <i>in</i> the Cloud</b>?",
			Response:"Management <b>in</b> the cloud speaks to how you're able to manage your cloud environment and resources. You can manage those:"+
			"<ul>"+
			"<li>Through a web portal.</li>"+
			"<li>Using a command line interface.</li>"+
			"<li>Using APIs.</li>"+
			"<li>Using PowerShell.</li>"+
			"</ul>"
			},
			
			
		],
		//cards[6] = AI
		[
			{
			ID:1,
			Prompt:"What is AI?",
			Response:"AI is the creation of software that imitates human behaviors and capabilities. Key workloads include:"+
			"<ul>"+
			"<li>Machine learning - This is often the foundation for an AI system, and is the way we 'teach' a computer model to make prediction and draw conclusions from data.</li>"+
			"<li>Anomaly detection - The capability to automatically detect errors or unusual activity in a system.</li>"+
			"<li>Computer vision - The capability of software to interpret the world visually through cameras, video, and images.</li>"+
			"<li>Natural language processing - The capability for a computer to interpret written or spoken language, and respond in kind.</li>"+
			"<li>Knowledge mining - The capability to extract information from large volumes of often unstructured data to create a searchable knowledge store.</li>"+
			"</ul>"
			},
			{
			ID:2,
			Prompt:"What is the <b>Anomaly Detector</b> in Microsoft Azure?",
			Response:"The Anomaly Detected services provides an API that developers can use to create anomaly detection solutions."
			},
			{
			ID:3,
			Prompt:"What is the <b>Seeing AI</b> app?",
			Response: "An exmample of computer vision; experimental Microsoft app."
			},
			{
			ID:4,
			Prompt:"Describe the four computer vision services in Microsoft Azure",
			Response:
			"<ul>"+
			"<li><b>Computer Vision</b> - You can use this service to analyze images and video, and extract descriptions, tags, objects, and text.</li>"+
			"<li><b>Custom Vision</b> - Use this service to train custom image classification and object detection models using your own images.</li>"+
			"<li><b>Face</b> - The Face service enables you to build face detection and facial recognition solutions. </li>"+
			"<li><b>Form Recognizer</b> - Use this service to extract information from scanned forms and invoices.</li>"+
			"</ul>"
			},
		],
		
		//cards[7] = Git
		[
			{
			ID:1,
			Prompt:"This git command adds file(s) contents to the index.",
			Response:"git add";
			},
			{
			ID:2,
			Prompt:"What is the <b>Anomaly Detector</b> in Microsoft Azure?",
			Response:"The Anomaly Detected services provides an API that developers can use to create anomaly detection solutions."
			},
			{
			ID:3,
			Prompt:"What is the <b>Seeing AI</b> app?",
			Response: "An exmample of computer vision; experimental Microsoft app."
			},
			{
			ID:4,
			Prompt:"Describe the four computer vision services in Microsoft Azure",
			Response:
			"<ul>"+
			"<li><b>Computer Vision</b> - You can use this service to analyze images and video, and extract descriptions, tags, objects, and text.</li>"+
			"<li><b>Custom Vision</b> - Use this service to train custom image classification and object detection models using your own images.</li>"+
			"<li><b>Face</b> - The Face service enables you to build face detection and facial recognition solutions. </li>"+
			"<li><b>Form Recognizer</b> - Use this service to extract information from scanned forms and invoices.</li>"+
			"</ul>"
			},
		]
		
	]