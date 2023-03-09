// Action types
export const FETCH_POSTS_START = 'FETCH_POSTS_START';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';

// Action creators
export const fetchPostsStart = () => ({
  type: FETCH_POSTS_START,
});

export const fetchPostsSuccess = (posts) => (console.log(posts, 'posts data'),{
  type: FETCH_POSTS_SUCCESS,
  payload: posts,
});

export const fetchPostsFailure = (error) => ({
  type: FETCH_POSTS_FAILURE,
  payload: error,
});


// Initial state
const initialState = {
  posts: [],
  isLoading: false,
  error: null,
};

// Reducer function
const demoReducer = (state = initialState, action) => {
  console.log(action, 'action')
  switch (action.type) {
    case FETCH_POSTS_START:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        posts: action.payload,
      };
    case FETCH_POSTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default demoReducer;
