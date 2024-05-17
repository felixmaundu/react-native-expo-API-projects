export const ApiService = async (endpoint,subEndPoint,timeZone,) => {//leagueID
    try {
      var myHeaders = new Headers();
      myHeaders.append("x-rapidapi-key", "db4a61e7380bd231259557794a6145d5");
      // db4a61e7380bd231259557794a6145d5
    //f8b0ffcd0e60d0c36d19d5e70db1ca25
    //3a904b6a9adb2e87953eda70b7127554
      myHeaders.append("x-rapidapi-host", "v3.football.api-sports.io");
  
      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };

  
      const FIXTURES_URL =  `https://v3.football.api-sports.io/${endpoint}`;//&season=2019//&league=${leagueID}
    
  
      let response = await fetch(FIXTURES_URL,requestOptions );
      response = response.json();
      return response;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };


  export const fetchEvents =async (id) => {
    var myHeaders = new Headers();
    myHeaders.append("x-rapidapi-key", "3a904b6a9adb2e87953eda70b7127554");
    // db4a61e7380bd231259557794a6145d5
  //f8b0ffcd0e60d0c36d19d5e70db1ca25
  //3a904b6a9adb2e87953eda70b7127554
    myHeaders.append("x-rapidapi-host", "v3.football.api-sports.io");

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    let response = await fetch(
        `https://v3.football.api-sports.io/fixtures/events?fixture=${id}`,
       //`https://v3.football.api-sports.io/fixtures/events?fixture=215662`,
        requestOptions,
        );
      response = response.json();
      return response;
    
  };




  
//   //https://v3.football.api-sports.io/countries
  
//   export const ApiServiceFinishedMatches = async (leagueID,timeZone) => {//date
//     try {
//       var myHeaders = new Headers();
//       myHeaders.append("x-rapidapi-key", "db4a61e7380bd231259557794a6145d5");//5
//       myHeaders.append("x-rapidapi-host", "v3.football.api-sports.io");
  
//       var requestOptions = {
//         method: 'GET',
//         headers: myHeaders,
//         redirect: 'follow'
//       };
//       const FIXTURES_URL =  
      
//       // `https://v3.football.api-sports.io/${countryEndpoint}`
//     `https://v3.football.api-sports.io/fixtures?league=${leagueID}&last=10&status=ft&timezone=${timeZone}`
  
//       let response = await fetch(FIXTURES_URL,requestOptions );
//       response = response.json();
//       return response;
//     } catch (error) {
//       console.error(error);
//       throw error;
//     }
//   };
  
  
  