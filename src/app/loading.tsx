import { CircularProgress } from "@nextui-org/react";

const Loading = () => {
  return (
    <CircularProgress
      classNames={{
        svg: "w-36 h-36 drop-shadow-md",
        base: "mx-auto",
      }}
      aria-label="Loading page...."
    />
  );
};

export default Loading;
