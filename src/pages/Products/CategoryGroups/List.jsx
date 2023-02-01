import React, { useMemo } from "react";
import queryString from "query-string";
import { useLocation } from "react-router-dom";
import ListLayout from "../../../layouts/ListLayout";
import Table from "../../../components/Table/Table";
import { useQuery } from "react-query";
import { getCategoryGroups } from "../../../api/categoryGroups";

export function getListParams({ page, pageSize, ...search }) {
  if (page && pageSize) {
    return {
      start: (page - 1) * pageSize,
      perPage: pageSize,
      ...search,
    };
  }
  return { start: 0, perPage: 10 };
}

function List() {
  const location = useLocation();
  const parsed = useMemo(
    () => ({
      page: 1,
      pageSize: 10,
      ...queryString.parse(location.search, { parseBooleans: true }),
    }),
    [location.search]
  );
  const {
    data: categoryGroups,
    isLoading,
    isFetching,
    refetch,
  } = useQuery("getCategoryGroups", () => getCategoryGroups(getListParams(parsed)), {
    select: (res) => res.data,
  });
  console.log(categoryGroups);

  return (
    <ListLayout>
      <Table />
    </ListLayout>
  );
}

export default List;
