# 360-chrome-extension
Chrome extension faciltating control of both the browser and the KEMEA website in the workflow of the 360 Tour and the Launcher.

The 360 tours are not part of the Unity runtime but we have chosen to integrate them into the Launcher so that the user can launch 
a 360 tour and get back to the Launcher from it. On the Launcher's side, upon the press of the 360 tour button, we launch a chrome
instance through the .NET Process API, using the url as a parameter. Chrome is used due to having WebXR support, contrary to Firefox. 
At the same tinme we hook on the ProcessExited event. Provided we can quit the browser somehow through user input, this will notify 
the Launcher that the tour is over and the Launcher should take back control of the headset.

The 360 tour , created in Pano2VR and embedded to the KEMEA website, has been built with VR mode enabled. Given that to engage the 
headset, we have to establish Link mode prior to the Launcher application, the 360 has to also operate in the same Link mode, 
otherwise too many unreliable factors affect this workflow. Link mode isn't always reliably cut and reestablished due to mounting 
issues. To achieve 360 tour VR mode we had to do it while in Link mode and fortunately, even though the chrome is launched on the 
laptop, it still recognizes the HMD and allows the user to go into fully immersive VR mode.

To transition from Launcher to Chrome, we have to previously disengage the OpenXR runtime, from the Launcher app and then launch 
Chrome. This extension comes into play, listening only on urls matching our KEMEA website. It also parses the url parameters to allow
engaging into VR mode or fullscreen, given a url parameter, automatically so that the user never has to do anything to that effect.
The extension also hooks on the exit fullscreen event, for now, which is triggered when we click on the X button that pops up in the
top side of the pano2VR player which relays a message to the extension. The extension then handles the message as closing the current
tab which ends up closing the browser itself, since it's just one tab. At this point, Launcher gets notified of the chrome process 
quiting and reengages the OpenXR runtime, thus regaining the HMD's display and input.
