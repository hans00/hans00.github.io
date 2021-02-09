import Vue from 'vue'

function htmlencode(raw) {
  return raw.replace(/[\u00A0-\u9999<>\&]/g, char => `&#${char.charCodeAt(0)};`)
}

const url_pattern = /\[(.+)\]\((\S+)\)/

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
        this.content.map((elem) => {
          if (elem.text) {
            return elem.text
          } else if (elem.link) {
            return h('a', { attrs: { href: elem.link.url } }, elem.link.text)
          }
        })
      )
    }
  },
})
