{\rtf1\ansi\ansicpg1252\cocoartf2578
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 Menlo-Bold;\f1\fnil\fcharset0 Menlo-Regular;}
{\colortbl;\red255\green255\blue255;\red0\green0\blue0;\red0\green0\blue0;\red124\green228\blue252;
\red246\green246\blue239;\red80\green93\blue147;\red238\green252\blue122;}
{\*\expandedcolortbl;;\cssrgb\c0\c0\c0;\csgray\c0\c0;\cssrgb\c54510\c91373\c99216;
\cssrgb\c97255\c97255\c94902;\cssrgb\c38431\c44706\c64314;\cssrgb\c94510\c98039\c54902;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\b\fs26 \cf2 \cb3 \expnd0\expndtw0\kerning0
let
\f1\b0  helloWorldPopup;\
\
\pard\pardeftab720\partightenfactor0
\cf2 // Open the popup when we enter a given zone\
helloWorldPopup = WA.onEnterZone('myZone', () => \{\
    WA.openPopup("popupRectangle", \'82Herzlich Willkommen zur Ausstellung 30 Jahre Ratschlag, [\{\
        label: "Close",\
        className: "primary",\
        callback: (popup) => \{\
            // Close the popup when the "Close" button is pressed.\
            popup.close();\
        \}\
    \});\
\}]);\
\
// Close the popup when we leave the zone.\
WA.onLeaveZone('myZone', () => \{\
    helloWorldPopup.close();\
\});}