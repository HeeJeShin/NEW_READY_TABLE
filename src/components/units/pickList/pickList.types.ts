import { IQuery } from "../../../commons/types/generated/types";

export interface IPickListProps {
  // data?: Pick<IQuery, "fetchUseditem">;
  data2?: Pick<IQuery, "fetchUseditemsIPicked">;
  pickCountData?: Pick<IQuery, "fetchUseditemsCountIPicked">;
  onPressPick: () => void;
}
