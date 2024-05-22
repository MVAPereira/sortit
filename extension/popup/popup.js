const btnTestFirst = document.querySelector("#btn-test-first");
btnTestFirst.addEventListener("click", async () => {
    const [currentTab] = await chrome.tabs.query({ active: true, currentWindow: true });

    if (!currentTab) {
        console.error("No active tab found.");
        return;
    }

    if (!currentTab.id) {
        console.error("The active tab does not have an 'id' property:", currentTab);
        return;
    }

    // Reload the current tab
    chrome.tabs.reload(currentTab.id, { bypassCache: true });

    // Listen for tab updates
    chrome.tabs.onUpdated.addListener(function(tabId, changeInfo) {
        // Check if the tab is the current tab and the status is "complete"
        if (tabId === currentTab.id && changeInfo.status === 'complete') {
            // Now send your message to the content script
            chrome.tabs.sendMessage(currentTab.id, { method: "sortByTestFirst" });

            // Remove the listener to avoid multiple executions
            chrome.tabs.onUpdated.removeListener(this);
        }
    });
});

const btnAbsoNoth = document.querySelector("#btn-ab");
btnAbsoNoth.addEventListener("click", async () => {
    const [currentTab] = await chrome.tabs.query({ active: true, currentWindow: true });

    if (!currentTab) {
        console.error("No active tab found.");
        return;
    }

    if (!currentTab.id) {
        console.error("The active tab does not have an 'id' property:", currentTab);
        return;
    }

       // Reload the current tab
       chrome.tabs.reload(currentTab.id, { bypassCache: true });

       // Listen for tab updates
       chrome.tabs.onUpdated.addListener(function(tabId, changeInfo) {
           // Check if the tab is the current tab and the status is "complete"
           if (tabId === currentTab.id && changeInfo.status === 'complete') {
               // Now send your message to the content script
               chrome.tabs.sendMessage(currentTab.id, { method: "theBigNothing" });
   
               // Remove the listener to avoid multiple executions
               chrome.tabs.onUpdated.removeListener(this);
           }
       });
});

// const btnAlphabetically = document.querySelector("#btn-alpha");
// btnAlphabetically.addEventListener("click", async () => {
//     const [currentTab] = await chrome.tabs.query({ active: true, currentWindow: true });

//     if (!currentTab) {
//         console.error("No active tab found.");
//         return;
//     }

//     if (!currentTab.id) {
//         console.error("The active tab does not have an 'id' property:", currentTab);
//         return;
//     }

//     // Reload the current tab
//     chrome.tabs.reload(currentTab.id, { bypassCache: true });

//     // Listen for tab updates
//     chrome.tabs.onUpdated.addListener(function(tabId, changeInfo) {
//         // Check if the tab is the current tab and the status is "complete"
//         if (tabId === currentTab.id && changeInfo.status === 'complete') {
//             // Now send your message to the content script
//             chrome.tabs.sendMessage(currentTab.id, { method: "alphabetically" });

//             // Remove the listener to avoid multiple executions
//             chrome.tabs.onUpdated.removeListener(this);
//         }
//     });
// });

const btnMostcf = document.querySelector("#btn-mcf");
btnMostcf.addEventListener("click", async () => {
    const [currentTab] = await chrome.tabs.query({ active: true, currentWindow: true });

    if (!currentTab) {
        console.error("No active tab found.");
        return;
    }

    if (!currentTab.id) {
        console.error("The active tab does not have an 'id' property:", currentTab);
        return;
    }

    // Reload the current tab
    chrome.tabs.reload(currentTab.id, { bypassCache: true });

    // Listen for tab updates
    chrome.tabs.onUpdated.addListener(function(tabId, changeInfo) {
        // Check if the tab is the current tab and the status is "complete"
        if (tabId === currentTab.id && changeInfo.status === 'complete') {
            // Now send your message to the content script
            chrome.tabs.sendMessage(currentTab.id, { method: "mostChangedFiles" });

            // Remove the listener to avoid multiple executions
            chrome.tabs.onUpdated.removeListener(this);
        }
    });
});
