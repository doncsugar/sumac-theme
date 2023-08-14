import QtQuick 2.15
import QtGraphicalEffects 1.15

Item {
    property var shadowSource: {}
    property var shadowRadius: {}
    property var shadowColor: {}

    DropShadow {
        anchors.fill: parent
        radius: shadowRadius / 2
        samples: (this.radius * 2) + 1
        spread: 0.5
        color: shadowColor != null ? shadowColor : "black"
        opacity: .25
        source: shadowSource
    }

    DropShadow {
        anchors.fill: parent
        radius: 2
        samples: (this.radius * 2) + 1
        spread: 0.6
        color: shadowColor != null ? shadowColor : "black"
        opacity: 0.2
        source: shadowSource
    }
}
