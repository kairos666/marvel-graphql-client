import { Component, Prop } from '@stencil/core';
import { ISerie } from '../../../global/apollo-client/marvel-entities';
import { keysToDefinitionList } from '../../../global/utils';

@Component({
    tag: 'serie-card',
    styleUrl: 'serie-card.scss',
    shadow: true
})
export class SerieCard {
    @Prop() entity:ISerie;
    private dataKeys = ['id', 'title', 'description', 'startYear', 'endYear', 'rating'];

    render() {
        return (
            <figure>
                {this.entity.thumbnail
                    ? <img src={ this.entity.thumbnail.resourceURI } alt="serie thumbnail" />
                    : null
                }
                <figcaption>
                    <dl>
                        { 
                            keysToDefinitionList(
                                this.dataKeys, 
                                this.entity, 
                                dataObj => [<dt>{ dataObj.key }</dt>,<dd>{ dataObj.keyValue }</dd>]
                            ) 
                        }
                    </dl>
                </figcaption>
            </figure>
        );
    }
}