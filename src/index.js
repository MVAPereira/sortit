
let globalFunctionForReturn;
let originalContent = document.body.innerHTML;


chrome.runtime.onMessage.addListener( async (request, sender, response) => {

    if (request.method == "sortByTestFirst")
    {
        console.log("Call the method for sorting by test first")
        await sortByTestFirst();
    }

    if (request.method == "theBigNothing")
    {
        theBigNothing()
    }

    if (request.method == "alphabetically")
    {
        alphabetically()
    }

    if (request.method == "mostChangedFiles")
    {
        mostChangedFiles()
    }

    if (request.method == "FunctionHelper")
    {
        getTreeSitterReturn()
    }

    if (request.type === 'functionForReturn') {
        globalFunctionForReturn = request.content;

        // Now you can use the globalFunctionForReturn data in your content script
        console.log('Received functionForReturn in content script:', globalFunctionForReturn);
    }
})


async function sortByTestFirst (){
    document.body.innerHTML = originalContent;

    console.log("ate aqui foi async, bom eu acho rsrs")

    const mainTree = document.querySelectorAll("[role=tree]")[0];
    let articlesArray = [];
    
    await separateFilesFromFolders()    
    await sorteFilesByTestFirst(mainTree, articlesArray)
    await sorteDivsByTestDivs()
    // await someHover() 

}

function theBigNothing (){
    document.body.innerHTML = originalContent;
}

function mostChangedFiles() {
    document.body.innerHTML = originalContent;

    const divContainer = document.querySelector(".js-diff-progressive-container")
    const divs = document.querySelectorAll(".file.js-file.js-details-container");

    var arrayBatatinhaLength = divs.length;
    var arrayBatatinhaSorted = [];
    var thatsTheBigestBatatinha; 

    var divsArray = Array.from(divs);

    for (let i = 0; i < arrayBatatinhaLength; i++) {
        thatsTheBigestBatatinha = divsArray[0];

        divsArray.forEach((element) => {
            var currentDiffstat = parseInt(element.querySelector(".file-info").querySelector(".diffstat").textContent, 10);
            var maxDiffstat = parseInt(thatsTheBigestBatatinha.querySelector(".file-info").querySelector(".diffstat").textContent, 10);

            if (currentDiffstat >= maxDiffstat) {
                thatsTheBigestBatatinha = element;
            }
        });

        arrayBatatinhaSorted.unshift(thatsTheBigestBatatinha);
        divsArray.splice(divsArray.indexOf(thatsTheBigestBatatinha), 1);
    }

    arrayBatatinhaSorted.map(div => divContainer.insertBefore(div, divContainer.firstElementChild))

    const orderFilesAfterSorting = arrayBatatinhaSorted.map(element => element.querySelector(".code-review.blob-code button[data-path]").getAttribute("data-path"))

    const mainTree = document.querySelectorAll("[role=tree]")[0];
    
    separateFilesFromFolders()

    const mainTreeItems = document.querySelectorAll("[role=treeitem]");

    orderFilesAfterSorting.forEach(
        ((element) => {
            var oBraboPrimeiro = element

            mainTreeItems.forEach(
                (div) => {
                    if(div.querySelector('.ActionList-item-label').innerText == oBraboPrimeiro){
                        mainTree.insertBefore(div, mainTree.firstElementChild)
                }
            })
        }))
}

function alphabetically(){
    document.body.innerHTML = originalContent;  
    separateFilesFromFolders()
}

// async function someHover(){

//     // const divs = document.querySelectorAll(".file.js-file.js-details-container");
//     // divs.forEach( div => {
//     //     const divWithTd = div.querySelector(".js-file-content")

//     //     console.log("divWithTd: ", divWithTd)
//     //     const bigPotato = divWithTd.querySelector(".blob-code-inner.blob-code-marker.js-code-nav-pass.js-skip-tagsearch")

//     //     console.log(bigPotato?.innerText)

//     //     divElement = document.createElement("div");
//     //     let p = document.createElement("p");
//     //     p.innerHTML = 
//     //     `
//     //     function generic(param1, param2) {
//     //         return param1.toString() + ' ' + param2.toString();
//     //     }
//     //     `
//     //     divElement.appendChild(p);  
//     //     divElement.style.position = "absolute";
//     //     divElement.style.zIndex = "1000";
//     //     divElement.style.willChange = "transform"; 

//     //     divElement.style.background = "white"
//     //     divElement.style.padding = "20px 30px 20px 30px"
//     //     divElement.style.borderRadius = "10px"
//     //     divElement.style.transition = "opacity 0.5s ease-in-out"; 
//     //     divElement.style.opacity = "0"; 
//     //     divElement.id = "extraContent"



//     //     if (bigPotato) {
//     //         bigPotato.addEventListener("mouseover", (event) => {
//     //             if(event.target.innerText == "let"){
//     //                 event.target.append(divElement);
//     //                 console.log("tem um let aqui rsrs")
//     //                 divElement.offsetHeight; 
//     //                 divElement.style.opacity = "1";
//     //             }

//     //         }); 

//     //         bigPotato.addEventListener("mouseout", (event) => {

//     //             const pElementToRemove = document.getElementById("extraContent");
//     //             if (pElementToRemove && pElementToRemove.parentElement === event.target) {
//     //                 pElementToRemove.style.opacity = "0"; 
//     //                 setTimeout(() => {
//     //                     pElementToRemove.remove();
//     //                 }, 500); 
//     //             }
//     //         });
//     //     }
        
//     // })

//     const tableWithContent = document.querySelectorAll(".diff-table.js-diff-table")

//     tableWithContent.forEach(element => {
//         const allSpanTags = element.querySelectorAll(".blob-code-inner.blob-code-marker")

        
        
//         allSpanTags.forEach(div => {
//             const spanTags = div.getElementsByTagName('span')

//             const divElement = document.createElement("div");
//             let p = document.createElement("p");
//             p.innerHTML = 
//             `
//             function generic(param1, param2) {
//                 return param1.toString() + ' ' + param2.toString();
//             }
//             `
//             divElement.appendChild(p);  
//             divElement.style.position = "absolute";
//             divElement.style.zIndex = "1000";
//             divElement.style.willChange = "transform"; 

//             divElement.style.background = "white"
//             divElement.style.padding = "20px 30px 20px 30px"
//             divElement.style.borderRadius = "10px"
//             // divElement.style.transition = "opacity 0.5s ease-in-out"; 
//             // divElement.style.opacity = "0"; 
//             divElement.id = "extraContent"

            
//             for(let i=0; i<spanTags.length; i++){

//                 console.log(spanTags[i].innerText)

            
//                 spanTags[i].addEventListener("mouseover", (event) => {

//                     console.log("dentro da tag tem isso: ")
//                     console.log(event.target.innerText)

//                     spanTags[i].style.color = "red"
//                     event.target.append(divElement);
                    
//                 }) 

//                 spanTags[i].addEventListener("mouseout", (event) => {

//                     const pElementToRemove = document.getElementById("extraContent");
//                     if (pElementToRemove && pElementToRemove.parentElement === event.target) {
//                         pElementToRemove.style.opacity = "0"; 
//                         setTimeout(() => {
//                             pElementToRemove.remove();
//                         }, 500); 
//                     }
//                     });
//                 }
//         });
//     });
// }

// someHover()
callTreeSitter() 

function getTreeSitterReturn(){
    console.log("caiu aqui");

    console.log('Using functionForReturn in getTreeSitterReturn:', globalFunctionForReturn);
}

function callTreeSitter(){

    const tableWithContent = document.querySelectorAll(".diff-table.js-diff-table")
    

    tableWithContent.forEach(element => {
        const allSpanTags = element.querySelectorAll(".blob-code-inner.blob-code-marker")
        const spanText = []
    
        allSpanTags.forEach(div => {
            spanText.push(div.innerText)
        });
    
        const message = {
            type: 'spanText',
            content: spanText.join(' ')
        };
    
        chrome.runtime.sendMessage(message);
    });

    console.log("caiu aqui viu")
}

async function sorteFilesByTestFirst(mainTree, articlesArray){
    const mainTreeItems = document.querySelectorAll("[role=treeitem]")
    mainTreeItems.forEach(article => {
        const tagThatHasTheText = article.querySelector('.ActionList-item-label').innerText
        if (tagThatHasTheText.includes("test_") || tagThatHasTheText.includes("teste_")) {
            
            articlesArray.unshift(article)
        }
    })
    articlesArray.map(element => mainTree.insertBefore(element, mainTree.firstElementChild))
}
async function sorteDivsByTestDivs() {
    const divsTestArray = [];
    const divContainer = document.querySelector(".js-diff-progressive-container")
 
    const divs = document.querySelectorAll(".file.js-file.js-details-container");
    divs.forEach( div => {
        const divWithTd = div.querySelector(".js-file-content")
        const td = divWithTd.querySelector(".code-review button[data-path]")
        const tdPathTex = td.getAttribute("data-path");

        if(tdPathTex.includes("test_") || tdPathTex.includes("teste_")) {
            divsTestArray.unshift(div)
        }

    })

    divsTestArray.map(div => divContainer.insertBefore(div, divContainer.firstElementChild))
}
async function separateFilesFromFolders(){

    const mainTree = document.querySelectorAll("[role=tree]")[0];
    const mainTreeItems = document.querySelectorAll("[role=treeitem]")
    mainTreeItems.forEach(article => {
        const itsAFolder = article.className.includes("ActionList-item--hasSubItem")

        if(!itsAFolder){
            const fileNameWithFullPath = article.querySelector('span[data-filterable-item-text=""][hidden]').innerText
            const tagThatHasTheText = article.querySelector('.ActionList-item-label')
            tagThatHasTheText.innerText = fileNameWithFullPath
            mainTree.appendChild(article)          
        } else{
            article.remove()      
        }
    })
}



  
