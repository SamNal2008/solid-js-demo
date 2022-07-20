import Button from "@suid/material/Button";
import { breakMembersList, memberStore } from "../utils/stores/members.store";
import styles from '../App.module.css';

export default function OtherComponent() {
  return (
    <div class={styles.component}>
      <h1>You want to update store ?</h1>
      <Button variant="contained" onClick={breakMembersList}>Break the store</Button>
      <div>{memberStore.list?.at(0)?.name}</div>
    </div>
  );
}