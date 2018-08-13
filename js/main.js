// GET THE REFERENCES
const storage = document.querySelector(".storage");
const portLink = document.querySelector("#portfolio");
const homeLink = document.querySelector("#home");
let portUrl = "./content/portfolio.html";
let homeUrl = "./content/home.html"

// CREATE THE FUNCTION THAT WILL LOAD THE REQUESTED PARTIAL
function loadContentPort()
{
    console.log("portfolio worked");
        fetch(portUrl)
        .then(function (response) 
            {   
                return response.text();
            })
        .then(function (data) 
            {
                console.log("Added data");
                storage.innerHTML = data;
            })
        .catch(function (error) 
            {
                console.log("Error: " + error.message);
            });
}

function loadContentHome()
{
    fetch(homeUrl)
    .then(function(response)
        {
            console.log("home worked");
          return response.text();
        })
    .then(function(data)
        {
           storage.innerHTML = data; 
        })
    .catch(function (error)
        {
            console.log(error.message);
        });
}
   /*
   IMPORTANT NOTES:
   loadContent RUNS EVERY TIME A LINK IS CLICKED.
   loadContent REQUIRES THE INPUT. THIS INPUT IS
   THE VALUE OF href ATTRIBUTE OF THE CLICKED LINK.
   EVERY TIME A LINK IS CLICKED, urlFeed WILL GET 
   THE UPDATED PATH TO THE REQUESTED CONTENT.
   */
   // RUN THE fetch(urlFeed).then().then().catch()
// CLOSE YOUR FUNCTION loadContent HERE
// CALL loadContent WITH THE CURRENT VALUE OF url 
portLink.addEventListener("click", loadContentPort);
homeLink.addEventListener("click", loadContentHome);
// CREATE THE FUNCTION THAT WILL SELECT A PARTIAL:

//const selectContent;
   // PREVENT DEFAULT BEHAVIOUR OF A LINK TAG
   // GET THE VALUE OF href ATTRIBUTE OF THE CLICKED LINK
   // CALL THE FUNCTION loadContent PROVIDING THE href
   // VALUE OF THE CLICKED LINK AS THE VALUE FOR THE PARAMETER
   // OF loadContent FUNCTION.
// CLOSE YOUR FUNCTION selectContent HERE

// REGISTER links FOR CLICK EVENT WITH selectContent AS EVENT HANDLER!



/*function handleClick()
{
    fetch(url)
        .then(function (response) 
            {   
                return response.text();
            })
        .then(function (data) 
            {
                container.innerHTML = data;
            })
        .catch(function (error) 
            {
                console.log(error.message);
            });
}

btn.addEventListener("click", handleClick);*/