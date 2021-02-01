# News App developed using React JS and NYTimes API

### API

Articles: [https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${text}&api-key=${process.env.REACT_APP_NYTIMES_API_KEY}](https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${text}&api-key=${process.env.REACT_APP_NYTIMES_API_KEY})

Top Stories: [https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${process.env.REACT_APP_NYTIMES_API_KEY}](https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${process.env.REACT_APP_NYTIMES_API_KEY})

Register in [https://developer.nytimes.com/my-apps](https://developer.nytimes.com/my-apps) for API Key.

### App Screenshots

![screenshot of the app](https://raw.githubusercontent.com/praveenorugantitech/praveenorugantitech-news-reactjs/master/src/images/screenshot1.PNG)

![screenshot of the app](https://raw.githubusercontent.com/praveenorugantitech/praveenorugantitech-news-reactjs/master/src/images/screenshot2.PNG)


### Setup Local Instructions

```
git clone https://github.com/praveenorugantitech/praveenorugantitech-news-reactjs.git
cd praveenorugantitech-news-reactjs

create .env file and include your API Key

REACT_APP_NYTIMES_API_KEY=""


npm install
npm start

```



