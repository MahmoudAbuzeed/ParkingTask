import { Messages } from "../../messages/index";

export const registerItem = async (itemParam: any, Model: any) => {
  const item = await Model.findOne({ platteNumber: itemParam.platteNumber });

  if (item) {
    return { error: Messages.AlreadyExists };
  } else {
    let newItem = new Model(itemParam);
    newItem.save();
    return newItem;
  }
};
