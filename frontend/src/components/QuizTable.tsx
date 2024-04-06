import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

interface QuizData {
  id: number;
  name: string;
  playedCount: string;
  dateOfCreation: Date;
  rating: number;
}

interface HeaderCell {
  id: keyof QuizData;
  alignRight: boolean;
  label: string;
}

const headerCells: readonly HeaderCell[] = [
  {
    id: "name",
    alignRight: false,
    label: "Name",
  },
  {
    id: "playedCount",
    alignRight: true,
    label: "Number of Plays",
  },
  {
    id: "rating",
    alignRight: true,
    label: "Average Rating",
  },
  {
    id: "dateOfCreation",
    alignRight: true,
    label: "Date Of Creation",
  },
];

function QuizTableHeader() {
  return (
    <TableHead>
      <TableRow>
        {headerCells.map((headerCell) => (
          <TableCell
            key={headerCell.id}
            align={headerCell.alignRight ? "right" : "left"}
            padding="normal"
          >
            {headerCell.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

export function QuizTable() {
  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <TableContainer>
          <Table sx={{ minWidth: 750, minHeight: 400 }}>
            <QuizTableHeader />
            <TableBody></TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}
