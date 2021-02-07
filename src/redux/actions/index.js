import * as userActions from "./user";
import * as subjectActions from "./subjects";

const actions = {
  ...userActions,
  ...subjectActions,
};

export default actions;
