//docs
// https://develop.kde.org/docs/plasma/scripting/
// https://develop.kde.org/docs/plasma/scripting/examples/

var allDesktops = desktops()
var resolution = screenGeometry(allDesktops)
var max_desktop_width = resolution.width

menubar = new Panel
menubar.hiding = "none"
menubar.location = "top"
//menubar.height = 2 * Math.floor(gridUnit * 1.3 / 2)
//import org.kde.plasma.core 2.0 as PlasmaCore
//menubar.height = Math.floor(30 * PlasmaCore.Units.devicePixelRatio)
menubar.height = Math.floor(30)
menubar.maximumLength = max_desktop_width
menubar.minimumLength = max_desktop_width
menubar.offset = 0
menubar.floating = 0

//PRO only
// window_buttons = menubar.addWidget("org.kde.activeWindowControl")
//     window_buttons.currentConfigGroup = ["Appearance"]
//     window_buttons.writeConfig("buttonOrder", "close|minimize|maximize|alldesktops")
//     window_buttons.writeConfig("showMaximize", true)
//     window_buttons.writeConfig("showMinimize", true)
//     window_buttons.writeConfig("buttonSize", .73)
//     window_buttons.writeConfig("buttonsDynamicWidth", true)
//     window_buttons.writeConfig("buttonsStandalone", true)
//     window_buttons.writeConfig("buttonsVerticalCenter", true)
//     window_buttons.writeConfig("controlButtonsSpacing", 7)
//     window_buttons.writeConfig("customAuroraeThemePath", `${userDataPath()}/.local/share/aurorae/themes/summaculate-day-blur/`)
//     window_buttons.writeConfig("doNotHideControlButtons", true)
//     window_buttons.writeConfig("horizontalScreenWidthPercent", 64 / max_desktop_width)
//     window_buttons.writeConfig("showButtonOnlyWhenMaximized", true)
//     window_buttons.writeConfig("showWindowIcon", false)
//     window_buttons.writeConfig("showWindowTitle", false)
//
//     window_buttons.currentConfigGroup = ["Behavior"]
//     window_buttons.writeConfig("showForCurrentScreenOnly", true)

startmenu = menubar.addWidget("org.latgardi.darwinmenu")
    startmenu.currentConfigGroup = ["General"]
    // true looks more consistent, but window title has too much left padding
    startmenu.writeConfig("useRectangleButtonShape", false)
    // TODO replace with outline icon and package with icon set
    startmenu.writeConfig("icon", "start-here-kde-symbolic")
    startmenu.writeConfig("iconSizePercent", 70)

//menubar.addWidget("org.kde.plasma.kickoff")
// startmenu.currentConfigGroup = ["General"]
// startmenu.writeConfig()

window_title = menubar.addWidget("org.kde.windowtitle")
    window_title.currentConfigGroup = ["General"]
    window_title.writeConfig("containmentType", "Plasma")
    window_title.writeConfig("lengthFirstMargin", 2)
    window_title.writeConfig("lengthLastMargin", 1)
    window_title.writeConfig("lengthMarginsLock", false)
    window_title.writeConfig("showIcon", false)

menubar.addWidget("org.kde.plasma.appmenu")



menubar.addWidget("org.kde.plasma.panelspacer")



menubar.addWidget("org.kde.plasma.pager")

pager_spacer = menubar.addWidget("org.kde.latte.spacer")
    pager_spacer.currentConfigGroup = ["General"]
    pager_spacer.writeConfig("containmentType", "Plasma")
//TODO this value should be tied to the spacing produced by with system tray spacing, of which is derived from an integer multiplied by Kirigami.Units.smallSpacing
    pager_spacer.writeConfig("lengthPixels", 12)

//TODO add spacer

krunner = menubar.addWidget("com.github.configurable_button")
    krunner.currentConfigGroup = ["General"]
    krunner.writeConfig("iconOff", "_sumac_krunner")
    krunner.writeConfig("iconOn", "_sumac_krunner")
//TODO can be replaced with qdbus6 version, tested only on cachyos. Consider tahoe launcher instead
    krunner.writeConfig("offScript", "qdbus6 org.kde.kglobalaccel /component/org_kde_krunner_desktop invokeShortcut _launch")
    krunner.writeConfig("onScript", "qdbus6 org.kde.kglobalaccel /component/org_kde_krunner_desktop invokeShortcut _launch")

system_tray = menubar.addWidget("org.kde.plasma.systemtray")
    system_tray.currentConfigGroup = ["General"]
    //TODO derived from Kirigami.Units.smallSpacing times the integer
    system_tray.writeConfig("iconSpacing",5)

// consider standardizing the value used here
tray_spacer = menubar.addWidget("org.kde.latte.spacer")
    tray_spacer.currentConfigGroup = ["General"]
    tray_spacer.writeConfig("containmentType", "Plasma")
//TODO this value should be tied to the spacing produced by with system tray spacing, of which is derived from an integer multiplied by Kirigami.Units.smallSpacing
    tray_spacer.writeConfig("lengthPixels", 4)

common_toggles = menubar.addWidget("KdeControlStation")
    common_toggles.currentConfigGroup = ["Appearance"]
    // common_toggles.writeConfig("showColorSwitcher", false)
    // common_toggles.writeConfig("showKDEConnect", true)
    // TODO unsure what darkTheme and lightTheme keys are
    common_toggles.writeConfig("darkGlobalTheme", "org.kde.breezedark.desktop")
    common_toggles.writeConfig("darkTheme", "BreezeClassic")
    common_toggles.writeConfig("lightGlobalTheme", "org.kde.breeze.desktop")
    common_toggles.writeConfig("lightTheme", "BreezeClassic")

    common_toggles.writeConfig("showAvatar", false)
    common_toggles.writeConfig("usePlasmaSliders", true)
    // TODO is preferred, but does not work in the expected way, thus disabled and manually set.
    common_toggles.writeConfig("useSystemColorsOnToggles", false)
    common_toggles.writeConfig("toggleButtonsColor", "#FFFFFF")
    // TODO decision should be made as to whether or not this should be this blue color or breeze
    common_toggles.writeConfig("toggleButtonsIconColor", "#2682FF")
    // TODO may change for light versions
    // sets appearance of widgets
    common_toggles.writeConfig("showBorders", false)
    common_toggles.writeConfig("transparency", true)
    common_toggles.writeConfig("transparencyLevel", 10)
    // set expected icon under sumac
    common_toggles.writeConfig("useCustomButtonImage", true)
    common_toggles.writeConfig("customButtonImage", "_sumac_controlcentre")
    // 4 is custom layout option
    common_toggles.writeConfig("layout", 4)
    common_toggles.writeConfig("customLayoutModel",
    `[
        {
            "name": "network",
            "displayName": "Network",
            "colSpan": 2,
            "componentUrl": "../components/NetworkBtn.qml",
            "props": {
            "flat": false,
            "roundedWidget": true,
            "showTitle": true,
            "isLongButton": true
            },
            "actions": [
            {
                "name": "Long button",
                "checkable": true,
                "value": true,
                "changes": "isLongButton",
                "valueType": "size"
            },
            {
                "name": "Flat",
                "checkable": true,
                "value": false,
                "changes": "flat",
                "valueType": "bool"
            },
            {
                "name": "Round widget",
                "checkable": true,
                "value": true,
                "changes": "roundedWidget",
                "valueType": "bool"
            },
            {
                "name": "Show title",
                "checkable": true,
                "value": true,
                "changes": "showTitle",
                "valueType": "bool"
            }
            ]
        },
        {
            "name": "media",
            "displayName": "Media Player",
            "colSpan": 2,
            "componentUrl": "../components/MediaPlayer.qml",
            "props": {
            "flat": false,
            "roundedWidget": true,
            "isLongButton": false
            },
            "actions": [
            {
                "name": "Long button",
                "checkable": true,
                "value": false,
                "changes": "isLongButton",
                "valueType": "size"
            },
            {
                "name": "Flat",
                "checkable": true,
                "value": false,
                "changes": "flat",
                "valueType": "bool"
            },
            {
                "name": "Round widget",
                "checkable": true,
                "value": true,
                "changes": "roundedWidget",
                "valueType": "bool"
            }
            ],
            "height": 156,
            "rowSpan": 2
        },
        {
            "name": "bluetooth",
            "displayName": "Bluetooth",
            "colSpan": 2,
            "componentUrl": "../components/BluetoothBtn.qml",
            "props": {
            "flat": false,
            "roundedWidget": true,
            "showTitle": true,
            "isLongButton": true
            },
            "actions": [
            {
                "name": "Long button",
                "checkable": true,
                "value": true,
                "changes": "isLongButton",
                "valueType": "size"
            },
            {
                "name": "Flat",
                "checkable": true,
                "value": false,
                "changes": "flat",
                "valueType": "bool"
            },
            {
                "name": "Round widget",
                "checkable": true,
                "value": true,
                "changes": "roundedWidget",
                "valueType": "bool"
            },
            {
                "name": "Show title",
                "checkable": true,
                "value": true,
                "changes": "showTitle",
                "valueType": "bool"
            }
            ]
        },
        {
            "name": "kdeconnect",
            "displayName": "KDE Connect",
            "colSpan": 1,
            "componentUrl": "../components/KDEConnect.qml",
            "props": {
            "flat": false,
            "roundedWidget": true,
            "showTitle": false,
            "isLongButton": false
            },
            "actions": [
            {
                "name": "Long button",
                "checkable": true,
                "value": false,
                "changes": "isLongButton",
                "valueType": "size"
            },
            {
                "name": "Flat",
                "checkable": true,
                "value": false,
                "changes": "flat",
                "valueType": "bool"
            },
            {
                "name": "Round widget",
                "checkable": true,
                "value": true,
                "changes": "roundedWidget",
                "valueType": "bool"
            },
            {
                "name": "Show title",
                "checkable": true,
                "value": false,
                "changes": "showTitle",
                "valueType": "bool"
            }
            ]
        },
        {
            "name": "schemes",
            "displayName": "Color Scheme Switcher",
            "colSpan": 1,
            "componentUrl": "../components/ColorSchemeSwitcher.qml",
            "props": {
            "flat": false,
            "roundedWidget": true,
            "showTitle": false,
            "isLongButton": false
            },
            "actions": [
            {
                "name": "Long button",
                "checkable": true,
                "value": false,
                "changes": "isLongButton",
                "valueType": "size"
            },
            {
                "name": "Flat",
                "checkable": true,
                "value": false,
                "changes": "flat",
                "valueType": "bool"
            },
            {
                "name": "Round widget",
                "checkable": true,
                "value": true,
                "changes": "roundedWidget",
                "valueType": "bool"
            },
            {
                "name": "Show title",
                "checkable": true,
                "value": false,
                "changes": "showTitle",
                "valueType": "bool"
            }
            ]
        },
        {
            "name": "dnd",
            "displayName": "Do not disturb",
            "colSpan": 2,
            "componentUrl": "../components/DndButton.qml",
            "props": {
            "flat": false,
            "roundedWidget": true,
            "showTitle": true,
            "isLongButton": true
            },
            "actions": [
            {
                "name": "Long button",
                "checkable": true,
                "value": true,
                "changes": "isLongButton",
                "valueType": "size"
            },
            {
                "name": "Flat",
                "checkable": true,
                "value": false,
                "changes": "flat",
                "valueType": "bool"
            },
            {
                "name": "Round widget",
                "checkable": true,
                "value": true,
                "changes": "roundedWidget",
                "valueType": "bool"
            },
            {
                "name": "Show title",
                "checkable": true,
                "value": true,
                "changes": "showTitle",
                "valueType": "bool"
            }
            ]
        },
        {
            "name": "brightness",
            "displayName": "Brightness",
            "colSpan": 4,
            "componentUrl": "../components/BrightnessSlider.qml",
            "props": {
            "flat": false,
            "roundedWidget": true,
            "showTitle": true,
            "isLongButton": true
            },
            "actions": [
            {
                "name": "Long button",
                "checkable": true,
                "value": true,
                "changes": "isLongButton",
                "valueType": "size"
            },
            {
                "name": "Flat",
                "checkable": true,
                "value": false,
                "changes": "flat",
                "valueType": "bool"
            },
            {
                "name": "Round widget",
                "checkable": true,
                "value": true,
                "changes": "roundedWidget",
                "valueType": "bool"
            },
            {
                "name": "Show title",
                "checkable": true,
                "value": true,
                "changes": "showTitle",
                "valueType": "bool"
            }
            ]
        },
        {
            "name": "volume",
            "displayName": "Volume",
            "colSpan": 4,
            "componentUrl": "../components/Volume.qml",
            "props": {
            "flat": false,
            "roundedWidget": true,
            "showTitle": true,
            "isLongButton": true
            },
            "actions": [
            {
                "name": "Long button",
                "checkable": true,
                "value": true,
                "changes": "isLongButton",
                "valueType": "size"
            },
            {
                "name": "Flat",
                "checkable": true,
                "value": false,
                "changes": "flat",
                "valueType": "bool"
            },
            {
                "name": "Round widget",
                "checkable": true,
                "value": true,
                "changes": "roundedWidget",
                "valueType": "bool"
            },
            {
                "name": "Show title",
                "checkable": true,
                "value": true,
                "changes": "showTitle",
                "valueType": "bool"
            }
            ]
        }
    ]`
    )

menubar.addWidget("org.kde.plasma.marginsseparator")

toggles_spacer = menubar.addWidget("org.kde.latte.spacer")
    toggles_spacer.currentConfigGroup = ["General"]
    toggles_spacer.writeConfig("containmentType", "Plasma")
    //TODO this value should be tied to the spacing produced by with system tray spacing, of which is derived from an integer multiplied by Kirigami.Units.smallSpacing
    toggles_spacer.writeConfig("lengthPixels", 4)

clock = menubar.addWidget("org.kde.plasma.digitalclock")
    clock.currentConfigGroup = ["Appearance"]
    clock.writeConfig("customDateFormat", "ddd  MMM d ")
    clock.writeConfig("dateDisplayFormat", "BesideTime")
    clock.writeConfig("dateFormat", "custom")
    //setting a thicker font weight to match icons
    // Font family is not set here to inherit system
    clock.writeConfig("autoFontAndSize", false)
    clock.writeConfig("fontStyleName", "medium")
    //TODO verify if this needs to be 400-500, where does 57 come from?
    clock.writeConfig("fontWeight", 400)




dock = new Panel
dock.location = "bottom"
dock.height = 60
dock.offset = 0
dock.maximumLength = max_desktop_width
// TODO either deprecated or never existed, can likely be removed
dock.panelVisibility = 2
dock.minimumLength = 1
dock.alignment = "center"
dock.floating = 1
// Now called dodgewindows
//dock.hiding = "windowscover"
dock.hiding = "dodgewindows"
// New for plasma 6; custom mode works with legacy settings
dock.lengthMode = "fit"

app_launcher = dock.addWidget("TahoeLauncher")
    app_launcher.currentConfigGroup = ["General"]
    // 2 is Large
    app_launcher.writeConfig("appsIconSize", 2)
    // float in horizontal center of screen, consider screen center, 3 if binding to configurable_button
    app_launcher.writeConfig("floating", true)
    app_launcher.writeConfig("launcherPosition", 1)

    // defaults to the background color black
    app_launcher.writeConfig("backgroundType", "custom")
    // cannot exceed 6 columns as of 11/29/2025
    app_launcher.writeConfig("maxNumberColumns", 6)
    // depends on sumac icon theme
    app_launcher.writeConfig("useCustomButtonImage", true)
    //TODO replace with name of icon to be packaged with icon pack
    app_launcher.writeConfig("customButtonImage", "view-app-grid")




/*
var stock_dock_apps = {
    "file_browser" : "org.kde.dolphin.desktop",
    "web_browser" : defaultApplication("browser"),
    "messaging" : "",
    "email" : "",
    "maps" : "",
    "gallery" : "org.kde.gwenview.desktop",
    "video_chat" : "",
    "calendar" : "org.kde.kalendar",
    "contacts" : "",
    "reminders" : "",
    "notes" : "",
    "television" : "",
    "music" : "org.kde.elisa.desktop",
    "podcasts" : "org.kde.kasts",
    "news" : "",
    "software_store" : "org.kde.discover.desktop",
    "settings" : "systemsettings.desktop"
}
*/
/*
//Kontact combines kmail, korganizer, kaddressbook, akgregator, and knotes: org.kde.kontact.desktop

var extended_dock_apps = {
    "connect_phone" : "org.kde.kdeconnect",
    "screenshot" : "org.kde.spectacle.desktop",
    "resource_monitor" : "org.kde.plasma-systemmonitor",
    "terminal" : "org.kde.konsole.desktop",
    "text_editor" : "org.kde.kate.desktop",
    "video_player" : "",
    "video_editor" : "org.kde.kdenlive.desktop",
    "pdf_viewer" : "org.kde.okular.desktop",
    "disk_manager" : "org.kde.partitionmanager.desktop",
    "news_aggregator" : ["org.kde.alligator", "org.kde.akregator.desktop"],
    "photo_manager" : "org.kde.digikam.desktop"
    "usb_image_writer" : "org.kde.isoimagewriter.desktop",
    "torrent" : "org.kde.ktorrent.desktop",
    "screen_magnifier" : "org.kde.kmag.desktop"
}

var very_extended_apps = {
    "phone" : "org.kde.phone.dialer",
    "phonebook" : "org.kde.phonebook",
    "notes" : "org.kde.nota",
    "calculator" : "org.kde.kalk",

    "podcasts" : "org.kde.kasts"
}

*/

var stock_dock_apps = {
    "file_browser" : "preferred://filemanager",
    "web_browser" : "preferred://browser",
    "gallery" : "org.kde.gwenview.desktop",
    "calendar" : "org.kde.kalendar",
    "video" : "vlc.desktop",
    "music" : "org.kde.elisa.desktop",
    "podcasts" : "org.kde.kasts",
    "software_store" : "org.kde.discover.desktop",
    "settings" : "systemsettings.desktop",
    "terminal" : "org.kde.konsole.desktop"
}

let apps = []

Object.values(stock_dock_apps).forEach((app) => {
    if (app.startsWith("preferred://")) {
        apps.push(app)
    } else {
        if (applicationExists(app)) {
            apps.push("applications:" + app)
        }
    }
})

dock_apps = dock.addWidget("org.kde.plasma.icontasks")
    //consider settings maxStripes to 1 for 5.25
    dock_apps.currentConfigGroup = ["General"]
    dock_apps.writeConfig("launchers", apps)

// apps_spacer = menubar.addWidget("org.kde.latte.spacer")
    // apps_spacer.currentConfigGroup = ["General"]
    // apps_spacer.writeConfig("containmentType", "Plasma")
    // apps_spacer.writeConfig("lengthPixels", "4")

dock_separator = dock.addWidget("org.kde.latte.separator")

separator_spacer = dock.addWidget("org.kde.latte.spacer")
    separator_spacer.currentConfigGroup = ["General"]
    separator_spacer.writeConfig("containmentType", "Plasma")
    //TODO this value should be tied to the spacing produced by with system tray spacing, of which is derived from an integer multiplied by Kirigami.Units.smallSpacing
    separator_spacer.writeConfig("lengthPixels", 1)

user_folder = dock.addWidget("org.kde.plasma.folder")
    // set sizing of window
    user_folder.writeConfig("popupHeight", 300)
    user_folder.writeConfig("popupWidth", 200)

    user_folder.currentConfigGroup = ("General")
    //TODO confirm a nonsymbolic icon
    user_folder.writeConfig("useCustomIcon", true)
    user_folder.writeConfig("icon", "folder-downloads")
    user_folder.writeConfig("url", userDataPath("downloads"))
    // user_folder.writeConfig("labelMode", 0)
    user_folder.writeConfig("sortDesc", true)
    user_folder.writeConfig("sortDirsFirst", false)
    user_folder.writeConfig("sortMode", 2)
    user_folder.writeConfig("toolTips", true)


//TODO would be nice for there a way to set a custom icon now that it's forced symbolic
dock.addWidget("org.kde.plasma.trash")
