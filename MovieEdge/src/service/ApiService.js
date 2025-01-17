export const ApiService = async (endpoint, page = 1) => {
    try {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
    //   53939b3da3d575c42c212fb77c52c5a5
      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };
  // 5
      const MOVIES_URL = `https://api.themoviedb.org/3/${endpoint}?api_key=53939b3da3d575c42c212fb77c52c5a5&language=en-US&page=${page}`;
  
      let response = await fetch(MOVIES_URL, requestOptions);
      response = await response.json();
      return response;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
  