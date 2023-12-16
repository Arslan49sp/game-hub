import { Badge } from "@chakra-ui/react";
import React from "react";
interface Props {
  score: number;
}
const CriticScore = ({ score }: Props) => {
  const color = score > 90 ? "yellow" : score > 75 ? "green" : " ";
  return (
    <Badge paddingX={2} borderRadius="4px" colorScheme={color}>
      {score}
    </Badge>
  );
};

export default CriticScore;
