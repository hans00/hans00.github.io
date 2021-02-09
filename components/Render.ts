import Vue from 'vue'

export default Vue.extend({
  props: {
    content: {
      type: [String, Array],
      default: '',
    },
  },
  render(h) {
    if (typeof this.content === 'string') {
      return h('p', this.content)
    } else {
      return h(
        'p',
        {
          class: {
            'rendered-object': true,
          }
        },
        this.content.map((elem: any) => {
          if (elem?.text) {
            return elem!.text
          } else if (elem?.link) {
            return h('a', { attrs: { href: elem!.link?.url } }, elem!.link?.text)
          }
        })
      )
    }
  },
})
