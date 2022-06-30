module.exports = {
  onPreBuild: ({ utils }) => {
    const currentProject = 'urls-project-web';
    const projectHasChanged = false;

    if (!projectHasChanged) {
      utils.build.cancelBuild(
        `Build was cancelled because ${currentProject} was not affected by the latest changes`
      );
    }
  }
};
