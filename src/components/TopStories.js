import React, { useState, useEffect } from 'react';
import TopStory from './TopStory';
import Spinner from './layouts/Spinner';
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import { NavLink } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    card: {
        maxWidth: 345,
        boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
        backgroundColor: "#fafafa",
    },
    media: {
        height: 300,
    },
    buttons: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));



function TopStories({ loading, topStories, getTopArticles }) {
    const [heading,setHeading] = useState("");
    const classes = useStyles();
    useEffect(() => {
        setHeading("World News");
        getTopArticles('world');
    }, []);

    return (
        <>
            { loading ?
                (
                    <Spinner /> 
                ) : (
                <>
                    <div className={classes.buttons}>
                        <Button onClick={() => {setHeading("World News"); getTopArticles('world'); }} variant="outlined" color="primary">World News</Button>
                        <Button onClick={() => {setHeading("US News"); getTopArticles('us'); }} variant="outlined" color="default">US News</Button>
                        <Button onClick={() => {setHeading("Politics");  getTopArticles('politics'); }} variant="outlined" style={{color:'brown'}}>Politics</Button>
                        <Button onClick={() => {setHeading("Technology");  getTopArticles('technology'); }} variant="outlined" color="secondary">Technology</Button>
                        <Button onClick={() => {setHeading("Movies"); getTopArticles('movies'); }} variant="outlined" style={{color:'green'}}>Movies</Button>
                        <Button onClick={() => {setHeading("Food");  getTopArticles('food'); }} variant="outlined" style={{color:'orange'}}>Food</Button>
                    </div>

                    <NavLink to="/praveenorugantitech-news-reactjs">
                        <Link component="button" variant="body2">Go Back</Link>
                    </NavLink>

                    <h6 className="MuiTypography-h6">{heading}</h6>

                    <div className={classes.root} >
                        <Grid container spacing={3}>
                            {topStories.map((topstory) => (
                                <Grid item xs={12} sm={4} key={topstory.url}>
                                    <TopStory topstory={topstory} />
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                </>
            )}
        </>
    );
}

TopStories.propTypes = {
    loading: PropTypes.bool.isRequired,
    topStories: PropTypes.array.isRequired,
};

export default TopStories;
