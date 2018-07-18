

class User{
    constructor(public name: string,protected age: number,private password: string){
        this.name = name;
        this.age = age;
        this.password =password;
    }
    recommendedVideos = ()=>{
        return("FIFA 2018 Goals")
    }
    getPassword = ()=>{
        return this.password;
    }
}


class Youtubevideo{
   
   constructor( protected id:number,public title:string, public runtime:number, public timeOfPosting:number ){
    this.id = id;
    this.title = title;
    this.runtime = runtime;
    this.timeOfPosting = timeOfPosting;
   }
   
    publishedBy:string;
    rated: string
    descrpition:string;

    noOfViews= ()=>{
        return "100k views";
    }
    getAgeOfVideo=()=>{
      return 100 - this.timeOfPosting+"days ago" 
    }
}


class playingVideo extends Youtubevideo{
   
    constructor( id:number, title:string,  runtime:number,  timeOfPosting:number, public pause:boolean, 
            public captions:boolean, public autoplay:boolean){
        super(id,title,runtime,timeOfPosting);
        this.pause = pause;
        this.captions=captions;
        this.autoplay = autoplay;
    }
    playTimeRemaing=()=>{
    return(this.runtime - 10 )
    }
   
    settingsOfVideo=()=>{
        return("playing videos two times faster")
    }
} 

let newUser = new User("Rajesh",25,"Pass");
let newplayingVideo = new playingVideo(568299,"World cup Highlights",40,2,false,false,false);

newplayingVideo.rated = "A";
newplayingVideo.descrpition = "This videos contains higlihts of 2018 world cup";
newplayingVideo.publishedBy = newUser.name;


console.log("Here is the User info");

console.log(`${newUser.name} is the user with password ${newUser.getPassword()} and his video 
           recomendations are " ${newUser.recommendedVideos()} "`)

console.log("Video posted information");

console.log(`Title of video is ${newplayingVideo.title}, runtime of this videos is ${newplayingVideo.runtime}mins 
day of posting is ${newplayingVideo.timeOfPosting} th day of month which hsa rating ${newplayingVideo.rated }
and published by ${newplayingVideo.publishedBy} with description ${newplayingVideo.descrpition}
`)

console.log("PLaying video information is below")

console.log(`Title of video is ${newplayingVideo.title} runtime left is ${newplayingVideo.playTimeRemaing()} mins
Status of video is pause: ${newplayingVideo.pause}, captions in english: ${newplayingVideo.captions}, 
autoplay: ${newplayingVideo.autoplay}, number of view ${newplayingVideo.noOfViews()}, 
    posted ${newplayingVideo.getAgeOfVideo()}  and currently ${newplayingVideo.settingsOfVideo()}
`)