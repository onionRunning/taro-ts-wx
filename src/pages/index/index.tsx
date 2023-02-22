import { Component, PropsWithChildren } from 'react'
import { View, Text, Swiper, SwiperItem, Image, Button  } from '@tarojs/components'
import { Grid, GridItem, Icon, NoticeBar, Tabbar, TabbarItem } from '@nutui/nutui-react-taro';

import './index.scss'

export default class Index extends Component<PropsWithChildren, {current: number}> {
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

    const contents = () => {
      return [1,2,3,4,5].map((_, index) => {
        return (
          <View key={index} className='zf-item'>
            <Image mode='center' className='imgs'  src='https://img0.baidu.com/it/u=2396240290,1190384795&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500'></Image>
            <View className='right'>
              <View className='title-view'>
                <Text className='title-text'>佐敦一期公寓(单人间)</Text>
              </View>
              <View className='sx'>
                <Text className='sx-dt'>地铁: 佐敦地铁站A出口</Text>
                <Text className='sx-xx'>大学: 理工 港大 城大 都会 浸会</Text>
              </View>
              <View className='bq'>
                <View className='btn-icon'>
                  <Text className='btn-text'>长租</Text>
                </View>
                <View className='btn-icon'>
                  <Text className='btn-text'>月租</Text>
                </View>
                <View className='btn-icon'>
                  <Text className='btn-text'>单人间</Text>
                </View>
                <View className='btn-icon'>
                  <Text className='btn-text'>1楼超大面积公区</Text>
                </View>
                <View className='btn-icon'>
                  <Text className='btn-text'>干湿分离浴</Text>
                </View>
                <View className='btn-icon'>
                  <Text className='btn-text'>香港美食</Text>
                </View>
              </View>
              <View className='money'>
                <Text>HK$</Text><Text className='color'>5500.00</Text><Text>起/月</Text>
              </View>
            </View>
          </View>
        )
      })
    }

    return (
      <View className='index'>
        <View className='search-wrapper'>
          <View className='search-content'>
            <View>
              <Icon className='search' name='search' size='14'></Icon>
              <Text className='text'>你想住哪儿,试试搜公寓/大学</Text>
            </View>
            <View className='btn'><Text className='btn-text'>搜索</Text></View>
          </View>
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

        <Grid columnNum={5} border={false}>
          <GridItem icon='dongdong' text='闲置二手' />
          <GridItem icon='dongdong' text='积分签到' />
          <GridItem icon='dongdong' text='公寓直播' />
          <GridItem icon='dongdong' text='进群有礼' />
          <GridItem icon='dongdong' text='微信客服' />
          <GridItem icon='dongdong' text='住房须知' />
        </Grid>

        <NoticeBar
          className='custom'
          direction='vertical'
          list={horseLamp1}
          speed={6}
          background='#fff'
          standTime={3000}
          rightIcon={<Icon name='fabulous' size='16' color='#f0250f' />}
        />

        <View className='line'></View>

        <View className='box'>
          <View className='select'>
            <View className='select-item'>
              <Text className='select-text'>租期</Text>
              <Icon name='triangle-down'></Icon>
            </View>
            <View className='select-item'>
              <Text className='select-text'>学校</Text>
              <Icon name='triangle-down'></Icon>
            </View>
            <View className='select-item'>
              <Text className='select-text'>筛选</Text>
              <Icon name='triangle-down'></Icon>
            </View>
            <View className='select-item'>
              <Text className='select-text'>综合</Text>
              <Icon name='triangle-down'></Icon>
            </View>
          </View>

          <View className='btn-wrapper'>
            <View className='btn-icon'>
              <Text className='btn-text'>只看有房</Text>
            </View>
            <View className='btn-icon btn-left'>
              <Text className='btn-text'>iRent自营</Text>
            </View>
          </View>
        </View>

        {contents()}
        <View className='empty'></View>
        <Tabbar onSwitch={(child, idx) => {console.log(idx)}} bottom>
          <TabbarItem tabTitle='首页' icon='home' />
          <TabbarItem tabTitle='发现' icon='find' />
          <TabbarItem tabTitle='我的' icon='my' />
        </Tabbar>
      </View>
    )
  }
}



const horseLamp1 = [
  '新用户奖励,领取30积分',
  '登陆小程序奖励,领取10积分',
  '首次查看公寓,领取10积分',
]
