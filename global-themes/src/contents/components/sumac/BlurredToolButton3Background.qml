// PRESETS
// Have blur converge towards gray, then resaturate, also has shadow
// Adaptive
// Contrast created by shifting background towards background color so it contrasts with text color.
// Static
// Contrast created the shadow and slight shift of background towards white



import QtQuick 2.8
import org.kde.plasma.core 2.0 as PlasmaCore
import QtGraphicalEffects 1.15

import "../../components"

Item {
    id: background
    // property alias secondItemToComplete: blurredBackground.secondItemToComplete

    required property color buttonColor

    //set this for the button's padding (assuming it's even all around)
    property int padding


    //attempting to log in temporarily disables everything
    // opacity: enabled ? 1 : 0.5

    anchors.fill: parent

// opacity: parent.parent.hovered || parent.parent.visualFocus || parent.parent.checked ? 0.15 : 0
    Item {
        id: buttonBackground
        anchors.fill: parent
        visible: false

        DelayedAdaptiveBlurredRegion {
            id: blurredBackground
            targetSource: wallpaper
            backgroundColor: buttonColor
            radius: 120
            anchors.fill: parent
        }
        Rectangle {
            id: buttonHover
            anchors.fill: blurredBackground
            color: "white"
            // opacity: 0.2
            opacity: parent.parent.parent.hovered ? 0.15 : 0
        }
    }
    Rectangle {
        id: mask
        anchors.fill: parent
        radius: height / 2
        visible: false
    }
    OpacityMask {
        anchors.fill: parent
        source: buttonBackground
        maskSource: mask
    }
}
