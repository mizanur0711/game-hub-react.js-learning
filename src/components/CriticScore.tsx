import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let color = score > 75 ? "green" : score > 60 ? "yellow" : "";
  return (
    <Badge fontSize="14px" colorScheme={color} paddingX={2} borderRadius={3}>
      {score}
    </Badge>
  );
};

export default CriticScore;
