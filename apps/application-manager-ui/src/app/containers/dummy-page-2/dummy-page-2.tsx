import React, { ReactElement } from "react";

import DummyTitle from "../../components/DummyTitle";
import DummyLink from "../../components/DummyLink";

import { APPLICATION_MANAGER_ROUTES } from "../../utils/constants";

const DummyPage2 = (): ReactElement => {
  return (
    <div>
      <DummyTitle title="Dummy Page 2" />
      <DummyLink
        title="Dummy Page 1"
        linkTo={APPLICATION_MANAGER_ROUTES.dummy1}
      />
    </div>
  );
};

export default DummyPage2;
