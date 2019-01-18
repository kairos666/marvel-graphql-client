export interface IImage {
    path?: string;
    extension?: string;
    resourceURI?: string;
}

export interface IList {
    offset?: number;
    limit?: number;
    total?: number;
    count?: number;
}

export interface ICharacter {
    id?: string;
    name?: string;
    description?: string;
    thumbnail?: IImage;
    comics?: IComicList | null;
    stories?: IStoryList | null;
    events?: IEventList | null;
    series?: ISerieList | null;
}

export interface IComic {
    id?: string;
    title?: string;
    issueNumber?: number;
    description?: string;
    format?: string;
    pageCount?: number;
    thumbnail?: IImage
    images?: IImage[]
    characters?: ICharacterList | null;
    creators?: ICreatorList | null;
    stories?: IStoryList | null;
    events?: IEventList | null;
}

export interface ICreator {
    id?: string;
    firstName?: string;
    middleName?: string;
    lastName?: string;
    suffix?: string;
    fullName?: string;
    thumbnail?: IImage;
    comics?: IComicList | null;
    stories?: IStoryList | null;
    events?: IEventList | null;
    series?: ISerieList | null;
}

export interface IEvent {
    id?: string;
    title?: string;
    description?: string;
    start?: string;
    end?: string;
    thumbnail?: IImage;
    characters?: ICharacterList | null;
    creators?: ICreatorList | null;
    comics?: IComicList | null;
    stories?: IStoryList | null;
    series?: ISerieList | null;
    next?: IEvent;
    previous?: IEvent;
}

export interface ISerie {
    id?: string;
    title?: string;
    description?: string;
    startYear?: number;
    endYear?: number;
    rating?: string;
    thumbnail?: IImage;
    characters?: ICharacterList | null;
    creators?: ICreatorList | null;
    comics?: IComicList | null;
    stories?: IStoryList | null;
    events?: IEventList | null;
    next?: ISerie;
    previous?: ISerie;
}

export interface IStory {
    id?: string;
    title?: string;
    description?: string;
    type?: string;
    thumbnail?: IImage;
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