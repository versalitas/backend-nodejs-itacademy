
db.dropDatabase()
use youtube

db.createCollection("users")
db.createCollection("videos")


db.users.insertOne({
    "userId": ObjectId("5349b4ddd2781d08c09890f1"), 
    "name": "Hailey Hansen", 
    "mail": "hailey@hotmail.com" , 
    "password": "hellohailey1987", 
    "birthdate": ISODate("1985-02-02T23:30:15.123Z"), 
    "zipcode": 980008, 
    "channel" : {"name": "furry friends", "content": "cats galore", "creation":  ISODate("2022-02-02T23:30:15.123Z"),
    "subscriberCount" : 1,
    "subscribers": [ObjectId("5349b4ddd2781d08c09890f1"),]},
    "playList": [{"name": "DIY projects", "creation" : ISODate("2021-02-02T23:30:15.123Z"), "state": "private","video" : [ObjectId("4449b4ddd2781d08c09890f1"),]},
    {"name": "Yummy recipes", "creation" : ISODate("2021-05-02T23:30:15.123Z"), "state": "public", "video" : [ObjectId("4449b4ddd2781d08c09890f2"),]} ]
 }
)


db.users.insertOne({
    "userId": ObjectId("5349b4ddd2781d08c09890f2"), 
    "name": "Stan Smith", 
    "mail": "stantheman@gmail.com" , 
    "password": "qwerty123", 
    "birthdate": ISODate("1985-02-02T23:30:15.123Z"), 
    "zipcode": 880008, 
    "channel" : {"name": "bonsai bonanza", "content": "bonsai", "creation":  ISODate("2022-02-02T23:30:15.123Z"),
    "subscriberCount" : 1,
    "subscribers": [ObjectId("5349b4ddd2781d08c09890f2"),]},
    "playList": [{"name": "manifesting", "creation" : ISODate("2021-02-02T23:30:15.123Z"), "state": "private", "video" : [ObjectId("4449b4ddd2781d08c09890f3"),]},
    {"name": "all planks", "creation" : ISODate("2021-05-02T23:30:15.123Z"), "state": "public", "video" : [ObjectId("4449b4ddd2781d08c09890f4"),]} ]
 }
)

db.videos.insertOne({"videoId" : ObjectId("4449b4ddd2781d08c09890f1"),
    "title": "crazy cats"  ,
    "description" : "cats going berserk" ,
    "fileSize" : 65  ,
    "duration":  3600 , 
    "thumbnailUrl" : "https://somepath/def_kittycat.jpg" ,
    "views" : 567000  ,
    "state" : "public",
    "uploadDate" : ISODate("2021-08-02T23:30:15.123Z"),
    "creatorId" : ObjectId("5349b4ddd2781d08c09890f2"),
    // computed pattern
    "likesCount": 1,
    "dislikesCount": 0,
    "likeVideo" : [{"userId" : ObjectId("4449b4ddd2781d08c09890f2"), "like" : true , "date" : ISODate("2021-08-02T23:30:15.123Z")},],
    "comment":[{
        "commenterId": ObjectId("4449b4ddd2781d08c09890f2") ,
        "comment": "Soooo cute!!!!! Adorei!" , 
        "creation" : ISODate("2021-08-02T23:30:15.123Z")},],
        // computed pattern
        "likesCount" : 1 ,
        "disLikesCount": 0,
        "likeComment" : [{"userId" : ObjectId("4449b4ddd2781d08c09890f2"), "like" : true , "date" : ISODate("2021-08-02T23:30:15.123Z")},],

   "tag": [ "cat", "kitten", "furryfriend", "feistyfelines"],

})
    

db.videos.insertOne({"videoId" : ObjectId("4449b4ddd2781d08c09890f2"),
    "title": "french toast"  ,
    "description" : "perfect french toast" ,
    "fileSize" : 65  ,
    "duration":  1800 , 
    "thumbnailUrl" : "https://somepath/def_frenchtoast.jpg" ,
    "views" : 1670  ,
    "state" : "public",
    "uploadDate" : ISODate("2021-09-02T23:30:15.123Z"),
    "creatorId" : ObjectId("5349b4ddd2781d08c09890f2"),
    // computed pattern
    "likesCount": 0,
    "dislikesCount": 0,
    
     "tag": [ "brunch", "sweet tooth",],

})    
      
    


db.videos.insertOne({"videoId" : ObjectId("4449b4ddd2781d08c09890f3"),
    "title": "mossoak bonsai"  ,
    "description" : "50 yeatr old mossoak bonsai" ,
    "fileSize" : 75  ,
    "duration":  3900 , 
    "thumbnailUrl" : "https://somepath/def_bonsai.jpg" ,
    "views" : 467  ,
    "state" : "public",
    "uploadDate" : ISODate("2021-08-02T23:30:15.123Z"),
    "creatorId" : ObjectId("5349b4ddd2781d08c09890f2"),
    // computed pattern
    "likesCount": 1,
    "dislikesCount": 0,
    "likeVideo" : [{"userId" : ObjectId("4449b4ddd2781d08c09890f1"), "like" : true , "date" : ISODate("2021-08-02T23:30:15.123Z")},],


    "comment":[{
        "commenterId": ObjectId("4449b4ddd2781d08c09890f1") ,
        "comment": "Quite impressive. I've just started my own bonsai project." , 
        "creation" : ISODate("2020-08-02T23:30:15.123Z")},],
        // computed pattern
        "likesCount" : 1 ,
        "disLikesCount": 0,
        "likeComment" : [{"userId" : ObjectId("4449b4ddd2781d08c09890f1"), "like" : true , "date" : ISODate("2021-08-02T23:30:15.123Z")},],

   "tag": [ "bonsai", "green fingers", "mindfullness"],

})

    
db.video.insertOne({"videoId" : ObjectId("4449b4ddd2781d08c09890f2"),
    "title": "manifesting diary"  ,
    "description" : "manifesting a new home" ,
    "fileSize" : 65  ,
    "duration":  1800 , 
    "thumbnailUrl" : "https://somepath/def_frenchtoast.jpg" ,
    "state" : "private",
    "uploadDate" : ISODate("2021-09-02T23:30:15.123Z"),
    "creatorId" : ObjectId("5349b4ddd2781d08c09890f2"),
    

})    
   


