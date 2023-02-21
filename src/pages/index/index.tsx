import { Component, PropsWithChildren } from 'react'
import { View, Text, Swiper, SwiperItem, Image  } from '@tarojs/components'
import { AtIcon, AtTabBar, AtGrid, AtNoticebar } from 'taro-ui'

import "taro-ui/dist/style/components/button.scss" // 按需引入
import "taro-ui/dist/style/components/tab-bar.scss"
import "taro-ui/dist/style/components/badge.scss"
import "taro-ui/dist/style/components/icon.scss"
import "taro-ui/dist/style/components/search-bar.scss";
import "taro-ui/dist/style/components/grid.scss";
import "taro-ui/dist/style/components/noticebar.scss";

import './index.scss'

export default class Index extends Component<PropsWithChildren, {current: number}> {
  setState(_arg0: { current: any }) {
    throw new Error('Method not implemented.')
  }
  state: { current: number }
  constructor (props) {
    super(props)
    this.state = {
      current: 0,
    }
  }
  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  handleClick = (value: any) => {
    this.setState({
      current: value
    })
  }
  onActionClick () {
    console.log('开始搜索')
  }
  render () {
    return (
      <View className='index'>
        <View className='search-wrapper'>
          <View>
            <AtIcon className='search' value='search' size='20' color='#fff'></AtIcon>
            <Text className='text'>想来测试当前框架，测试00123</Text>
          </View>
          <View className='btn'><Text className='btn-text'>继续</Text></View>
        </View>

        <Swiper
          className='test-h'
          indicatorColor='#999'
          indicatorActiveColor='#333'
          vertical={false}
          circular
          indicatorDots
          autoplay
        >
          <SwiperItem>
            <View className='demo-text-1'>
              <Image className='img' src='https://img14.360buyimg.com/babel/s700x360_jfs/t1/4099/12/2578/101668/5b971b4bE65ae279d/89dd1764797acfd9.jpg!q90!cc_350x180' />
            </View>
          </SwiperItem>
          <SwiperItem>
            <View className='demo-text-2'>
              <Image className='img' src='https://img11.360buyimg.com/babel/s700x360_jfs/t1/4776/39/2280/143162/5b9642a5E83bcda10/d93064343eb12276.jpg!q90!cc_350x180'  />
            </View>
          </SwiperItem>
          <SwiperItem>
            <View className='demo-text-3'>
              <Image className='img' src='https://img10.360buyimg.com/babel/s700x360_jfs/t25855/203/725883724/96703/5a598a0f/5b7a22e1Nfd6ba344.jpg!q90!cc_350x180'  />
            </View>
          </SwiperItem>
        </Swiper>

        <AtGrid className='grid' data={lists} columnNum={5} hasBorder={false} />

        <AtNoticebar className='notice' icon='volume-plus'>这是 NoticeBar 通告栏</AtNoticebar>
        <View className='line'></View>

        <AtTabBar
          tabList={[
          { title: '首页', iconType: 'home'},
          { title: '发现', iconType: 'search' },
          { title: '我的', iconType: 'user'}
        ]}
          onClick={this.handleClick.bind(this)}
          current={this.state.current}
          fixed
        />
      </View>
    )
  }
}


const lists = [
  {
    image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png',
    value: '二手'
  },
  {
    image: 'https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png',
    value: '积分'
  },
  {
    image: 'https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png',
    value: '领会员'
  },
  {
    image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png',
    value: '新品首发'
  },
  {
    image: 'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png',
    value: '领京豆'
  },
  {
    image: 'https://img30.360buyimg.com/jdphoto/s72x72_jfs/t5770/97/5184449507/2423/294d5f95/595c3b4dNbc6bc95d.png',
    value: '手机馆'
  }
]
