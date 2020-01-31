export const currentArticle = (state = '', action) => {
  switch(action.type) {
    case 'UPDATE_ARTICLE':
      return action.currentArticle;
    default:
       return state;
  }
}