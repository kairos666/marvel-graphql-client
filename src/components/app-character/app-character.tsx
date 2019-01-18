import { Component, Prop } from '@stencil/core';
import { MatchResults } from '@stencil/router';

@Component({
    tag: 'app-character',
    styleUrl: 'app-character.css',
    shadow: true
})
export class AppCharacter {
    @Prop() match: MatchResults;
    private mockCharacter = {
        "id": "1009146",
        "name": "Abomination (Emil Blonsky)",
        "description": "Formerly known as Emil Blonsky, a spy of Soviet Yugoslavian origin working for the KGB, the Abomination gained his powers after receiving a dose of gamma radiation similar to that which transformed Bruce Banner into the incredible Hulk.",
        "thumbnail": {
            "resourceURI": "http://i.annihil.us/u/prod/marvel/i/mg/9/50/4ce18691cbf04/portrait_fantastic.jpg"
        }
    };

    render() {
        if (this.match && this.match.params.id) {
            return (
                <div class="app-character">
                    <p>
                        Hello! My name is {this.match.params.id}. My name was passed in
                        through a route param!
                    </p>
                    <character-card entity={ this.mockCharacter }></character-card>
                </div>
            );
        }
    }
}
