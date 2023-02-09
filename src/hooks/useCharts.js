import * as echarts from 'echarts'
import {onMounted, onUnmounted } from 'vue'

export default function(ele,option){
  let echartsInstance = null

  echartsInstance = echarts.init(ele,null,{renderer:'svg'})
  echartsInstance.setOption(option) 

  onUnmounted(()=>{
    if(echartsInstance){
      echartsInstance.dispose()
    }
  })
  return echartsInstance
}