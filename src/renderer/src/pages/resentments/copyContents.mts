import copyText from '@renderer/scripts/copyText.mjs'

export function getContents(): string {
  const contentsDiv = document.getElementById('ToCopy')
  let stringtocopy = ''

  if (contentsDiv) {
    contentsDiv.childNodes.forEach((node) => {
      if (node.childNodes.length) {
        node.childNodes.forEach((n) => {
          if (n.childNodes.length) {
            n.childNodes.forEach(
              (n2) =>
                (stringtocopy = `${stringtocopy} ${
                  n2.parentNode?.nodeName === 'LI' ? '\t• ' : ''
                }  ${n2.textContent} \n`)
            )
          } else {
            stringtocopy = `${stringtocopy} ${n.textContent} \n`
          }
        })
      } else {
        stringtocopy = `${stringtocopy} ${node.textContent} \n\n`
      }
    })
  }
  return stringtocopy
}

export function copyContents(): () => boolean {
  return () => {
    const stringtocopy = getContents()
    if (stringtocopy.length > 0) {
      copyText(stringtocopy)
      return true
    }
    return false
  }
}
