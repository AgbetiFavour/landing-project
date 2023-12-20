import { Box, useToast } from "@chakra-ui/react";
function copyToClipboards(textToCopy) {
    // navigator clipboard api needs a secure context (https)
    if (navigator.clipboard && window.isSecureContext) {
        // navigator clipboard api method'
        return navigator.clipboard.writeText(textToCopy);
    } else {
        // text area method
        let textArea = document.createElement("textarea");
        textArea.value = textToCopy;
        // make the textarea out of viewport
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        textArea.style.top = "-999999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        return new Promise((res, rej) => {
            // here the magic happens
            document.execCommand('copy') ? res() : rej();
            textArea.remove();
        });
    }
}

export const useCopyToClip = () => {
  const toast = useToast();
  const copyToClipBoard = async (copyMe) => {
 
    try {
      await copyToClipboards(copyMe);
      toast({
        position: "bottom",
        duration:2000,
        render: () => (
          <Box borderRadius="10px" color="brand.400" p={3} bg="neutral.700">
            Copied
          </Box>
        ),
      });
    } catch (err) { alert(err)}
  };

  return { copyToClipBoard };
};
