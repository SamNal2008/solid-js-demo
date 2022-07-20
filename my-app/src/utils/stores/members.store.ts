import { createStore } from 'solid-js/store';
import { Member } from '../interfaces/member';
import { fetchMembers } from '../services/members.service';

const [_members, {refetch}] = fetchMembers();

export const [memberStore, _setMembers] = createStore({list: _members(), count: _members()?.length});

export const getMembers = () => {
  return memberStore.list;
}

export const updatedMembers = (updatedMembers: Member[]) => {
  _setMembers('list', updatedMembers);
}

export const refreshMembers = () => {
  refetch();
}