db.dropDatabase()
use optica

db.createCollection("clients")
db.createCollection("supplier")

db.clients.insertOne({"clientId": ObjectId("5349b4ddd2781d08c09890f2"), 
    "clientName" : "Alison Ardwaark",
    "phoneNumber" : 92785989, 
    "mail" : "alisonaard@gmail.com",
    "recommendedById" : ObjectId("5349b4ddd2781d08c09890f1"),
    
    "address" : {
        "streetName" : "Austin Avenue" , 
        "streetNumber" : 3, 
        "addressfloor" : 5, 
        "apartment" : 6, 
        "city" : "Anaheim", 
        "zipcode" : 080067, 
    },
    "glasses": [
           {"glassesId" : ObjectId("5536b4ddd2781d08c09890f1"), 
            "lenses" : {
            "leftEye": 5.5,
            "rightEye": 3.5,
            "color": "stormy weather"},
            "brand" : {
                "brandId" : ObjectId("8836b4ddd2781d08c09890f1"),
                "brandName" : "Skaga",
                "frameType" : "wraparound",
                "frameColour" :"blue steel",
                },
            "sale": {
                "saleDate" : ISODate("2020-03-03T23:30:15.123Z"),
                "employeeId" : ObjectId("3336b4ddd2781d08c09890f1"),
                "employeeName" : "Sam Smith",
                },
            }, 
            
            {"glassesId" : ObjectId("5536b4ddd2781d08c09890f2"), 
            "lenses" : {
            "leftEye": 5.5,
            "rightEye": 4.5,
            "color": "lt grey"},
            "price" : 350,
            "brand" : {
                "brandId" : ObjectId("8836b4ddd2781d08c09890f2"),
                "brandName" : "Persol",
                "frameType" : "acetate",
                "frameColour" :"very black",
                },
            "sale": {
                "saleDate" : ISODate("2022-01-03T23:30:15.123Z"),
                "employeeId" : ObjectId("3336b4ddd2781d08c09890f2"),
                "employeeName" : "Sunny Salmon",
                
                },
            },
        ], 
 })

db.suppliers.insertOne({"supplierId" : ObjectId("5349b4ddd2781d08c09890f1"), 
    "supplierName" : "tot Ulleres",
    "telefon" : 95785989,
    "fax": 95785980,
    "address" : {"streetName" : "Sleaze Street", 
                 "streetNumber" : 6,
                 "floor" : 3,
                 "apartment" : 2,
                 "zipcode" : 09007, 
                 "city" : "Somecity",
                 },
    "glasses" : [ObjectId("5536b4ddd2781d08c09890f1"), ObjectId("5536b4ddd2781d08c09890f2")],
})


db.suppliers.insertOne({"supplierId" : ObjectId("5349b4ddd2781d08c09890f2"), 
"supplierName" : "totgafa",
"telefon" : 93785989,
"fax": 93785980,
"address" : {"streetName" : "Kerching Street", 
             "streetNumber" : 9,
             "zipcode" : 09007, 
             "city" : "Anothercity",
             },

})

