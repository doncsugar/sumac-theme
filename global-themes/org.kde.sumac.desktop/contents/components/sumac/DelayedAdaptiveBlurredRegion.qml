import QtQuick 2.15
import QtGraphicalEffects 1.15

// the real architecture is that the fade in should be attached to the whole item and that it should fade in after the second has passed.

Item {
    property alias targetSource: shaderSource.sourceItem
    //redundant?
    property var offset: this.mapToItem(targetSource, 0, 0)
    property alias radius: blur.radius
    property var backgroundColor: {}

// very hacky and questionable method to delay call so the blur is in the correct place
    Timer {
        id: delayTimer
        interval: 1000
        onTriggered: {
            offset = parent.mapToItem(targetSource, 0, 0)
            blur.visible = true
            fadeInAnimation.running = true
        }
    }
    Item {
        id: blurredRegion
        anchors.fill: parent
        // visible: false
        opacity: 0
        NumberAnimation on opacity {
            id: fadeInAnimation
            running: false
            from: 0; to: 1
            duration: 1000
        }
        ShaderEffectSource {
            id: shaderSource

            anchors.fill: parent
            sourceRect: Qt.rect(offset.x, offset.y, this.width, this.height)
            visible: false
        }
        FastBlur {
            id: blur
            anchors.fill: shaderSource
            source: shaderSource
            // not sure this helps
            visible: false
        }
        BrightnessContrast {
            id: flattenFilter
            anchors.fill: blur
            source: blur
            contrast: -0.33
            brightness: 0.2
            visible: false
        }
        HueSaturation {
            id: saturateFilter
            anchors.fill: flattenFilter
            source: flattenFilter
            saturation: 1.5
            // opacity: 0
            // visible: false
        }
        Rectangle {
            id: blurTint
            anchors.fill: saturateFilter
            opacity: 0.3
            // color: "white"
            color: backgroundColor
        }
    }


    Rectangle {
        id: opaqueBackground
        anchors.fill: blurredRegion
        visible: false

        color: "transparent"
        // color: backgroundColor

        Component.onCompleted: delayTimer.start()
    }
}
