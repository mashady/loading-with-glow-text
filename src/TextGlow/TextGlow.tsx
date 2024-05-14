import "./text-glow.css";

const TextGlow = () => {
  return (
    <div>
      <div>
        <svg width="0" height="0">
          <filter
            id="f"
            x="-50%"
            y="-200%"
            width="200%"
            height="500%"
            primitiveUnits="objectBoundingBox"
          >
            <feGaussianBlur stdDeviation=".025 .2"></feGaussianBlur>
            <feColorMatrix type="saturate" values="1.3"></feColorMatrix>
            <feBlend in="SourceGraphic"></feBlend>
          </filter>
        </svg>
        <h1>WELCOME TO MASHADY VERSE</h1>
      </div>
    </div>
  );
};

export default TextGlow;
