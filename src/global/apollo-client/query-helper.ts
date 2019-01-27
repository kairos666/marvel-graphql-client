import { QueryOptions } from "apollo-client";
import gql from "graphql-tag";
import { ImageSizes } from "./marvel-entities";

export function getCharacterQueryOptions(id: string, size: ImageSizes):QueryOptions {
    return {
        query: gql`
            query specificCharacter($id: ID!, $size: ImageSizes) {
                character(id: $id) {
                    id
                    name
                    description
                    thumbnail {
                        resourceURI(size: $size)
                    }
                }
            }
        `,
        variables: { id, size }
    };
}

export function getAllCharactersPaginatedQueryOptions(size: ImageSizes, offset:Number = 0, limit:Number = 20):QueryOptions {
    return {
        query: gql`
            query getAllCharacters($offset: Int, $limit: Int, $size: ImageSizes) {
                characters(offset: $offset, limit: $limit) {
                    offset
                    count
                    total
                    limit
                    results {
                        id
                        name
                        description
                        thumbnail {
                            resourceURI(size: $size)
                        }
                    }
                }
            }
        `,
        variables: { limit, offset, size }
    }
}