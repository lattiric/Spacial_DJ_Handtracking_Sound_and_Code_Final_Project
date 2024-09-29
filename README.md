# Spatial DJ Project

This project is meant to implement handpose tracking software taken from MediaPipe and use it to control and create music in the context of a Max-8 Spatial Programming project environment.

This example demonstrates both the handtracking and gesture recognition displayed within the jweb-hands-gesture-recognizer taken from MediaPipe. Note this is taken from the github repository of the orignal prject:

![Max example patcher](./jweb-hands-gesture-recognizer.gif)

## Features

The program uses the points identified on the hands described here to determine volume control and note threshold.

![Handlandmarks diagram](hand-landmarks.png)

## Resources

The licence for the original project is saved in this repository as well.

This example is inspired by [an example by Rob Ramirez](https://github.com/lysdexic-audio/jweb-hands-gesture-recognizer)

The previous example is inspired by [an example by Rob Ramirez](https://github.com/robtherich/jweb-mediapipe), which is in turn inspired by [MediaPipe in JavaScript](https://github.com/LintangWisesa/MediaPipe-in-JavaScript).
