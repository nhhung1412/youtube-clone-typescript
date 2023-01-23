export interface IinitialState {
    videos: HomePageVideos[],
    currentPlaying: CurrentPlaying | null,
    searchTerm: string,
    searchResults: [],
    nextPageToken: string | null,
    recommendVideos: RecommendedVideos[],
}

export interface HomePageVideos { }
export interface CurrentPlaying { }
export interface RecommendedVideos { }

