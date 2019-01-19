import { Component, Prop } from '@stencil/core';
import { IComic } from '../../../global/apollo-client/marvel-entities';
import { keysToDefinitionList } from '../../../global/utils';

@Component({
    tag: 'comic-card',
    styleUrl: 'comic-card.scss',
    shadow: true
})
export class ComicCard {
    @Prop() entity:IComic;
    private dataKeys = ['id', 'title', 'description', 'format'];

    render() {
        return (
            <figure>
                {this.entity.thumbnail
                    ? <img src={ this.entity.thumbnail.resourceURI } alt="comic thumbnail" />
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