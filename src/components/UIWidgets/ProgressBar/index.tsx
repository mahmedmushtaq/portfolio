interface PropsType {
  percentage: number;
}

const ProgressBar = ({ percentage }: PropsType) => {
  return (
    <div>
      <div className="w-full bg-lsecondary rounded-full h-2.5">
        <div
          className="bg-lprimary h-2.5 rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
