import Button from "@suid/material/Button";
import { updateStoreLocally, memberStore, memberOrigin } from "../utils/stores/members.store";
import styles from '../App.module.css';

export default function OtherComponent() {
  return (
    <div class={styles.component}>
      <h1>Firt member</h1>
      <Button variant="contained" onClick={updateStoreLocally}>Update store locally : Replace by "Local member"</Button>
      <div>
        <p> <span style={{'font-weight': 'bold'}}>Origin : </span>{memberOrigin}</p>
        <p> <span style={{'font-weight': 'bold'}}>First member : </span>{memberStore.list?.at(0)?.name}</p>
        <p> <span style={{'font-weight': 'bold'}}>Count : </span>{memberStore.count}</p>
      </div>
    </div>
  );
}