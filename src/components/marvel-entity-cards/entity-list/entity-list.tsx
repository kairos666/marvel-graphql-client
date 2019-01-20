import { Component, Prop, Event, EventEmitter } from '@stencil/core';
import { IEntity, IList } from '../../../global/apollo-client/marvel-entities';

@Component({
    tag: 'entity-list',
    styleUrl: 'entity-list.scss',
    shadow: true
})
export class EntityList {
    @Prop() entitiesList:IList = {};
    @Event() goToEntityDetail:EventEmitter;

    renderList() {
        const entities:IEntity[] = this.entitiesList.results || [];

        return entities.map(entityItem => {
            let detailLinkPayload;
            // adapt card to entity type (can mix types if necessary)
            switch((entityItem as any).__typename) {
                case 'Character':
                    detailLinkPayload = { id: entityItem.id, type: 'character' };
                    return (<li onClick={() => this.goToEntityDetail.emit(detailLinkPayload)} tabIndex={1} key={ entityItem.id }><character-card entity={ entityItem }></character-card></li>)
                case 'Comic':
                    detailLinkPayload = { id: entityItem.id, type: 'comic' };
                    return (<li onClick={() => this.goToEntityDetail.emit(detailLinkPayload)} tabIndex={1} key={ entityItem.id }><comic-card entity={ entityItem }></comic-card></li>)
                case 'Story':
                    detailLinkPayload = { id: entityItem.id, type: 'story' };
                    return (<li onClick={() => this.goToEntityDetail.emit(detailLinkPayload)} tabIndex={1} key={ entityItem.id }><story-card entity={ entityItem }></story-card></li>)
                case 'Serie':
                    detailLinkPayload = { id: entityItem.id, type: 'serie' };
                    return (<li onClick={() => this.goToEntityDetail.emit(detailLinkPayload)} tabIndex={1} key={ entityItem.id }><serie-card entity={ entityItem }></serie-card></li>)
                case 'Creator':
                    detailLinkPayload = { id: entityItem.id, type: 'creator' };
                    return (<li onClick={() => this.goToEntityDetail.emit(detailLinkPayload)} tabIndex={1} key={ entityItem.id }><creator-card entity={ entityItem }></creator-card></li>)
                case 'Event':
                    detailLinkPayload = { id: entityItem.id, type: 'event' };
                    return (<li onClick={() => this.goToEntityDetail.emit(detailLinkPayload)} tabIndex={1} key={ entityItem.id }><event-card entity={ entityItem }></event-card></li>)
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