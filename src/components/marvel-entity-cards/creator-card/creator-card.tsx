import { Component, Prop } from '@stencil/core';
import { ICreator } from '../../../global/apollo-client/marvel-entities';
import { keysToDefinitionList } from '../../../global/utils';

@Component({
    tag: 'creator-card',
    styleUrl: 'creator-card.scss',
    shadow: true
})
export class CreatorCard {
    @Prop() entity:ICreator;
    private dataKeys = ['id', 'fullName'];

    render() {
        return (
            <figure>
                {this.entity.thumbnail
                    ? <img src={ this.entity.thumbnail.resourceURI } alt="creator thumbnail" />
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