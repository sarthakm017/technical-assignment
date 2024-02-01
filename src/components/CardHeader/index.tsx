import "./style.css";

type CardHeaderProps = {
  title: string;
  buttonIcon: React.ReactNode;
  buttonText: string;
};
const CardHeader = ({ title, buttonIcon, buttonText }: CardHeaderProps) => {
  return (
    <div
      style={{
        padding: "24px",
        display: "flex",
        background: "#1F1D2B",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <p
        style={{
          fontSize: "20px",
          fontWeight: 600,
          color: "#FFF",
        }}
      >
        {title}
      </p>
      <div className="button-container">
        {buttonIcon}
        <p
          style={{
            fontSize: "14px",
            fontWeight: 500,
            color: "#FFF",
          }}
        >
          {buttonText}
        </p>
      </div>
    </div>
  );
};
export default CardHeader;
