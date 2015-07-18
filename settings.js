'use strict';

var initSettings = function() {
  var settings = {
    // Etherpad instance title.
    "title": "codeaux-etherpad",

    // Favicon default name. Alternatively, set up a fully specified Url to your own favicon.
    "favicon": "favicon.ico",

    // IP and port which etherpad should bind to.
    //"ip": "0.0.0.0",
    "port": parseInt(process.env.PORT),

    // The Type of the database etherpad utilizes. Alternative options: `postgres`, `sqlite` or `mysql`.
    "dbType": process.env.DBTYPE,

    // Development stage Database settings. (Comment out accordingly)
    /*"dbSettings" : {
      "host": process.env.LOCALDB_HOST,
      "port": process.env.LOCALDB_PORT,
      "dbname": process.env.LOCALDB_DBNAME
    },*/

    // Production stage Database settings. (Comment out accordingly)
    "dbSettings": {
      "host": process.env.MONGOLAB_HOST,
      "port": parseInt(process.env.MONGOLAB_PORT),
      "dbname": process.env.MONGOLAB_DBNAME,
      "user": process.env.MONGOLAB_USERNAME,
      "password": process.env.MONGOLAB_PASSWORD
    },

    // This setting is used if you require authentication of all users.
    // Note: /admin always requires authentication.
    "requireAuthentication": false,

    // Require authorization by a module, or a user with is_admin set, see below.
    "requireAuthorization": false,

    // Users for basic authentication. is_admin = true gives access to /admin.
    // If this is commented, admin will be unavailable.
    "users": {
      "admin": {
        "password": process.env.ETHERPAD_ADMIN_PASSWORD,
        "is_admin": true
      }
    },

    // Default text displayed on a pad.
    "defaultPadText": "",

    // Default Pad behavior, users can override it.
    "padOptions": {
      "noColors": false,
      "showControls": true,
      "showChat": true,
      "showLineNumbers": true,
      "useMonospaceFont": false,
      "userName": false,
      "userColor": false,
      "rtl": false,
      "alwaysShowChat": false,
      "chatAndUsers": false,
      "lang": "en-gb"
    },

    // Suppress errors from being visible in the default pad text.
    "suppressErrorsInPadText": false,

    // Users must have a session to access pads. This effectively allows only group pads to be accessed.
    "requireSession": false,

    // Users may edit pads but not create new ones. Pad creation is only via the API.
    // This applies both to group pads and regular pads.
    "editOnly": false,

    // Users who have a valid session are automatically granted access to password protected pads.
    "sessionNoPassword": false,

    // All css & js will be minified before sending to the client.
    // This will improve the loading performance massivly, but makes it impossible to debug the javascript/css.
    "minify": true,

    // How long (in seconds) clients use served javascript code.
    // Without versioning this may cause problems during deployment. Set to 0 to disable caching.
    "maxAge": 21600, // 60 * 60 * 6 = 6 hours

    // This is the path to the Abiword executable. Setting it to null, disables abiword.
    // Abiword is needed to advanced import/export features of pads.
    "abiword": null,

    // Allow import of file types other than the supported types: txt, doc, docx, rtf, odt, html & htm.
    "allowUnknownFileEnds": true,

    // Allow Load Testing tools to hit the Etherpad Instance.
    // Warning this will disable security on the instance.
    "loadTest": false,

    // When you use NginX or another proxy/ load-balancer set this to true.
    "trustProxy": false,

    // Restrict socket.io transport methods.
    "socketTransportProtocols": ["xhr-polling", "jsonp-polling", "htmlfile"],

    // Privacy: disable IP logging.
    "disableIPlogging": false,

    // The log level we are using, can be: DEBUG, INFO, WARN, ERROR.
    "loglevel": "INFO",

    //Logging configuration. See log4js documentation for further information.
    // https://github.com/nomiddlename/log4js-node
    // You can add as many appenders as you want here.
    "logconfig": {
      "appenders": [
        {
          "type": "console"//,
          //"category": "access" // Only logs pad access.
        }//,
      /*
        {
          "type": "file",
          "filename": "your-log-file-here.log",
          "maxLogSize": 1024,
          "backups": 3, // How many log files there're gonna be at max.
          "category": "test" // Only log a specific category.
        },
      */
      /*
        {
          "type": "logLevelFilter",
          "level": "warn", // Filters out all log messages that have a lower level than "error".
          "appender": {
            // Use whatever appender you want here.
          }
        },
      */
      /*
        {
          "type": "logLevelFilter",
          "level": "error", // Filters out all log messages that have a lower level than "error".
          "appender": {
            "type": "smtp",
            "subject": "An error occured in your EPL instance!",
            "recipients": "bar@blurdybloop.com, baz@blurdybloop.com",
            "sendInterval": 60*5, // In secs -- will buffer log messages; set to 0 to send a mail for every message.
            "transport": "SMTP", "SMTP": { // see https://github.com/andris9/Nodemailer#possible-transport-methods
                "host": "smtp.example.com", "port": 465,
                "secureConnection": true,
                "auth": {
                    "user": "foo@example.com",
                    "pass": "bar_foo"
                }
              }
          }
        }*/
      ]
    }//,

    /*
    // Toolbar buttons configuration.
    "toolbar": {
      "left": [
        ["bold", "italic", "underline", "strikethrough"],
        ["orderedlist", "unorderedlist", "indent", "outdent"],
        ["undo", "redo"],
        ["clearauthorship"]
      ],
      "right": [
        ["importexport", "timeslider", "savedrevision"],
        ["settings", "embed"],
        ["showusers"]
      ],
      "timeslider": [
        ["timeslider_export", "timeslider_returnToPad"]
      ]
    },
    */

    /*
    // Node native SSL support.
    // this is disabled by default.
    //
    // make sure to have the minimum and correct file access permissions set.
    // so that the Etherpad server can access them.

    "ssl": {
      "key"  : "/path-to-your/epl-server.key",
      "cert" : "/path-to-your/epl-server.crt",
      "ca": ["/path-to-your/epl-intermediate-cert1.crt", "/path-to-your/epl-intermediate-cert2.crt"]
    }//,
    */
  }

  return settings;
};


/*
 * Export etherpad settings object.
 */
module.exports = initSettings();
