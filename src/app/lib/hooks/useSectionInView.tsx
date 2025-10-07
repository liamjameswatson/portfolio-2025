import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "../../context/active-section-context";
import { useEffect } from "react";
import type { SectionName } from "../types";

type useSectionInViewProps = {
  sectionName: SectionName;
  threshold?: number;
};

function useSectionInView({
  sectionName,
  threshold = 0.75,
}: useSectionInViewProps) {
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  const { ref, inView } = useInView({
    threshold,
  });

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      // stop the animation from scrolling
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);
  return ref;
}

export default useSectionInView;
