function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "foo/" + s : s.substring(0, index) + "/foo/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("foo");
    this.__widgetId = "foo";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.foo = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget @ %^$%^$%$^%$^%",
        customTitle: "Hello",
        id: "foo"
    });
    $.__views.foo && $.addTopLevelView($.__views.foo);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;