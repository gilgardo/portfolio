import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid>
        {gridItems.map((content) => (
          <BentoGridItem {...content} key={content.id} />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
