import { Button, Tooltip } from "@chakra-ui/react";
import copyText from "../copyText";
import { CopyIcon } from "@chakra-ui/icons";

interface CopyButtonProps {
  text: string;
  disabled?: boolean;
}
const CopyButton = ({ text, disabled }: CopyButtonProps) => {
  return (
    <Tooltip
      hasArrow
      label="Copy and send to your fellow traveller">
      <Button
        disabled={disabled}
        size={"xs"}
        onClick={() => copyText(text)}>
        <CopyIcon />
      </Button>
    </Tooltip>
  );
};
export default CopyButton;
