import { FetchData, PostData } from "./Fetch";

const ListFetch = {
    getProfileData: function() {
        return FetchData('/profile')
    },
    postDataPosting: function(body: any){
        return PostData('/posting', body)
    }
}


export default ListFetch;
// /profile