import Lottie from "lottie-react";
import flow from "../public/lotties/flow.json";

const style = {
  height: 150,
};

const Flow = () => {
  return (
    <Lottie animationData={flow} loop={true} autoplay={true} style={style} />
  );
};

export default Flow;
