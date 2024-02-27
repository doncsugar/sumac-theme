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

startmenu = menubar.addWidget("org.kde.plasma.kickoff")
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



menubar.addWidget("org.kde.plasma.marginsseparator")

menubar.addWidget("org.kde.plasma.pager")

pager_spacer = menubar.addWidget("org.kde.latte.spacer")
    pager_spacer.currentConfigGroup = ["General"]
    pager_spacer.writeConfig("containmentType", "Plasma")
    pager_spacer.writeConfig("lengthPixels", 16)

krunner = menubar.addWidget("com.github.configurable_button")
    krunner.currentConfigGroup = ["General"]
    krunner.writeConfig("iconOff", "_sumac_krunner")
    krunner.writeConfig("iconOn", "_sumac_krunner")
    krunner.writeConfig("offScript", "qdbus org.kde.kglobalaccel /component/org_kde_krunner_desktop invokeShortcut _launch")
    krunner.writeConfig("onScript", "qdbus org.kde.kglobalaccel /component/org_kde_krunner_desktop invokeShortcut _launch")
// very unfortunate that this has no visible controls
menubar.addWidget("org.kde.plasma.systemtray")

// consider standardizing the value used here
tray_spacer = menubar.addWidget("org.kde.latte.spacer")
    tray_spacer.currentConfigGroup = ["General"]
    tray_spacer.writeConfig("containmentType", "Plasma")
    tray_spacer.writeConfig("lengthPixels", 4)

common_toggles = menubar.addWidget("com.github.prayag2.controlcentre")
// end result is showing KDEconnect and Night Color
    common_toggles.currentConfigGroup = ["Appearance"]
    common_toggles.writeConfig("showColorSwitcher", false)
    common_toggles.writeConfig("showKDEConnect", true)
    common_toggles.writeConfig("mainIconName", "_sumac_controlcentre")

toggles_spacer = menubar.addWidget("org.kde.latte.spacer")
    toggles_spacer.currentConfigGroup = ["General"]
    toggles_spacer.writeConfig("containmentType", "Plasma")
    toggles_spacer.writeConfig("lengthPixels", 4)

clock = menubar.addWidget("org.kde.plasma.digitalclock")
    clock.currentConfigGroup = ["Appearance"]
    clock.writeConfig("customDateFormat", "ddd  MMM d")
    clock.writeConfig("dateDisplayFormat", "BesideTime")
    clock.writeConfig("dateFormat", "custom")
    //setting a thicker font weight to match icons
    clock.writeConfig("autoFontAndSize", false)
    clock.writeConfig("fontStyleName", "medium")
    clock.writeConfig("fontWeight", 57)




dock = new Panel
dock.location = "bottom"
dock.height = 60
dock.offset = 0
dock.maximumLength = max_desktop_width
dock.panelVisibility = 2
dock.minimumLength = 1
dock.alignment = "center"
//while i prefer this, macos has it to always reserve the space
dock.hiding = "windowscover"

app_launcher = dock.addWidget("P-Connor.PlasmaDrawer")
    app_launcher.currentConfigGroup = ["General"]
    app_launcher.writeConfig("backgroundOpacity", 45)
    // defaults to the background color black
    app_launcher.writeConfig("backgroundType", "custom")
    app_launcher.writeConfig("maxNumberColumns", 7)
    app_launcher.writeConfig("useCustomButtonImage", true)
    // depends on sumac icon theme
    app_launcher.writeConfig("customButtonImage", "_sumac_appdrawer")




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
    separator_spacer.writeConfig("lengthPixels", 1)

user_folder = dock.addWidget("org.kde.plasma.folder")
    user_folder.currentConfigGroup = ("General")
    user_folder.writeConfig("url", userDataPath("downloads"))
    // user_folder.writeConfig("labelMode", 0)
    user_folder.writeConfig("sortDesc", true)
    user_folder.writeConfig("sortDirsFirst", false)
    user_folder.writeConfig("sortMode", 2)
    user_folder.writeConfig("toolTips", true)

dock.addWidget("org.kde.plasma.trash")
