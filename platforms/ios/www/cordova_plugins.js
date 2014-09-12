cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/org.apache.cordova.device/www/device.js",
        "id": "org.apache.cordova.device.device",
        "clobbers": [
            "device"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.console/www/console-via-logger.js",
        "id": "org.apache.cordova.console.console",
        "clobbers": [
            "console"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.console/www/logger.js",
        "id": "org.apache.cordova.console.logger",
        "clobbers": [
            "cordova.logger"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.device-motion/www/Acceleration.js",
        "id": "org.apache.cordova.device-motion.Acceleration",
        "clobbers": [
            "Acceleration"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.device-motion/www/accelerometer.js",
        "id": "org.apache.cordova.device-motion.accelerometer",
        "clobbers": [
            "navigator.accelerometer"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.device-orientation/www/CompassError.js",
        "id": "org.apache.cordova.device-orientation.CompassError",
        "clobbers": [
            "CompassError"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.device-orientation/www/CompassHeading.js",
        "id": "org.apache.cordova.device-orientation.CompassHeading",
        "clobbers": [
            "CompassHeading"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.device-orientation/www/compass.js",
        "id": "org.apache.cordova.device-orientation.compass",
        "clobbers": [
            "navigator.compass"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.geolocation/www/Coordinates.js",
        "id": "org.apache.cordova.geolocation.Coordinates",
        "clobbers": [
            "Coordinates"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.geolocation/www/PositionError.js",
        "id": "org.apache.cordova.geolocation.PositionError",
        "clobbers": [
            "PositionError"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.geolocation/www/Position.js",
        "id": "org.apache.cordova.geolocation.Position",
        "clobbers": [
            "Position"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.geolocation/www/geolocation.js",
        "id": "org.apache.cordova.geolocation.geolocation",
        "clobbers": [
            "navigator.geolocation"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.ibeacon/www/lib/underscore-min-1.6.js",
        "id": "org.apache.cordova.ibeacon.underscorejs",
        "runs": true
    },
    {
        "file": "plugins/org.apache.cordova.ibeacon/www/lib/klass.min.js",
        "id": "org.apache.cordova.ibeacon.klass"
    },
    {
        "file": "plugins/org.apache.cordova.ibeacon/www/lib/q.min.js",
        "id": "org.apache.cordova.ibeacon.Q",
        "runs": true
    },
    {
        "file": "plugins/org.apache.cordova.ibeacon/www/LocationManager.js",
        "id": "org.apache.cordova.ibeacon.LocationManager",
        "clobbers": [
            "cordova.plugins"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.ibeacon/www/Delegate.js",
        "id": "org.apache.cordova.ibeacon.Delegate",
        "runs": true
    },
    {
        "file": "plugins/org.apache.cordova.ibeacon/www/model/Region.js",
        "id": "org.apache.cordova.ibeacon.Region",
        "runs": true
    },
    {
        "file": "plugins/org.apache.cordova.ibeacon/www/Regions.js",
        "id": "org.apache.cordova.ibeacon.Regions",
        "runs": true
    },
    {
        "file": "plugins/org.apache.cordova.ibeacon/www/model/CircularRegion.js",
        "id": "org.apache.cordova.ibeacon.CircularRegion",
        "runs": true
    },
    {
        "file": "plugins/org.apache.cordova.ibeacon/www/model/BeaconRegion.js",
        "id": "org.apache.cordova.ibeacon.BeaconRegion",
        "runs": true
    },
    {
        "file": "plugins/org.apache.cordova.dialogs/www/notification.js",
        "id": "org.apache.cordova.dialogs.notification",
        "merges": [
            "navigator.notification"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.splashscreen/www/splashscreen.js",
        "id": "org.apache.cordova.splashscreen.SplashScreen",
        "clobbers": [
            "navigator.splashscreen"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.statusbar/www/statusbar.js",
        "id": "org.apache.cordova.statusbar.statusbar",
        "clobbers": [
            "window.StatusBar"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "org.apache.cordova.device": "0.2.11",
    "org.apache.cordova.console": "0.2.10",
    "org.apache.cordova.device-motion": "0.2.9",
    "org.apache.cordova.device-orientation": "0.3.8",
    "org.apache.cordova.geolocation": "0.3.9",
    "org.apache.cordova.ibeacon": "2.1.0",
    "org.apache.cordova.dialogs": "0.2.9",
    "org.apache.cordova.splashscreen": "0.3.2",
    "org.apache.cordova.statusbar": "0.1.7"
}
// BOTTOM OF METADATA
});