import Test1 from './components/test1/Index.vue';
import Test2 from './components/test2/Index.vue';

const components = [
  Test1,
  Test2
]

const install = Vue => {
  components.forEach(Component => {
    Component.name && Vue.component(Component.name, Component)
  })
}

export default {
  install,
  ...components
}