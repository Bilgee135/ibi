Website structure:

-📁public                           //images and executable files are stored here
    -📁bureldehuunicons             //icons and/or pictures of the system modules
        -📄pictures and icons
        
    -📁companyheroimg               //large images to be placed as a hero image in the "company" folder is stored here
        -📄pictures

    -📁installs                     //executable files are stored here
        -📄executable files

    -📄other pictures and images
-📁src
    -📁app
        -📁assets                   //temporary pictures and icons used for testing (don't mind this folder)
            -📄temporary pictures

        -📁layouts                  //one of the most important files; it contains layouts and function that is used everywhre in the page
            -📄format1.js           //this js file takes in props, namely Content={ Content } data={ pData } id={ id } additions={ customizeContent }
                                     //and uses it to populate the page
            -📄format2.js 
            -📄format3.js 
            -📄mainFormat.js        //the mainformat layout is "laid out" on format1 to format3 - this is included to add in headers, sidenavs and footers

        -📁company                  //the folder which contains pages of the company drop down header menu
            -📁introduction         //contains the page.js folder; serves as a sign to render page.js
                -📄page.js          //page.js uses <Format1 /> or <Format2 /> and passes its corresponding json data with its id
            -📁organizaiton         
                -📄page.js          
            -📁partners   
                -📄page.js            
            -📁product              
                -📄page.js          
            -📁stratedgy            
                -📄page.js    
            -📙company.json         //contains all the informaiton in a page.js (title, short description, hero image path, id and text)  
            -📄Content.js           //this file takes in data and processes it into readable html onto the page.js

        -📁feedback                 //the folder which contains pages of the feedback drop down header menu
            -📁complaints           //contains the page.js folder; serves as a sign to render page.js
                -📄page.js          //page.js uses <Format1 /> or <Format2 /> and passes its corresponding json data with its id
            -📁contact         
                -📄page.js          
            -📁partnershipreq   
                -📄page.js              
            -📙feedback.json         //contains all the informaiton in a page.js (title, short description, hero image path, id and text)  
            -📄Content.js            //this file takes in data and processes it into readable html onto the page.js

        -📁humanResources           //the folder which contains pages of the feedback drop down header menu
            -📁Resume               //contains the page.js folder; serves as a sign to render page.js
                -📄page.js          //page.js uses <Format1 /> or <Format2 /> and passes its corresponding json data with its id
            -📁sanalhuselt      
                -📄page.js          
            -📁vacancy 
                -📄page.js     
            -📁whyUs
                -📄page.js          
            -📙hr.json               //contains all the informaiton in a page.js (title, short description, hero image path, id and text)  
            -📄Content.js            //this file takes in data and processes it into readable html onto the page.js

        -📁services                 //the folder which contains pages of the feedback drop down header menu
            -📁advising             //contains the page.js folder; serves as a sign to render page.js
                -📄page.js          //page.js uses <Format1 /> or <Format2 /> and passes its corresponding json data with its id
            -📁launch    
                -📄page.js          
            -📁sales
                -📄page.js     
            -📁softhelp
                -📄page.js          
            -📙services.json         //contains all the informaiton in a page.js (title, short description, hero image path, id and text)  
            -📄Content.js            //this file takes in data and processes it into readable html onto the page.js
        
        -📁components                //this file contains some global components that can be used anywhere in the website.
            -📄component1.js
            -📄component2.js
        
        -📁products                     //this folder contains all pages and most informaton about the products
            -📁componnets               //this folder contains json and js files that are used in product pages
                -📄gridcolumn.js        //Display advantages
                -📄MainProductPage.js   //Display main structure of the main product page
                -📄product.js           //-----------UNUSED FILE------------//
                -📄productcards.js      //Display products as cards
                -📄productlist2.js      //Display the product scroll list on the top of the product page
                
                -📁json                         //folder containing almost all necessary json files
                    -📙Advantages.json          //file containing necessary info on advantages cards
                    -📙Bureldehuun.json         //file containing necessary info on system modules
                    -📙othersystem.json         //file containing necessary info on OTHER system modules (this was created for cleanliness)
                    -📙producjson.json          //file containing necessary info on productlist2 cards
                    -📙ProductStatistics.json   //file containing necessary info on miscellanious statistics on the main product page
                
            -📁Diamond5             //file containing the render page.js for page.js
                -📄page.js          //file containing the id to render the page      
            -📁Diamond6             //file containing the render page.js for page.js
                -📄page.js          //file containing the id to render the page           
            -📁Emerald              //file containing the render page.js for page.js
                -📄page.js          //file containing the id to render the page    
            -📁Impact               //file containing the render page.js for page.js
                -📄page.js          //file containing the id to render the page 
            -📁Och7                 //file containing the render page.js for page.js
                -📄page.js          //file containing the id to render the page
            -📁Setsen               //file containing the render page.js for page.js
                -📄page.js          //file containing the id to render the page
            -📁Spinel               //file containing the render page.js for page.js
                -📄page.js          //file containing the id to render the page
            
            -📁OtherSystems         //file containing folders of OTHER SYSTEMS
                -📁discount
                    -📄page.js
                -📁discount
                    -📄page.js
                -📁discount
                    -📄page.js
                -📁discount
                    -📄page.js
                -📁discount
                    -📄page.js
            
            -📁tablecsv             //file containing the necessary json file for PRICE TABLES (THE NAME MAY BE MISLEADING, INSIDE IT IS A JSON FILE)
                -📙data.json        //json file containing all price table info
            
            -📙main.json            //json file containing all product information
            -📄page.js              //main product page
        
        -📄favicon.ico         //file containing the favicon image
        -📄globals.css         //global css file
        -📄header.js           //file containing the header render component
        -📄sidenav.js          //file containing the sidenav render component
        -📄footer.js           //file containing the footer render component

        -📄Headertwo.js        //------UNUSED FILE-------//

        -📄layout.js           //main layout for all the pages
        -📄page.js             //main homepage