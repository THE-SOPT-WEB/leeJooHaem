import to from "await-to-js";
import { useReducer } from "react";
import { match } from "ts-pattern";
import { client } from "./lib/api";

export type State<T, E = unknown> =
  | {
      _TAG: "IDLE";
    }
  | {
      _TAG: "LOADING";
    }
  | {
      _TAG: "ERROR";
      error: E;
    }
  | {
      _TAG: "OK";
      message: null | T;
    };

export type Action<T, E = unknown> =
  | {
      _TAG: "FETCH";
    }
  | {
      _TAG: "FAILED";
      error: E;
    }
  | {
      _TAG: "SUCCESS";
      message: T;
    };

export function reducer<R, E>(
  prevState: State<R, E>,
  action: Action<R, E>
): State<R, E> {
  switch (prevState._TAG) {
    case "IDLE":
      if (action._TAG === "FETCH") {
        return {
          _TAG: "LOADING",
        };
      }
      break;
    case "LOADING":
      if (action._TAG === "FAILED") {
        return {
          _TAG: "ERROR",
          error: action.error,
        };
      }
      if (action._TAG === "SUCCESS") {
        return {
          _TAG: "OK",
          message: action.message,
        };
      }
      break;
    case "OK":
      if (action._TAG === "FETCH") {
        return {
          _TAG: "LOADING",
        };
      }
      break;
    default:
      throw new Error(`Unknown action type: ${action._TAG}`);
  }
  return prevState;
}

enum ERROR_TYPE {
  "NOT_ERROR" = "NOT_ERROR",
  "CLIENT_ERROR" = "CLIENT_ERROR",
  "SERVER_ERROR" = "SERVER_ERROR",
}

const isErrorByStatusCode = (statusCode: number): ERROR_TYPE | null => {
  return match(statusCode)
    .with(200, () => ERROR_TYPE.NOT_ERROR)
    .with(400, 401, 403, () => ERROR_TYPE.CLIENT_ERROR)
    .with(500, () => ERROR_TYPE.SERVER_ERROR)
    .otherwise(() => null);
  // .exhausitive() 안정성 검사 (전체를 확인하는지)
};

const getItems = async () => {
  const response = await client.get(`/albums?_page=1&_limit=10`);
  const error = isErrorByStatusCode(response.status);
  const itemList = response.data;

  return {
    error,
    itemList,
  };
};

export default function ApiReducer() {
  const [state, dispatch] = useReducer(reducer, { _TAG: "IDLE" });
  console.log(state);

  const handleItems = async () => {
    dispatch({ _TAG: "FETCH" });

    // 패칭 라이브러리를 사용하면 없어도 될듯한!
    const [error, response] = await to(getItems());

    if (error) {
      return dispatch({
        _TAG: "FAILED",
        error,
      });
    }
    if (response?.error !== ERROR_TYPE.NOT_ERROR) {
      return dispatch({
        _TAG: "FAILED",
        error: response.error,
      });
    }
    if (response?.error === ERROR_TYPE.NOT_ERROR && response.itemList) {
      return dispatch({ _TAG: "SUCCESS", message: response.itemList });
    }

    console.log(error, response);
  };

  return (
    <div>
      <button onClick={() => dispatch({ _TAG: "SUCCESS", message: "sadf" })}>
        SUCCESS
      </button>
      <button onClick={() => dispatch({ _TAG: "FETCH" })}>FETCH</button>
      <button onClick={() => dispatch({ _TAG: "FAILED", error: "asfd" })}>
        FAILED
      </button>
      <br />
      <button onClick={() => getItems()}>get!</button>
      <br />
      <button onClick={() => handleItems()}>핸들링!!!!!!!!!</button>
    </div>
  );
}
