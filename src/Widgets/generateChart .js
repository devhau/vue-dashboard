export default {
    render: function (createElement) {
        return createElement(
          'div', {
            style: this.styles,
            class: this.cssClasses
          },
          [
            createElement(
              'canvas', {
                attrs: {
                  id: this.chartId,
                  width: this.width,
                  height: this.height
                },
                ref: 'canvas'
              }
            )
          ]
        )
      },
}