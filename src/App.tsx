import Loading from "./Loading";
import TextGlow from "./TextGlow/TextGlow";

function App() {
  return (
    <>
      <div
        className=""
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
          backgroundColor: "#1a171b",
        }}
      >
        <div
          style={{
            padding: "10px",
          }}
        >
          <TextGlow />
          <Loading />
        </div>
      </div>
    </>
  );
}

export default App;
