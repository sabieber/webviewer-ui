import actions from 'actions';

export default store => notesPanelCustomHeaderRenderer => {
  store.dispatch(actions.setNotesPanelCustomHeaderRenderer(notesPanelCustomHeaderRenderer));
};
