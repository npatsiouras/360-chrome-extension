async function getCurrentTab() {
    let queryOptions = { active: true, lastFocusedWindow: true };
    // `tab` will either be a `tabs.Tab` instance or `undefined`.
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab;
  }

chrome.runtime.onMessageExternal.addListener(HandleCloseTabButtonMessage);

async function HandleCloseTabButtonMessage(message, sender, sendResponse)
{
    if (message.intent === 'close') 
    {
        try {
            console.log("Closing tab");
            const tab = await getCurrentTab();
            chrome.tabs.remove(tab.id);
          } catch (error) {
            console.error(error);
        }
    }
}