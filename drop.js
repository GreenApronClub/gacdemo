var mongo = db.getMongo(); mongo.getDBNames().forEach(function (dbname){var db = mongo.getDB(dbname); db.dropDatabase();});
