const env = "local";

export const getPostById = () => {
    let jsonResponse = "";
    const fetchPromise = fetch("http://localhost:3001/posts/1")
        .then(res => res.json())
        .then((result) => {
            console.log("This is from get post by id", result);
            jsonResponse = result
        });

    Promise.all([fetchPromise])
        .catch(e => console.log("Log"))

    return jsonResponse;
}

export const getAllNewsToday = () => {
    var myRequest;

    if (env === "local") {
        myRequest = new Request('http://localhost:3001/news');
    } else {
        let header = new Headers();
        header.append("Authorization", "Basic " + btoa("android:password"));

        var myInit = {
            method: 'GET',
            headers: header,
            mode: 'cors',
            cache: 'default',
        };
        //var myRequest = new Request('http://www.aajkosamachar.com:8080/api/v2/news/category/NEWS/latest');
        myRequest = new Request('http://aajkosamachar.com:8080/api/v3/news/today', myInit);
    }

    return fetch(myRequest)
        .then(res => res.json());
};



