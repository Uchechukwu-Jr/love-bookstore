import { createSlice } from "@reduxjs/toolkit";
//  const [searchTerm, setSearchTerm] = useState("");
//const [searchResults, setSearchResults] = useState([]);
const searchTermSlice = createSlice({
    name: "searchTerm",
    initialState: "",
    reducers: {
        setSearchTerm: (state, action) => {
            return action.payload;
        }
    }
});

export const {
    setSearchTerm
} = searchTermSlice.actions;

export default searchTermSlice.reducer;
