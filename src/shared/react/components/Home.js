import React, { Component } from 'react';
import { AppDataProvider } from '../context/';
import { AlbumGrid } from './AlbumGrid';
import ContactForm from './ContactForm';
import { Hero } from './Hero';
import { Footer } from './Footer';
import { InstaGrid } from './InstaGrid';
import { NavBar } from './NavBar';
import ShowTable from './ShowTable';
import TheBand from './TheBand';
import VideoSection from './VideoSection';

class Home extends Component {
    constructor (props) {
        super(props)

        let appData;

        // eslint-disable-next-line
        if (__isBrowser__) {
            appData = window.__INITIAL_DATA__;
            delete window.__INITIAL_DATA__;
        } else {
            appData = {}
        }

        this.state = {
            appData
        };
    }

    render () {
        const { appData } = this.state
        if (!appData) {
            return null;
        }
        return (
            <AppDataProvider value={appData}>
                <Hero />
                <NavBar />
                <AlbumGrid />
                <ShowTable />
                <InstaGrid />
                <VideoSection />
                <TheBand />
                <ContactForm />
                <Footer />
            </AppDataProvider>
        );
    }
}

export default Home;
