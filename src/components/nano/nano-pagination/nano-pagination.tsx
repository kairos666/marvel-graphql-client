import { Component, Prop, Event, EventEmitter } from '@stencil/core';
import { IList } from '../../../global/apollo-client/marvel-entities';

@Component({
    tag: 'nano-pagination',
    styleUrl: 'nano-pagination.scss',
    shadow: true
})
export class NanoPagination {
    @Event() paginationOccured: EventEmitter;
    @Prop() paginationData:IList;

    render() {
        // no data or no paging necessary
        if (!this.paginationData || this.paginationData.count === this.paginationData.total) return null;

        // render pagniation
        let { offset, limit, count, total } = this.paginationData;
        const totalString = `results ${offset + 1}-${offset + count} / ${total}`;
        const nextButton = (total > offset + limit)
            ? <button type="button" onClick={() => this.paginationOccuredHandler('next')}>&gt;</button>
            : null;
        const previousButton = (offset !== 0)
        ? <button type="button" onClick={() => this.paginationOccuredHandler('previous')}>&lt;</button>
        : null;

        return [
            <p>{ totalString }</p>,
            <nav>
                { previousButton }
                { nextButton }
            </nav>
        ];
    }

    private paginationOccuredHandler(payload:'next'|'previous') {
        let { offset, limit } = this.paginationData;
        let eventPayload:IList;
        switch(payload) {
            case 'next':
                eventPayload = Object.assign({ offset, limit }, { offset: offset + limit });
            break;
            case 'previous':
                eventPayload = Object.assign({ offset, limit }, { offset: offset - limit });
            break;
        }
        this.paginationOccured.emit(eventPayload);
    }
}