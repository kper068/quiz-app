import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { AppContext } from "../AppContextProvider";
import { Quiz } from "../types/data";

interface HeaderCell {
  id: keyof Quiz;
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

interface QuizTableProps {
  handleSelected: (id: number) => void;
}

export default function QuizTable({ handleSelected }: QuizTableProps) {
  const { quizzes } = useContext(AppContext);
  const [selected, setSelected] = useState<number>(-1);
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(5);

  const onClick = (id: number) => {
    setSelected(id);
    handleSelected(id);
  };

  const onChangePage = (
    _event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const onChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (id: number) => {
    return selected === id;
  };

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - quizzes.length) : 0;

  const visibleQuizzes = quizzes.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <TableContainer>
          <Table sx={{ minWidth: 750 }}>
            <QuizTableHeader />
            <TableBody>
              {visibleQuizzes.map((quiz) => {
                const isQuizSelected = isSelected(quiz.id);
                const quizCreationDate = new Date(
                  quiz.dateOfCreation
                ).toLocaleDateString();
                const quizRating =
                  quiz.rating.length === 0
                    ? "N/A"
                    : Math.round(
                        (quiz.rating.reduce((prev, curr) => prev + curr) /
                          quiz.rating.length +
                          Number.EPSILON) *
                          100
                      ) / 100;
                return (
                  <TableRow
                    hover
                    onClick={() => onClick(quiz.id)}
                    selected={isQuizSelected}
                    key={quiz.id}
                    sx={{ cursor: "pointer" }}
                  >
                    <TableCell component="th" scope="row" padding="normal">
                      {quiz.name}
                    </TableCell>
                    <TableCell align="right">{quiz.playedCount}</TableCell>
                    <TableCell align="right">{quizRating}</TableCell>
                    <TableCell align="right">{quizCreationDate}</TableCell>
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 53 }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25, 50]}
          component="div"
          count={quizzes.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={onChangePage}
          onRowsPerPageChange={onChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}
