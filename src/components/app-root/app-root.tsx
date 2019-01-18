import { Component, Prop } from '@stencil/core';
import { ApolloClient } from 'apollo-client';
import getApolloClientInstance from '../../global/apollo-client/apollo-client';

@Component({
    tag: 'app-root',
    styleUrl: 'app-root.css',
    shadow: true
})
export class AppRoot {
    @Prop({ context: 'aClient' }) aClient:ApolloClient<any>;

    componentWillLoad() {
        this.aClient = getApolloClientInstance();
    }

    render() {
        return (
            <div>
                <header>
                    <h1>Stencil App Starter</h1>
                </header>
                <main>
                    <stencil-router>
                        <stencil-route-switch scrollTopOffset={0}>
                            <stencil-route url='/' component='app-home' exact={true} />
                            <stencil-route url='/character/:id' component='app-character' />
                        </stencil-route-switch>
                    </stencil-router>
                </main>
            </div>
        );
    }
}
