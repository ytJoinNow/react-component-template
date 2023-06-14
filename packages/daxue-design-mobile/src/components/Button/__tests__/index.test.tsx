import React from 'react'
import { shallow, render } from 'enzyme'
import Load from '../index'

describe('Load component', () => {
  it('should render Buttons of different type correctly', () => {
    const wrapper = render(
      <div>
        <Load>default</Load>
      </div>,
    )
    expect(wrapper).toMatchSnapshot()
  })

  // it('should render a link when btnType equals link and href is provided', () => {
  //   const wrapper = shallow(
  //     <Load type="link" href="https://github.com/Jacky-Summer">
  //       Link
  //     </Load>,
  //   )
  //   const element = wrapper.first()
  //   expect(element.name()).toEqual('a')
  //   expect(element.hasClass('mk-btn mk-btn-link'))
  // })

  // it('should render the correct component based on different props', () => {
  //   const wrapper = shallow(<Button {...testProps}>Test</Button>)
  //   const element = wrapper.find('.monkey')
  //   expect(element.hasClass('mk-btn-primary mk-btn-lg')).toBeTruthy()
  // })

  // it('should render Buttons of different size correctly', () => {
  //   const wrapper = render(
  //     <div>
  //       <Button type="primary" size="lg">
  //         lg尺寸
  //       </Button>
  //       <Button type="primary" size="md">
  //         md尺寸
  //       </Button>
  //       <Button type="primary" size="sm">
  //         sm尺寸
  //       </Button>
  //     </div>,
  //   )
  //   expect(wrapper).toMatchSnapshot()
  // })

  // it('should render disabled button when disabled set to true', () => {
  //   const wrapper = shallow(<Button disabled>Disabled Button</Button>)
  //   const element = wrapper.find('button')
  //   expect(element.prop('disabled')).toBeTruthy()
  //   element.simulate('click')
  //   expect(disabledProps.onClick).not.toHaveBeenCalled()
  // })

  // it('should not render as link button when href is undefined', async () => {
  //   const wrapper = shallow(
  //     <Button type="link" href={undefined}>
  //       button
  //     </Button>,
  //   )
  //   expect(wrapper.find('a').exists()).toBeFalsy()
  //   expect(wrapper.find('button').exists()).toBeTruthy()
  // })
})
