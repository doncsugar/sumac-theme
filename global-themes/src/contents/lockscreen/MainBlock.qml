/*
    SPDX-FileCopyrightText: 2016 David Edmundson <davidedmundson@kde.org>

    SPDX-License-Identifier: LGPL-2.0-or-later
*/

import QtQuick 2.2

import QtQuick.Layouts 1.1

import org.kde.plasma.core 2.0 as PlasmaCore
import org.kde.plasma.components 3.0 as PlasmaComponents3
import org.kde.plasma.extras 2.0 as PlasmaExtras

import "../components"
import "../components/sumac"

import QtGraphicalEffects 1.15

SessionManagementScreen {

    property var passwordBoxRadius: passwordBackground.height / 2

    readonly property alias mainPasswordBox: passwordBox
    property bool lockScreenUiVisible: false
    property alias showPassword: passwordBox.showPassword

    //the y position that should be ensured visible when the on screen keyboard is visible
    property int visibleBoundary: mapFromItem(loginButton, 0, 0).y
    onHeightChanged: visibleBoundary = mapFromItem(loginButton, 0, 0).y + loginButton.height + PlasmaCore.Units.smallSpacing
    /*
     * Login has been requested with the following username and password
     * If username field is visible, it will be taken from that, otherwise from the "name" property of the currentIndex
     */
    signal passwordResult(string password)

    onUserSelected: {
        const nextControl = (passwordBox.visible ? passwordBox : loginButton);
        // Don't startLogin() here, because the signal is connected to the
        // Escape key as well, for which it wouldn't make sense to trigger
        // login. Using TabFocusReason, so that the loginButton gets the
        // visual highlight.
        nextControl.forceActiveFocus(Qt.TabFocusReason);
    }

    function startLogin() {
        const password = passwordBox.text

        // This is partly because it looks nicer, but more importantly it
        // works round a Qt bug that can trigger if the app is closed with a
        // TextField focused.
        //
        // See https://bugreports.qt.io/browse/QTBUG-55460
        loginButton.forceActiveFocus();
        passwordResult(password);
    }
    Item {

        Layout.fillWidth: true
        height: passwordSection.height

        DropShadow {
            anchors.fill: parent
            radius: 30
            samples: (this.radius * 2) + 1
            spread: 0.3
            verticalOffset: 3
            color: "black"
            opacity: 0.09375
            // color: "#10000000"
            source: passwordBackground
        }
// needs to be replaced
        BlurredToolButton3Background {
            id: passwordBackground
            anchors.fill: parent
            buttonColor: PlasmaCore.ColorScope.backgroundColor
            // secondItemToComplete: passwordSection
            // buttonColor: PlasmaCore.ColorScope.backgroundColor
        }
        PlasmaCore.ColorScope {
            id: normalSource
            colorGroup: PlasmaCore.Theme.NormalColorGroup
        }
        RowLayout {
            id: passwordSection
            Layout.fillWidth: true

            anchors.left: parent.left
            anchors.right: parent.right
            spacing: 0


            PlasmaExtras.PasswordField {
                id: passwordBox
                font.pointSize: PlasmaCore.Theme.defaultFont.pointSize + 1
                Layout.fillWidth: true

                background: Item {
                    property var padding: 6
                }

                leftPadding: Math.round((passwordBox.height - font.pointSize) / 2)
                // leftPadding: background.padding + ((LayoutMirroring.enabled * 3) + 1) * PlasmaCore.Units.mediumSpacing
                topPadding: background.padding
                rightPadding: Math.round((!LayoutMirroring.enabled) * (background.padding + (4) * PlasmaCore.Units.mediumSpacing))
                // added 1 to center Text
                bottomPadding: background.padding

                placeholderText: i18nd("plasma_lookandfeel_org.kde.lookandfeel", "Password")
                focus: true
                enabled: !authenticator.graceLocked

                // In Qt this is implicitly active based on focus rather than visibility
                // in any other application having a focussed invisible object would be weird
                // but here we are using to wake out of screensaver mode
                // We need to explicitly disable cursor flashing to avoid unnecessary renders
                cursorVisible: visible

                onAccepted: {
                    if (lockScreenUiVisible) {
                        startLogin();
                    }
                }
                placeholderTextColor: Qt.rgba(PlasmaCore.Theme.textColor.r, PlasmaCore.Theme.textColor.g, PlasmaCore.Theme.textColor.b, 0.6)

                //if empty and left or right is pressed change selection in user switch
                //this cannot be in keys.onLeftPressed as then it doesn't reach the password box
                Keys.onPressed: {
                    if (event.key == Qt.Key_Left && !text) {
                        userList.decrementCurrentIndex();
                        event.accepted = true
                    }
                    if (event.key == Qt.Key_Right && !text) {
                        userList.incrementCurrentIndex();
                        event.accepted = true
                    }
                }

                Connections {
                    target: root
                    function onClearPassword() {
                        passwordBox.forceActiveFocus()
                        passwordBox.text = "";
                    }
                }
            }

            PlasmaComponents3.Button {
                id: loginButton
                Accessible.name: i18nd("plasma_lookandfeel_org.kde.lookandfeel", "Unlock")
                Layout.preferredHeight: passwordBox.implicitHeight
                Layout.preferredWidth: loginButton.Layout.preferredHeight

                icon.name: LayoutMirroring.enabled ? "go-previous" : "go-next"

                background: Rectangle {
                    property var padding: 4
                    color: "transparent"
                    border.color: PlasmaCore.ColorScope.textColor
                    border.width: 1
                    // opacity: 0.1
                    radius: width / 2
                    anchors.margins: 4
                    anchors.fill: parent
                }

                leftPadding: background.padding
                topPadding: background.padding
                rightPadding: background.padding
                bottomPadding: background.padding

                onClicked: startLogin()
                Keys.onEnterPressed: clicked()
                Keys.onReturnPressed: clicked()
            }
        }
    }
}
