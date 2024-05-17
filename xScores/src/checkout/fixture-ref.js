// API-KEY :
// db4a61e7380bd231259557794a6145d5


var myHeaders = new Headers();
myHeaders.append("x-rapidapi-key", "XxXxXxXxXxXxXxXxXxXxXxXx");
myHeaders.append("x-rapidapi-host", "v3.football.api-sports.io");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://v3.football.api-sports.io/{endpoint}", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));


// Get fixture from one fixture {id}
// In this request events, lineups, statistics fixture and players fixture are returned in the response
get("https://v3.football.api-sports.io/fixtures?id=215662");

// Get fixture from severals fixtures {ids}
// In this request events, lineups, statistics fixture and players fixture are returned in the response
get("https://v3.football.api-sports.io/fixtures?ids=215662-215663-215664-215665-215666-215667");

// Get all available fixtures in play
// In this request events are returned in the response
get("https://v3.football.api-sports.io/fixtures?live=all");

// Get all available fixtures in play filter by several {league}
// In this request events are returned in the response
get("https://v3.football.api-sports.io/fixtures?live=39-61-48");

// Get all available fixtures from one {league} & {season}
get("https://v3.football.api-sports.io/fixtures?league=39&season=2019");

// Get all available fixtures from one {date}
get("https://v3.football.api-sports.io/fixtures?date=2019-10-22");

// Get next X available fixtures
get("https://v3.football.api-sports.io/fixtures?next=15");

// Get last X available fixtures
get("https://v3.football.api-sports.io/fixtures?last=15");

// It’s possible to make requests by mixing the available parameters
get("https://v3.football.api-sports.io/fixtures?date=2020-01-30&league=61&season=2019");
get("https://v3.football.api-sports.io/fixtures?league=61&next=10");
get("https://v3.football.api-sports.io/fixtures?venue=358&next=10");
get("https://v3.football.api-sports.io/fixtures?league=61&last=10&status=ft");
get("https://v3.football.api-sports.io/fixtures?team=85&last=10&timezone=Europe/london");
get("https://v3.football.api-sports.io/fixtures?team=85&season=2019&from=2019-07-01&to=2020-10-31");
get("https://v3.football.api-sports.io/fixtures?league=61&season=2019&from=2019-07-01&to=2020-10-31&timezone=Europe/london");
get("https://v3.football.api-sports.io/fixtures?league=61&season=2019&round=Regular Season - 1");


// #######################################
// getting head to head
fetch("https://v3.football.api-sports.io/fixtures/headtohead?h2h=33-34", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "v3.football.api-sports.io",
		"x-rapidapi-key": "XxXxXxXxXxXxXxXxXxXxXxXx"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.log(err);
});


// ////////////////////////////////////
// its use cases
// Get all head to head between two {team}
get("https://v3.football.api-sports.io/fixtures/headtohead?h2h=33-34");

// It’s possible to make requests by mixing the available parameters
get("https://v3.football.api-sports.io/fixtures/headtohead?h2h=33-34");
get("https://v3.football.api-sports.io/fixtures/headtohead?h2h=33-34&status=ns");
get("https://v3.football.api-sports.io/fixtures/headtohead?h2h=33-34&from=2019-10-01&to=2019-10-31");
get("https://v3.football.api-sports.io/fixtures/headtohead?date=2019-10-22&h2h=33-34");
get("https://v3.football.api-sports.io/fixtures/headtohead?league=39&season=2019&h2h=33-34&last=5");
get("https://v3.football.api-sports.io/fixtures/headtohead?league=39&season=2019&h2h=33-34&next=10&from=2019-10-01&to=2019-10-31");
get("https://v3.football.api-sports.io/fixtures/headtohead?league=39&season=2019&h2h=33-34&last=5&timezone=Europe/London");


// #######################################################
// fixture stats
fetch("https://v3.football.api-sports.io/fixtures/statistics?fixture=215662&team=463", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "v3.football.api-sports.io",
		"x-rapidapi-key": "XxXxXxXxXxXxXxXxXxXxXxXx"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.log(err);
});
// //////////////////////////////////////
// use cases
// Get all available statistics from one {fixture}
get("https://v3.football.api-sports.io/fixtures/statistics?fixture=215662");

// Get all available statistics from one {fixture} & {type}
get("https://v3.football.api-sports.io/fixtures/statistics?fixture=215662&type=Total Shots");

// Get all available statistics from one {fixture} & {team}
get("https://v3.football.api-sports.io/fixtures/statistics?fixture=215662&team=463");

// ################################################3
// match events
fetch("https://v3.football.api-sports.io/fixtures/events?fixture=215662", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "v3.football.api-sports.io",
		"x-rapidapi-key": "XxXxXxXxXxXxXxXxXxXxXxXx"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.log(err);
});
//////////////////////////////////
// use cases
// Get all available events from one {fixture}
get("https://v3.football.api-sports.io/fixtures/events?fixture=215662");

// Get all available events from one {fixture} & {team}
get("https://v3.football.api-sports.io/fixtures/events?fixture=215662&team=463");

// Get all available events from one {fixture} & {player}
get("https://v3.football.api-sports.io/fixtures/events?fixture=215662&player=35845");

// Get all available events from one {fixture} & {type}
get("https://v3.football.api-sports.io/fixtures/events?fixture=215662&type=card");

// It’s possible to make requests by mixing the available parameters
get("https://v3.football.api-sports.io/fixtures/events?fixture=215662&player=35845&type=card");
get("https://v3.football.api-sports.io/fixtures/events?fixture=215662&team=463&type=goal&player=35845");

// #########################################################
// fixture rounds
fetch("https://v3.football.api-sports.io/fixtures/rounds?season=2019&league=61", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "v3.football.api-sports.io",
		"x-rapidapi-key": "XxXxXxXxXxXxXxXxXxXxXxXx"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.log(err);
});
//////////////////////////
// Get all available rounds from one {league} & {season}
get("https://v3.football.api-sports.io/rounds?league=39&season=2019");

// Get current round from one {league} & {season}
get("https://v3.football.api-sports.io/rounds?league=39&season=2019¤t=true");



// {
// 	"get": "fixtures",
// 	"parameters": {
// 	  "live": "all"
// 	},
// 	"errors": [],
// 	"results": 4,
// 	"paging": {
// 	  "current": 1,
// 	  "total": 1
// 	},
// 	"response": [
// 	  {
// 		"fixture": {
// 		  "id": 239625,
// 		  "referee": null,
// 		  "timezone": "UTC",
// 		  "date": "2020-02-06T14:00:00+00:00",
// 		  "timestamp": 1580997600,
// 		  "periods": {
// 			"first": 1580997600,
// 			"second": null
// 		  },
// 		  "venue": {
// 			"id": 1887,
// 			"name": "Stade Municipal",
// 			"city": "Oued Zem"
// 		  },
// 		  "status": {
// 			"long": "Halftime",
// 			"short": "HT",
// 			"elapsed": 45
// 		  }
// 		},
// 		"league": {
// 		  "id": 200,
// 		  "name": "Botola Pro",
// 		  "country": "Morocco",
// 		  "logo": "https://media.api-sports.io/football/leagues/115.png",
// 		  "flag": "https://media.api-sports.io/flags/ma.svg",
// 		  "season": 2019,
// 		  "round": "Regular Season - 14"
// 		},
// 		"teams": {
// 		  "home": {
// 			"id": 967,
// 			"name": "Rapide Oued ZEM",
// 			"logo": "https://media.api-sports.io/football/teams/967.png",
// 			"winner": false
// 		  },
// 		  "away": {
// 			"id": 968,
// 			"name": "Wydad AC",
// 			"logo": "https://media.api-sports.io/football/teams/968.png",
// 			"winner": true
// 		  }
// 		},
// 		"goals": {
// 		  "home": 0,
// 		  "away": 1
// 		},
// 		"score": {
// 		  "halftime": {
// 			"home": 0,
// 			"away": 1
// 		  },
// 		  "fulltime": {
// 			"home": null,
// 			"away": null
// 		  },
// 		  "extratime": {
// 			"home": null,
// 			"away": null
// 		  },
// 		  "penalty": {
// 			"home": null,
// 			"away": null
// 		  }
// 		}
// 	  }
// 	]
//   }