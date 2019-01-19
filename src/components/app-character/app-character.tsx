import { Component, Prop, State } from '@stencil/core';
import { MatchResults } from '@stencil/router';
import { ApolloClient } from 'apollo-client';
import getApolloClientInstance from '../../global/apollo-client/apollo-client';
import { ICharacter } from '../../global/apollo-client/marvel-entities';
import gql from 'graphql-tag';

@Component({
    tag: 'app-character',
    styleUrl: 'app-character.css',
    shadow: true
})
export class AppCharacter {
    @Prop() match: MatchResults;
    @Prop({ context: 'aClient' }) aClient:ApolloClient<any>;
    @State() character:ICharacter = {};

    componentWillLoad() {
        this.aClient = getApolloClientInstance();
        
        // fetch character
        this.aClient.query({
            query: gql`
                query specificCharacter {
                    character(id: ${this.match.params.id}) {
                        id
                        name
                        description
                        thumbnail {
                            resourceURI(size: PORTRAIT_FANTASTIC)
                        }
                    }
                }
            `
        })
        .then(resp => { this.character = (resp as any).data.character; })
        .catch(error => console.error(error));
    }

    private mockComic = {
        "id": "63223",
        "title": "All-New Guardians of the Galaxy Annual (2017) #1",
        "description": "SECRET EMPIRE TIE-IN! The Chitauri invasion has arrived, and Captain Marvel and Earth's heroes are outnumbered. Now it's up to the Guardians of the Galaxy to find reinforcements! There may be a weapon that could turn the tide of the battle, but in order to obtain it, the Guardians will have to rely on the help of the last alien Star-Lord ever wanted to see again…Yondu Udonta!",
        "format": "Comic",
        "thumbnail": {
            "resourceURI": "http://i.annihil.us/u/prod/marvel/i/mg/3/c0/594c28da29930/portrait_fantastic.jpg"
        }
    };
    private mockCreator = {
        "id": "11901",
        "fullName": "Dennis \"Hopeless\" Hallum",
        "thumbnail": {
          "resourceURI": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available/portrait_fantastic.jpg"
        }
    };
    private mockEvent = {
        "id": "336",
        "title": "Secret Empire",
        "description": "Steve Rogers has gone rogue and taken over the United States! It's up to the united forces of the Avengers, the Champions, the X-Men and more to bring down one of their own in the nine-issue limited series written by Nick Spencer!",
        "start": "2017-04-19 01:00:00",
        "end": "2017-08-09 01:00:00",
        "thumbnail": {
            "resourceURI": "http://i.annihil.us/u/prod/marvel/i/mg/6/f0/58e692d6f351b/portrait_fantastic.jpg"
        }
    };
    private mockSerie = {
        "id": "1991",
        "title": "Avengers (1963 - 1996)",
        "description": "Avengers Assemble! Iron Man, Thor, Captain America and the rest of Earth's Mightiest Heroes unite to stand against the threats none can face alone! See the Avengers go up against Ultron, Kang, the Masters of Evil and more over three decades of epic action!",
        "startYear": 1963,
        "endYear": 1996,
        "rating": "",
        "thumbnail": {
          "resourceURI": "http://i.annihil.us/u/prod/marvel/i/mg/9/10/519baa6d1890a/portrait_fantastic.jpg"
        }
    };
    private mockStory = {
        "id": "136390",
        "title": "cover from Ultimates 2 (2016) #4",
        "description": "",
        "type": "cover",
        "thumbnail": null
    };

    render() {
        if (this.match && this.match.params.id) {
            return (
                <div class="app-character">
                    <character-card entity={ this.character }></character-card>
                    <comic-card entity={ this.mockComic }></comic-card>
                    <creator-card entity={ this.mockCreator }></creator-card>
                    <event-card entity={ this.mockEvent }></event-card>
                    <serie-card entity={ this.mockSerie }></serie-card>
                    <story-card entity={ this.mockStory }></story-card>
                </div>
            );
        }
    }
}
