import { createResource } from "solid-js";
import { fakeApiCall } from "../fake-api"

export const fetchMembers = () => {
  const fetchData = () => fakeApiCall().then(res => res.data);
  return createResource(fetchData, {initialValue: []});
}