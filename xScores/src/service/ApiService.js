export const ApiService = async (endpoint,subEndPoint,timeZone,) => {//leagueID
  try {
    var myHeaders = new Headers();
    myHeaders.append("x-rapidapi-key", "f8b0ffcd0e60d0c36d19d5e70db1ca25");//5
    // db4a61e7380bd231259557794a6145d5
    //f8b0ffcd0e60d0c36d19d5e70db1ca25
    myHeaders.append("x-rapidapi-host", "v3.football.api-sports.io");

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    //get finished matches
    // 'https://v3.football.api-sports.io/fixtures?league=61&last=10&status=ft&timezone=Europe/london'
    //all live games

    // "https://v3.football.api-sports.io/fixtures?live=all&timezone=Europe/london&league=61"
    //// Get all available fixtures from one {league} & {season}
// get("https://v3.football.api-sports.io/fixtures?league=39&season=2019");

    const FIXTURES_URL =  `https://v3.football.api-sports.io/${endpoint}?${subEndPoint}&timezone=${timeZone}`;//&season=2019//&league=${leagueID}
  

    let response = await fetch(FIXTURES_URL,requestOptions );
    response = response.json();
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

//https://v3.football.api-sports.io/countries

export const ApiServiceFinishedMatches = async (leagueID,timeZone) => {//date
  try {
    var myHeaders = new Headers();
    myHeaders.append("x-rapidapi-key", "db4a61e7380bd231259557794a6145d5");//5
    myHeaders.append("x-rapidapi-host", "v3.football.api-sports.io");

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    const FIXTURES_URL =  
    
    // `https://v3.football.api-sports.io/${countryEndpoint}`
  `https://v3.football.api-sports.io/fixtures?league=${leagueID}&last=10&status=ft&timezone=${timeZone}`

    let response = await fetch(FIXTURES_URL,requestOptions );
    response = response.json();
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};


