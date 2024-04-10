import React, { Fragment } from 'react';
import { AlbumGrid } from './AlbumGrid';
import { GlobalStyles } from './GlobalStyles';
import { Hero } from './Hero';
import { Footer } from './Footer';
import { InstaGrid } from './InstaGrid';
import { NavStyles } from './NavBar';
import { LiveShowsStyles } from './LiveShows';
import { BandGrid } from './BandGrid';
import VideoSection from './VideoSection';

export const AllStyledComponentsForCssPreRender = () => {
    return (
        <Fragment>
            <GlobalStyles />
            <Hero />
            <NavStyles />
            <AlbumGrid />
            <LiveShowsStyles />
            <InstaGrid />
            <VideoSection />
            <BandGrid />
            <Footer showDesignCredit={true} />
        </Fragment>
    );
};
