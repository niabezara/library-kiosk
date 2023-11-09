import { ClipLoader } from "react-spinners";

export default function LoadingSpinner() {
  return (
    <div
      className="spinner-container"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ClipLoader color="#38ADD2" />
    </div>
  );
}
