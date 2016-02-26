Parse.Cloud.beforeSave(Parse.User, function (request, response) {
    //check if user being saved has profile picture.
    if (!request.object.has("profilePic")) {
        Parse.Config.get().then(function(config) {
            request.object.set("profilePic", config.get("defaultAvatar"));
            response.success();
        });
    }
    if (!request.object.has("address")) {
        Parse.Config.get().then(function(config) {
            request.object.set("address", "Address");
            response.success();
        });
    }
    if (!request.object.has("city")) {
        Parse.Config.get().then(function(config) {
            request.object.set("city", "City");
            response.success();
        });
    }
    if (!request.object.has("country")) {
        Parse.Config.get().then(function(config) {
            request.object.set("country","Country");
            response.success();
        });
    } 
    else {
        response.success();
    }
});