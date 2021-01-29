export const GifReducers = (state =[], action) => {
   switch (action.type) {
       case 'Addcategory':
           return [action.payload, ...state]
        case 'Delete':
            return state.filter( category => category.id !== action.payload)
        case 'favorites':
            return state.map(category => {
                if(category.id === action.payload) {
                    return {
                        ...category,
                        favorites: !category.favorites
                    }
                }
            })
       default:
           return state
   }
}
