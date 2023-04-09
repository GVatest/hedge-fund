import { compose } from "shared/utils";
import { withStore } from "./withStore";
import { withToast } from "./withToast";

export const withProviders = compose(withStore, withToast);
