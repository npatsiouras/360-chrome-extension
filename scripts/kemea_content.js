var editorExtensionId = "dnmlcpiokkhdkhkjobpbmdgigmjnhgjh";


function onCloseBrowserButtonClicked(){
    chrome.runtime.sendMessage(editorExtensionId , { intent: 'close' });
    //chrome.processes.terminate(0);
}

window.addEventListener('load', function() {
    setTimeout(function(){

        //ExitButton
        var element=document.createElement('img');
        element.style = "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;";
        // element.setAttribute('src','data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDIwIDIwOyIgaWQ9IkxheWVyXzEiIHk9IjBweCIgeD0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAyMCAyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOm5vbmU7c3Ryb2tlOiNjMmU4MTI7c3Ryb2tlLXdpZHRoOjEuMjU7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO30KPC9zdHlsZT4KIDxjaXJjbGUgcj0iOC4zIiBjeT0iMTAiIGN4PSIxMCIgY2xhc3M9InN0MCIvPgogPGNpcmNsZSByPSI1IiBjeT0iMTAiIGN4PSIxMCIgY2xhc3M9InN0MCIvPgogPGNpcmNsZSByPSIxLjciIGN5PSIxMCIgY3g9IjEwIiBjbGFzcz0ic3QwIi8+Cjwvc3ZnPgo=');
        element.setAttribute('src', 'https://bestpractices.gr/wp-content/uploads/2024/02/PROTECTION-OF-VULNERABLE-GROUPS-e1708437596740.png');  
        element.onclick=onCloseBrowserButtonClicked;
        pano_0_2.addHotspot("exit_hotspot",100,50,element);
        pano_0_2.updatePanorama();
        pano_0_2.setPanTilt(100,50);
        pano_0_2.triggerEvent("repaint");

        {//if we want to allow fullscreen on load due to url params
            const queryString = window.location.search;
            console.log(queryString);
            const urlParams = new URLSearchParams(queryString);

            if(urlParams.has('fullscreen')){
                console.log("has fullscreen param");
                const fullscreen = urlParams.get('fullscreen');
                if(fullscreen == "true"){
                    console.log("fullscreen is true");
                    setTimeout(function(){
                        pano_0_2.enterFullscreen();
                    }, 500);
                }
            }
        }
        pano_0_2.addListener('fullscreenexit', onCloseBrowserButtonClicked);
       }, 100);
 }, false);
