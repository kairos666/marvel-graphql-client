export interface IImage {
    path?: string;
    extension?: string;
    resourceURI?: string;
}

export interface IEntity {
    id?: string;
}

export interface IList {
    offset?: number;
    limit?: number;
    total?: number;
    count?: number;
    results?: IEntity[] | null;
}

export interface ICharacter extends IEntity {
    name?: string;
    description?: string;
    thumbnail?: IImage | null;
    comics?: IComicList | null;
    stories?: IStoryList | null;
    events?: IEventList | null;
    series?: ISerieList | null;
}

export interface IComic extends IEntity {
    title?: string;
    issueNumber?: number;
    description?: string;
    format?: string;
    pageCount?: number;
    thumbnail?: IImage | null;
    images?: IImage[]
    characters?: ICharacterList | null;
    creators?: ICreatorList | null;
    stories?: IStoryList | null;
    events?: IEventList | null;
}

export interface ICreator extends IEntity {
    firstName?: string;
    middleName?: string;
    lastName?: string;
    suffix?: string;
    fullName?: string;
    thumbnail?: IImage | null;
    comics?: IComicList | null;
    stories?: IStoryList | null;
    events?: IEventList | null;
    series?: ISerieList | null;
}

export interface IEvent extends IEntity {
    title?: string;
    description?: string;
    start?: string;
    end?: string;
    thumbnail?: IImage | null;
    characters?: ICharacterList | null;
    creators?: ICreatorList | null;
    comics?: IComicList | null;
    stories?: IStoryList | null;
    series?: ISerieList | null;
    next?: IEvent;
    previous?: IEvent;
}

export interface ISerie extends IEntity {
    title?: string;
    description?: string;
    startYear?: number;
    endYear?: number;
    rating?: string;
    thumbnail?: IImage | null;
    characters?: ICharacterList | null;
    creators?: ICreatorList | null;
    comics?: IComicList | null;
    stories?: IStoryList | null;
    events?: IEventList | null;
    next?: ISerie;
    previous?: ISerie;
}

export interface IStory extends IEntity {
    title?: string;
    description?: string;
    type?: string;
    thumbnail?: IImage | null;
    characters?: ICharacterList | null;
    creators?: ICreatorList | null;
    comics?: IComicList | null;
    events?: IEventList | null;
    series?: ISerieList | null;
    originalIssue?: IComic;
}

export interface ICharacterList extends IList {
    results?: ICharacter[] | null;
}

export interface IComicList extends IList {
    results?: IComic[] | null;
}

export interface ICreatorList extends IList {
    results?: ICreator[] | null;
}

export interface IEventList extends IList {
    results?: IEvent[] | null;
}

export interface ISerieList extends IList {
    results?: ISerie[] | null;
}

export interface IStoryList extends IList {
    results?: IStory[] | null;
}

export enum ImageSizes {
    PORTRAIT_SMALL = 'PORTRAIT_SMALL',
    PORTRAIT_MEDIUM = 'PORTRAIT_MEDIUM',
    PORTRAIT_XLARGE ='PORTRAIT_XLARGE',
    PORTRAIT_FANTASTIC ='PORTRAIT_FANTASTIC',
    PORTRAIT_UNCANNY = 'PORTRAIT_UNCANNY',
    PORTRAIT_INCREDIBLE = 'PORTRAIT_INCREDIBLE',
    STANDARD_SMALL = 'STANDARD_SMALL',
    STANDARD_MEDIUM = 'STANDARD_MEDIUM',
    STANDARD_LARGE = 'STANDARD_LARGE',
    STANDARD_XLARGE = 'STANDARD_XLARGE',
    STANDARD_FANTASTIC = 'STANDARD_FANTASTIC',
    STANDARD_AMAZING = 'STANDARD_AMAZING',
    LANDSCAPE_SMALL = 'LANDSCAPE_SMALL',
    LANDSCAPE_MEDIUM = 'LANDSCAPE_MEDIUM',
    LANDSCAPE_LARGE = 'LANDSCAPE_LARGE',
    LANDSCAPE_XLARGE = 'LANDSCAPE_XLARGE',
    LANDSCAPE_AMAZING = 'LANDSCAPE_AMAZING',
    LANDSCAPE_INCREDIBLE = 'LANDSCAPE_INCREDIBLE',
    DETAIL = 'DETAIL',
    FULL_SIZE = 'FULL_SIZE'
}