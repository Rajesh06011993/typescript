var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(name, age, password) {
        var _this = this;
        this.name = name;
        this.age = age;
        this.password = password;
        this.recommendedVideos = function () {
            return ("FIFA 2018 Goals");
        };
        this.getPassword = function () {
            return _this.password;
        };
        this.name = name;
        this.age = age;
        this.password = password;
    }
    return User;
}());
var Youtubevideo = /** @class */ (function () {
    function Youtubevideo(id, title, runtime, timeOfPosting) {
        var _this = this;
        this.id = id;
        this.title = title;
        this.runtime = runtime;
        this.timeOfPosting = timeOfPosting;
        this.noOfViews = function () {
            return "100k views";
        };
        this.getAgeOfVideo = function () {
            return 100 - _this.timeOfPosting + "days ago";
        };
        this.id = id;
        this.title = title;
        this.runtime = runtime;
        this.timeOfPosting = timeOfPosting;
    }
    return Youtubevideo;
}());
var playingVideo = /** @class */ (function (_super) {
    __extends(playingVideo, _super);
    function playingVideo(id, title, runtime, timeOfPosting, pause, captions, autoplay) {
        var _this = _super.call(this, id, title, runtime, timeOfPosting) || this;
        _this.pause = pause;
        _this.captions = captions;
        _this.autoplay = autoplay;
        _this.playTimeRemaing = function () {
            return (_this.runtime - 10);
        };
        _this.settingsOfVideo = function () {
            return ("playing videos two times faster");
        };
        _this.pause = pause;
        _this.captions = captions;
        _this.autoplay = autoplay;
        return _this;
    }
    return playingVideo;
}(Youtubevideo));
var newUser = new User("Rajesh", 25, "Pass");
var newplayingVideo = new playingVideo(568299, "World cup Highlights", 40, 2, false, false, false);
newplayingVideo.rated = "A";
newplayingVideo.descrpition = "This videos contains higlihts of 2018 world cup";
newplayingVideo.publishedBy = newUser.name;
console.log("Here is the User info");
console.log(newUser.name + " is the user with password " + newUser.getPassword() + " and his video \n           recomendations are \" " + newUser.recommendedVideos() + " \"");
console.log("Video posted information");
console.log("Title of video is " + newplayingVideo.title + ", runtime of this videos is " + newplayingVideo.runtime + "mins \nday of posting is " + newplayingVideo.timeOfPosting + " th day of month which hsa rating " + newplayingVideo.rated + "\nand published by " + newplayingVideo.publishedBy + " with description " + newplayingVideo.descrpition + "\n");
console.log("PLaying video information is below");
console.log("Title of video is " + newplayingVideo.title + " runtime left is " + newplayingVideo.playTimeRemaing() + " mins\nStatus of video is pause: " + newplayingVideo.pause + ", captions in english: " + newplayingVideo.captions + ", \nautoplay: " + newplayingVideo.autoplay + ", number of view " + newplayingVideo.noOfViews() + ", \n    posted " + newplayingVideo.getAgeOfVideo() + "  and currently " + newplayingVideo.settingsOfVideo() + "\n");
