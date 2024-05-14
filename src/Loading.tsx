import Lottie from "react-lottie";
import animationData from "./lotties/my-loading-animation.json";

const Loading = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <Lottie
        options={defaultOptions}
        height={22}
        width={340}
        style={{ borderRadius: 10 }}
      />
    </>
  );
};

export default Loading;
