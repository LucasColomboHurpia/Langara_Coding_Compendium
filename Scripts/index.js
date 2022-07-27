const basicDisplayArea = () => {
    displayArea.innerHTML = `
    <div class="container py-3 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col col-lg-9 col-xl-7">
            <div class="card">
                <div class="p-4 card text-black" id="cardDisplayArea"s tyle="background-color: #f8f9fa;">

                    <!-- SEARCH BAR -->
                    <form id="searchBar" action="">
                    </form>

                    <!-- Last Seen -->
                    <section id="work" class="container content-section text-center">
                        <div class="container">
                            <div class="row" id="lastSeen">
                            </div>
                            <!-- Popular Tools -->
                            <div class="lastseen-txt mt-4 h5">Most Popular tools</div>

                            <div id="listOfTool">
                                <div class="container-fluid PopularTools">
                                    <!-- js goes here -->
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </div>
</div>
    `
}

const display = () =>{
    document.getElementById('stylesheet').href='././Styles/style.css';

    basicDisplayArea();

    //searchbar
    let SearchBar = displaySearchBar()
    searchBar.innerHTML = SearchBar

    //visited tools
    let lastVisitedTools = displaylastVisitedTools()
    lastSeen.innerHTML = lastVisitedTools

    //popular tools
    for (let index = 0; index < 8; index++) {
        
    let newTools =
       `
       <div class="row">
       <div class="c-5 mt-3">
           <div class="cardPopular" >
               <div class="card-horizontal">
                   <div class="card-body" onclick="showToolPage(${newTool[index].id})">
                       <img src="${newTool[index].icon}" class="img-fluid popularListIMG" alt="Card image cap"> 
                       <div class="popularToolName">${newTool[index].language}</div>
                   </div>
               </div>
               <div class="card-footer">
                   <p>${newTool[index].desc}</p>
               </div>
           </div>
       </div>
   </div>
       ` 
       $(".PopularTools").append(newTools)       
    }

    //more tools
    let moreTools = displayMoreTools()
    $("#listOfTool").append(moreTools)    
}

const alertComingSoon = () =>{
    alert("Feature coming soon!")
}

const showMoreTools = () =>{

    //changes css
    document.getElementById('stylesheet').href='././Styles/moreTools.css';
    
    //searchbar
    let searchBar = displaySearchBar()
    let filterButton = "Filter lul"

        //html for more tools
        displayArea.innerHTML = `
        <div class="container py-3 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col col-lg-9 col-xl-7">
                <div class="card">

                    <div class="p-4 card text-black" style="background-color: #f8f9fa;">
                    <div class="returnButton" onclick="display()"> <img
                    src="https://icons.veryicon.com/png/o/miscellaneous/arrows/go-back-2.png"
                    width="20px" alt=""> Return</div>
                                    
                        <!-- Popular Tools -->
                        <div class="lastseen-txt mt-4 h5"></div>
                            <div>${searchBar}</div>
                            
                            <!-- Default dropend button -->
                            <div class="btn-group dropend filterWrap">
                                <button type="button" class="btn btn- dropdown-toggle" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    <img src="./Public/Assets/filter.png" height="25" alt="Filter" class="px-2">
                                    <span class="filterFont" id="filterTitle">Filters</span>
                                </button>
                                <ul class="dropdown-menu">
                                    <li onclick="filterTools('framework','Frameworks')"><a class="dropdown-item" href="#">Frameworks</a></li>
                                    <li onclick="filterTools('language','Languages')"><a class="dropdown-item" href="#">Languages</a></li>
                                    <li onclick="filterTools('designer','Designer tools')"><a class="dropdown-item" href="#">Designer tools</a></li>
                                    <li onclick="filterTools('developer','Developer tools')"><a class="dropdown-item" href="#">Developer tools</a></li>
                                    <li onclick="filterTools('popular','Most popular')"><a class="dropdown-item" href="#">Most popular</a></li>
                                    <li onclick="filterTools('begginers','For begginers')"><a class="dropdown-item" href="#">For begginers</a></li>
                                    <li onclick="filterTools('open','Open-source')"><a class="dropdown-item" href="#">Open-source</a></li>
                                </ul>
                            </div> <spa </span>
                        
                        <div id="listOfTool">
                            <div class="container-fluid PopularTools">
                                <!-- js goes here -->
                            </div>
                        </div>
    
    
                    </div>
                </div>
            </div>
        </div>
    
    
    `


    
    for (let index = 0; index < newTool.length; index++) {
        //show more tools
        let newTools =
           `
           <div class="row">
           <div class="c-5 mt-3">
               <div class="cardPopular" >
                   <div class="card-horizontal">
                       <div class="card-body" onclick="showToolPage(${newTool[index].id})">
                           <img src="${newTool[index].icon}" class="img-fluid popularListIMG" alt="Card image cap"> 
                           <div class="popularToolName">${newTool[index].language}</div>
                       </div>
                   </div>
                   <div class="card-footer">
                       <p>${newTool[index].desc}</p>
                   </div>
               </div>
           </div>
       </div>
           ` 
           $(".PopularTools").append(newTools)       
        }
    
    } 


    const filterTools = (filterAtt, filterName) =>{
        filterTitle.innerHTML = filterName

        let filteredTools = []

        //filter the correct tools
        for(tool of newTool){
            for (let i = 0; i < tool.filterAtributes.length; i++) {
                if(tool.filterAtributes[i] == filterAtt){filteredTools.push(tool)}
             }
        }

        let filteredToolsHTML = ''

      //creates html
        for(tool of filteredTools){  console.log(tool.language) 

            filteredToolsHTML +=    `
        <div class="row">
            <div class="c-5 mt-3">
                <div class="cardPopular" >
                    <div class="card-horizontal">
                        <div class="card-body" onclick="showToolPage(${tool.id})">
                            <img src="${tool.icon}" class="img-fluid popularListIMG" alt="Card image cap"> 
                            <div class="popularToolName">${tool.language}</div>
                        </div>
                    </div>
                    <div class="card-footer">
                        <p>${tool.desc}</p>
                    </div>
                </div>
            </div>
        </div>
            `
        }
        $(".PopularTools").html(filteredToolsHTML)    
    }

    displayLoginField()