// let globalFunctionForReturn;
// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//     if (message.type === 'spanText') {
//         const spanText = message.content;

//         sendMessageToBackend(spanText);
//     }
// });
// var responseData;
// function sendMessageToBackend(spanText) {
//     const DATA_TO_SEND = {
//         message: "Hello from the extension!",
//         sourceCode: spanText
//     };

//     fetch('http://localhost:3000/parse-code', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(DATA_TO_SEND),
//     })
//     .then(response => response.json())
//     .then(data => {
//         responseData = data
//         // console.log('Response from backend:', data);
//         processBackendResponse(responseData);
//     })
//     .catch(error => {
//         console.error('Error sending message to backend:', error);
//     });
// }

// function processBackendResponse(data){
//     console.log("Acesso ao retorno do backend ", data);

//     console.log(data.functionCallsNames);

//     if(data.functionNames.length > 0){
//         const functionAssembled =  data.functionNames.join(" ")
        
//         const match = functionAssembled.match(/(.+?)\s*\(\)/);
//         const functionName = match[1];

//         globalFunctionForReturn = {
//             functionName: functionName,
//             functionBody: functionAssembled
//         }

//         console.log(globalFunctionForReturn)

//         chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//             chrome.tabs.sendMessage(tabs[0].id, {type: 'functionForReturn', content: globalFunctionForReturn});
//         });
//     }
// }