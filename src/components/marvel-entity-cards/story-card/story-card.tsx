import { Component, Prop } from '@stencil/core';
import { IStory } from '../../../global/apollo-client/marvel-entities';
import { keysToDefinitionList } from '../../../global/utils';

@Component({
    tag: 'story-card',
    styleUrl: 'story-card.scss',
    shadow: true
})
export class StoryCard {
    @Prop() entity:IStory;
    private dataKeys = ['id', 'title', 'description', 'type'];

    render() {
        return (
            <figure>
                {this.entity.thumbnail
                    ? <img src={ this.entity.thumbnail.resourceURI } alt="story thumbnail" />
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