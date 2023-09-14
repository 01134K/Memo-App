import React, { createContext , useReducer} from "react";

const BlogContext = createContext();

const memoReducer = (state , action) => {
    switch (action.type) {
        case 'add-Memo':
            return [...state , {title : `Memo #${state.length + 1}`}];
        // case 'D-Memo':
        //     return state.filter((item) => item.title !== action.payloand);
        default:
            return state;
    }
}

export const BlogProvider=({ children}) => {
    const [memoList , dispatch] = useReducer(memoReducer,[])
    const addMemo = () => {
       dispatch({type:'add-Memo'})
    };
        const DMemo = (title) => {
            // dispatch({ type:'D-Memo' , payloand: title })
         };
    // const addMemo = () => {
    //     dispatch([...memoList , {title : `Memo #${memoList.length + 1}`}])
    // };
    // const MemoList = [
    //     {title: 'Memo #1'},
    //     {title: 'Memo #2'},
    //     {title: 'Memo #3'},
    // ]
    return(
        <BlogContext.Provider 
        value={{ data: memoList , addMemo ,DMemo}}
        >
            {children}
        </BlogContext.Provider>
    )
};

export default BlogContext;