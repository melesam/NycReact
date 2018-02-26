const request = require("request");
const filterObj = require("filter-object");

module.exports = (app) => {
    app.get("/api/nytimes", (req, res) => {
        request.get({
            url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
            qs: {
                "api-key": "336eecdecdde4994aacc4b46f062c7a7",
                "q" : "Obama",
                "begin_date" : "20050101",
                "end_date" : "20180101",
                "sort" : "newest"
            },
        }, (err, response, body) => {
            
            const validKeys = ["web_url", "snippet", "pub_date"]
            const parsedBody = JSON.parse(body);
            const filteredResults = parsedBody.response.docs.map( doc => filterObj(doc, validKeys));
            res.json(filteredResults);

        });
    });
}