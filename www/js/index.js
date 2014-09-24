var yourname = {}
var currentTokens
var getTokens = function() {
         console.log('autoload')
        var engineerUuid = device.uuid;
        console.log(engineerUuid);
        var actualIp = "192.168.100.165:3000"
        var URL = "http://" + actualIp + "/engineer/" + engineerUuid
        console.log(URL)
        object = {
            url:  URL,
            type: 'GET',
            dataType: 'json',
            contentType: 'application/json',
            processData: false,
            // data: JSON.stringify(myData),
            success: function(resp){
                // currentTokens = resp
                console.log(currentTokens)
                sentence = 'Available Tokens:' +  " " + resp
                var element = document.getElementById("header");
                element.innerHTML = sentence;
            }
        }
        $.ajax(object);
        return false;

    }



yourname.app = {

    initialize: function() {
  		document.addEventListener('deviceready', this.onDeviceReady, false);
      },

    onDeviceReady: function() {
  		FastClick.attach(document.body);
      yourname.app.receivedEvent('deviceready');
      setInterval(function(){getTokens()}, 1000);
      },

    receivedEvent: function(id) {
        var switchOn = function() {
            // $(".ui-mobile .ui-page").css("background-color","#4dad49");
            console.log('notice the server that the phone is in the beacon region')
            var engineerUuid = device.uuid;
            console.log(engineerUuid);
            var actualIp = "192.168.100.165:3000"
            var URL = "http://" + actualIp + "/engineer/" + engineerUuid
            console.log(URL)
            object = {
                url:  URL,
                type: 'PUT',
                dataType: 'json',
                contentType: 'application/json',
                processData: false,
                // data: JSON.stringify(myData),
                success: function(resp){
                }
            }
            $.ajax(object);
            return false;
        }

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
                return $(".ui-mobile .ui-page").css("background-color","white");
            } else if (state === "CLRegionStateInside") {
                return switchOn();
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

        $('#click').click(function(){
            console.log('clicked')
            var password = $("#password").val();
            var engineerUuid = device.uuid;
            console.log(engineerUuid);
            console.log(password)
            var actualIp = "192.168.100.165:3000"
            var URL = "http://" + actualIp + "/engineer/associate/" + engineerUuid + "/to/" + password
            console.log(URL)
             // myData =  {engineer:
             //            {
             //             device: cardholderUuid,
             //             password: password,}}
            object = {
                url:  URL,
                type: 'PUT',
                dataType: 'json',
                contentType: 'application/json',
                processData: false,
                // data: JSON.stringify(myData),
                success: function(resp){
                }
            }
            $.ajax(object);
            $(':mobile-pagecontainer').pagecontainer('change', '#next', {
                transition: 'flip',
                changeHash: false,
                reverse: true,
                showLoadMsg: true
            });
            return false;
        });

        $('#click2').click(function(){
            console.log('clicked2')
            var engineerUuid = device.uuid;
            console.log(engineerUuid);
            var actualIp = "192.168.100.165:3000"
            var URL = "http://" + actualIp + "/engineer/" + engineerUuid
            console.log(URL)
             // myData =  {engineer:
             //            {
             //             device: cardholderUuid,
             //             password: password,}}
            object = {
                url:  URL,
                type: 'GET',
                dataType: 'json',
                contentType: 'application/json',
                processData: false,
                // data: JSON.stringify(myData),
                success: function(resp){
                    currentTokens = resp
                    console.log(currentTokens)
                    $( "p" ).append(currentTokens);
                }
            }
            $.ajax(object);
            return false;
        });

    }
};