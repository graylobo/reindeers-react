import instance from "../lib/axios";

const PATH = "/categoryGroups";
export function getCategoryGroups(params) {
  return instance({ method: "get", url: PATH, params });
}

export function getCategoryGroup(id) {
  return instance({ method: "get", url: PATH + "/" + id });
}
