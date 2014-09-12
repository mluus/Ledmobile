var yourname = {};
yourname.app = {

    initialize: function() {
  		document.addEventListener('deviceready', this.onDeviceReady, false);
      },

    onDeviceReady: function() {
  		FastClick.attach(document.body);
      yourname.app.receivedEvent('deviceready');
      },

    receivedEvent: function(id) {

        console.log('here the functions works');

    /**
 * Function that creates a BeaconRegion data transfer object.
 *
 * @throws Error if the BeaconRegion parameters are not valid.
 */
        function createBeacon() {

            var uuid = 'DA5336AE-2042-453A-A57F-F80DD34DFCD9'; // mandatory
            var identifier = 'beaconAtTheMacBooks'; // mandatory
            var minor = 1000; // optional, defaults to wildcard if left empty
            var major = 5; // optional, defaults to wildcard if left empty

            // throws an error if the parameters are not valid
            var beaconRegion = new cordova.plugins.locationManager.BeaconRegion(identifier, uuid, major, minor);

            return beaconRegion;
        }

          /*reating BeaconRegion DTOs*/

        var logToDom = function (message) {
          var e = document.createElement('label');
          e.innerText = message;

          var br = document.createElement('br');
          var br2 = document.createElement('br');
          document.body.appendChild(e);
          document.body.appendChild(br);
          document.body.appendChild(br2);

          window.scrollTo(0, window.document.height);
      };

      var doSomething = function (state) {
            if (state === "CLRegionStateOutside") {
                return console.log('out');
            } else if (state === "CLRegionStateInside") {
                return console.log('in')
            } else {
                return console.log('else');
            }
        };

      var delegate = new cordova.plugins.locationManager.Delegate().implement({

          didDetermineStateForRegion: function (pluginResult) {

              logToDom('[DOM] didDetermineStateForRegion: ' + JSON.stringify(pluginResult));

              cordova.plugins.locationManager.appendToDeviceLog('[DOM] didDetermineStateForRegion: '
                  + JSON.stringify(pluginResult));
              doSomething(pluginResult.state)
          },

          didStartMonitoringForRegion: function (pluginResult) {
              console.log('didStartMonitoringForRegion:', pluginResult);

              logToDom('didStartMonitoringForRegion:' + JSON.stringify(pluginResult));
          },

          didRangeBeaconsInRegion: function (pluginResult) {
              logToDom('[DOM] didRangeBeaconsInRegion: ' + JSON.stringify(pluginResult));
          }

      });

      var uuid = 'DA5336AE-2042-453A-A57F-F80DD34DFCD9';
      var identifier = 'beaconOnTheMacBooksShelf';
      var minor = 1000;
      var major = 5;
      var beaconRegion = new cordova.plugins.locationManager.BeaconRegion(identifier, uuid, major, minor);

      cordova.plugins.locationManager.setDelegate(delegate);
      cordova.plugins.locationManager.startMonitoringForRegion(beaconRegion)
          .fail(console.error)
          .done();
    }
};