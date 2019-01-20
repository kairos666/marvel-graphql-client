import { Component, Prop } from '@stencil/core';
import { IEntity, IList } from '../../../global/apollo-client/marvel-entities';

@Component({
    tag: 'entity-list',
    styleUrl: 'entity-list.scss',
    shadow: true
})
export class EntityList {
    @Prop() entitiesList:IList = {};

    renderList() {
        const entities:IEntity[] = this.entitiesList.results || [];

        return entities.map(entityItem => {
            // adapt card to entity type (can mix types if necessary)
            switch((entityItem as any).__typename) {
                case 'Character':
                    return (<li key={ entityItem.id }><character-card entity={ entityItem }></character-card></li>)
                case 'Comic':
                    return (<li key={ entityItem.id }><comic-card entity={ entityItem }></comic-card></li>)
                case 'Story':
                    return (<li key={ entityItem.id }><story-card entity={ entityItem }></story-card></li>)
                case 'Serie':
                    return (<li key={ entityItem.id }><serie-card entity={ entityItem }></serie-card></li>)
                case 'Creator':
                    return (<li key={ entityItem.id }><creator-card entity={ entityItem }></creator-card></li>)
                case 'Event':
                    return (<li key={ entityItem.id }><event-card entity={ entityItem }></event-card></li>)
            }
        });
    }

    render() {
        const list = this.renderList();
        const hasContent = (list.length !== 0);

        return (
            <section class={ hasContent ? '' : 'entity-list--empty' }>
                <header>
                    <nano-pagination paginationData={ this.entitiesList }></nano-pagination>
                </header>
                {hasContent
                    ? <ul class="entity-list_list-container">{...list}</ul>
                    : null
                }
                <footer>
                    <nano-pagination paginationData={ this.entitiesList }></nano-pagination>
                </footer>
            </section>
        );
    }
}