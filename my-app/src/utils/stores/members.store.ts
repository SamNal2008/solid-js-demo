import { createEffect, createSignal } from 'solid-js';
import { createStore } from 'solid-js/store';
import { Member } from '../interfaces/member';
import { fetchMembers } from '../services/members.service';

export const [_members, {refetch}] = fetchMembers();

export const [memberOrigin, setMemberOrigin] = createSignal('');

interface MemberStore {
  list: Member[],
  count: number
};

export const [memberStore, setMembers] = createStore<MemberStore>({list: [], count: 0});

// Erreur de vouloir le wrap dans une fonction
export const getMembers = () => {
  return memberStore.list;
}

// Bonne idée de vouloir le wrap
export const updateMembers = (updatedMembers: Member[]) => {
  setMembers('list', updatedMembers);
  setMembers('count', updatedMembers.length);
}

// Inutile
export const refreshMembers = () => {
  refetch();
}

export const updateStoreLocally = () => {
  updateMembers([{age: 18, name: 'Local member', team: 'Local team'}]);
  setMemberOrigin('Local');
}

// Important de clarifier le besoin de cette fonction (semblable à un use effect)
createEffect(() => {
  console.log('updating members');
  if(_members.latest?.length) {
    console.log('updating state');
    updateMembers(_members.latest);
    setMemberOrigin('From API');
  }
  else {
    console.log('Loading : ' + _members.loading);
    console.log('Error : ' + _members.error);
  }
});



