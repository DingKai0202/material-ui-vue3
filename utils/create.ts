// block 代码块 elment 元素  modifier 装饰
// z-button
// z-button_element
// z-button_element--disabled
// is-checked is-enabled

// :class=[bem.b()]

// 前缀名字  z-button-box__element--modifier
function _bem(prefixName: string, blockSuffix: string, element: string, modifier: string){
  if (blockSuffix) {
    prefixName += `-${blockSuffix}`
  }
  if (element) {
    prefixName += `__${element}`
  }
  if (modifier) {
    prefixName += `--${modifier}`
  }
  return prefixName
}

function createBEM(prefixName: string) {
  const b = (blockSuffix = '') => _bem(prefixName, blockSuffix, '', '')
  const e = (element = '') => element ? _bem(prefixName, '', element, '') : ''
  const m = (modifier = '') => modifier ? _bem(prefixName, '', '', modifier) : ''

  const be = (blockSuffix = '', element = '') => 
    blockSuffix && element ? _bem(prefixName, blockSuffix, element, '') : ''
  const bm = (blockSuffix = '', modifier = '') => 
    blockSuffix && modifier ? _bem(prefixName, blockSuffix, '', modifier) : ''
  const em = (element = '', modifier = '') => 
    element && modifier ? _bem(prefixName, '', element, modifier) : ''
  const bem = (
    blockSuffix = '',
    element = '',
    modifier = ''  
  ) =>
    blockSuffix && element && modifier
      ? _bem(prefixName, blockSuffix, element, modifier)
      : ''

  const is = (name: string, state: any) => (state ? `is-${name}` : '')    
  return {
    b,
    e,
    m,
    be,
    bm,
    em,
    bem,
    is
  }
}

export function createNamespace(name: string) {
  const prefixName = `m-${name}`
  return createBEM(prefixName)
}

const bem = createNamespace('icon')

console.log(bem.b('box'))
console.log(bem.e('element'))
console.log(bem.m('modifier'))
console.log(bem.bem('box', 'element', 'modifier'))
console.log(bem.is('checked', true));

console.log(bem.be('box', 'element'))
console.log(bem.bm('box', 'modifier'))
console.log(bem.em('element', 'modifier'))

