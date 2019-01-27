import { Component, Prop, State, Listen } from '@stencil/core';
import { ApolloClient } from 'apollo-client';
import getApolloClientInstance from '../../global/apollo-client/apollo-client';
import { ICharacterList, IList, ImageSizes } from '../../global/apollo-client/marvel-entities';
import { RouterHistory } from '@stencil/router';
import { getAllCharactersPaginatedQueryOptions } from '../../global/apollo-client/query-helper';

@Component({
    tag: 'app-home',
    styleUrl: 'app-home.css',
    shadow: true
})
export class AppHome {
    @Prop({ context: 'aClient' }) aClient:ApolloClient<any>;
    @Prop() history: RouterHistory;
    @State() characters:ICharacterList;

    componentWillLoad() {
        this.aClient = getApolloClientInstance();
        
        // fetch character
        this.aClient.query(getAllCharactersPaginatedQueryOptions(ImageSizes.PORTRAIT_MEDIUM))
            .then(resp => { this.characters = (resp as any).data.characters; })
            .catch(error => console.warn(error));
    }

    render() {
        return (
            <div class='app-home'>
                <p>
                    Welcome to the Stencil App Starter.
                    You can use this starter to build entire apps all with
                    web components using Stencil!
                    Check out our docs on <a href='https://stenciljs.com'>stenciljs.com</a> to get started.
                </p>

                <stencil-route-link url='/character/1009146'>
                    <button>Abomination - Character page</button>
                </stencil-route-link>

                <entity-list entitiesList={ this.characters }></entity-list>
            </div>
        );
    }

    @Listen('goToEntityDetail')
    linkToEntityDetailHandler(evt:CustomEvent) {
        const entityType:string = evt.detail.type;
        const entityId:string = evt.detail.id;

        this.history.push(`/${entityType}/${entityId}`);
    }

    @Listen('paginationOccured')
    paginationOccuredHandler(evt:CustomEvent) {
        const paginationOptions:IList = evt.detail;
        
        // update data
        this.aClient.query(getAllCharactersPaginatedQueryOptions(ImageSizes.PORTRAIT_MEDIUM, paginationOptions.offset, paginationOptions.limit))
            .then(resp => { this.characters = (resp as any).data.characters; })
            .catch(error => console.warn(error));
    }
}
