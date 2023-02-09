import { onMounted, onUnmounted } from "vue"
import _ from 'lodash'
/**
 * 根据当前屏幕进行缩放
 */
export default function(option){
  let resizeChange = _.throttle(triggerScale,100)
  
  onMounted(()=>{
    triggerScale()
    window.addEventListener("resize",resizeChange)
  })
  
  onUnmounted(()=>{
    window.removeEventListener("resize",resizeChange)
  })

  function triggerScale(){
    const targetWidth = option.targetWidth || 1920
    const targetHeight = option.targetHeight || 1080
    const screenRatio =option.scaleRatio || 16 / 9

    let currentWidth = document.documentElement.clientWidth
    let currentHeight = document.documentElement.clientHeight
    let currentRatio = currentWidth / currentHeight
    let scaleRatio = currentWidth / targetWidth

    if(currentRatio > screenRatio){
      scaleRatio = currentHeight / targetHeight
      document.body.setAttribute("style",`width:${targetWidth}px;height:${targetHeight}px;transform:scale(${scaleRatio}) translateX(-50%);left:50%`)
      document.documentElement.setAttribute("style",`height:${currentHeight}px`)
    }else{
      document.body.setAttribute("style",`width:${targetWidth}px;height:${targetHeight}px;transform:scale(${scaleRatio})`)
    }
  }
}
