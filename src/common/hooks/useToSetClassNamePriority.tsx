import { useEffect, useState } from "react";

const useToSetClassNamePriority = (originalClassName: string | undefined) => {
  const [className, setClassName] = useState("");
  useEffect(() => {
    if (!originalClassName) return;
    const allClassNames = originalClassName.trim().split(" ");
    let newClassName = "";
    allClassNames.map((clss) => {
      newClassName += ` !${clss}`;
    });
    setClassName(newClassName);
  }, [originalClassName]);

  return { className };
};

export default useToSetClassNamePriority;
