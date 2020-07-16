import MockAdapter from "axios-mock-adapter";
import apiClient from "../../utils/apiClient";

import dummyReducer, {
  toggleDummyValue1,
  dummyFetching,
  dummyFetchSuccess,
  setError,
  defaultDummyActionState,
  dummyFetch,
} from "./dummy.slice";

const dispatch = jest.fn();
const getState = jest.fn();
const mock = new MockAdapter(apiClient);

describe("Dummy Actions", () => {
  it("should Handle toggleDummyValue1", () => {
    const { dummyValue1 } = dummyReducer(defaultDummyActionState, {
      type: toggleDummyValue1.type,
    });
    expect(dummyValue1).toEqual(true);
  });

  it("should Handle dummyFetching", () => {
    const { fetching } = dummyReducer(defaultDummyActionState, {
      type: dummyFetching.type,
    });
    expect(fetching).toEqual(true);
  });

  it("should handle dummyFetch", async () => {
    const expectedResponse = {
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: false,
    };

    mock.onGet("/todos/1").reply(200);
    await dummyFetch()(dispatch, getState, null);
    expect(dispatch).toBeCalledWith({ type: dummyFetching.type });
    expect(dispatch).toBeCalledWith({
      type: dummyFetchSuccess.type,
      payload: expectedResponse,
    });
  });

  it("should Handle setError", () => {
    const { error } = dummyReducer(defaultDummyActionState, {
      type: setError.type,
    });
    expect(error).toEqual("Error");
  });
});
