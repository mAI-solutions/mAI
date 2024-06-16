import useGUIData from '../../store/useGUIData'

const ContentWrapper = () => {
  const { currentRoute } = useGUIData()
  const { component: Component } = currentRoute.route
  // console.log(currentRoute);
  return <Component />
}

export default ContentWrapper