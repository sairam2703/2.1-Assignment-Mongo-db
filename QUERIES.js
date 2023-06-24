Find the player with the most touchdown passes:
db.team.findOne({}, { _id: 0, name: 1 }).sort({ touchdownsThrown: -1 })

Find the player with the most rushing yards:
db.team.findOne({}, { _id: 0, name: 1 }).sort({ rushingYards: -1 })

Find the player with the least rushing yards:
db.team.findOne({}, { _id: 0, name: 1 }).sort({ rushingYards: 1 })

Get a list of players sorted from most to fewest field goals made:
db.team.find({}, { _id: 0, name: 1 }).sort({ fieldGoalsMade: -1 })

Find the player with the most number of sacks:
db.team.findOne({}, { _id: 0, name: 1 }).sort({ sacks: -1 })
