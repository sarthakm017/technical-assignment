type ChipProps = {
  content: string;
};

const Chip = ({ content }: ChipProps) => {
  const getChipColor = (status: string) => {
    let colors = {
      backgroundColor: "",
      textColor: "",
    };

    switch (status) {
      case "Completed":
        colors.backgroundColor = "rgba(107, 226, 190, 0.24)";
        colors.textColor = "#50D1AA";
        break;
      case "Preparing":
        colors.backgroundColor = "rgba(146, 144, 254, 0.20)";
        colors.textColor = "#9290FE";
        break;
      case "Pending":
        colors.backgroundColor = "rgba(255, 181, 114, 0.20)";
        colors.textColor = "#FFB572";
        break;
      default:
        break;
    }
    return colors;
  };
  return (
    <div
      style={{
        padding: "4px 12px",
        borderRadius: "30px",
        background: getChipColor(content).backgroundColor,
        color: getChipColor(content).textColor,
        width: "90px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <p>{content}</p>
    </div>
  );
};
export default Chip;
