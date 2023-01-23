import { useEffect } from 'react'

type Helmet = {
  title: string
  children: any
}

export const Helmet = (props: Helmet) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  document.title = 'Youtube - ' + props.title

  return <div>{props.children}</div>
}
