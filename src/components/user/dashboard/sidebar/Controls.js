/** @jsx jsx */
import { jsx } from "theme-ui";
import { css } from "@emotion/core";
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// noinspection ES6CheckImport
// import {faPlusCircle} from '@fortawesome/pro-duotone-svg-icons'
import { Flex } from "@theme-ui/components";

export default function Controls() {
  // const logo = css`
  // section & {
  // color: red;
  // font-size: 8rem;
  // `
  return (
    <div sx={{ variant: "components.sidebar.controls" }}>
      <Flex sx={{ variant: "components.sidebar.controls.plusSign" }}>
        {/* <FontAwesomeIcon icon={faPlusCircle} sx={{variant: 'components.sidebar.controls.plusSign.logo'}}
          /> */}
      </Flex>
      <Flex sx={{ variant: "components.sidebar.controls.preferences" }}>
        <p> Audio / Video </p>
      </Flex>
    </div>
  );
}
