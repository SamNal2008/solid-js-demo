import { Member } from "./interfaces/member";

const fakeDatabase: Member[] = [
  {
    age: 22,
    name: 'Member 1',
    team: 'Team 1'
  },
  {
    age: 46,
    name: 'Member 2',
    team: 'Team 2'
  },
];

interface FakeCall<T> {
  data: T[]
};

export const fakeApiCall = async () =>
  await new Promise<FakeCall<Member>>(resolve => setTimeout(() => resolve({data: Object.values(fakeDatabase)}), 2000));