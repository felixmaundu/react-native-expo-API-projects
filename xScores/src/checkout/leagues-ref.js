// Allows to retrieve all the seasons available for a league/cup
get("https://v3.football.api-sports.io/leagues?id=39");

// Get all leagues from one league {name}
get("https://v3.football.api-sports.io/leagues?name=premier league");

// Get all leagues from one {country}
// You can find the available {country} by using the endpoint country
get("https://v3.football.api-sports.io/leagues?country=england");

// Get all leagues from one country {code} (GB, FR, IT etc..)
// You can find the available country {code} by using the endpoint country
get("https://v3.football.api-sports.io/leagues?code=gb");

// Get all leagues from one {season}
// You can find the available {season} by using the endpoint seasons
get("https://v3.football.api-sports.io/leagues?season=2019");

// Get one league from one league {id} & {season}
get("https://v3.football.api-sports.io/leagues?season=2019&id=39");

// Get all leagues in which the {team} has played at least one match
get("https://v3.football.api-sports.io/leagues?team=33");

// Allows you to search for a league in relation to a league {name} or {country}
get("https://v3.football.api-sports.io/leagues?search=premier league");
get("https://v3.football.api-sports.io/leagues?search=England");

// Get all leagues from one {type}
get("https://v3.football.api-sports.io/leagues?type=league");

// Get all leagues where the season is in progress or not
get("https://v3.football.api-sports.io/leagues?current=true");

// Get the last 99 leagues or cups added to the API
get("https://v3.football.api-sports.io/leagues?last=99");

// It’s possible to make requests by mixing the available parameters
get("https://v3.football.api-sports.io/leagues?season=2019&country=england&type=league");
get("https://v3.football.api-sports.io/leagues?team=85&season=2019");
get("https://v3.football.api-sports.io/leagues?id=61¤t=true&type=league");

fetch("https://v3.football.api-sports.io/leagues", {
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

// {
//     "get": "leagues",
//     "parameters": {
//       "id": "39"
//     },
//     "errors": [],
//     "results": 1,
//     "paging": {
//       "current": 1,
//       "total": 1
//     },
//     "response": [
//       {
//         "league": {
//           "id": 39,
//           "name": "Premier League",
//           "type": "League",
//           "logo": "https://media.api-sports.io/football/leagues/2.png"
//         },
//         "country": {
//           "name": "England",
//           "code": "GB",
//           "flag": "https://media.api-sports.io/flags/gb.svg"
//         },
//         "seasons": [
//           {
//             "year": 2010,
//             "start": "2010-08-14",
//             "end": "2011-05-17",
//             "current": false,
//             "coverage": {
//               "fixtures": {
//                 "events": true,
//                 "lineups": true,
//                 "statistics_fixtures": false,
//                 "statistics_players": false
//               },
//               "standings": true,
//               "players": true,
//               "top_scorers": true,
//               "top_assists": true,
//               "top_cards": true,
//               "injuries": true,
//               "predictions": true,
//               "odds": false
//             }
//           },
//           {
//             "year": 2011,
//             "start": "2011-08-13",
//             "end": "2012-05-13",
//             "current": false,
//             "coverage": {
//               "fixtures": {
//                 "events": true,
//                 "lineups": true,
//                 "statistics_fixtures": false,
//                 "statistics_players": false
//               },
//               "standings": true,
//               "players": true,
//               "top_scorers": true,
//               "top_assists": true,
//               "top_cards": true,
//               "injuries": true,
//               "predictions": true,
//               "odds": false
//             }
//           }
//         ]
//       }
//     ]
//   }



//#####################################################################
//season
fetch("https://v3.football.api-sports.io/leagues/seasons", {
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

// {
//     "get": "leagues/seasons",
//     "parameters": [],
//     "errors": [],
//     "results": 12,
//     "paging": {
//       "current": 1,
//       "total": 1
//     },
//     "response": [
//       2008,
//       2010,
//       2011,
//       2012,
//       2013,
//       2014,
//       2015,
//       2016,
//       2017,
//       2018,
//       2019,
//       2020
//     ]
//   }