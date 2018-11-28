import actions from 'actions';

export default store => noteCustomContentRenderer => {
  store.dispatch(actions.setNoteCustomContentRenderer(noteCustomContentRenderer));
};
