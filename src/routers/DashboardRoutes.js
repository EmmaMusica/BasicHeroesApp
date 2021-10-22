import React from 'react'
import { Redirect, Route, Switch } from 'react-router';
import { Navbar } from '../components/ui/NavBar';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { DcScreen } from '../components/dc/DcScreen';
import { HeroeScreen } from '../components/heroes/HeroeScreen';
import { SearchScreen } from '../components/search/SearchScreen';




export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />

            <div className="container mt-4">
                <Switch>
                    <Route exact path="/marvel" component={ MarvelScreen } />
                    <Route exact path="/heroe/:heroeId" component={ HeroeScreen } />
                    <Route exact path="/dc" component={ DcScreen } />
                    <Route exact path="/search" component={ SearchScreen } />
                    <Redirect to="/marvel" />
            
                </Switch>

            </div>

        </>
    )
}
