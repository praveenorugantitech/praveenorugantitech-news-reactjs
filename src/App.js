import React, { useEffect, useState } from 'react';
import { Route, Switch, NavLink } from "react-router-dom";
import axios from 'axios';
import NavBar from './components/layouts/NavBar';
import { Articles, TopStories, Search } from './components';
import Typography from "@material-ui/core/Typography";
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState([]);
  const [topStories, setTopStories] = useState([]);
  const [heading,setHeading] = useState("");

  useEffect(() => {
    setHeading("Articles on India");
    const getArticles = async () => {
      setLoading(true);
      const res = await axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q="India"&api-key=${process.env.REACT_APP_NYTIMES_API_KEY}`);
      setArticles(res.data.response.docs);
      setLoading(false);
    };
    getArticles();
  }, []);

  const searchArticles = async (text) => {
    setHeading(`Articles on ${text}`);
    setLoading(true);
    const res = await axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${text}&api-key=${process.env.REACT_APP_NYTIMES_API_KEY}`);
    setArticles(res.data.response.docs);
    setLoading(false);
  };

  const getTopArticles = async (section) => {
    setLoading(true);
    const res = await axios.get(`https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${process.env.REACT_APP_NYTIMES_API_KEY}`);
    setTopStories(res.data.results);
    setLoading(false);
  };

  return (
    <div>
      <NavBar />
      <Container>
        <Typography color="textPrimary" gutterBottom variant="h2" align="center">
          <Switch>
            <Route exact path="/praveenorugantitech-news-reactjs" render={() => (
              <>
                <Search searchArticles={searchArticles} />
                <NavLink to="/praveenorugantitech-news-reactjs/topstories">
                  <Link component="button" variant="body2">Go to top stories in World, U.S, Politics, Technology, Movies and Food</Link>
                </NavLink>    
                <p className="MuiTypography-h6">{heading}</p>          
                <Articles loading={loading} articles={articles} />
              </>
            )} />

            <Route exact path="/praveenorugantitech-news-reactjs/topstories" render={() => (
              <>
                <TopStories loading={loading} topStories={topStories} getTopArticles={getTopArticles} />
              </>
            )} />

          </Switch>
        </Typography>
      </Container>
    </div>
  );
};

export default App;