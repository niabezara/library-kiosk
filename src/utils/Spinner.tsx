import { DotLoader } from "react-spinners";

export default function LoadingSpinner() {
  return (
    <div
      className="spinner-container"
      style={{
        display: "flex",
        justifyContent: "center",
        minHeight: "100vh",
        alignItems: "center",
        background: "#F8F6F4",
      }}
    >
      <DotLoader color="#66347F" />
    </div>
  );
}
