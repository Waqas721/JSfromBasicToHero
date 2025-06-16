//Network Connection Checking App 
// Create a webpage that checks the user's network connection using the Network Information API and displays whether the user is online or offline. It should also show details about the current network type (Wi-Fi, Cellular, etc.).
// Steps:
// 1. Use the Network Information API to get the network status and type.
// 2. Display the network connection type (e.g., Wi-Fi, Cellular) and status (online/offline).
// 3. Provide a button to manually check the network status again.
function checkNetworkStatus() {
    updateNetworkStatus();
}
function updateNetworkStatus(){
    const statusElement =document.getElementById('status');
    if(navigator.onLine){
        statusElement.innerHTML="You are Online <br> Network Type: " + getNetworkType();
        statusElement.className='status online';
    }
    else{
        statusElement.innerHTML="You are Offline";
        statusElement.className='status offline';
    }
}

function getNetworkType() {
    if(navigator.connection){
        const connectiontype=navigator.connection.effectiveType || 'unknown'
        return connectiontype;
    }
    else{
        return "Network Information API not supported"
    }
}

window.onload=updateNetworkStatus;
//listen for chnanges in the network connection (online/offline)
window.addEventListener('online',()=>{
    updateNetworkStatus();
});


window.addEventListener('offline',()=>{
    updateNetworkStatus();
});
