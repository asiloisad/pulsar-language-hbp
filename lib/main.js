module.exports = {
  activate() {
    atom.grammars.addInjectionPoint('source', {
      type: 'comment',
      language (commentLine) {
        if (commentLine.text.includes('%%')) {
          return 'hydrogen-breakpoints'
        }
      },
      content (commentLine) {
        return commentLine
      }
    });
  }
}
