import useGUI from '../../store/useGUI'

const ContentWrapper = () => {
  const { currentRoute } = useGUI()
  const { component: Component } = currentRoute.route
  // console.log(currentRoute)
  return <Component />
}

export default ContentWrapper