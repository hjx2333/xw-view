// import { shallowMount } from '@vue/test-utils'
// import HelloWorld from '@/components/HelloWorld.vue'

// describe('HelloWorld.vue', () => {
//   it('renders props.msg when passed', () => {
//     const msg = 'new message'
//     const wrapper = shallowMount(HelloWorld, {
//       propsData: { msg }
//     })
//     expect(wrapper.text()).toMatch(msg)
//   })
// })

import { deepCopy, setPreviewScale } from '../../packages/utils/utils'

it('深拷贝，deepCopy', () => {
  const obj = {
    a: 1,
    b: [1, 2, 3],
    c: {
      a: 1,
      b: 2
    }
  }

  const obj2 = deepCopy(obj)
  expect(obj2.b).not.toBe(obj.b)
})

// describe('设置预览比例，setpreviewScale', () => {
//   beforeAll(() => {
//     const div = document.createElement('div', {
//       id: 'set-preview-scale-test'
//     })
//     document.body.appendChild(div)
//   })

//   it('实际尺寸更宽', () => {
//     setPreviewScale(div, { width: 1920, height: 1080 })
//     expect(obj2.b).not.toBe(obj.b)
//   })

//   it('实际尺寸更高', () => {
//     setPreviewScale(div, { width: 1920, height: 1080 })
//     expect(obj2.b).not.toBe(obj.b)
//   })
// })
