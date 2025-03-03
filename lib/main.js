module.exports = {
  activate() {
    atom.grammars.addInjectionPoint('source.python', {
      type: 'comment.line',
      language (commentLine) {
        if (commentLine.startsWith(/ *%%/g)) {
          return 'hydrogen.breakpoints'
        }
      },
      content (commentLine) {
        return commentLine
      }
    });
  }
}
