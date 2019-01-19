import { Component, Prop } from '@stencil/core';
import { ICharacter } from '../../../global/apollo-client/marvel-entities';
import { keysToDefinitionList } from '../../../global/utils';
import get from 'lodash/get';

@Component({
    tag: 'character-card',
    styleUrl: 'character-card.scss',
    shadow: true
})
export class CharacterCard {
    @Prop() entity:ICharacter;
    private dataKeys = ['id', 'name', 'description'];

    render() {
        return (
            <figure>
                {get(this.entity, 'thumbnail', false)
                    ? <img src={ this.entity.thumbnail.resourceURI } alt="character thumbnail" />
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