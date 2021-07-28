const apiHost = 'https://bakesaleforgood.com';

export default{
    async fetchInitialDeals(){
        try{
            let response  = await fetch(apiHost + '/api/deals');
            let respJson = await response.json();
            console.log(respJson);
            return respJson;
        }
        catch(err)
        {
            console.log(err);
        }
    }
    ,
    async fetchDealDetail(dealId){
        try{
            const response  = await fetch(apiHost + '/api/deals/'+ dealId);
            const respJson = await response.json();
            console.log(respJson);
            return respJson;
        }
        catch(err)
        {
            console.log(err);
        }
    }
    ,
    async fetchDealsSearch(searchTerm){
        try{
            const response  = await fetch(apiHost + '/api/deals?searchTerm='+ searchTerm);
            const respJson = await response.json();
            console.log(respJson);
            return respJson;
        }
        catch(err)
        {
            console.log(err);
        }
    }
};