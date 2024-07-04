import useGUI from "../../store/useRoute";

const ContentWrapper = () => {
  const { currentRoute } = useGUI();
  const { component: Component } = currentRoute.route;
  return <Component />;
};

export default ContentWrapper;
