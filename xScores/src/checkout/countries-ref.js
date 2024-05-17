// Get all available countries across all {seasons} and competitions
get("https://v3.football.api-sports.io/countries");

// Get all available countries from one country {name}
get("https://v3.football.api-sports.io/countries?name=england");

// Get all available countries from one country {code}
get("https://v3.football.api-sports.io/countries?code=fr");

// Allows you to search for a countries in relation to a country {name}
get("https://v3.football.api-sports.io/countries?search=engl");

fetch("https://v3.football.api-sports.io/countries", {
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
//     "get": "countries",
//     "parameters": {
//       "name": "england"
//     },
//     "errors": [],
//     "results": 1,
//     "paging": {
//       "current": 1,
//       "total": 1
//     },
//     "response": [
//       {
//         "name": "England",
//         "code": "GB",
//         "flag": "https://media.api-sports.io/flags/gb.svg"
//       }
//     ]
//   }