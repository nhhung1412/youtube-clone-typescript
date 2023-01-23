import { IinitialState } from "../../Types";
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { RootState } from "../store";
import axios from "axios";

const initialState: IinitialState = {
    videos: [],
    currentPlaying: null,
    searchTerm: "",
    searchResults: [],
    nextPageToken: null,
    recommendVideos: []
}

const host = "https://youtube.googleapis.com/youtube/v3"

export const getHomePageVideos = createAsyncThunk(
    "youtubeApp/homePageVideos",
    async (isNext: boolean, { getState }) => {
        const {
            youtubeApp: { nextPageToken: nextPageTokenFromState, videos }
        } = getState() as RootState;
        const { data: { items, nextPageToken } } = await axios.get(`${host}`)
    }
)


const YoutubeSlice = createSlice({
    name: 'YoutubeApp',
    initialState,
    reducers: {},
    extraReducers: (builder) => {

    }
})

export default YoutubeSlice.reducer