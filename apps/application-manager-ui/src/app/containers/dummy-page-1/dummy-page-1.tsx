import React, { ReactElement } from "react";
import { useSelector, useDispatch } from "react-redux";

import DummyTitle from "../../components/DummyTitle";
import DummyLink from "../../components/DummyLink";
import DummyButton from "../../components/DummyButton";

import { RootState } from "../../slices";
import { toggleDummyValue1 } from "../../slices/dummyActions/dummy.slice";
import { APPLICATION_MANAGER_ROUTES } from "../../utils/constants";

const DummyPage1 = (): ReactElement => {
  const dispatch = useDispatch();
  const { dummyValue1 } = useSelector((state: RootState) => state.dummy);

  const toggle = () => {
    dispatch(toggleDummyValue1());
  };

  return (
    <div>
      <DummyTitle title="Dummy Page 1" />
      <DummyLink
        title="Dummy Page 2"
        linkTo={APPLICATION_MANAGER_ROUTES.dummy2}
      />

      <hr />

      <div>
        <DummyButton title="Toggle Dummy Value 1" onClick={toggle} />
        <h1>{dummyValue1 ? "True" : "False"}</h1>
      </div>
    </div>
  );
};

export default DummyPage1;
