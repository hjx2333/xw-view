export function deepCopy(target) {
  if (typeof target == 'object') {
    const result = Array.isArray(target) ? [] : {}
    for (const key in target) {
      if (typeof target[key] == 'object') {
        result[key] = deepCopy(target[key])
      } else {
        result[key] = target[key]
      }
    }

    return result
  }

  return target
}

/**
 * @description 根据尺寸，设置预览比例
 * @param {*} ele 容器元素
 * @param {Number} width 标准的宽度
 * @param {Number} height 标准的高度
 */
export function setPreviewScale(ele, { width, height }) {
  const baseProportion = parseFloat((width / height).toFixed(5))
  const scale = {
    width: 1,
    height: 1
  }

  const winWidth = window.innerWidth
  const winHeight = window.innerHeight
  const currentRate = parseFloat((winWidth / winHeight).toFixed(5))

  if (currentRate > baseProportion) {
    // 表示更宽
    scale.width = parseFloat(((winHeight * baseProportion) / width).toFixed(5))
    scale.height = parseFloat((winHeight / height).toFixed(5))
    ele.style.transform = `scale(${scale.width}, ${scale.height})`
  } else {
    // 表示更高
    scale.height = parseFloat((winWidth / baseProportion / height).toFixed(5))
    scale.width = parseFloat((winWidth / width).toFixed(5))
    ele.style.transform = `scale(${scale.width}, ${scale.height})`
  }
}

