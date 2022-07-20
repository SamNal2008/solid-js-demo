import Button from "@suid/material/Button";
import Paper from "@suid/material/Paper";
import Table from "@suid/material/Table";
import TableBody from "@suid/material/TableBody";
import TableCell from "@suid/material/TableCell";
import TableContainer from "@suid/material/TableContainer";
import TableHead from "@suid/material/TableHead";
import TableRow from "@suid/material/TableRow";
import { For, Show, Suspense } from "solid-js";
import styles from '../App.module.css';
import { Member } from "../utils/interfaces/member";
import { memberStore, refreshMembers, _members } from "../utils/stores/members.store";

export default function BasicTable() {
  return (
    <Show fallback={<div>Loading ...</div>} when={!_members.loading}>
      <div class={styles.component}>
        <h1>Member table</h1>
        <Button variant="contained" onClick={refreshMembers}>Refresh members</Button>
        <TableContainer component={Paper} class={styles.table}>
              <Table sx={{ minWidth: 350 }} aria-label="simple table">
                <TableHead>
                  <TableRow style={{"background-color": 'grey'}}>
                    <TableCell ><span class={styles.row}>😀 Name</span></TableCell>
                    <TableCell align="center"><span class={styles.row}>🔞 Age</span></TableCell>
                    <TableCell align="center"><span class={styles.row}>🧑‍🤝‍🧑 Team</span></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <For each={memberStore.list}>{((row: Member) => {
                    return (
                    <TableRow>
                      <TableCell>
                        {row.name}
                      </TableCell>
                      <TableCell align="center">{row.age}</TableCell>
                      <TableCell align="center">{row.team}</TableCell>
                    </TableRow>
                    )
                  })}
                  </For>
                </TableBody>
              </Table>
            </TableContainer>
          </div>
    </Show>
    
  );
}