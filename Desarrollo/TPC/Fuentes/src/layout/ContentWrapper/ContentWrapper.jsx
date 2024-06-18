import useGUIData from '../../store/useGUI'

const ContentWrapper = () => {
  const { currentRoute } = useGUIData()
  const { component: Component } = currentRoute.route
  // console.log(currentRoute)
  return <Component />
}

export default ContentWrapper