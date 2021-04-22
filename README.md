This is the second project I worked on incorporating all three basic languages (HTML, CSS, and Javascript) into a functioning webpage.

This project is based on an exercise from the book "Eloquent Javascript" by Marijn Haverbeke.

The challenge is to create a mousetrail, or a trail of dots at mousemove event locations while the mouse is moving. These dots should disappear after a certain length of time, by setting their display value to none using a timeout function. The dots should appear only after a certain length of time has passed after the mousemove event occured, and no dots should appear in between the event and the elapsing of this length of time. In this way the dot div's are recycled.

I've used a function from the book that I've adapted.

A variable is initialized as null. While this variable is still null if a mousemove event is detected by an event listener, a timeout function is initialized for 50 milliseconds from when the event happened.

When the timeout function is called after 50 milliseconds a dot div's display is set to block, it is moved to the location of the event from 50 milliseconds ago, and another timeout function is set for 900 milliseconds in the future. At that time the dot div's display will be set to none.

Not included in the challenge are two other functions that I have kept in the javascript sheet.

One creates a yellow dot div wherever a click event is registered. The other displays the x and y coordinates of the last click event in the upper left of the body.

