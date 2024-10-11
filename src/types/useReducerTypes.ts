
export type ActionOne = { type: string};

export interface Post {
    id: number;
    title: string;
    body: string;
  };
  
export interface State  {
    loading: boolean;
    posts: Post[];
    error: string;
  };

export interface FetchSuccessAction {
    type: "FETCH_SUCCESS";
    payload: Post[];
  }
  
  export interface FetchErrorAction {
    type: "FETCH_ERROR";
    payload: string; 
  }

 export type ActionTwo = FetchSuccessAction | FetchErrorAction;