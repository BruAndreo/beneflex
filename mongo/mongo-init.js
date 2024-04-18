db = db.getSiblingDB('beneflex');

db.createCollection('mmc_types');

db.mmc_types.insertMany(
    [
        {
            type: "Alimentação",
            mmcs: ["5411", "5812", "5813", "5814"]
        },
        {
            type: "Cultura",
            mmcs: ["5815", "5816", "5818", "5942", "7832", "7994", "7911", "7922", "7929"]
        },
        {
            type: "Home Office",
            mmcs: ["5200", "5722", "5943", "5045", "7379", "7622", "7629"]
        },
    ]
);
